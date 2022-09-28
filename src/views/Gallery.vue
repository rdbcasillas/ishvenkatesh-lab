<template>
  <div>
    <b-container fluid class="p-4 bg-light">
      <b-row>
        <b-col class="mb-5" cols="6" v-for="image in images" :key="image">
          <h4 class="text-center">{{ image.desc }}</h4>
          <b-img-lazy
            blank-src="null"
            thumbnail
            fluid
            :src="require(`../assets/images/gallery/${image.file}.jpg`)"
            :alt="image.desc"
            height="70%"
          ></b-img-lazy>
          <hr />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          file: "openday5",
          desc: "Open Day Neuroscience Exhibit",
        },
        {
          file: "openday4",
          desc: "CCMB Open Day 2022",
        },
        {
          file: "openday3",
          desc: "CCMB Open Day 2022",
        },
        {
          file: "openday2",
          desc: "CCMB Open Day 2022",
        },
        {
          file: "openday1",
          desc: "CCMB Open Day 2022",
        },
        {
          file: "gallery1",
          desc: "Katha's (temporary) farewell dinner",
        },
        {
          file: "gallery2",
          desc: "Katha's (temporary) farewell dinner",
        },
        {
          file: "gallery3",
          desc: "Katha presenting her poster at the end of her summer training",
        },
        {
          file: "gallery4",
          desc: "When it rains, it pours! The week we had 4 new trainees in a day.",
        },
        {
          file: "gallery5",
          desc: "Impromptu lab pizza day",
        },
        {
          file: "gallery6",
          desc: "Purushotham's birthday celebrations",
        },
      ],
    };
  },
};
</script>

<style scoped>
h4 {
  color: snow;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
}
.bg-light {
  background: #38542f !important;
}
hr {
  background: snow;
}
</style>
