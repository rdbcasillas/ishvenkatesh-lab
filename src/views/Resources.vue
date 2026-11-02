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
          name: "Data Visualisation",
          desc: "Tools for designing logos, making figures, visualising genomics, and creating interactive plots.",
          image: "dataviz.jpg",
        },
        {
          name: "Digital Note-Taking",
          desc: "Build a 'second brain' through better organisation of your thoughts and research notes.",
          image: "dignotes.png",
        },
        {
          name: "Productivity",
          desc: "Tools to help you better manage your tasks, time, and wonderfully chaotic life.",
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
