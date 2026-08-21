<template>
  <b-container class="social-page">
    <div class="page-header">
      <p class="page-kicker">Follow Along</p>
      <h1 class="page-title">Social Media</h1>
    </div>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6" lg="4" class="mb-4">
        <section class="social-panel">
          <div class="panel-header">
            <h3>Twitter/X</h3>
            <a
              href="https://twitter.com/Ishwariya13"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open profile <b-icon icon="box-arrow-up-right"></b-icon>
            </a>
          </div>
          <div class="twitter-embed">
            <div
              class="elfsight-app-49b277f8-63cb-4997-abaa-e683d5b8421c"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mb-4">
        <section class="social-panel">
          <div class="panel-header">
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/venkateshlabccmb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open profile <b-icon icon="box-arrow-up-right"></b-icon>
            </a>
          </div>
          <div class="instagram-embed">
            <blockquote
              class="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/venkateshlabccmb/"
              data-instgrm-version="14"
            ></blockquote>
          </div>
        </section>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mb-4">
        <section class="social-panel">
          <div class="panel-header">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ishwariya-venkatesh-abb21621/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open profile <b-icon icon="box-arrow-up-right"></b-icon>
            </a>
          </div>
          <div class="linkedin-embed">
            <div
              class="elfsight-app-c932e9ec-8a0f-465b-951e-767bec9bb190"
              data-elfsight-app-lazy
            ></div>
          </div>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.loadInstagramEmbed();
    this.$nextTick(this.loadElfsightScript);
  },
  methods: {
    loadInstagramEmbed() {
      if (!document.querySelector('script[src*="instagram.com/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return;
      }

      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    },
    loadElfsightScript() {
      document
        .querySelectorAll('script[src*="elfsightcdn.com/platform.js"]')
        .forEach((script) => script.remove());

      const script = document.createElement("script");
      script.src = `https://elfsightcdn.com/platform.js?reload=${Date.now()}`;
      script.async = true;
      document.head.appendChild(script);
    },
  },
};
</script>

<style scoped>
.social-page {
  padding-bottom: 56px;
  padding-top: 56px;
}

.social-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  height: 520px;
  padding: 22px;
}

.panel-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

h3 {
  color: var(--color-ink);
  font-size: 1.4rem;
  margin: 0;
}

.panel-header a {
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

.instagram-embed,
.twitter-embed,
.linkedin-embed {
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: auto;
}

.twitter-embed,
.linkedin-embed {
  align-items: stretch;
}

.panel-header a:hover {
  background: var(--color-accent-light);
  color: var(--color-accent);
  text-decoration: none;
}

@media (max-width: 992px) {
  .social-panel {
    height: 480px;
  }
}

@media (max-width: 600px) {
  .social-panel {
    height: auto;
    min-height: 420px;
  }
}
</style>
