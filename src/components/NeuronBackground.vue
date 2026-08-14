<template>
  <canvas
    ref="canvas"
    class="neuron-canvas"
    aria-hidden="true"
    @mousemove="handlePointerMove"
    @mouseleave="handlePointerLeave"
    @touchmove="handleTouchMove"
  ></canvas>
</template>

<script>
const NODE_COUNT_DESKTOP = 22;
const NODE_COUNT_MOBILE = 12;
const MOBILE_BREAKPOINT = 700;
const CONNECT_DISTANCE = 230;
const MAX_LINKS_PER_NODE = 3;
const PULSE_SPEED = 0.006;
const PULSE_SPAWN_INTERVAL = 900;
const POINTER_RADIUS = 170;
const POINTER_FIRE_COOLDOWN = 260;

const PALETTES = {
  light: {
    line: "47, 96, 58",
    node: "39, 82, 49",
    pulse: "84, 168, 98",
    excited: "255, 255, 255",
  },
  dark: {
    line: "120, 190, 132",
    node: "150, 210, 160",
    pulse: "150, 220, 165",
    excited: "255, 255, 255",
  },
};

export default {
  name: "NeuronBackground",
  data() {
    return {
      ctx: null,
      nodes: [],
      edges: [],
      pulses: [],
      width: 0,
      height: 0,
      dpr: 1,
      frameId: null,
      spawnTimer: null,
      reducedMotion: false,
      pointer: { x: -9999, y: -9999, active: false },
      lastPointerFire: 0,
      palette: PALETTES.light,
      themeObserver: null,
    };
  },
  mounted() {
    this.reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    this.ctx = this.$refs.canvas.getContext("2d");
    this.resize();
    this.buildNetwork();
    this.updatePalette();

    window.addEventListener("resize", this.handleResize);

    this.themeObserver = new MutationObserver(this.updatePalette);
    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    if (!this.reducedMotion) {
      this.frameId = requestAnimationFrame(this.tick);
      this.spawnTimer = setInterval(this.spawnPulse, PULSE_SPAWN_INTERVAL);
    } else {
      this.draw();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    if (this.themeObserver) this.themeObserver.disconnect();
    if (this.frameId) cancelAnimationFrame(this.frameId);
    if (this.spawnTimer) clearInterval(this.spawnTimer);
  },
  methods: {
    updatePalette() {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      this.palette = isDark ? PALETTES.dark : PALETTES.light;
      if (this.reducedMotion) this.draw();
    },
    handleResize() {
      this.resize();
      this.buildNetwork();
      if (this.reducedMotion) this.draw();
    },
    handlePointerMove(event) {
      const rect = this.$refs.canvas.getBoundingClientRect();
      this.pointer.x = event.clientX - rect.left;
      this.pointer.y = event.clientY - rect.top;
      this.pointer.active = true;
      this.maybeFireFromPointer();
    },
    handleTouchMove(event) {
      if (!event.touches.length) return;
      const rect = this.$refs.canvas.getBoundingClientRect();
      const touch = event.touches[0];
      this.pointer.x = touch.clientX - rect.left;
      this.pointer.y = touch.clientY - rect.top;
      this.pointer.active = true;
      this.maybeFireFromPointer();
    },
    handlePointerLeave() {
      this.pointer.active = false;
      this.pointer.x = -9999;
      this.pointer.y = -9999;
    },
    maybeFireFromPointer() {
      const now = performance.now();
      if (now - this.lastPointerFire < POINTER_FIRE_COOLDOWN) return;

      const nearby = this.edges.filter((edge) => {
        const a = this.nodes[edge.a];
        const b = this.nodes[edge.b];
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        return Math.hypot(midX - this.pointer.x, midY - this.pointer.y) < POINTER_RADIUS;
      });

      if (!nearby.length) return;
      this.lastPointerFire = now;
      const edge = nearby[Math.floor(Math.random() * nearby.length)];
      this.pulses.push({ edge, t: 0, reverse: Math.random() < 0.5, excited: true });
    },
    resize() {
      const canvas = this.$refs.canvas;
      const rect = canvas.parentElement.getBoundingClientRect();
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.width = rect.width;
      this.height = rect.height;
      canvas.width = this.width * this.dpr;
      canvas.height = this.height * this.dpr;
      canvas.style.width = `${this.width}px`;
      canvas.style.height = `${this.height}px`;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    },
    buildNetwork() {
      const count =
        this.width < MOBILE_BREAKPOINT ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;

      this.nodes = Array.from({ length: count }, () => ({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: 3 + Math.random() * 2.5,
        pulseGlow: 0,
      }));

      this.edges = [];
      const linkCounts = new Array(this.nodes.length).fill(0);

      const candidatePairs = [];
      for (let i = 0; i < this.nodes.length; i += 1) {
        for (let j = i + 1; j < this.nodes.length; j += 1) {
          const a = this.nodes[i];
          const b = this.nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT_DISTANCE) {
            candidatePairs.push({ a: i, b: j, dist });
          }
        }
      }
      candidatePairs.sort((p, q) => p.dist - q.dist);

      candidatePairs.forEach((pair) => {
        if (
          linkCounts[pair.a] < MAX_LINKS_PER_NODE &&
          linkCounts[pair.b] < MAX_LINKS_PER_NODE
        ) {
          this.edges.push(pair);
          linkCounts[pair.a] += 1;
          linkCounts[pair.b] += 1;
        }
      });

      this.pulses = [];
    },
    spawnPulse() {
      if (!this.edges.length) return;
      const edge = this.edges[Math.floor(Math.random() * this.edges.length)];
      this.pulses.push({
        edge,
        t: 0,
        reverse: Math.random() < 0.5,
        excited: false,
      });
    },
    tick() {
      this.update();
      this.draw();
      this.frameId = requestAnimationFrame(this.tick);
    },
    update() {
      this.nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > this.width) node.vx *= -1;
        if (node.y < 0 || node.y > this.height) node.vy *= -1;

        if (this.pointer.active) {
          const dist = Math.hypot(node.x - this.pointer.x, node.y - this.pointer.y);
          const proximity = Math.max(0, 1 - dist / POINTER_RADIUS);
          node.pulseGlow = Math.max(node.pulseGlow * 0.9, proximity);
        } else {
          node.pulseGlow *= 0.9;
        }
      });

      this.pulses = this.pulses.filter((pulse) => {
        pulse.t += PULSE_SPEED * (1 + Math.random() * 0.35);
        return pulse.t < 1;
      });
    },
    draw() {
      const ctx = this.ctx;
      const palette = this.palette;
      ctx.clearRect(0, 0, this.width, this.height);

      this.edges.forEach((edge) => {
        const a = this.nodes[edge.a];
        const b = this.nodes[edge.b];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const proximityBoost = Math.max(a.pulseGlow, b.pulseGlow);
        const opacity = Math.max(0, 1 - dist / CONNECT_DISTANCE) * (0.32 + proximityBoost * 0.4);
        if (opacity <= 0) return;
        ctx.lineWidth = 1 + proximityBoost * 0.8;
        ctx.strokeStyle = `rgba(${palette.line}, ${Math.min(opacity, 0.85)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      this.nodes.forEach((node) => {
        const glow = node.pulseGlow;
        const radius = node.r + glow * 3;

        if (glow > 0.05) {
          const halo = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, radius * 4
          );
          halo.addColorStop(0, `rgba(${palette.excited}, ${glow * 0.35})`);
          halo.addColorStop(1, `rgba(${palette.excited}, 0)`);
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = glow > 0.05
          ? `rgba(${palette.excited}, ${0.5 + glow * 0.5})`
          : `rgba(${palette.node}, 0.55)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      this.pulses.forEach((pulse) => {
        const a = this.nodes[pulse.edge.a];
        const b = this.nodes[pulse.edge.b];
        const from = pulse.reverse ? b : a;
        const to = pulse.reverse ? a : b;
        const x = from.x + (to.x - from.x) * pulse.t;
        const y = from.y + (to.y - from.y) * pulse.t;
        const fade = Math.sin(pulse.t * Math.PI);
        const color = pulse.excited ? palette.excited : palette.pulse;
        const coreRadius = pulse.excited ? 3.6 : 3;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, coreRadius * 5);
        glow.addColorStop(0, `rgba(${color}, ${0.55 * fade})`);
        glow.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, coreRadius * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${color}, ${0.9 * fade})`;
        ctx.beginPath();
        ctx.arc(x, y, coreRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    },
  },
};
</script>

<style scoped>
.neuron-canvas {
  display: block;
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
