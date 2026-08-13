<template>
  <div>
    <ParticlesJS> </ParticlesJS>
    <div class="labinfo" color="orange lighten-5">
      <b-container>
        <b-row>
          <div class="emptyspace"></div>
        </b-row>
        <b-row>
          <b-col>
            <b-row class="d-flex justify-space-around pa-3 text-center">
              <h1 color="orange lighten-5">
                Regulatory Networks Encoding Axon Growth in the Nervous System
              </h1>
            </b-row>
            <b-row class="intro-section align-items-center">
              <b-col cols="12" lg="6" class="intro-video-col">
                <div class="video-container">
                  <iframe src="https://www.youtube.com/embed/4te7sQQBl1g" title="Venkatesh Lab video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </b-col>
              <b-col cols="12" lg="6" class="intro-copy-col">
                <p color="orange lighten-5" class="pa-6 labvision">
                  <span class="vision">How is axon growth regulated during development and regeneration in mammals?</span>
                  Communication in the nervous system is achieved via long cables called axons which connect neurons in the brain with the rest of the body. Intact axons are critical for proper nervous system function. When injured, young neurons are remarkably good at regeneration and repair. In contrast, adult neurons fail to regenerate resulting in permanent irreversible nervous system damage. What molecular pathways drive the observed loss of regenerative capacity across development? What regulatory mechanisms modulate developmental axon growth? Does successful CNS regeneration in adult neurons require a faithful recapitulation of developmental mechanisms? Are there development independent pathways that co-ordinate repair? These are some of the questions we are currently tackling. To get at these questions, we use a combinatorial approach which includes Bioinformatics, Functional Genomics (Single-cell RNA-Seq, ATAC-Seq, Hi-C, ChIP-Seq), in vitro assays of growth, in vivo mouse models of injury and behavioral assessments.
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col><h2 class="text-center">Research Toolkit</h2></b-col>
        </b-row>
        <b-row class="techniques mb-5">
          <b-col class="mt-2 mr-2 ml-4 mb-2" cols="5" sm="3" md="2" v-for="(tech, index) in techniques" :key="index">
            <h4 class="text-center">{{ tech.text }}</h4>
            <b-img :src="require(`../assets/images/homepage/${tech.image}`)" fluid class="ml-2" width="160" height="160"></b-img>
          </b-col>
        </b-row>
        <hr />
        <b-row class="mt-12 bottompage mb-6">
          <b-col cols="7" md="8" class="labnews">
            <h3 class="text-center">LAB NEWS</h3>
            
            <div v-for="(item, index) in recentNews" :key="'recent-'+index">
              <v-card elevation="2" class="mt-2">
                <v-card-title>{{ item.date }}</v-card-title>
                <v-card-text>
                  <div v-if="item.content" v-html="item.content"></div>
                  <div v-else>
                    <h3 v-if="item.title">{{ item.title }}</h3>
                    <ul v-if="item.items && item.items.length">
                      <li v-for="(entry, entryIndex) in item.items" :key="entryIndex">
                        <span v-html="entry.text"></span>
                        <template v-if="entry.links && entry.links.length">
                          <a
                            class="news-link"
                            v-for="(link, linkIndex) in entry.links"
                            :key="linkIndex"
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
                    <div v-if="item.content" v-html="item.content"></div>
                    <div v-else>
                      <h3 v-if="item.title">{{ item.title }}</h3>
                      <ul v-if="item.items && item.items.length">
                        <li v-for="(entry, entryIndex) in item.items" :key="entryIndex">
                          <span v-html="entry.text"></span>
                          <template v-if="entry.links && entry.links.length">
                            <a
                              class="news-link"
                              v-for="(link, linkIndex) in entry.links"
                              :key="linkIndex"
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
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </b-col>
          
          <b-col cols="5" md="4">
            <h3 class="text-center">Ish's Tweets</h3>
            <v-card class="overflow-auto tweetdiv">
              <div class="elfsight-app-49b277f8-63cb-4997-abaa-e683d5b8421c" data-elfsight-app-lazy></div>
            </v-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ParticlesJS from "../components/ParticlesJS.vue";
import labNews from "@/assets/lab-news.json";

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/18Ta4kyJRloDNN5vlmjm5kPjP_Eh77S-MIKvs0PYdAt8/gviz/tq?tqx=out:csv";
const RECENT_NEWS_MONTH_LIMIT = 3;

export default {
  components: {
    ParticlesJS,
  },
  data() {
    return {
      showOlderNews: false,
      techniques: [
        {
          text: "Mouse models of injury",
          image: "mice.png",
        },
        {
          text: "Molecular Biology",
          image: "molbio.png",
        },
        {
          text: "Single Cell Genomics",
          image: "scg.png",
        },
        {
          text: "Cell Culture",
          image: "cellcult.png",
        },
        {
          text: "Bioinformatics",
          image: "bioinfo.png",
        },
      ],
      recentNews: labNews.recent,
      olderNews: labNews.older,
    };
  },
  methods: {
    async loadLabNewsFromSheet() {
      try {
        const response = await fetch(GOOGLE_SHEET_CSV_URL);
        if (!response.ok) {
          throw new Error(`Google Sheet request failed: ${response.status}`);
        }

        const rows = this.parseCsv(await response.text());
        const sheetNews = this.groupNewsByMonth(
          rows
          .map(this.rowToNewsItem)
          .filter(Boolean)
        );

        this.setNewsLists(sheetNews);
      } catch (error) {
        console.error("Could not load Google Sheet news", error);
        this.setNewsLists([]);
      }
    },
    setNewsLists(sheetNews) {
      const allNews = [...sheetNews, ...labNews.recent, ...labNews.older];
      const splitIndex = this.getRecentNewsSplitIndex(allNews);
      this.recentNews = allNews.slice(0, splitIndex);
      this.olderNews = allNews.slice(splitIndex);
    },
    getRecentNewsSplitIndex(newsItems) {
      const seenMonths = new Set();

      for (let index = 0; index < newsItems.length; index += 1) {
        seenMonths.add(newsItems[index].date);

        if (seenMonths.size > RECENT_NEWS_MONTH_LIMIT) {
          return index;
        }
      }

      return newsItems.length;
    },
    groupNewsByMonth(newsItems) {
      const grouped = newsItems.reduce((months, item) => {
        if (!months[item.date]) {
          months[item.date] = {
            date: item.date,
            sortDate: item.sortDate,
            title: `${item.date} Highlights`,
            items: [],
          };
        }

        months[item.date].sortDate = Math.max(months[item.date].sortDate, item.sortDate);
        months[item.date].items.push(...item.items);
        return months;
      }, {});

      return Object.values(grouped).sort(
        (first, second) => second.sortDate - first.sortDate
      );
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

      return {
        date: this.formatDateLabel(row["Date label"]),
        title: row["News title"],
        sortDate: this.parseDate(row["Date label"]) || this.parseDate(row.Timestamp) || 0,
        items: [
          {
            text: this.escapeHtml(row["News item"]),
            links,
          },
        ],
      };
    },
    isApproved(value) {
      return String(value || "").trim().toLowerCase() === "yes";
    },
    formatDateLabel(value) {
      const date = this.parseDate(value);
      if (!date) {
        return value;
      }

      return new Intl.DateTimeFormat("en", {
        month: "long",
        year: "numeric",
      }).format(new Date(date));
    },
    parseDate(value) {
      if (!value) {
        return null;
      }

      const [datePart] = String(value).trim().split(" ");
      const parts = datePart.split("/");
      if (parts.length === 3) {
        const [day, month, year] = parts.map(Number);
        const parsed = new Date(year, month - 1, day).getTime();
        return Number.isNaN(parsed) ? null : parsed;
      }

      const parsed = new Date(value).getTime();
      return Number.isNaN(parsed) ? null : parsed;
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
    }
  },
  mounted() {
    this.loadLabNewsFromSheet();
    // Load the Elfsight script when the component is mounted
    this.loadElfsightScript();
  },
};
</script>

<style scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(6, 44, 2);
  background-repeat: no-repeat;
}
.labinfo {
  position: relative;
}
h1 {
  color: oldlace;
  font-size: 60px;
  font-family: "Oswald", sans-serif;
}
h2, h3, h4, h5 {
  color: snow;
  font-family: "Oswald", sans-serif;
}
p {
  color: oldlace;
}
.emptyspace {
  height: 50px;
}
.intro-section {
  margin-bottom: 32px;
}
.intro-video-col,
.intro-copy-col {
  padding: 16px;
}
.video-container {
  border: 1px solid rgba(255, 250, 250, 0.65);
  position: relative;
  width: 100%;
}
.video-container::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
.video-container iframe {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.labvision {
  font-size: 20px !important;
  line-height: 1.45;
  margin-bottom: 0;
  text-align: justify;
}
.vision {
  font-weight: bold;
  font-style: italic;
}
.tweetdiv {
  height: 800px;
  width: 400px;
}
.v-card__title {
  color: snow !important;
  font-size: 24px !important;
}
.v-card__text {
  font-family: "Oswald", sans-serif !important;
  color: snow !important;
  font-size: 22px !important;
  font-weight: bolder;
  line-height: 1.45 !important;
  opacity: 1 !important;
}
.news-link {
  margin-left: 8px;
}
.labnews >>> ul {
  margin-bottom: 0;
  padding-left: 24px;
}
.labnews >>> li {
  line-height: 1.45;
  margin-bottom: 14px;
}
.labnews >>> h3 {
  line-height: 1.35;
  margin-bottom: 14px;
}
.labnews >>> li:last-child {
  margin-bottom: 0;
}
.techniques {
  border: 0.5px solid;
  border-color: snow;
}
.theme--light.v-sheet {
  background-color: #193311;
  border-color: #ffffff;
  color: snow;
}

.labnews > .v-sheet {
  opacity: 0.6;
}
@media (max-width: 600px) {
  .labvision {
    text-align: center;
  }
  .intro-video-col,
  .intro-copy-col {
    padding: 8px 15px;
  }
}
@media (max-width: 600px) {
  .techniques {
    border: 0px;
  }
}
</style>
