<template>
  <div class="home">
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <h1>Regulatory networks encoding axon growth in the nervous system</h1>
          <p class="hero-question">
            How is axon growth regulated during development and regeneration in mammals?
          </p>
          <p class="hero-body">
            Communication in the nervous system is achieved through long cables called axons, which connect neurons in the brain with the rest of the body. Intact axons are critical for proper nervous system function. When injured, young neurons are remarkably capable of regeneration and repair. In contrast, adult neurons generally fail to regenerate, resulting in permanent nervous system damage.
          </p>
          <div class="hero-actions">
            <router-link class="btn-primary" to="/publications">Read our publications</router-link>
            <router-link class="btn-quiet" to="/team">Meet the team</router-link>
          </div>
        </div>
        <figure class="hero-figure">
          <div class="hero-figure-btn"><b-img :src="require('../assets/images/lab_webpage/Spinal_cord_injury.png')" alt="Fluorescence microscopy of regenerating axons at a spinal cord injury site" class="hero-figure-img"></b-img></div>
          <figcaption>Regenerating axons at a spinal cord injury site.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap approach-grid">
        <div class="approach-copy">
          <h2>What we study</h2>
          <p>
            What molecular pathways drive the loss of regenerative capacity across development? What regulatory mechanisms modulate developmental axon growth? Does successful CNS regeneration in adult neurons require a faithful recapitulation of developmental mechanisms? Are there development-independent pathways that coordinate repair? These are some of the questions we are currently tackling.
          </p>
          <p>
            To investigate them, we use a combinatorial approach that includes bioinformatics, functional genomics (single-cell RNA-seq, ATAC-seq, Hi-C, and ChIP-seq), in vitro growth assays, in vivo mouse models of injury, and behavioural assessments.
          </p>
        </div>
        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/4te7sQQBl1g" title="What happens in the Lab for Axon Growth and Regeneration" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <h2>Research in images</h2>
        <div
          class="carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Research image gallery"
          tabindex="0"
          @mouseenter="pauseSlides"
          @mouseleave="resumeSlides"
          @focusin="pauseSlides"
          @focusout="resumeSlides"
          @keydown.left.prevent="stepSlide(-1)"
          @keydown.right.prevent="stepSlide(1)"
        >
          <div class="carousel-main">
            <div class="carousel-stage">
              <div
                v-for="(item, index) in galleryImages"
                :key="index"
                class="slide"
                :class="{ active: index === activeSlide, 'is-figure': item.figure, 'is-dark': item.dark }"
                :aria-hidden="index === activeSlide ? 'false' : 'true'"
              >
                <b-img :src="require(`../assets/images/lab_webpage/${item.image}`)" :alt="item.text" class="slide-img"></b-img>
              </div>
              <button type="button" class="carousel-arrow prev" aria-label="Previous image" @click="stepSlide(-1)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button type="button" class="carousel-arrow next" aria-label="Next image" @click="stepSlide(1)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              <div class="carousel-progress" aria-hidden="true"><span :key="activeSlide" :class="{ running: !paused }"></span></div>
            </div>
            <div class="carousel-info" aria-live="polite">
              <p class="carousel-count">{{ activeSlide + 1 }} / {{ galleryImages.length }}</p>
              <h3>{{ galleryImages[activeSlide].text }}</h3>
              <p class="carousel-desc">{{ galleryImages[activeSlide].description }}</p>
            </div>
          </div>
          <div class="carousel-thumbs" role="tablist" aria-label="Choose an image">
            <button
              v-for="(item, index) in galleryImages"
              :key="'thumb-' + index"
              type="button"
              role="tab"
              class="thumb"
              :class="{ active: index === activeSlide }"
              :aria-selected="index === activeSlide ? 'true' : 'false'"
              :aria-label="item.text"
              @click="goToSlide(index)"
            >
              <b-img :src="require(`../assets/images/lab_webpage/${item.image}`)" alt="" class="thumb-img"></b-img>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap news" ref="newsSection">
        <div class="news-head">
          <h2>Lab news</h2>
          <a class="text-link" href="https://twitter.com/Ishwariya13" target="_blank" rel="noopener noreferrer">Follow on X <b-icon icon="box-arrow-up-right" scale="0.7"></b-icon></a>
        </div>

        <div v-for="(item, index) in shownNews" :key="'month-'+item.date" class="news-month">
          <h3 class="news-date">{{ item.date }}</h3>
          <div class="news-body labnews">
            <ul v-if="item.items && item.items.length">
              <li v-for="(entry, entryIndex) in item.items" :key="'entry-'+entryIndex">
                <span v-html="entry.text"></span>
                <template v-if="entry.links && entry.links.length">
                  <a class="news-link" v-for="(link, linkIndex) in entry.links" :key="'link-'+linkIndex" :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
                </template>
              </li>
            </ul>
            <template v-if="item.contents && item.contents.length">
              <div v-for="(c, cIdx) in item.contents" :key="'c-'+cIdx" v-html="c"></div>
            </template>
            <div v-else-if="item.content && (!item.items || !item.items.length)" v-html="item.content"></div>
          </div>
        </div>

        <div class="news-actions">
          <button type="button" class="btn-quiet" v-if="hasMoreNews" @click="showMoreNews">Show next {{ NEWS_STEP }} months</button>
          <button type="button" class="btn-quiet" v-if="visibleCount > NEWS_STEP" @click="showLessNews">Hide older updates</button>
        </div>
      </div>
    </section>

    <section class="join">
      <div class="wrap join-inner">
        <div>
          <h2>Join the lab</h2>
          <p>We train one-year dissertation and project students, PhD students and postdoctoral fellows. Read what training looks like before you write to us.</p>
        </div>
        <div class="hero-actions">
          <router-link class="btn-primary" to="/training">Training in the lab</router-link>
          <router-link class="btn-quiet" to="/contact">Contact</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import labNews from "@/assets/lab-news.json";

const NEWS_STEP = 2;
const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/18Ta4kyJRloDNN5vlmjm5kPjP_Eh77S-MIKvs0PYdAt8/gviz/tq?tqx=out:csv";

export default {
  data() {
    return {
      visibleCount: NEWS_STEP,
      NEWS_STEP,
      activeSlide: 0,
      paused: false,
      slideTimer: null,
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
          size: "feature",
          description:
            "Fluorescence microscopy of spinal cord injury lesion site illustrating regenerating axon tracts navigating through the injury microenvironment and glial scar boundaries following targeted molecular interventions.",
        },
        {
          text: "Motor Cortex Injection",
          image: "Motor_cortext_Injection.png",
          figure: true,
          dark: true,
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
          figure: true,
          description:
            "Hi-C contact maps comparing 3D genome architecture across developmental (P0), adult, and injured neuronal states. Changes in chromatin looping and compartmentalization reveal how genome organization shifts to enable or restrict regenerative gene programs.",
        },
        {
          text: "snATAC-Seq Trajectory Analysis",
          image: "snATAC.png",
          figure: true,
          description:
            "Single-nucleus ATAC-seq (snATAC-seq) developmental trajectory and pseudotime analysis across embryonic to adult corticospinal projection neuron differentiation (E10–P60). Dynamics of chromatin accessibility capture transition states from apical and intermediate progenitors to deep-layer projection neurons (L5/L6), mapping regulatory changes that govern axon growth potential.",
        },
        {
          text: "snRNA-Seq Expression Profiling",
          image: "snRNA.png",
          figure: true,
          description:
            "Single-nucleus RNA sequencing (snRNA-seq) UMAP feature plots showing cell-type-specific transcriptional markers (Sox2, Eomes, Nrp1, Tubb3, Satb2, Bcl11b, Tle4, Pdgfra, Apoe, Aif1, Cldn5) across developing and mature cortical populations, enabling high-resolution mapping of gene regulatory networks driving axon regeneration.",
        },
        {
          text: "CUT&RUN Chromatin Profiling",
          image: "cut_and_run.png",
          figure: true,
          description:
            "Cleavage Under Targets and Release Using Nuclease (CUT&RUN) profiling of transcription factor binding (e.g., NR2F1 and NR2F6 motifs), showing Fraction of Reads in Peaks (FRiP) and transcription start site (TSS) enrichment heatmaps under injured and perturbed states to identify key chromatin regulatory hubs in axon growth.",
        },
        {
          text: "Ribo-Seq Translational Profiling",
          image: "Riboseq.png",
          figure: true,
          size: "wide",
          description:
            "Ribosome profiling (Ribo-seq) and translational efficiency analysis quantifying changes across functional gene networks (protein translation, motor proteins, cytoskeleton, axon guidance, and synaptic signaling) upon NR2F1 and NR2F6 transcription factor modulation.",
        },
        {
          text: "AAV Production",
          image: "AAV_production.png",
          description:
            "In-house production, packaging, and quality control of high-titre recombinant adeno-associated viruses (rAAVs) for targeted neuronal gene delivery and cell-type-specific expression.",
        },
      ],
      allNews: [],
    };
  },
  computed: {
    shownNews() {
      return this.allNews.slice(0, this.visibleCount);
    },
    hasMoreNews() {
      return this.visibleCount < this.allNews.length;
    },
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

      this.allNews = allMonths;
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
    showMoreNews() {
      this.visibleCount += NEWS_STEP;
    },
    showLessNews() {
      this.visibleCount = NEWS_STEP;
      if (this.$refs.newsSection) {
        this.$refs.newsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    goToSlide(index) {
      this.activeSlide = index;
      this.restartSlides();
    },
    stepSlide(direction) {
      const total = this.galleryImages.length;
      this.goToSlide((this.activeSlide + direction + total) % total);
    },
    startSlides() {
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      clearInterval(this.slideTimer);
      this.slideTimer = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.galleryImages.length;
      }, 3000);
    },
    restartSlides() {
      if (!this.paused) this.startSlides();
    },
    pauseSlides() {
      this.paused = true;
      clearInterval(this.slideTimer);
    },
    resumeSlides() {
      this.paused = false;
      this.startSlides();
    },
  },
  beforeDestroy() {
    clearInterval(this.slideTimer);
  },
  mounted() {
    this.loadLabNewsFromSheet();
    this.startSlides();
  },
};
</script>

<style scoped>
.wrap { margin: 0 auto; max-width: var(--container-max); padding: 0 28px; }

.hero { padding: clamp(40px, 7vw, 88px) 0 clamp(48px, 7vw, 96px); }
.hero-grid { align-items: center; display: grid; gap: clamp(32px, 5vw, 72px); grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); }
.hero-copy h1 { font-size: clamp(2.1rem, 4.2vw, 3.4rem); line-height: 1.08; margin: 0 0 20px; text-wrap: balance; }
.hero-question { color: var(--color-accent); font-family: var(--font-heading); font-size: 1.3rem; font-style: italic; line-height: 1.4; margin: 0 0 20px; }
.hero-body { color: var(--color-ink-soft); font-size: 1.05rem; line-height: 1.7; margin: 0 0 28px; max-width: 62ch; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

.btn-primary, .btn-quiet { border-radius: var(--radius-sm); display: inline-block; font-size: 0.95rem; font-weight: 600; padding: 11px 20px; text-decoration: none !important; transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease; cursor: pointer; }
.btn-primary { background: var(--color-accent); border: 1px solid var(--color-accent); color: var(--color-accent-contrast) !important; }
.btn-primary:hover { background: var(--color-accent-dark); border-color: var(--color-accent-dark); }
.btn-quiet { background: transparent; border: 1px solid var(--color-border-strong); color: var(--color-ink) !important; }
.btn-quiet:hover { border-color: var(--color-ink); }
.btn-primary:focus-visible, .btn-quiet:focus-visible, .hero-figure-btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }

.hero-figure { margin: 0; }
.hero-figure-btn { background: #000; border: 0; border-radius: var(--radius-md); display: block; overflow: hidden; padding: 0; width: 100%; box-shadow: var(--shadow-md); }
.hero-figure-img { aspect-ratio: 4 / 3; display: block; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); width: 100%; }
.hero-figure-btn:hover .hero-figure-img { transform: scale(1.03); }
.hero-figure figcaption { color: var(--color-muted); font-size: 0.85rem; margin-top: 10px; }

.section { padding: clamp(48px, 6vw, 88px) 0; }
.section-alt { background: var(--color-surface-muted); border-bottom: 1px solid var(--color-border); border-top: 1px solid var(--color-border); }
.section h2, .join h2 { font-size: clamp(1.6rem, 2.6vw, 2.1rem); margin: 0 0 16px; }
.section-lede { color: var(--color-muted); margin: -4px 0 32px; }

.approach-grid { align-items: center; display: grid; gap: clamp(32px, 5vw, 72px); grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
.approach-copy p { color: var(--color-ink-soft); font-size: 1.02rem; line-height: 1.7; margin: 0 0 16px; max-width: 62ch; }
.video-container { aspect-ratio: 16 / 9; background: #000; border-radius: var(--radius-md); box-shadow: var(--shadow-md); overflow: hidden; }
.video-container iframe { border: 0; height: 100%; width: 100%; }

.carousel { margin-top: 28px; outline-offset: 6px; }
.carousel-main { align-items: center; display: grid; gap: clamp(20px, 3vw, 40px); grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr); }
.carousel-stage { aspect-ratio: 16 / 9; background: #000; border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-md); overflow: hidden; position: relative; }
.slide { background: #000; inset: 0; opacity: 0; pointer-events: none; position: absolute; transition: opacity 0.5s ease; }
.slide.active { opacity: 1; pointer-events: auto; }
.slide.is-figure { background: #fff; }
.slide.is-figure.is-dark { background: #000; }
.slide-img { display: block; height: 100%; max-width: none; object-fit: contain; width: 100%; }
.slide.is-figure .slide-img { padding: 10px; }
.carousel-arrow { align-items: center; background: rgba(10, 16, 20, 0.6); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 999px; color: #fff; cursor: pointer; display: flex; height: 44px; justify-content: center; position: absolute; top: 50%; transform: translateY(-50%); transition: background 0.15s ease; width: 44px; z-index: 2; }
.carousel-arrow:hover { background: rgba(10, 16, 20, 0.85); }
.carousel-arrow.prev { left: 14px; }
.carousel-arrow.next { right: 14px; }
.carousel-progress { background: rgba(128, 128, 128, 0.35); bottom: 0; height: 3px; left: 0; position: absolute; right: 0; z-index: 2; }
.carousel-progress span { background: var(--color-accent); display: block; height: 100%; transform: scaleX(0); transform-origin: left; width: 100%; }
.carousel-progress span.running { animation: slide-progress 3s linear forwards; }
@keyframes slide-progress { to { transform: scaleX(1); } }

.carousel-count { color: var(--color-muted); font-size: 0.85rem; font-variant-numeric: tabular-nums; margin: 0 0 10px; }
.carousel-info h3 { font-size: clamp(1.3rem, 2vw, 1.7rem); margin: 0 0 14px; }
.carousel-desc { color: var(--color-ink-soft); font-size: 1rem; line-height: 1.7; margin: 0; }

.carousel-thumbs { display: flex; gap: 10px; margin-top: 20px; overflow-x: auto; padding: 4px 2px 8px; }
.thumb { background: var(--color-surface-muted); border: 2px solid transparent; border-radius: var(--radius-sm); cursor: pointer; flex: 0 0 auto; height: 58px; opacity: 0.6; overflow: hidden; padding: 0; transition: opacity 0.2s ease, border-color 0.2s ease; width: 92px; }
.thumb:hover { opacity: 1; }
.thumb.active { border-color: var(--color-accent); opacity: 1; }
.thumb:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.thumb-img { display: block; height: 100%; object-fit: cover; width: 100%; }

.news-head { align-items: baseline; display: flex; justify-content: space-between; margin-bottom: 12px; }
.news-head h2 { margin: 0; }
.text-link { font-size: 0.92rem; font-weight: 600; text-decoration: none; }
.text-link:hover { text-decoration: underline; }
.news-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 12px; }
.news-month { border-top: 1px solid var(--color-border-strong); display: grid; gap: 8px 32px; grid-template-columns: 180px minmax(0, 1fr); padding: 24px 0; }
.news-date { color: var(--color-ink); font-family: var(--font-body); font-size: 0.95rem; font-weight: 700; margin: 0; }
.news-body { color: var(--color-ink-soft); line-height: 1.65; max-width: 78ch; }
.labnews >>> ul { list-style: none; margin: 0; padding: 0; }
.labnews >>> li { margin: 0 0 14px; }
.labnews >>> li:last-child { margin-bottom: 0; }
.labnews >>> br { display: none; }
.news-link { font-weight: 600; margin-left: 8px; }

.join { background: var(--color-ink); color: var(--color-bg); padding: clamp(40px, 5vw, 64px) 0; }
.join-inner { align-items: center; display: flex; flex-wrap: wrap; gap: 24px 48px; justify-content: space-between; }
.join h2 { color: var(--color-bg); margin-bottom: 8px; }
.join p { color: var(--color-bg); margin: 0; max-width: 56ch; opacity: 0.78; }
.join .btn-primary { background: var(--color-bg); border-color: var(--color-bg); color: var(--color-ink) !important; }
.join .btn-primary:hover { opacity: 0.9; }
.join .btn-quiet { border-color: rgba(255,255,255,0.4); color: var(--color-bg) !important; }
.join .btn-quiet:hover { border-color: var(--color-bg); }

@media (max-width: 900px) {
  .hero-grid, .approach-grid { grid-template-columns: 1fr; }
  .carousel-main { grid-template-columns: 1fr; }
  .news-month { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .wrap { padding: 0 18px; }
  .carousel-arrow { height: 38px; width: 38px; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-figure-img, .slide { transition: none; }
  .carousel-progress span.running { animation: none; }
}
</style>
