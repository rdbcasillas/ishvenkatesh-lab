<template>
  <div>
    <b-container>
      <b-row>
        <b-col> <h2>Team</h2></b-col>
      </b-row>
      <b-row v-for="(person, index) in people" :key="index">
        <b-col>
          <h4>{{ person.name }}</h4>
          <div class="d-flex flex-row">
            <b-img
              v-bind="imageProps"
              :src="require(`../assets/images/${person.image}.jpg`)"
            ></b-img>
            <span class="ml-2">{{ person.desc }}</span>
          </div>
        </b-col>
      </b-row>
      <hr />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageProps: {
        width: 140,
        height: 140,
        class: "m1",
      },
      people: [
        {
          name: "Dr. Ishwariya Venkatesh",
          image: "ish",
          desc: "Ishwariya (prefers to go by Ish) was smitten with  Science in high school,  when she spent a summer traveling to different research labs in South India as part of an internship  at the MS Swaminathan Research Foundation. She received her Bachelor’s degree in Biotechnology from BIT, Sathy (affiliated to Anna University) and doctoral degree in Molecular Neuroscience from The University of Wisconsin - Milwaukee. She underwent post-doctoral training in the lab of Dr.Murray Blackmore at Marquette University, focusing on transcriptional and epigenetic regulation of axon regeneration in the mammalian nervous system. As a Research Asst Professor at Marquette, she continued that line of work, developing Bioinformatic workflows to identify co-operative Transcription Factors that regulate regenerative capacity in the injured spinal cord. At CCMB, she is continuing to probe and identify molecular pathways that regulate regenerative capacity in the injured mammalian nervous system. Outside of the lab, Ish loves to read, cook, explore different forms of art (currently obsessed with Madhubani art) and tend to her home garden.",
        },
        {
          name: "Sneha Manjunath",
          image: "sneha",
          desc: "Sanjana joined the lab in  May of 2022 as a guest worker, to rotate and get experience in Molecular Biology. She has a Bachelor's degree in Biotechnology from MITS School of Biotechnology (Batch of 2017) and a Master’s degree in Biotechnology from Chandigarh University (Batch of 2019). Her Master’s dissertation work was carried out in the field of Immunology at IISER, Mohali. Following that, she worked as a Junior Research Fellow in the lab of Dr.Anant Patel in CCMB where she gained experience in Animal handling and Behavioral studies. Her broad research interests are in Neurobiology and/or Immunology. Outside the lab, she’s fond of watching anime, solving sudoku, and occasionally sketching. In the long run, she wants to pursue a PhD in Neuroscience focused on psychiatric disorders.",
        },
        {
          name: "Sanjana Sinha",
          image: "sanjana",
          desc: "Sanjana joined the lab in  May of 2022 as a guest worker, to rotate and get experience in Molecular Biology. She has a Bachelor's degree in Biotechnology from MITS School of Biotechnology (Batch of 2017) and a Master’s degree in Biotechnology from Chandigarh University (Batch of 2019). Her Master’s dissertation work was carried out in the field of Immunology at IISER, Mohali. Following that, she worked as a Junior Research Fellow in the lab of Dr.Anant Patel in CCMB where she gained experience in Animal handling and Behavioral studies. Her broad research interests are in Neurobiology and/or Immunology. Outside the lab, she’s fond of watching anime, solving sudoku, and occasionally sketching. In the long run, she wants to pursue a PhD in Neuroscience focused on psychiatric disorders.",
        },
        {
          name: "Katha Sanyal",
          image: "katha",
          desc: "Katha is the newest addition to our crew and joined us in June of 2022 as summer trainee. She did her bachelors in St. Thomas College, Bhilai, Durg University triple majoring in Biotechnology, Botany, Chemistry (Batch of 2021). Currently, she’s pursuing her Masters in Biotechnology at St. Thomas College, Bhilai, Durg University. Her broad research interests are in Epigenetics and epigenome mediated regulation of human diseases. Outside of the lab, she loves to draw illustrations and play mobile/PC games.",
        },
      ],
    };
  },
};
</script>

<style scoped>
span,
h4,
h2,
p {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
  color: #346225 !important;
}
</style>
