<template>
  <div class="viewer-page">
    <div class="viewer-bar">
      <router-link class="back-link" to="/explorables">
        &larr; Back to Explorables
      </router-link>
      <span v-if="explorable" class="viewer-title">{{ explorable.Title }}</span>
    </div>
    <iframe
      v-if="explorable"
      class="viewer-frame"
      :src="explorable.SummaryURL"
      :title="explorable.Title"
      ref="frame"
      @load="syncTheme"
    ></iframe>
    <div v-else class="viewer-missing">
      <p>We couldn't find that explorable.</p>
      <router-link to="/explorables">Back to Explorables</router-link>
    </div>
  </div>
</template>

<script>
import publicationData from "@/assets/publications.json";
export default {
  mounted() {
    this.observer = new MutationObserver(this.syncTheme);
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    // The explorable is a separate document, so pass it the site's light/dark choice.
    syncTheme() {
      const frame = this.$refs.frame;
      const theme = document.documentElement.getAttribute("data-theme");
      try {
        if (frame && frame.contentDocument && theme) {
          frame.contentDocument.documentElement.setAttribute("data-theme", theme);
        }
      } catch (e) {
        /* cross-origin frame: leave it on its own theme */
      }
    },
  },
  computed: {
    explorable() {
      return publicationData.find((pub) => pub.Slug === this.$route.params.slug);
    },
  },
};
</script>

<style scoped>
.viewer-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--nav-h));
}

@media (max-width: 991px) {
  .viewer-page {
    height: calc(100vh - var(--nav-h));
  }
}

.viewer-bar {
  align-items: center;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex: none;
  gap: 16px;
  padding: 12px 24px;
}

.back-link {
  color: var(--color-accent-dark);
  flex: none;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
}

.back-link:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.viewer-title {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 0.88rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.viewer-frame {
  border: 0;
  display: block;
  flex: 1 1 auto;
  width: 100%;
}

.viewer-missing {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}
</style>
