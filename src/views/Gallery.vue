<template>
  <div>
    <b-container fluid class="p-4 bg-light">
      <b-row>
        <b-col class="mb-5 gallery-col" cols="6" v-for="image in images" :key="image">
          <h4 class="text-center">{{ image.desc }}</h4>
          <div class="image-wrapper" @click="showImage(image)">
            <b-img-lazy
              blank-src="null"
              thumbnail
              fluid
              :src="require(`../assets/images/gallery/${image.file}.jpg`)"
              :alt="image.desc"
              class="gallery-image"
            ></b-img-lazy>
          </div>
          <hr />
        </b-col>
      </b-row>
    </b-container>

    <b-modal v-model="showModal" size="xl" hide-footer centered>
      <template #modal-title>
        <h5 class="modal-title">{{ selectedImage?.desc }}</h5>
      </template>
      <img 
        v-if="selectedImage"
        :src="require(`../assets/images/gallery/${selectedImage.file}.jpg`)"
        class="modal-image"
        :alt="selectedImage.desc"
      />
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          file: "Hyd",
          desc: "Ish gave a plenary talk at Bioanveshna 2024 held at University of Hyderabad in February 2024",
        },
        {
          file: "NCBS",
          desc: "Ish gave an invited talk at InSDB 2024 @ NCBS/inSTEM - February 2024",
        },
        {
          file: "award_A",
          desc: "Anisha wins another poster award at CMMDR 2024 conference",
        },
        {
          file: "CMMDR",
          desc: "Lab crew attended and presented 4 posters at CMMDR2024",
        },
        {
          file: "xMas",
          desc: "Lab Xmas party - December 2023",
        },
        {
          file: "Invited_talk_1",
          desc: "In November 2023, Ish gave an invited talk at The India Investigator Network meeting held at CCMB",
        },
        {
          file: "Invited_talk_2",
          desc: "Ish gave an invited talk at the Indian Academy of Sciences meeting held in Goa in November 2022, her first meeting as an associate of the academy",
        },
        {
          file: "Ian3",
          desc: "Best Poster award to Anisha S Menon at Indian Academy of Neuroscience, 2023",
        },
        {
          file: "openday",
          desc: " Lab wins the second prize for our exhibit 'Know your Brain' at CCMB Open day 2023",
        },
        {
          file: "CSIR",
          desc: "CCMB Open Day 2023",
        },
        {
          file: "Onam",
          desc: "Lab's Onam Celebration",
        },
        {
          file: "Farwell",
          desc: "Farewell party to Sanskruti, Katha, Aastha and Apoorva",
        },
        {
          file: "Hisci2",
          desc: "Lab's Hi-Sci poster presentation",
        },
        {
          file: "Hisci",
          desc: "Shaik's best poster award at Hy-Sci",
        },
        {
          file: "Retreat_1", 
          desc: "Lab first Retreat",
        },
        {
          file: "Lab_pic",
          desc: "Lab group picture of 2023",
        },
        {
          file: "Birthday1",
          desc: "Anisha S Menon Birthday Celebration",
        },
        {
          file: "Anisha",
          desc: "1st Day of 2nd PhD candidate Anisha S Menon",
        },
        {
          file: "Ian1",
          desc: "Indian Academy of Neuroscience Conference, 2022",
        },
        {
          file: "Ian2",
          desc: "Best Poster award at Indian Academy of Neuroscience, 2022",
        },
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
      showModal: false,
      selectedImage: null
    };
  },
  methods: {
    showImage(image) {
      this.selectedImage = image;
      this.showModal = true;
    }
  }
};
</script>

<style scoped>
h4 {
  color: snow;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  min-height: 3em;
}

.bg-light {
  background: #38542f !important;
}

hr {
  background: snow;
}

.image-wrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: scale(1.05);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
}

::v-deep .modal-content {
  background-color: #f8f9fa;
}

::v-deep .modal-title {
  color: #000;
}
</style>