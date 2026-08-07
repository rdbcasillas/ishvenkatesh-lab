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
        <ul class="list-group">
          <li
            v-for="award in groupedAwards.get(year)"
            :key="`${award.name}-${award.recipients}`"
            class="list-group-item award-item"
          >
            <div>
              <strong>{{ award.name }}</strong>
              <p>{{ award.recipients }}</p>
            </div>
          </li>
        </ul>
      </b-col>
    </b-row>
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
          year: "2026",
          recipients: "Dr. Manojkumar Kumaran",
        },
        {
          name: "IBRO/SfN Travel Grant",
          year: "2026",
          recipients: "Anisha S Menon",
        },
        {
          name: "CMMDR Best Poster Award",
          year: "2026",
          recipients: "Anisha S Menon, Athul Narayan PS, Dr. Manoj Kumar Kumaran",
        },
        {
          name: "IAN Best Poster Award",
          year: "2025",
          recipients: "Rutuja Pendharkar",
        },
        {
          name: "IAN John Miller Travel Award",
          year: "2025",
          recipients: "Dr. Shringika Soni",
        },
        {
          name: "SNCI Best Poster Award",
          year: "2025",
          recipients: "Rutuja Pendharkar and Yogesh Sahu",
        },
        {
          name: "CCMB Open Day Best Stall Award",
          year: "2025",
          recipients: "Venkatesh Lab",
        },
        {
          name: "IAN Suttee Nag Prize for poster presentation",
          year: "2024",
          recipients: "Katha Sanyal",
        },
        {
          name: "IAN Travel Award",
          year: "2024",
          recipients: "Dr. Manoj Kumar Kumaran",
        },
        {
          name: "IAN John Miller Travel Award",
          year: "2024",
          recipients: "Rutuja Pendharkar",
        },
        {
          name: "CMMDR Best Poster Award",
          year: "2024",
          recipients: "Anisha S Menon",
        },
        {
          name: "CCMB Open Day Best Stall Award",
          year: "2024",
          recipients: "Venkatesh Lab",
        },
        {
          name: "IAN Best Poster Award",
          year: "2023",
          recipients: "Anisha S Menon",
        },
        {
          name: "CCMB Open Day Best Stall Award",
          year: "2023",
          recipients: "Venkatesh Lab",
        },
        {
          name: "IAN Best Poster Award",
          year: "2022",
          recipients: "Yogesh Sahu",
        },
      ],
    };
  },
  computed: {
    groupedAwards() {
      return group(this.awards, (award) => award.year);
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

.award-item {
  color: #346225;
  font-family: "Oswald", sans-serif !important;
  font-size: 20px;
}

.award-item p {
  font-size: 18px;
  margin: 6px 0 0;
}
</style>
