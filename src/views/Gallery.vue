<template>
  <div>
    <b-container fluid class="p-4 bg-light">
      <b-row>
        <b-col cols="6" v-for="image in images" :key="image">
          <h5 class="text-center">Image Description</h5>
          <b-img
            thumbnail
            fluid
            :src="require(`../assets/images/gallery/${image.file}.jpg`)"
            alt="Image 1"
            height="70%"
          ></b-img>
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
          file: "gallery1",
          desc: "",
        },
        {
          file: "gallery2",
          desc: "",
        },
        {
          file: "gallery3",
          desc: "",
        },
        {
          file: "gallery4",
          desc: "",
        },
        {
          file: "gallery5",
          desc: "",
        },
        {
          file: "gallery6",
          desc: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
