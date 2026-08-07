<template>
  <b-container class="social-page">
    <b-row>
      <b-col>
        <h2 class="text-center">Social Media</h2>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="6" class="mb-4">
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
      <b-col cols="12" lg="6" class="mb-4">
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
      <b-col cols="12" lg="6" class="mb-4">
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
      <b-col cols="12" lg="6" class="mb-4">
        <section class="social-panel">
          <div class="panel-header">
            <h3>Google Scholar</h3>
            <a
              href="https://scholar.google.com/citations?user=gMx5yTUAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open profile <b-icon icon="box-arrow-up-right"></b-icon>
            </a>
          </div>
          <div class="scholar-widget">
            <div class="scholar-stats">
              <div v-for="stat in scholarStats" :key="stat.label">
                <span>{{ stat.value }}</span>
                <p>{{ stat.label }}</p>
              </div>
            </div>
            <div class="scholar-chart" aria-label="Google Scholar citations by year">
              <div
                v-for="point in scholarCitationsByYear"
                :key="point.year"
                class="scholar-bar"
              >
                <span>{{ point.citations }}</span>
                <div
                  :style="{
                    height: `${Math.max(
                      8,
                      (point.citations / maxScholarCitations) * 112
                    )}px`,
                  }"
                ></div>
                <p>{{ point.year }}</p>
              </div>
            </div>
            <p class="scholar-note">Citation profile updated from Google Scholar.</p>
            <a
              href="https://scholar.google.com/citations?user=gMx5yTUAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              class="profile-button"
            >
              View Google Scholar
            </a>
          </div>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import scholarProfile from "@/assets/google-scholar.json";

export default {
  data() {
    return {
      scholarStats: [
        {
          label: "Articles",
          value: scholarProfile.articles,
        },
        {
          label: "Citations",
          value: scholarProfile.citations,
        },
        {
          label: "h-index",
          value: scholarProfile.hIndex,
        },
        {
          label: "i10-index",
          value: scholarProfile.i10Index,
        },
      ],
      scholarCitationsByYear: scholarProfile.citationsByYear,
      scholarUpdatedAt: scholarProfile.updatedAt,
    };
  },
  computed: {
    maxScholarCitations() {
      return Math.max(
        ...this.scholarCitationsByYear.map((point) => point.citations)
      );
    },
  },
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
  padding-top: 48px;
}

h2 {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  margin-bottom: 32px;
}

.social-panel {
  border: 1px solid #346225;
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 20px;
}

.panel-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

h3 {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 28px;
  margin: 0;
}

.panel-header a,
.profile-button {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
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

.profile-widget {
  color: #346225;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: "Oswald", sans-serif;
  justify-content: center;
}

.scholar-widget {
  color: #346225;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: "Oswald", sans-serif;
  justify-content: space-between;
}

.scholar-stats {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}

.scholar-stats div {
  border: 1px solid #346225;
  padding: 10px 6px;
  text-align: center;
}

.scholar-stats span {
  display: block;
  font-size: 27px;
  line-height: 1.1;
}

.scholar-stats p {
  font-size: 15px;
  line-height: 1.2;
  margin: 6px 0 0;
}

.scholar-chart {
  align-items: end;
  border-bottom: 1px solid #346225;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 22px;
  min-height: 158px;
}

.scholar-bar {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-width: 0;
}

.scholar-bar span {
  font-size: 12px;
  line-height: 1;
  margin-bottom: 4px;
}

.scholar-bar div {
  background: #346225;
  min-height: 8px;
  width: 100%;
}

.scholar-bar p {
  font-size: 11px;
  line-height: 1;
  margin: 7px 0 8px;
  transform: rotate(-45deg);
}

.scholar-note {
  font-size: 15px;
  line-height: 1.2;
  margin: 12px 0 0;
}

.profile-name {
  font-size: 34px;
  line-height: 1.1;
  margin-bottom: 4px;
}

.profile-role {
  font-size: 24px;
  margin-bottom: 28px;
}

.profile-stats {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 28px;
}

.profile-stats div {
  border: 1px solid #346225;
  padding: 16px 8px;
  text-align: center;
}

.profile-stats span {
  display: block;
  font-size: 30px;
  line-height: 1.4;
}

.profile-stats p {
  font-size: 16px;
  margin: 0;
}

.profile-copy {
  font-size: 22px;
  line-height: 1.35;
}

.profile-button {
  border: 1px solid #346225;
  display: inline-block;
  margin-top: 16px;
  padding: 12px 16px;
}

.panel-header a:hover,
.profile-button:hover {
  background: #fff3e0;
  color: #346225;
  text-decoration: none;
}

.embed-note {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  margin-bottom: 32px;
  text-align: center;
}

@media (max-width: 600px) {
  .social-panel {
    height: auto;
    min-height: 420px;
  }

  .profile-stats {
    grid-template-columns: 1fr;
  }

  .scholar-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .scholar-chart {
    overflow-x: auto;
  }

  .scholar-bar {
    min-width: 28px;
  }
}
</style>
