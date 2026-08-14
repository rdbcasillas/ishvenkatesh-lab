<template>
  <div>
    <div class="page-container">
      <div class="page-header">
        <p class="page-kicker">For the Lab</p>
        <h1 class="page-title">Useful Resources</h1>
      </div>
      <div class="resources-grid">
        <article class="resource-card" v-for="(item, index) in resources" :key="index">
          <img
            class="resource-image"
            :src="require(`../assets/images/resources/${item.image}`)"
            alt=""
          />
          <div class="resource-body">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resources: [
        {
          name: "Data Visualization",
          desc: "Tools for designing logos, making figures, visualizing genomics and creating interactive plots.",
          image: "dataviz.jpg",
        },
        {
          name: "Digital Notetaking",
          desc: "Build a 'Second Brain' by better organisation of your thoughts & research notes.",
          image: "dignotes.png",
        },
        {
          name: "Productivity",
          desc: "Tools for helping you better manage your tasks, your time and your chaotic life.",
          image: "productivity.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.resources-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.resource-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.resource-card:hover {
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.resource-image {
  display: block;
  height: 160px;
  object-fit: cover;
  width: 100%;
}

.resource-body {
  padding: 20px;
}

.resource-body h3 {
  color: var(--color-ink);
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.resource-body p {
  color: var(--color-ink-soft);
  font-size: 0.95rem;
  line-height: 1.55;
  margin: 0;
}
</style>
