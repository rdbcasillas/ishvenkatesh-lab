<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">Press</h1>
      <p class="page-lede">Our research in the press.</p>
    </div>

    <div class="year-tabs" role="tablist" aria-label="Choose a year" v-if="years.length > 1">
      <button
        v-for="year in years"
        :key="year"
        type="button"
        role="tab"
        class="year-tab"
        :class="{ active: year === selectedYear }"
        :aria-selected="year === selectedYear ? 'true' : 'false'"
        @click="selectedYear = year"
      >{{ year }}</button>
      <button
        type="button"
        role="tab"
        class="year-tab"
        :class="{ active: selectedYear === 'all' }"
        :aria-selected="selectedYear === 'all' ? 'true' : 'false'"
        @click="selectedYear = 'all'"
      >All years</button>
    </div>

    <section v-for="group in visibleGroups" :key="group.key" class="month-group">
      <h2 class="month-title">{{ group.month }} <span class="month-year">{{ group.year }}</span></h2>
      <div class="story-grid">
        <article v-for="story in group.items" :key="story.slug" class="story-card">
          <router-link class="story-link" :to="`/press/${story.slug}`">
            <img
              class="story-image"
              :src="require(`../assets/images/News/${story.image}`)"
              :alt="story.title"
            />
            <span class="story-body">
              <span class="story-journal">{{ story.journal }}, {{ story.year }}</span>
              <h3 class="story-title">{{ story.title }}</h3>
              <span class="story-count">{{ story.coverage.length }} articles in the press</span>
              <span class="story-cta">Open the coverage &rarr;</span>
            </span>
          </router-link>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import data from "@/assets/press-coverage.json";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default {
  name: "Press",
  data() {
    return { selectedYear: null };
  },
  computed: {
    stories() {
      return data.stories.map((s) => {
        const [year, month] = String(s.date).split("-").map(Number);
        return { ...s, dateYear: year, dateMonth: month };
      });
    },
    years() {
      return Array.from(new Set(this.stories.map((s) => s.dateYear))).sort((a, b) => b - a);
    },
    groups() {
      const map = new Map();
      this.stories.forEach((s) => {
        const key = `${s.dateYear}-${String(s.dateMonth).padStart(2, "0")}`;
        if (!map.has(key)) {
          map.set(key, { key, year: s.dateYear, month: MONTHS[s.dateMonth - 1], items: [] });
        }
        map.get(key).items.push(s);
      });
      return Array.from(map.values()).sort((a, b) => (a.key < b.key ? 1 : -1));
    },
    visibleGroups() {
      return this.selectedYear === "all"
        ? this.groups
        : this.groups.filter((g) => g.year === this.selectedYear);
    },
  },
  created() {
    this.selectedYear = this.years[0] || "all";
  },
};
</script>

<style scoped>
.page-lede { color: var(--color-ink-soft); font-size: 1.1rem; line-height: 1.65; margin: 10px 0 0; max-width: 62ch; }

.year-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 32px; }
.year-tab { background: transparent; border: 1px solid var(--color-border-strong); border-radius: 999px; color: var(--color-ink-soft); cursor: pointer; font-size: 0.92rem; font-variant-numeric: tabular-nums; font-weight: 600; padding: 7px 18px; transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease; }
.year-tab:hover { border-color: var(--color-ink); color: var(--color-ink); }
.year-tab.active { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-accent-contrast); }
.year-tab:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }

.month-group { margin: 0 0 48px; }
.month-title { border-bottom: 1px solid var(--color-border-strong); font-size: 1.5rem; margin: 0 0 24px; padding-bottom: 10px; }
.month-year { color: var(--color-muted); font-weight: 400; margin-left: 4px; }

.story-grid { display: grid; gap: 28px; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); }
.story-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; overflow: hidden; transition: box-shadow 0.2s ease; }
.story-card:hover { box-shadow: var(--shadow-md); }
.story-link { color: inherit; display: flex; flex: 1; flex-direction: column; text-decoration: none !important; }
.story-link:focus-visible { outline: 2px solid var(--color-accent); outline-offset: -2px; }
.story-image { aspect-ratio: 5 / 2; display: block; object-fit: cover; object-position: center; width: 100%; }
.story-body { display: flex; flex-direction: column; gap: 8px; padding: 20px; transition: background 0.15s ease; }
.story-link:hover .story-body { background: var(--color-surface-muted); }
.story-journal { color: var(--color-accent-dark); font-size: 0.82rem; font-style: italic; }
.story-title { color: var(--color-ink); font-family: var(--font-heading); font-size: 1.2rem; font-weight: 500; line-height: 1.35; margin: 0; }
.story-count { color: var(--color-ink-soft); font-size: 0.92rem; }
.story-cta { color: var(--color-accent); font-size: 0.88rem; font-weight: 600; margin-top: 4px; }
.story-link:hover .story-cta { text-decoration: underline; }
@media (max-width: 600px) { .story-grid { grid-template-columns: 1fr; } }
</style>
