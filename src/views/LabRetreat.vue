<template>
  <b-container class="retreat-page">
    <div class="page-header">
      <p class="page-kicker">Lab Culture</p>
      <h1 class="page-title">Lab Retreat</h1>
    </div>

    <b-row class="retreat-selector">
      <b-col
        v-for="retreat in retreats"
        :key="retreat.id"
        cols="12"
        md="6"
        xl="3"
        class="mb-4"
      >
        <button
          class="retreat-card"
          :class="{ active: selectedRetreat.id === retreat.id }"
          type="button"
          @click="selectedRetreatId = retreat.id"
        >
          <img
            :src="require(`../assets/images/labretreat/${retreat.folder}/${retreat.cover}`)"
            :alt="retreat.title"
          />
          <span>{{ retreat.title }}</span>
          <strong>{{ retreat.subtitle }}</strong>
        </button>
      </b-col>
    </b-row>

    <section class="retreat-detail">
      <div class="detail-header">
        <div>
          <h3>{{ selectedRetreat.title }}</h3>
          <p>{{ selectedRetreat.description }}</p>
        </div>
        <a
          v-if="selectedRetreat.primaryTweet"
          :href="selectedRetreat.primaryTweet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open thread <b-icon icon="box-arrow-up-right"></b-icon>
        </a>
      </div>

      <b-row class="media-grid">
        <b-col
          v-for="media in selectedRetreat.media"
          :key="`${media.type}-${media.file}`"
          cols="12"
          md="6"
          xl="3"
          class="mb-4"
        >
          <button
            v-if="media.type === 'image'"
            class="media-tile"
            type="button"
            @click="showMedia(media)"
          >
            <img
              :src="require(`../assets/images/labretreat/${selectedRetreat.folder}/${media.file}`)"
              :alt="`${selectedRetreat.title} ${media.file}`"
            />
          </button>
          <video v-else class="media-tile video-tile" controls preload="metadata">
            <source
              :src="require(`../assets/images/labretreat/${selectedRetreat.folder}/${media.file}`)"
              type="video/mp4"
            />
          </video>
        </b-col>
      </b-row>

      <div class="tweet-diary">
        <h3>Retreat Diaries</h3>
        <b-row>
          <b-col
            v-for="tweet in selectedRetreat.tweets"
            :key="tweet.url"
            cols="12"
            md="6"
            class="mb-3"
          >
            <a
              class="tweet-card"
              :href="tweet.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{{ tweet.title }}</strong>
              <span>{{ tweet.text }}</span>
              <small>View post <b-icon icon="box-arrow-up-right"></b-icon></small>
            </a>
          </b-col>
        </b-row>
      </div>
    </section>

    <b-modal v-model="showModal" size="xl" hide-footer centered>
      <template #modal-title>
        <span v-if="selectedMedia">{{ selectedRetreat.title }}</span>
      </template>
      <div v-if="selectedMedia" class="modal-media">
        <img
          :src="require(`../assets/images/labretreat/${selectedRetreat.folder}/${selectedMedia.file}`)"
          :alt="`${selectedRetreat.title} ${selectedMedia.file}`"
        />
      </div>
    </b-modal>
  </b-container>
</template>

<script>
const imageFiles = {
  1: [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "6.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg",
    "21.jpeg",
    "22.jpeg",
  ],
  2: ["1.jpeg", "4.jpeg"],
  3: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
  4: [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg",
  ],
};

const videoFiles = {
  1: ["5.mp4"],
  2: ["2.mp4", "3.mp4"],
  3: ["5.mp4", "6.mp4", "7.mp4"],
  4: [],
};

function mediaFor(folder) {
  return [
    ...imageFiles[folder].map((file) => ({ type: "image", file })),
    ...videoFiles[folder].map((file) => ({ type: "video", file })),
  ];
}

export default {
  data() {
    return {
      selectedRetreatId: 4,
      selectedMedia: null,
      showModal: false,
      retreats: [
        {
          id: 4,
          folder: "4",
          title: "4th Year Lab Retreat",
          subtitle: "Farmhouse, alumni, values, and lab birthday",
          cover: "1.jpeg",
          description:
            "The fourth lab birthday retreat brought the crew together for cooking, games, water, alumni conversations, value alignment, shout-outs, and a full retreat diary.",
          primaryTweet: "https://x.com/Ishwariya13/status/2038643455749160999?s=20",
          media: mediaFor(4),
          tweets: [
            {
              title: "Birthday cake and retreat launch",
              text:
                "Lab birthday cake, retreat excitement, and the start of the fourth-year celebration.",
              url: "https://x.com/Ishwariya13/status/2038643455749160999?s=20",
            },
            {
              title: "Farmhouse retreat begins",
              text:
                "Cooking, playing, eating, and the crew stepping up when plans changed.",
              url: "https://x.com/Ishwariya13/status/2038908868982640982?s=20",
            },
            {
              title: "Water and unwinding",
              text:
                "The lab crew playing, laughing, and unwinding in true retreat style.",
              url: "https://x.com/Ishwariya13/status/2038995613635997886?s=20",
            },
            {
              title: "Alumni session",
              text:
                "Former members joined from across the world to share memories and connect with the current crew.",
              url: "https://x.com/Ishwariya13/status/2039426429784604907?s=20",
            },
            {
              title: "Value alignment",
              text:
                "A reflective session on the values that shape the lab culture.",
              url: "https://x.com/Ishwariya13/status/2039635185726361988?s=20",
            },
            {
              title: "State of the lab and sashes",
              text:
                "Individual shout-outs and custom achievement sashes designed by Rutuja.",
              url: "https://x.com/Ishwariya13/status/2039654819959624004?s=20",
            },
            {
              title: "Final retreat pictures",
              text:
                "Closing moments from the retreat series and the lab tribe.",
              url: "https://x.com/Ishwariya13/status/2040041289157398808?s=20",
            },
          ],
        },
        {
          id: 3,
          folder: "3",
          title: "3rd Year Lab Retreat",
          subtitle: "Reflections, workshops, games, and lab birthday",
          cover: "1.jpeg",
          description:
            "The third-year retreat mixed reflection, lab updates, alumni time, workshops, games, karaoke, and planning for the year ahead.",
          primaryTweet: "https://x.com/Ishwariya13/status/1906777061353722233?s=20",
          media: mediaFor(3),
          tweets: [
            {
              title: "Day 1 retreat video",
              text:
                "Karaoke, caricatures, charades, food, and an annual SCI field talk.",
              url: "https://x.com/Ishwariya13/status/1906777061353722233?s=20",
            },
            {
              title: "Day 2 retreat video",
              text:
                "State of the lab talk, alumni meet, workshops, games, food, and laughter.",
              url: "https://x.com/Ishwariya13/status/1907131690931392725?s=20",
            },
            {
              title: "Reflections",
              text:
                "The crew reflected on personal and professional growth and set goals for year four.",
              url: "https://x.com/Ishwariya13/status/1907361421983395956?s=20",
            },
            {
              title: "Retreat baking",
              text:
                "Final baking round before retreat: dark chocolate chip and white chocolate macadamia cookies.",
              url: "https://x.com/Ishwariya13/status/1906381638008754536?s=20",
            },
          ],
        },
        {
          id: 2,
          folder: "2",
          title: "2nd Year Lab Retreat",
          subtitle: "Two years, grants, awards, and decompression",
          cover: "1.jpeg",
          description:
            "The second-year retreat marked two years of the lab, celebrating grants, awards, talks, and time to reset before manuscripts and new science.",
          primaryTweet: "https://x.com/Ishwariya13/status/1776998423880953864?s=20",
          media: mediaFor(2),
          tweets: [
            {
              title: "Lab turns two",
              text:
                "The crew celebrated two years with a one-week retreat after a strong year of science and awards.",
              url: "https://x.com/Ishwariya13/status/1776998423880953864?s=20",
            },
            {
              title: "Back to science",
              text:
                "Closing the retreat and heading back to do more science until the next one.",
              url: "https://x.com/Ishwariya13/status/1776998484673196487?s=20",
            },
            {
              title: "Lessons from two years",
              text:
                "Reflections on launching a lab after returning to the Indian research system.",
              url: "https://x.com/Ishwariya13/status/1777303692724888005?s=20",
            },
          ],
        },
        {
          id: 1,
          folder: "1",
          title: "1st Year Lab Retreat",
          subtitle: "Two days of reflection, cooking, science, and clarity",
          cover: "1.jpeg",
          description:
            "The first retreat set the tone for the lab tradition with group cooking, games, SCI research history, planning, and reflection.",
          primaryTweet: "https://x.com/Ishwariya13/status/1646102489664733184?s=20",
          media: mediaFor(1),
          tweets: [
            {
              title: "Retreat reflections",
              text:
                "A long thread on the first lab retreat and why the group made time for it.",
              url: "https://x.com/Ishwariya13/status/1646102489664733184?s=20",
            },
            {
              title: "Day 1 fun",
              text:
                "Impromptu dances, group cooking, and dumb charades.",
              url: "https://x.com/Ishwariya13/status/1646102566038802432?s=20",
            },
            {
              title: "SCI research history",
              text:
                "The group mapped major inflection points in SCI research to contextualize their own work.",
              url: "https://x.com/Ishwariya13/status/1646102594362949636?s=20",
            },
            {
              title: "Day 2 breakfast",
              text: "An epic breakfast made by the crew.",
              url: "https://x.com/Ishwariya13/status/1646102693113663488?s=20",
            },
            {
              title: "Retreat one complete",
              text:
                "A closing note on fun, clarity, planning, and celebrating the first year.",
              url: "https://x.com/Ishwariya13/status/1646102798474579968?s=20",
            },
          ],
        },
      ],
    };
  },
  computed: {
    selectedRetreat() {
      return this.retreats.find((retreat) => retreat.id === this.selectedRetreatId);
    },
  },
  methods: {
    showMedia(media) {
      this.selectedMedia = media;
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.retreat-page {
  padding-bottom: 56px;
  padding-top: 56px;
}

h3 {
  color: var(--color-ink);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.retreat-selector {
  margin-bottom: 24px;
}

.retreat-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-ink);
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  height: 100%;
  overflow: hidden;
  padding: 0;
  text-align: left;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  width: 100%;
}

.retreat-card.active,
.retreat-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.retreat-card img {
  aspect-ratio: 4 / 3;
  object-fit: cover;
  width: 100%;
}

.retreat-card span {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 14px 14px 4px;
}

.retreat-card strong {
  color: var(--color-muted);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
  padding: 0 14px 16px;
}

.retreat-detail {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
}

.detail-header {
  align-items: start;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  gap: 24px;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 18px;
}

.detail-header p {
  color: var(--color-ink-soft);
  font-size: 1.02rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

.detail-header a {
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  color: var(--color-accent);
  flex: 0 0 auto;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 14px;
  text-decoration: none;
}

.media-grid {
  margin-bottom: 18px;
}

.media-tile {
  background: var(--color-surface-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  display: block;
  height: 230px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.media-tile img,
.video-tile {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.tweet-diary {
  margin-top: 28px;
}

.tweet-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-ink-soft);
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  height: 100%;
  padding: 18px;
  text-decoration: none;
  transition: box-shadow 0.15s ease;
}

.tweet-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-sm);
  color: var(--color-ink-soft);
  text-decoration: none;
}

.tweet-card strong {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 8px;
}

.tweet-card span {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 12px;
}

.tweet-card small {
  color: var(--color-accent);
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: auto;
}

.modal-media {
  text-align: center;
}

.modal-media img {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
}

@media (max-width: 700px) {
  .detail-header {
    flex-direction: column;
  }

  .detail-header a {
    width: 100%;
  }
}
</style>
