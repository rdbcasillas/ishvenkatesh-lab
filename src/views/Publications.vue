<template>
  <div>
    <!-- <v-container fluid>
      <v-row class="mt-5" v-for="year in groupedData.keys()" :key="year">
        <v-col v-for="(pub, index) in groupedData.get(year)" :key="index">
          <div v-if="index == 0" class="yearStyle">{{ year }}</div>
          <v-layout class="amber lighten-5 ml-5">
            <v-list-item three-line>
              <v-list-item-content class="d-flex">
                <v-list-item-title
                  ><a target="_blank" :href="pub.URL"> {{ pub.Title }}</a>
                </v-list-item-title>
                <v-list-item-subtitle
                  v-if="pub.AuthorType === 'First'"
                  class="authorStyle"
                >
                  <span class="mainAuthor">{{ pub.Authors[0] }}</span
                  >,
                  {{ pub.Authors.slice(1).toString(" ") }}</v-list-item-subtitle
                >
                <v-list-item-subtitle v-else class="authorStyle">
                  {{ pub.Authors.slice(1).toString(" "), }},

                  <span class="mainAuthor">{{ pub.Authors[0] }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-layout>
        </v-col>
      </v-row>
    </v-container> -->
    <div class="page-container">
      <div class="page-header">
        <p class="page-kicker">Research Output</p>
        <h1 class="page-title">Publications</h1>
      </div>
      <div class="publication-tabs" role="tablist">
        <button
          v-for="section in publicationSections"
          :key="section.title"
          type="button"
          role="tab"
          class="tab-btn"
          :aria-selected="activeTab === section.title ? 'true' : 'false'"
          :class="{ active: activeTab === section.title }"
          @click="activeTab = section.title"
        >
          {{ section.title }} <span class="tab-count">{{ section.count }}</span>
        </button>
      </div>
      <div class="publication-columns">
        <section
          v-for="section in publicationSections"
          v-show="activeTab === section.title"
          :key="section.title"
          class="publication-section"
        >
        <div class="year-block" v-for="year in section.data.keys()" :key="year">
          <div class="year-label-col">
            <p class="yearStyle">{{ year }}</p>
          </div>
          <div class="year-entries">
            <article
              class="pub-entry"
              v-for="(pub, index) in section.data.get(year)"
              :key="index"
            >
              <a class="papertitle" target="_blank" :href="pub.URL">{{ pub.Title }}</a>
              <span class="journalStyle">{{ pub.Journal }}</span>
              <span class="authorStyle">
                <span
                  v-for="(author, authorIndex) in pub.Authors"
                  :key="authorIndex"
                >
                  <span
                    :class="{
                      mainAuthor: shouldHighlightAuthor(pub, author),
                    }"
                    >{{ author }}</span
                  ><span v-if="authorIndex < pub.Authors.length - 1">, </span>
                </span>
              </span>
              <button
                v-if="pub.SummaryURL"
                type="button"
                class="showMoreBtn"
                :aria-expanded="expandedSummaries[pub.URL] ? 'true' : 'false'"
                @click="toggleSummary(pub)"
              >
                <span class="chev" :class="{ open: expandedSummaries[pub.URL] }"></span>
                {{ expandedSummaries[pub.URL] ? "Show less" : "Show more" }}
              </button>
              <div
                v-if="pub.SummaryURL && expandedSummaries[pub.URL]"
                class="summaryPanel"
              >
                <video
                  controls
                  autoplay
                  muted
                  preload="auto"
                  playsinline
                  class="summaryVideo"
                  :src="pub.SummaryVideo"
                >
                  Your browser doesn't support embedded video.
                </video>
                <p class="summaryBlurb">{{ pub.SummaryBlurb }}</p>
                <router-link
                  v-if="pub.Slug"
                  class="summaryLink"
                  :to="`/explorables/${pub.Slug}`"
                  >Read the full interactive summary &rarr;</router-link
                >
              </div>
            </article>
          </div>
        </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { group } from "d3-array";
import publicationData from "@/assets/publications.json";
export default {
  data() {
    return {
      publicationData,
      publications: [],
      publicationSections: [],
      expandedSummaries: {},
      activeTab: "Published",
    };
  },
  methods: {
    toggleSummary(pub) {
      this.expandedSummaries = {
        ...this.expandedSummaries,
        [pub.URL]: !this.expandedSummaries[pub.URL],
      };
    },
    getData() {
      this.publications = this.publicationData;
      const published = this.publications.filter((pub) => !this.isPreprint(pub));
      const preprints = this.publications.filter((pub) => this.isPreprint(pub));
      this.publicationSections = [
        {
          title: "Published",
          count: published.length,
          data: group(published, (d) => d.Year),
        },
        {
          title: "Preprints",
          count: preprints.length,
          data: group(preprints, (d) => d.Year),
        },
      ];
    },
    isPreprint(pub) {
      return String(pub.Journal || "").toLowerCase() === "biorxiv";
    },
    shouldHighlightAuthor(pub, author) {
      return author === "Ishwariya Venkatesh";
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.publication-tabs {
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
}

.tab-btn {
  background: none;
  border: 0;
  border-bottom: 2px solid transparent;
  color: var(--color-muted);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  padding: 8px 4px 14px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.tab-btn:hover {
  color: var(--color-ink);
}

.tab-count {
  background: var(--color-accent-light);
  border-radius: 999px;
  color: var(--color-accent-dark);
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 2px 9px;
}

.tab-btn.active .tab-count {
  background: var(--color-accent);
  color: var(--color-accent-contrast);
}

.tab-btn.active {
  border-bottom-color: var(--color-accent);
  color: var(--color-ink);
}

.publication-columns {
  display: block;
}

.publication-section {
  margin: 0;
  min-width: 0;
}

.year-block {
  display: grid;
  gap: 20px;
  grid-template-columns: 80px 1fr;
  margin-bottom: 8px;
}

.year-entries {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.yearStyle {
  color: var(--color-accent);
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
}

.pub-entry {
  border-bottom: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 22px;
}

.papertitle {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
}

.papertitle:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.journalStyle {
  color: var(--color-accent-dark);
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-style: italic;
}

.authorStyle {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.5;
}

.mainAuthor {
  color: var(--color-ink);
  font-weight: 700;
}

.showMoreBtn {
  align-items: center;
  align-self: flex-start;
  background: none;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  color: var(--color-accent-dark);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  gap: 6px;
  margin-top: 6px;
  padding: 6px 14px;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.showMoreBtn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.showMoreBtn .chev {
  border-bottom: 1.5px solid currentColor;
  border-right: 1.5px solid currentColor;
  display: inline-block;
  height: 0.4rem;
  transform: rotate(45deg);
  transition: transform 0.2s ease;
  width: 0.4rem;
}

.showMoreBtn .chev.open {
  transform: rotate(225deg);
}

.summaryPanel {
  background: var(--color-surface-muted);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  padding: 16px;
}

.summaryVideo {
  background: #000;
  border-radius: var(--radius-sm);
  display: block;
  height: auto;
  width: 100%;
}

.summaryBlurb {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
}

.summaryLink {
  align-self: flex-start;
  color: var(--color-accent-dark);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
}

.summaryLink:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

@media (max-width: 600px) {
  .year-block {
    gap: 8px;
    grid-template-columns: 1fr;
  }
}
</style>
