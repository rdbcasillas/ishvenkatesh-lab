<template>
  <div class="page-container" v-if="story">
    <router-link class="back-link" to="/press">&larr; Back to Press</router-link>

    <div class="page-header story-header">
      <p class="story-journal">{{ story.journal }}, {{ story.year }}</p>
      <h1 class="page-title">{{ story.title }}</h1>
      <p class="story-sub">{{ story.coverage.length }} articles in the press</p>
    </div>

    <figure class="banner">
      <img
        :src="require(`../assets/images/News/${story.image}`)"
        :alt="story.title"
        class="banner-img"
      />
    </figure>

    <div class="card-grid">
      <a
        v-for="item in articles"
        :key="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="news-card"
      >
        <span class="card-top">
          <span class="outlet">{{ item.outlet }}</span>
          <span v-if="item.dayLabel" class="card-date">{{ item.dayLabel }}</span>
        </span>
        <span class="headline-text">{{ item.headline }}</span>
        <span class="card-foot">
          <span class="read-cta">
            Read article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>
          </span>
        </span>
      </a>
    </div>
  </div>
  <div v-else class="page-container missing">
    <p>We couldn't find that story.</p>
    <router-link to="/press">Back to Press</router-link>
  </div>
</template>

<script>
import data from "@/assets/press-coverage.json";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default {
  name: "PressStory",
  computed: {
    story() {
      return data.stories.find((s) => s.slug === this.$route.params.slug);
    },
    articles() {
      if (!this.story) return [];
      return this.story.coverage
        .map((entry, order) => {
          const [year, month, day] = String(entry.date || "").split("-").map(Number);
          return { ...entry, order, day: day || 0, dayLabel: day ? `${day} ${MONTHS[month - 1]}` : "" };
        })
        .sort((a, b) => (b.day - a.day) || (a.order - b.order));
    },
  },
};
</script>

<style scoped>
.back-link { color: var(--color-accent); display: inline-block; font-size: 0.92rem; font-weight: 600; margin-bottom: 20px; text-decoration: none; }
.back-link:hover { text-decoration: underline; }
.story-header { border-bottom: 0; margin-bottom: 24px; padding-bottom: 0; }
.story-journal { color: var(--color-accent-dark); font-size: 0.9rem; font-style: italic; margin: 0 0 8px; }
.story-header .page-title { max-width: 26ch; text-wrap: balance; }
.story-sub { color: var(--color-ink-soft); margin: 8px 0 0; }

.banner { margin: 0 0 40px; }
.banner-img { aspect-ratio: 5 / 2; border-radius: var(--radius-md); box-shadow: var(--shadow-md); display: block; object-fit: cover; object-position: center; width: 100%; }

.card-grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); }
.news-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); color: inherit; display: flex; flex-direction: column; gap: 14px; padding: 22px; text-decoration: none !important; transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease; }
.news-card:hover { border-color: var(--color-accent); box-shadow: var(--shadow-md); transform: translateY(-2px); }
.news-card:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.card-top { align-items: baseline; display: flex; gap: 12px; justify-content: space-between; }
.outlet { color: var(--color-ink); font-size: 0.95rem; font-weight: 700; }
.card-date { color: var(--color-muted); font-size: 0.85rem; font-variant-numeric: tabular-nums; white-space: nowrap; }
.headline-text { color: var(--color-ink); flex: 1; font-family: var(--font-heading); font-size: 1.25rem; line-height: 1.35; }
.news-card:hover .headline-text { color: var(--color-accent); }
.card-foot { border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end; padding-top: 14px; }
.read-cta { align-items: center; color: var(--color-accent); display: inline-flex; font-size: 0.88rem; font-weight: 600; gap: 5px; }
.news-card:hover .read-cta { text-decoration: underline; }
.missing { text-align: center; }
@media (max-width: 600px) { .card-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .news-card { transition: none; } .news-card:hover { transform: none; } }
</style>
