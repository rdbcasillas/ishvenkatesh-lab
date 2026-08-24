<template>
  <div>
    <section class="hero">
      <NeuronBackground class="hero-bg" />
      <b-container class="hero-content">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="page-kicker">Venkatesh Lab &middot; CSIR-CCMB</p>
            <h1>Regulatory Networks Encoding Axon Growth in the Nervous System</h1>
            <p class="hero-question">
              How is axon growth regulated during development and regeneration in mammals?
            </p>
            <p class="hero-body">
              Communication in the nervous system is achieved via long cables called axons which connect neurons in the brain with the rest of the body. Intact axons are critical for proper nervous system function. When injured, young neurons are remarkably good at regeneration and repair. In contrast, adult neurons fail to regenerate resulting in permanent irreversible nervous system damage. What molecular pathways drive the observed loss of regenerative capacity across development? What regulatory mechanisms modulate developmental axon growth? Does successful CNS regeneration in adult neurons require a faithful recapitulation of developmental mechanisms? Are there development independent pathways that co-ordinate repair? These are some of the questions we are currently tackling. To get at these questions, we use a combinatorial approach which includes Bioinformatics, Functional Genomics (Single-cell RNA-Seq, ATAC-Seq, Hi-C, ChIP-Seq), in vitro assays of growth, in vivo mouse models of injury and behavioral assessments.
            </p>
          </div>
          <div class="hero-media">
            <div class="video-container">
              <iframe width="720" height="480" src="https://www.youtube.com/embed/4te7sQQBl1g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <section class="toolkit-section">
      <b-container>
        <h2 class="text-center section-title">Research Gallery</h2>
        <div class="slideshow">
          <div class="slideshow-viewport">
            <button
              class="slideshow-frame"
              type="button"
              v-for="(item, index) in galleryImages"
              :key="index"
              v-show="index === activeSlide"
              @click="showSlideDetail(item)"
            >
              <b-img :src="require(`../assets/images/lab_webpage/${item.image}`)" fluid class="slideshow-img"></b-img>
              <span class="slideshow-caption">{{ item.text }}</span>
            </button>

            <button
              class="slideshow-arrow slideshow-arrow-prev"
              type="button"
              aria-label="Previous image"
              @click="goToSlide((activeSlide - 1 + galleryImages.length) % galleryImages.length)"
            >&#10094;</button>
            <button
              class="slideshow-arrow slideshow-arrow-next"
              type="button"
              aria-label="Next image"
              @click="goToSlide((activeSlide + 1) % galleryImages.length)"
            >&#10095;</button>
          </div>

          <div class="slideshow-dots">
            <button
              v-for="(item, index) in galleryImages"
              :key="`dot-${index}`"
              type="button"
              class="slideshow-dot"
              :class="{ active: index === activeSlide }"
              :aria-label="`Show ${item.text}`"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </b-container>
    </section>

    <b-modal v-model="showGalleryModal" size="lg" hide-footer centered>
      <template #modal-title>
        <span v-if="selectedGalleryItem">{{ selectedGalleryItem.text }}</span>
      </template>
      <div class="gallery-modal" v-if="selectedGalleryItem">
        <b-img
          :src="require(`../assets/images/lab_webpage/${selectedGalleryItem.image}`)"
          fluid
          class="gallery-modal-img"
        ></b-img>
        <p class="gallery-modal-desc">{{ selectedGalleryItem.description }}</p>
      </div>
    </b-modal>

    <section class="lower-section">
      <b-container>
        <b-row class="bottompage">
          <b-col cols="12" md="8" class="labnews">
            <h3 class="text-center">LAB NEWS</h3>
            
            <div v-for="(item, index) in recentNews" :key="'recent-'+index">
              <v-card elevation="2" class="mt-2">
                <v-card-title>{{ item.date }}</v-card-title>
                <v-card-text>
                  <div v-if="item.items && item.items.length">
                    <ul>
                      <li v-for="(entry, entryIndex) in item.items" :key="'entry-'+entryIndex">
                        <span v-html="entry.text"></span>
                        <template v-if="entry.links && entry.links.length">
                          <a
                            class="news-link"
                            v-for="(link, linkIndex) in entry.links"
                            :key="'link-'+linkIndex"
                            :href="link.url"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {{ link.label }}
                          </a>
                        </template>
                      </li>
                    </ul>
                  </div>

                  <div v-if="item.contents && item.contents.length">
                    <div v-for="(c, cIdx) in item.contents" :key="'c-'+cIdx" v-html="c"></div>
                  </div>
                  <div v-else-if="item.content && (!item.items || !item.items.length)" v-html="item.content"></div>
                </v-card-text>
              </v-card>
            </div>

            <v-btn block class="mt-4 show-more-btn" @click="showOlderNews = !showOlderNews">
              {{ showOlderNews ? 'Show Less' : 'View Older News' }}
            </v-btn>

            <div v-if="showOlderNews">
              <div v-for="(item, index) in olderNews" :key="'older-'+index">
                <v-card elevation="2" class="mt-2">
                  <v-card-title>{{ item.date }}</v-card-title>
                  <v-card-text>
                    <div v-if="item.items && item.items.length">
                      <ul>
                        <li v-for="(entry, entryIndex) in item.items" :key="'older-entry-'+entryIndex">
                          <span v-html="entry.text"></span>
                          <template v-if="entry.links && entry.links.length">
                            <a
                              class="news-link"
                              v-for="(link, linkIndex) in entry.links"
                              :key="'older-link-'+linkIndex"
                              :href="link.url"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {{ link.label }}
                            </a>
                          </template>
                        </li>
                      </ul>
                    </div>

                    <div v-if="item.contents && item.contents.length">
                      <div v-for="(c, cIdx) in item.contents" :key="'older-c-'+cIdx" v-html="c"></div>
                    </div>
                    <div v-else-if="item.content && (!item.items || !item.items.length)" v-html="item.content"></div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </b-col>

          <b-col cols="12" md="4">
            <h3 class="text-center">Ish's Tweets</h3>
            <v-card class="overflow-auto tweetdiv">
              <div class="elfsight-app-49b277f8-63cb-4997-abaa-e683d5b8421c" data-elfsight-app-lazy></div>
            </v-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import NeuronBackground from "../components/NeuronBackground.vue";
import labNews from "@/assets/lab-news.json";

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/18Ta4kyJRloDNN5vlmjm5kPjP_Eh77S-MIKvs0PYdAt8/gviz/tq?tqx=out:csv";
const RECENT_NEWS_MONTH_LIMIT = 3;

export default {
  components: {
    NeuronBackground,
  },
  data() {
    return {
      showOlderNews: false,
      activeSlide: 0,
      slideTimer: null,
      showGalleryModal: false,
      selectedGalleryItem: null,
      galleryImages: [
        {
          text: "DRG Neuron Culture",
          image: "DRG.png",
          description:
            "Dorsal root ganglion neurons in culture, immunostained to reveal axon outgrowth (green) against a background of supporting cells (red) and cell nuclei (blue). Cultures like this let us test how genetic and molecular manipulations affect the ability of neurons to extend new axons.",
        },
        {
          text: "Primary Neuron Outgrowth",
          image: "Primary_neuron.png",
          description:
            "Primary neuron cultures transduced with recombinant AAV vectors (AAV-tdTomato, AAV-NR2F1, AAV-NR2F6) and immunostained for βIII-tubulin (green) and tdTomato (red) to assess neurite outgrowth, branching complexity, and morphological responses to candidate regenerative factors in vitro.",
        },
        {
          text: "Spinal Cord Injury & Regeneration",
          image: "Spinal_cord_injury.png",
          description:
            "Fluorescence microscopy of spinal cord injury lesion site illustrating regenerating axon tracts navigating through the injury microenvironment and glial scar boundaries following targeted molecular interventions.",
        },
        {
          text: "Motor Cortex Injection",
          image: "Motor_cortext_Injection.png",
          description:
            "Anterograde tracing of corticospinal neurons via AAV-GFP injection into the primary motor cortex. Coronal sections show GFP expression confined to layer 5 neurons, with high-magnification imaging confirming transduction of individual corticospinal neurons for downstream axon tracing studies.",
        },
        {
          text: "Gait Analysis",
          image: "Gait.png",
          description:
            "Pose-tracking analysis of mouse locomotion on a horizontal ladder, used to quantify hindlimb coordination and stepping accuracy. Automated tracking of key joints lets us measure functional recovery after spinal cord injury with high precision.",
        },
        {
          text: "Hi-C Chromatin Mapping",
          image: "HiC.png",
          description:
            "Hi-C contact maps comparing 3D genome architecture across developmental (P0), adult, and injured neuronal states. Changes in chromatin looping and compartmentalization reveal how genome organization shifts to enable or restrict regenerative gene programs.",
        },
        {
          text: "snATAC-Seq Trajectory Analysis",
          image: "snATAC.png",
          description:
            "Single-nucleus ATAC-seq (snATAC-seq) developmental trajectory and pseudotime analysis across embryonic to adult corticospinal projection neuron differentiation (E10–P60). Dynamics of chromatin accessibility capture transition states from apical and intermediate progenitors to deep-layer projection neurons (L5/L6), mapping regulatory changes that govern axon growth potential.",
        },
        {
          text: "snRNA-Seq Expression Profiling",
          image: "snRNA.png",
          description:
            "Single-nucleus RNA sequencing (snRNA-seq) UMAP feature plots showing cell-type-specific transcriptional markers (Sox2, Eomes, Nrp1, Tubb3, Satb2, Bcl11b, Tle4, Pdgfra, Apoe, Aif1, Cldn5) across developing and mature cortical populations, enabling high-resolution mapping of gene regulatory networks driving axon regeneration.",
        },
        {
          text: "CUT&RUN Chromatin Profiling",
          image: "cut_and_run.png",
          description:
            "Cleavage Under Targets and Release Using Nuclease (CUT&RUN) profiling of transcription factor binding (e.g. NR2F1 and NR2F6 motifs) showing Fraction of Reads in Peaks (FRiP) and transcriptional start site (TSS) enrichment heatmaps under injured and perturbed states to identify key chromatin regulatory hubs in axon growth.",
        },
        {
          text: "Ribo-Seq Translational Profiling",
          image: "Riboseq.png",
          description:
            "Ribosome profiling (Ribo-seq) and translational efficiency analysis quantifying changes across functional gene networks (protein translation, motor proteins, cytoskeleton, axon guidance, and synaptic signaling) upon NR2F1 and NR2F6 transcription factor modulation.",
        },
        {
          text: "AAV Production",
          image: "AAV_production.png",
          description:
            "In-house production, packaging, and quality control of high-titer recombinant adeno-associated viruses (rAAVs) for targeted neuronal gene delivery and cell-type specific expression.",
        },
      ],
      recentNews: [],
      olderNews: [],
    };
  },
  created() {
    this.setNewsLists([]);
  },
  methods: {
    async loadLabNewsFromSheet() {
      try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) {
          throw new Error(`Google Sheet request failed: ${response.status}`);
        }

        const rows = this.parseCsv(await response.text());
        const sheetNewsItems = rows
          .map(this.rowToNewsItem)
          .filter(Boolean);

        this.setNewsLists(sheetNewsItems);
      } catch (error) {
        console.error("Could not load Google Sheet news", error);
        this.setNewsLists([]);
      }
    },
    setNewsLists(sheetNewsItems = []) {
      const jsonItems = [...labNews.recent, ...labNews.older].map(this.normalizeJsonNews);
      const monthMap = new Map();

      const getOrCreateMonth = (monthKey, initialSortDate) => {
        if (!monthMap.has(monthKey)) {
          monthMap.set(monthKey, {
            date: monthKey,
            sortDate: initialSortDate || 0,
            title: `${monthKey} Highlights`,
            items: [],
            contents: [],
          });
        }
        const m = monthMap.get(monthKey);
        if (initialSortDate && initialSortDate > m.sortDate) {
          m.sortDate = initialSortDate;
        }
        return m;
      };

      // 1. Process Google Sheet news items
      for (const item of sheetNewsItems) {
        const monthKey = this.formatDateLabel(item.date || item.sortDate);
        const m = getOrCreateMonth(monthKey, item.sortDate);
        if (item.items && item.items.length) {
          m.items.push(...item.items);
        }
      }

      // 2. Process JSON news items (for months not in Google Sheets)
      for (const item of jsonItems) {
        const monthKey = this.formatDateLabel(item.date);
        const hasSheetItems = sheetNewsItems.some(
          (s) => this.formatDateLabel(s.date || s.sortDate) === monthKey
        );
        if (!hasSheetItems) {
          const m = getOrCreateMonth(monthKey, item.sortDate);
          if (item.content && !m.contents.includes(item.content)) {
            m.contents.push(item.content);
          }
          if (item.items && item.items.length) {
            m.items.push(...item.items);
          }
        }
      }

      // 3. For each month: sort its items descending by sortDate (most recent on top!)
      const allMonths = Array.from(monthMap.values()).map((m) => {
        m.items.sort((a, b) => (b.sortDate || 0) - (a.sortDate || 0));
        return m;
      });

      // 4. Sort all months descending by sortDate (most recent month on top!)
      allMonths.sort((a, b) => (b.sortDate || 0) - (a.sortDate || 0));

      // 5. Split into recent and older
      const splitIndex = RECENT_NEWS_MONTH_LIMIT;
      this.recentNews = allMonths.slice(0, splitIndex);
      this.olderNews = allMonths.slice(splitIndex);
    },
    normalizeJsonNews(item) {
      const sortDate = this.parseDate(item.date) || 0;
      return {
        date: item.date,
        sortDate,
        content: item.content || null,
        title: item.title || `${item.date} Highlights`,
        items: item.items || [],
      };
    },
    rowToNewsItem(row) {
      if (!this.isApproved(row.Approved) || !row["News item"]) {
        return null;
      }

      const links = [];
      if (row["Link URL"]) {
        links.push({
          label: row["Link label"] || "Open link",
          url: row["Link URL"],
        });
      }

      const rawDate = row["Date label"] || row.Timestamp;
      const sortDate = this.parseDate(rawDate) || this.parseDate(row.Timestamp) || 0;
      const dateLabel = this.formatDateLabel(rawDate);

      return {
        date: dateLabel,
        title: row["News title"] || `${dateLabel} Highlights`,
        sortDate,
        items: [
          {
            text: this.escapeHtml(row["News item"]),
            links,
            sortDate,
          },
        ],
      };
    },
    isApproved(value) {
      return String(value || "").trim().toLowerCase() === "yes";
    },
    formatDateLabel(value) {
      const timestamp = this.parseDate(value);
      if (!timestamp) {
        return String(value || "");
      }

      const d = new Date(timestamp);
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
    },
    parseDate(value) {
      if (!value) {
        return 0;
      }

      const str = String(value).trim();

      // Check DD/MM/YYYY or DD-MM-YYYY (with optional HH:mm:ss)
      const dmyMatch = str.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
      if (dmyMatch) {
        const day = parseInt(dmyMatch[1], 10);
        const month = parseInt(dmyMatch[2], 10) - 1;
        const year = parseInt(dmyMatch[3], 10);
        const hours = dmyMatch[4] ? parseInt(dmyMatch[4], 10) : 12;
        const minutes = dmyMatch[5] ? parseInt(dmyMatch[5], 10) : 0;
        const seconds = dmyMatch[6] ? parseInt(dmyMatch[6], 10) : 0;
        return new Date(year, month, day, hours, minutes, seconds).getTime();
      }

      // Check "Month YYYY" or "Mon YYYY" (e.g. "August 2026", "Jan 2025", "Sep 2024", "Jun 2023")
      const monthNames = [
        "january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
      ];
      const myMatch = str.match(/^([a-zA-Z]+)\s+(\d{4})/);
      if (myMatch) {
        const monthStr = myMatch[1].toLowerCase();
        const year = parseInt(myMatch[2], 10);
        const monthIndex = monthNames.findIndex(
          (m) => m.startsWith(monthStr) || monthStr.startsWith(m.slice(0, 3))
        );
        if (monthIndex !== -1) {
          return new Date(year, monthIndex, 1, 12, 0, 0).getTime();
        }
      }

      const parsed = new Date(str).getTime();
      return Number.isNaN(parsed) ? 0 : parsed;
    },
    parseCsv(csv) {
      const rows = [];
      let row = [];
      let value = "";
      let insideQuotes = false;

      for (let index = 0; index < csv.length; index += 1) {
        const char = csv[index];
        const nextChar = csv[index + 1];

        if (char === "\"" && insideQuotes && nextChar === "\"") {
          value += "\"";
          index += 1;
        } else if (char === "\"") {
          insideQuotes = !insideQuotes;
        } else if (char === "," && !insideQuotes) {
          row.push(value);
          value = "";
        } else if ((char === "\n" || char === "\r") && !insideQuotes) {
          if (char === "\r" && nextChar === "\n") {
            index += 1;
          }
          row.push(value);
          rows.push(row);
          row = [];
          value = "";
        } else {
          value += char;
        }
      }

      if (value || row.length) {
        row.push(value);
        rows.push(row);
      }

      const [headers = [], ...dataRows] = rows;
      return dataRows
        .filter((dataRow) => dataRow.some((cell) => cell.trim()))
        .map((dataRow) =>
          headers.reduce((item, header, index) => {
            item[header] = dataRow[index] || "";
            return item;
          }, {})
        );
    },
    escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },
    loadElfsightScript() {
      // Check if the script is already loaded
      if (!document.querySelector('script[src*="elfsightcdn.com"]')) {
        const script = document.createElement('script');
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.head.appendChild(script);
      }
    },
    goToSlide(index) {
      this.activeSlide = index;
      this.restartSlideTimer();
    },
    startSlideTimer() {
      this.slideTimer = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.galleryImages.length;
      }, 4500);
    },
    restartSlideTimer() {
      clearInterval(this.slideTimer);
      this.startSlideTimer();
    },
    showSlideDetail(item) {
      this.selectedGalleryItem = item;
      this.showGalleryModal = true;
    },
  },
  mounted() {
    this.loadLabNewsFromSheet();
    // Load the Elfsight script when the component is mounted
    this.loadElfsightScript();
    this.startSlideTimer();
  },
  beforeDestroy() {
    clearInterval(this.slideTimer);
  },
};
</script>

<style scoped>
.hero {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  min-height: 520px;
  overflow: hidden;
  padding: 24px 0 36px;
  position: relative;
}

.hero-bg {
  -webkit-mask-image: linear-gradient(
    to right,
    black 0%,
    black 38%,
    rgba(0, 0, 0, 0.35) 55%,
    transparent 72%
  );
  mask-image: linear-gradient(
    to right,
    black 0%,
    black 38%,
    rgba(0, 0, 0, 0.35) 55%,
    transparent 72%
  );
}

.hero-content {
  pointer-events: none;
  position: relative;
  z-index: 1;
}

.hero-content a,
.hero-content button,
.hero-content iframe {
  pointer-events: auto;
}

.hero-grid {
  align-items: start;
  display: grid;
  gap: 48px;
  grid-template-columns: 1.1fr 1fr;
}

.hero-copy h1 {
  color: var(--color-ink);
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 10px 0 22px;
}

.hero-question {
  color: var(--color-accent-dark);
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 16px;
}

.hero-body {
  color: var(--color-ink-soft);
  font-size: 1.02rem;
  line-height: 1.7;
  text-align: justify;
}

.hero-media {
  align-self: center;
}

.video-container {
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  position: relative;
  padding-top: 66.66%;
  width: 100%;
}

.video-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.toolkit-section {
  background: var(--color-surface-muted);
  border-bottom: 1px solid var(--color-border);
  padding: 48px 0;
}

.section-title {
  color: var(--color-ink);
  font-size: 1.7rem;
  margin-bottom: 32px;
}

.slideshow {
  margin: 0 auto;
  max-width: 960px;
}

.slideshow-viewport {
  position: relative;
}

.slideshow-frame {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  display: block;
  overflow: hidden;
  padding: 0;
  position: relative;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  width: 100%;
}

.slideshow-frame:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.slideshow-img {
  aspect-ratio: 16 / 9;
  display: block;
  object-fit: cover;
  width: 100%;
}

.slideshow-caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  bottom: 0;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 600;
  left: 0;
  padding: 32px 20px 16px;
  position: absolute;
  right: 0;
  text-align: left;
}

.slideshow-arrow {
  align-items: center;
  background: rgba(0, 0, 0, 0.35);
  border: 0;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  height: 40px;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background 0.15s ease;
  width: 40px;
  z-index: 2;
}

.slideshow-arrow:hover {
  background: rgba(0, 0, 0, 0.6);
}

.slideshow-arrow-prev {
  left: 14px;
}

.slideshow-arrow-next {
  right: 14px;
}

.slideshow-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 18px;
}

.slideshow-dot {
  background: var(--color-border-strong);
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  height: 9px;
  padding: 0;
  transition: background 0.15s ease, width 0.15s ease;
  width: 9px;
}

.slideshow-dot.active {
  background: var(--color-accent);
  width: 24px;
}

.gallery-modal {
  text-align: center;
}

.gallery-modal-img {
  border-radius: var(--radius-md);
  margin-bottom: 18px;
  max-height: 60vh;
  object-fit: contain;
}

.gallery-modal-desc {
  color: var(--color-ink-soft);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  text-align: left;
}

.lower-section {
  padding: 56px 0 72px;
}

.bottompage h3 {
  color: var(--color-ink);
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: left;
}

.tweetdiv {
  height: 700px;
  width: 100%;
}

.v-card {
  background: var(--color-surface) !important;
  border: 1px solid var(--color-border) !important;
  box-shadow: none !important;
}

.v-card__title {
  color: var(--color-ink) !important;
  font-family: var(--font-heading) !important;
  font-size: 1.15rem !important;
  font-weight: 600 !important;
}

.v-card__text {
  color: var(--color-ink-soft) !important;
  font-family: var(--font-body) !important;
  font-size: 1rem !important;
  font-weight: 400;
  line-height: 1.6 !important;
  opacity: 1 !important;
}

.news-link {
  color: var(--color-accent);
  font-weight: 600;
  margin-left: 8px;
}

.labnews >>> ul {
  margin-bottom: 0;
  padding-left: 22px;
}

.labnews >>> li {
  line-height: 1.6;
  margin-bottom: 12px;
}

.labnews >>> h3 {
  line-height: 1.35;
  margin-bottom: 12px;
}

.labnews >>> li:last-child {
  margin-bottom: 0;
}

.show-more-btn {
  background: var(--color-surface) !important;
  border: 1px solid var(--color-border-strong) !important;
  box-shadow: none !important;
  color: var(--color-accent) !important;
  font-weight: 600;
  text-transform: none !important;
}

.show-more-btn:hover {
  background: var(--color-accent-light) !important;
}

@media (max-width: 991px) {
  .hero-grid {
    gap: 32px;
    grid-template-columns: 1fr;
  }

  .hero-media {
    order: -1;
  }

  .hero-bg {
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      black 45%,
      black 100%
    );
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      black 45%,
      black 100%
    );
  }

}

@media (max-width: 600px) {
  .hero {
    padding: 40px 0 32px;
  }

  .hero-copy h1 {
    font-size: 1.9rem;
  }

  .hero-body {
    text-align: left;
  }

  .slideshow-caption {
    font-size: 0.95rem;
    padding: 26px 16px 14px;
  }

  .tweetdiv {
    height: 520px;
  }
}
</style>
