<template>
  <div>
    <b-container>
      <b-row>
        <h2 class="m-auto pt-3">Useful Resources</h2>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="4" v-for="(item, index) in resources" :key="index">
          <b-card
            :title="item.name"
            :img-src="require(`../assets/images/resources/${item.image}`)"
            img-alt="Image"
            border-variant="primary"
            img-top
            img-height="160px"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              {{ item.desc }}
            </b-card-text>

            <b-button variant="primary" class="cardbutton" href="#"
              >Explore</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
.cardbutton {
  color: snow;
}
h2 {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
  color: #346225 !important;
}
</style>
