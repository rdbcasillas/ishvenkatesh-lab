<template>
  <div id="particles-js"></div>
</template>

<script>
export default {
  name: "ParticlesJS",

  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS() {
      /* eslint-disable */
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#EC870F",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0.3,
              color: "#fffafa",
            },
            polygon: {
              nb_sides: 3,
            },
            // image: {
            //   src: "img/github.svg",
            //   width: 100,
            //   height: 100,
            // },
          },
          opacity: {
            value: 0.3,
            random: false,
            anim: {
              enable: false,
              speed: 8,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 2,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 800,
              size: 30,
              duration: 2,
              opacity: 0.4,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
};
</script>

<style scoped>
/* Your styles */
h1 {
  color: oldlace;
  font-size: 60px;
  font-family: Oswald;
}
p {
  color: oldlace;
}
.emptyspace {
  height: 50px;
}
</style>
