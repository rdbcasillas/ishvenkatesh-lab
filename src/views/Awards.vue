<template>
  <b-container class="awards-page">
    <b-row>
      <b-col>
        <h2 class="text-center">Awards</h2>
      </b-col>
    </b-row>
    <b-row
      v-for="year in groupedAwards.keys()"
      :key="year"
      class="award-year"
    >
      <b-col cols="12" md="2">
        <p class="year-label">{{ year }}</p>
      </b-col>
      <b-col cols="12" md="10">
        <b-row>
          <b-col
            v-for="award in groupedAwards.get(year)"
            :key="`${award.name}-${award.recipients}`"
            cols="12"
            md="6"
            xl="4"
            class="mb-4"
          >
            <div class="award-card">
              <button
                class="award-image-wrapper"
                type="button"
                @click="showAwardImage(award)"
              >
                <img
                  v-if="award.image"
                  :src="require(`../assets/images/awards/${award.image}`)"
                  :alt="`${award.name} - ${award.recipients}`"
                  class="award-image"
                />
              </button>
              <div class="award-content">
                <strong>{{ award.name }}</strong>
                <p class="award-meta" v-if="award.event">{{ award.event }}</p>
                <p v-if="award.recipients">{{ award.recipients }}</p>
                <ul v-if="award.items" class="award-list">
                  <li v-for="item in award.items" :key="item.name">
                    <strong>{{ item.name }}</strong>
                    <span>{{ item.recipients }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-modal v-model="showModal" size="xl" hide-footer centered>
      <template #modal-title>
        <span v-if="selectedAward">{{ selectedAward.name }}</span>
      </template>
      <div class="modal-image-container" v-if="selectedAward">
        <img
          :src="require(`../assets/images/awards/${selectedAward.image}`)"
          :alt="`${selectedAward.name} - ${selectedAward.recipients}`"
          class="modal-image"
        />
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import { group } from "d3-array";

export default {
  data() {
    return {
      awards: [
        {
          name: "Lalita and Ravindranath International Travel Award (IAN)",
          event: "Indian Academy of Neuroscience",
          year: "2026",
          recipients: "Dr. Manojkumar Kumaran",
          image: "Manoj_2026_award.jpeg",
        },
        {
          name: "IBRO/SfN Travel Grant",
          year: "2026",
          recipients: "Anisha S Menon",
          image: "Anisha_2026_award.jpeg",
        },
        {
          name: "CMMDR Best Poster Award",
          event: "Cellular And Molecular Mechanisms of Development and Regeneration",
          year: "2026",
          recipients: "Anisha S Menon, Athul Narayan PS, Dr. Manoj Kumar Kumaran",
          image: "CMMDR_2026.jpeg",
        },
        {
          name: "IAN Best Poster Award",
          event: "Indian Academy of Neuroscience",
          year: "2025",
          recipients: "Rutuja Pendharkar",
          image: "IAN_2025_Rutuja.jpeg",
        },
        {
          name: "IAN John Miller Travel Award",
          event: "Indian Academy of Neuroscience",
          year: "2025",
          recipients: "Dr. Shringika Soni",
          image: "IAN_2025_Shringika.jpeg",
        },
        {
          name: "IAN Short Talk Award",
          event: "Indian Academy of Neuroscience",
          year: "2025",
          recipients: "Yogesh Sahu",
          image: "IAN_2025_Yogesh.jpeg",
        },
        {
          name: "IAN Short Talk Award",
          event: "Indian Academy of Neuroscience",
          year: "2025",
          recipients: "Katha Sanyal",
          image: "IAN_205_Katha.jpeg",
        },
        {
          name: "Invited Talk",
          event:
            "21st Annual NRSM Conference, BioSculptors: Models Decoding Life",
          year: "2025",
          recipients: "Yogesh Sahu",
          image: "Yogesh_2025_NRSM.jpeg",
        },
        {
          name: "SNCI Best Poster Award",
          year: "2025",
          recipients: "Rutuja Pendharkar and Yogesh Sahu",
          image: "SNCI_2025.jpeg",
        },
        {
          name: "CCMB Open Day Best Stall Award",
          year: "2025",
          recipients: "Venkatesh Lab",
          image: "Open_data_2025.jpeg",
        },
        {
          name: "IAN 2024 Awards",
          event: "Indian Academy of Neuroscience",
          year: "2024",
          items: [
            {
              name: "IAN Suttee Nag Prize for poster presentation",
              recipients: "Katha Sanyal",
            },
            {
              name: "IAN Travel Award",
              recipients: "Dr. Manoj Kumar Kumaran",
            },
            {
              name: "IAN John Miller Travel Award",
              recipients: "Rutuja Pendharkar",
            },
          ],
          image: "IAN_2024.jpeg",
        },
        {
          name: "CMMDR Best Poster Award",
          event: "Cellular And Molecular Mechanisms of Development and Regeneration",
          year: "2024",
          recipients: "Anisha S Menon",
          image: "CMMDR_Anisha_2024.jpeg",
        },
        {
          name: "CCMB Open Day Best Stall Award",
          year: "2024",
          recipients: "Venkatesh Lab",
          image: "Open_Day_2024.jpeg",
        },
        {
          name: "CCMB Open Day Best Guide Award",
          year: "2024",
          recipients: "Dhruva Kesireddy",
          image: "Best_Guide_Dhruva_OpenDay_2024.jpeg",
        },
        {
          name: "CCMB Open Day Best Guide Award",
          year: "2024",
          recipients: "Soupayan Banerjee",
          image: "Best_Guide_Soupayan_Open_Day_2024.jpeg",
        },
        {
          name: "IAN Best Poster Award",
          event: "Indian Academy of Neuroscience",
          year: "2023",
          recipients: "Anisha S Menon",
          image: "IAN_2023_Aisha.jpeg",
        },
        {
          name: "CCMB Open Day Best Stall Award",
          year: "2023",
          recipients: "Venkatesh Lab",
          image: "OpenDay_2023.jpeg",
        },
        {
          name: "IAN Best Poster Award",
          event: "Indian Academy of Neuroscience",
          year: "2022",
          recipients: "Yogesh Sahu",
          image: "IAN_2022_Yogesh.jpeg",
        },
      ],
      selectedAward: null,
      showModal: false,
    };
  },
  computed: {
    groupedAwards() {
      return group(this.awards, (award) => award.year);
    },
  },
  methods: {
    showAwardImage(award) {
      if (!award.image) {
        return;
      }

      this.selectedAward = award;
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.awards-page {
  padding-top: 48px;
}

h2 {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  margin-bottom: 32px;
}

.award-year {
  margin-bottom: 32px;
}

.year-label {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 28px;
  font-weight: bold;
}

.award-card {
  border: 1px solid rgba(52, 98, 37, 0.25);
  color: #346225;
  display: flex;
  flex-direction: column;
  font-family: "Oswald", sans-serif !important;
  font-size: 20px;
  height: 100%;
}

.award-image-wrapper {
  border: 0;
  background: #f7f7f7;
  cursor: pointer;
  display: block;
  height: 220px;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.award-image {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.award-content {
  flex: 1;
  padding: 16px;
}

.award-content p {
  font-size: 18px;
  margin: 6px 0 0;
}

.award-list {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
}

.award-list li {
  margin-top: 10px;
}

.award-list strong,
.award-list span {
  display: block;
  font-size: 17px;
}

.award-list span {
  font-weight: normal;
}

.award-meta {
  font-style: italic;
}

.modal-image-container {
  text-align: center;
}

.modal-image {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
}

@media (max-width: 600px) {
  .award-image-wrapper {
    height: 240px;
    width: 100%;
  }
}
</style>
