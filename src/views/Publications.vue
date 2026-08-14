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
      <section
        v-for="section in publicationSections"
        :key="section.title"
        class="publication-section"
      >
        <h2>{{ section.title }}</h2>
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
            </article>
          </div>
        </div>
      </section>
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
    };
  },
  methods: {
    getData() {
      this.publications = this.publicationData;
      this.publicationSections = [
        {
          title: "Preprints",
          data: group(
            this.publications.filter((pub) => this.isPreprint(pub)),
            (d) => d.Year
          ),
        },
        {
          title: "Journal Publications",
          data: group(
            this.publications.filter((pub) => !this.isPreprint(pub)),
            (d) => d.Year
          ),
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
.publication-section {
  margin: 0 0 48px;
}

.publication-section h2 {
  border-bottom: 1px solid var(--color-border);
  color: var(--color-ink);
  font-size: 1.6rem;
  margin-bottom: 24px;
  padding-bottom: 12px;
}

.year-block {
  display: grid;
  gap: 20px;
  grid-template-columns: 80px 1fr;
  margin-bottom: 8px;
}

.yearStyle {
  color: var(--color-accent);
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
}

.year-entries {
  display: flex;
  flex-direction: column;
  gap: 22px;
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

@media (max-width: 600px) {
  .year-block {
    gap: 8px;
    grid-template-columns: 1fr;
  }
}
</style>
