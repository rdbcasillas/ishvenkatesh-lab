<template>
  <div class="page-container">
    <div class="page-header">
      <p class="page-kicker">Interactive Summaries</p>
      <h1 class="page-title">Explorables</h1>
      <p class="page-lede">
        Visual, explorable companions to our papers &mdash; each one walks
        through the figures and findings in plain language, with a short
        video summary.
      </p>
    </div>
    <div class="explorable-grid">
      <article
        v-for="item in explorables"
        :key="item.Slug"
        class="explorable-card"
      >
        <video
          class="explorable-video"
          controls
          autoplay
          muted
          loop
          preload="auto"
          playsinline
          :src="item.SummaryVideo"
        >
          Your browser doesn't support embedded video.
        </video>
        <router-link
          class="explorable-body"
          :to="`/explorables/${item.Slug}`"
        >
          <span class="explorable-journal">{{ item.Journal }}</span>
          <h2 class="explorable-title">{{ item.Title }}</h2>
          <p class="explorable-blurb">{{ item.SummaryBlurb }}</p>
          <span class="explorable-cta">Open the explorable &rarr;</span>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
import publicationData from "@/assets/publications.json";
export default {
  data() {
    return {
      explorables: publicationData.filter((pub) => pub.SummaryURL && pub.Slug),
    };
  },
};
</script>

<style scoped>
.page-lede {
  color: var(--color-ink-soft);
  font-size: 1.02rem;
  line-height: 1.6;
  margin-top: 12px;
  max-width: 640px;
}

.explorable-grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.explorable-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.explorable-card:hover {
  box-shadow: var(--shadow-md);
}

.explorable-video {
  aspect-ratio: 16 / 9;
  background: #000;
  display: block;
  width: 100%;
}

.explorable-body {
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  text-decoration: none;
  transition: background 0.15s ease;
}

.explorable-body:hover {
  background: var(--color-surface-muted);
}

.explorable-journal {
  color: var(--color-accent-dark);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-style: italic;
}

.explorable-title {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
}

.explorable-blurb {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.55;
  margin: 0;
}

.explorable-cta {
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  margin-top: 4px;
}

.explorable-card:hover .explorable-cta {
  text-decoration: underline;
}
</style>
