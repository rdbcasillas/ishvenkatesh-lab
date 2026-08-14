<template>
  <div>
    <div class="page-container">
      <div class="page-header">
        <p class="page-kicker">Support</p>
        <h1 class="page-title">Funding</h1>
      </div>

      <h3>Current Supporters</h3>
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

      <ul class="list-group">
        <li
          v-for="project in currentProjects"
          :key="project.title"
          class="list-group-item funding-item"
        >
          <div>
            <strong>{{ project.funder }}</strong>
            <span class="project-title"> &mdash; {{ project.title }}</span>
          </div>
          <span class="badge badge-primary badge-pill">{{
            project.years
          }}</span>
        </li>
      </ul>

      <h3 class="past-supporters-title">Past Supporters</h3>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          CSIR-Neuromission
          <span class="badge badge-primary badge-pill">2024-2026</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          SERB-SRG
          <span class="badge badge-primary badge-pill">2023-2026</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          SERB Ramanujan Fellowship
          <span class="badge badge-primary badge-pill">2022-2022</span>
        </li>
      </ul>
    </div>
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
h3 {
  color: var(--color-ink);
  font-size: 1.4rem;
  margin-bottom: 20px;
}

.past-supporters-title {
  margin-top: 40px;
}

.list-group-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm) !important;
  color: var(--color-ink) !important;
  font-family: var(--font-body) !important;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 14px 18px;
}

.list-group-item strong {
  color: var(--color-ink);
  font-weight: 600;
}

.funding-item {
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: space-between;
}

.project-title {
  color: var(--color-ink-soft);
  font-weight: normal;
}

.badge {
  background: var(--color-accent-light) !important;
  color: var(--color-accent-dark) !important;
  flex: 0 0 auto;
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 6px 12px;
}

.supporter-logos {
  align-items: center;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  margin-bottom: 32px;
}

.supporter-logo {
  align-items: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
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

@media (max-width: 600px) {
  .funding-item {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
