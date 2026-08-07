<template>
  <div>
    <b-container>
      <b-row class="mt-5">
        <h3 class="text-center">Current Supporters</h3>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="12">
          <div class="supporter-logos">
            <div
              v-for="supporter in supporters"
              :key="supporter.name"
              class="supporter-logo"
            >
              <img
                :src="require(`../assets/images/logo/${supporter.logo}`)"
                :alt="supporter.name"
              />
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="10">
          <ul class="list-group">
            <li
              v-for="project in currentProjects"
              :key="project.title"
              class="list-group-item funding-item"
            >
              <div>
                <strong>{{ project.funder }}</strong>
                <span class="project-title"> - {{ project.title }}</span>
              </div>
              <span class="badge badge-primary badge-pill">{{
                project.years
              }}</span>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <h3 class="text-center">Past Supporters</h3>
      </b-row>
      <b-row>
        <b-col cols="10">
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center">
              CSIR-Neuromission
              <span class="badge badge-primary badge-pill">2024-2026</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center">
              SERB-SRG
              <span class="badge badge-primary badge-pill">2023-2026</span>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-center">
              SERB Ramanujan Fellowship
              <span class="badge badge-primary badge-pill">2022-2022</span>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentProjects: [
        {
          funder: "CSIR - Focussed Basic Research (FBR)",
          title:
            "Molecular control of Axon Growth and Regeneration: Novel therapeutics for Nervous System Repair",
          years: "2026-2028",
        },
        {
          funder: "DBT (PI)",
          title:
            "Stem Cell based Approach to Improve Functional Outcomes after Spinal Injuries",
          years: "2026-2029",
        },
        {
          funder: "DBT (PI)",
          title:
            "Nuclear Receptors mediated Molecular Regulation of Nervous system Development and Disease",
          years: "2024-2027",
        },
        {
          funder: "BFI Biome (PI)",
          title: "Bioactive Scaffolds and Gene Therapy for Spinal Cord Regeneration",
          years: "2025-2027",
        },
        {
          funder: "ANRF ARG (PI)",
          title:
            "Targeted Reversal of Epigenetic Constraints for Nervous System Repair",
          years: "2026-2029",
        },
        {
          funder: "ICMR Intermediate (Co-PI)",
          title:
            "Unlocking Intrinsic Regenerative Programs: Preclinical Validation of the Small-Molecule LPA-1",
          years: "2026-2030",
        },
      ],
      supporters: [
        {
          name: "CSIR",
          logo: "CSIR_logo.png",
        },
        {
          name: "DBT",
          logo: "dbt-logo.jpg",
        },
        {
          name: "BFI Biome",
          logo: "BiF_biome.png",
        },
        {
          name: "ANRF",
          logo: "ANRF_Logo.jpeg",
        },
        {
          name: "ICMR",
          logo: "ICMV_logo.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.list-group-item {
  font-family: "Oswald", sans-serif !important;
  font-size: 20px;
  color: #346225 !important;
}
.funding-item {
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
}
.project-title {
  font-weight: normal;
}
.badge {
  flex: 0 0 auto;
  font-size: 14px;
}
.supporter-logos {
  align-items: center;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  margin-bottom: 28px;
}
.supporter-logo {
  align-items: center;
  border: 1px solid rgba(52, 98, 37, 0.25);
  display: flex;
  height: 110px;
  justify-content: center;
  padding: 14px;
}
.supporter-logo img {
  max-height: 82px;
  max-width: 100%;
  object-fit: contain;
}
h3 {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
}
@media (max-width: 600px) {
  .funding-item {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
