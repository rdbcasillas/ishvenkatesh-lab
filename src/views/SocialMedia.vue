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
          <div class="profile-widget">
            <p class="profile-name">Ishwariya Venkatesh</p>
            <p class="profile-role">Professional profile</p>
            <p class="profile-copy">
              Follow lab activity, professional updates, talks, and research
              announcements.
            </p>
            <a
              href="https://www.linkedin.com/in/ishwariya-venkatesh-abb21621/"
              target="_blank"
              rel="noopener noreferrer"
              class="profile-button"
            >
              View LinkedIn Profile
            </a>
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
          <div class="profile-widget">
            <p class="profile-name">Publications</p>
            <p class="profile-role">Citation profile</p>
            <p class="profile-copy">
              View publications, citations, co-authors, and scholarly impact on
              Google Scholar.
            </p>
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
      <b-col cols="12" lg="6" class="mb-4">
        <section class="social-panel">
          <div class="panel-header">
            <h3>ResearchGate</h3>
            <a
              href="https://www.researchgate.net/profile/Ishwariya-Venkatesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open profile <b-icon icon="box-arrow-up-right"></b-icon>
            </a>
          </div>
          <div class="profile-widget">
            <div>
              <p class="profile-name">Ishwariya Venkatesh</p>
              <p class="profile-role">Research profile</p>
            </div>
            <div class="profile-stats">
              <div>
                <span>22</span>
                <p>Publications</p>
              </div>
              <div>
                <span>2,094</span>
                <p>Reads</p>
              </div>
              <div>
                <span>279</span>
                <p>Citations</p>
              </div>
            </div>
            <p class="profile-copy">
              Follow the lab PI's research record, preprints, articles, and
              publication updates on ResearchGate.
            </p>
            <a
              href="https://www.researchgate.net/profile/Ishwariya-Venkatesh"
              target="_blank"
              rel="noopener noreferrer"
              class="profile-button"
            >
              View ResearchGate Profile
            </a>
          </div>
        </section>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="8">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  mounted() {
    this.loadInstagramEmbed();
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

.instagram-embed {
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: auto;
}

.profile-widget {
  color: #346225;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: "Oswald", sans-serif;
  justify-content: center;
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
}
</style>
