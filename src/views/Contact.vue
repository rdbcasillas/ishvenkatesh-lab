<template>
  <div>
    <div class="page-container">
      <div class="page-header">
        <p class="page-kicker">Get in Touch</p>
        <h1 class="page-title">Contact</h1>
      </div>
      <div class="contact-grid">
        <img
          class="contact-photo"
          alt="Tree outside our building"
          :src="require(`../assets/images/campusbird.jpg`)"
        />
        <div class="contact-info">
          <h4>Visit Us</h4>
          <p>
            Our lab is located on the fourth floor of the R&amp;D Building in the
            main campus of CSIR-CCMB.
          </p>
          <h4 class="reach-title">Reach Dr. Ishwariya Venkatesh</h4>
          <ul class="contact-list">
            <li>
              <span class="contact-label">Email</span>
              <a href="mailto:ishwariya.ccmb@csir.res.in">ishwariya.ccmb@csir.res.in</a>
            </li>
            <li>
              <span class="contact-label">Phone</span>
              <a href="tel:+914027192976">040-27192976</a>
            </li>
            <li>
              <span class="contact-label">Twitter</span>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Ishwariya13">
                @Ishwariya13
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section class="visitor-section">
        <h4>Visitors From Around the World</h4>
        <p class="visitor-note">
          A live look at where readers of this page are visiting from.
        </p>
        <div class="visitor-map" ref="visitorMap"></div>
        <a
          class="visitor-map-link"
          :href="visitorMapUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          View full visitor stats <b-icon icon="box-arrow-up-right"></b-icon>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
const MMV_SCRIPT_ID = "mapmyvisitors";
const MMV_SCRIPT_SRC =
  "https://mapmyvisitors.com/map.js?cl=000000&w=a&t=tt&d=huHThO_g4uI-kUM6IW4GWhVqE2ZQ9ProJCJ7R0uQUfM&co=ffffff&ct=000000";

export default {
  data() {
    return {
      visitorMapUrl: "https://mapmyvisitors.com/",
    };
  },
  mounted() {
    this.loadVisitorMap();
  },
  methods: {
    loadVisitorMap() {
      const existing = document.getElementById(MMV_SCRIPT_ID);
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.id = MMV_SCRIPT_ID;
      script.type = "text/javascript";
      script.src = MMV_SCRIPT_SRC;
      script.async = true;
      this.$refs.visitorMap.appendChild(script);
    },
  },
};
</script>

<style scoped>
.contact-grid {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1.2fr;
}

.contact-photo {
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.contact-info h4 {
  color: var(--color-ink);
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.contact-info p {
  color: var(--color-ink-soft);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 8px;
}

.reach-title {
  margin-top: 28px;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-list li {
  align-items: baseline;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: 12px;
  padding: 14px 0;
}

.contact-label {
  color: var(--color-muted);
  flex: 0 0 90px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.contact-list a {
  color: var(--color-accent);
  font-weight: 500;
  text-decoration: none;
}

.contact-list a:hover {
  text-decoration: underline;
}

.visitor-section {
  border-top: 1px solid var(--color-border);
  margin-top: 48px;
  padding-top: 40px;
  text-align: center;
}

.visitor-section h4 {
  color: var(--color-ink);
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.visitor-note {
  color: var(--color-muted);
  font-size: 0.92rem;
  margin: 0 auto 24px;
  max-width: 420px;
}

.visitor-map {
  align-items: center;
  display: flex;
  height: 210px;
  justify-content: center;
  margin: 0 auto;
  max-width: 360px;
  overflow: visible;
}

.visitor-map > div,
.visitor-map > canvas,
.visitor-map > iframe,
.visitor-map > img {
  transform: scale(0.55);
  transform-origin: center;
}

.visitor-map-link {
  color: var(--color-accent);
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 8px;
  text-decoration: none;
}

.visitor-map-link:hover {
  text-decoration: underline;
}

@media (max-width: 700px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-photo {
    max-height: 260px;
  }
}
</style>
