<template>
  <div>
    <b-container>
      <b-row>
        <b-col> <h2>Team</h2></b-col>
      </b-row>
      <b-row v-for="(person, index) in people" :key="index" class="mb-5 mt-3">
        <b-col class="personbox">
          <h4>{{ person.name }} ({{ person.position }})</h4>
          <h6>{{ person.email }}</h6>
          <div class="d-flex">
            <b-img-lazy
              v-bind="imageProps"
              rounded
              blank-src="null"
              :src="require(`../assets/images/team/${person.image}.jpg`)"
            ></b-img-lazy>
            <span class="mt-3 ml-2 text-justify">{{ person.desc }}</span>
          </div>
        </b-col>
        <hr />
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageProps: {
        width: 140,
        height: 160,
        class: "m1",
      },
      people: [
        {
          name: "Dr. Ishwariya Venkatesh",
          position: "Principal Investigator",
          image: "ish4",
          desc: "Ishwariya (prefers to go by Ish) was smitten with Science in high school,  when she spent a summer traveling to different research labs in South India as part of an internship at the MS Swaminathan Research Foundation. She received her Bachelor’s degree in Biotechnology from BIT, Sathy (affiliated to Anna University) and doctoral degree in Molecular Neuroscience from The University of Wisconsin - Milwaukee. She underwent post-doctoral training in the lab of Dr.Murray Blackmore at Marquette University, focusing on transcriptional and epigenetic regulation of axon regeneration in the mammalian nervous system. As a Research Asst Professor at Marquette, she continued that line of work, developing Bioinformatic workflows to identify co-operative Transcription Factors that regulate regenerative capacity in the injured spinal cord. At CCMB, she is continuing to probe and identify molecular pathways that regulate regenerative capacity in the injured mammalian nervous system. Outside of the lab, Ish loves to read, cook, explore different forms of art (currently obsessed with Madhubani art) and tend to her home garden.",
          email: "ishwariya@ccmb.res.in",
        },
        {
          name: "Manoj Kumar",
          position: "Senior Project Associate",
          image: "manoj4",
          desc: "Manojkumar joined the lab as a Senior Project Associate in October 2022. He has an integrated M.Tech degree in  Bioinformatics from the Bharathidhasan University, Trichy. Following that, he completed his doctoral training  under the guidance of Dr. Bharanidharan at Aravind Medical Research Foundation (Under SASTRA Univeristy), Madurai. During his Ph.D, he has developed a tool that filters and prioritizes pathogenic variants specific to eye disease. He is the go-to person for all flavors of Bioinformatics analyses in the lab from NGS to single-cell genomics and everything in between. Outside of the lab his hobbies include Photography, Wildlife conservation, Travelling, and Gaming",
          email: "manojkumarbioinfo@gmail.com",
        },
        {
          name: "Yogesh Sahu",
          position: "Graduate student",
          image: "yogesh2",
          desc: "Yogesh Sahu joined the lab in September of 2022 as a PhD student. He graduated with a Bachelors degree in Zoology from Guru Ghasidas University Bilaspur in 2019. Following this, he received his Masters in Neurobiology from Guru Ghasidas University Bilaspur in 2021. His Phd project in the lab is focused on the molecular regulation of Axon Regeneration by Nuclear receptor family of transcription factors.",
          email: "yogesh@ccmb.res.in",
        },
        {
          name: "Sanjana Sinha",
          position: "Project Associate",
          image: "sanjana2",
          desc: "Sanjana joined the lab in  May of 2022 as a guest worker, to rotate and get experience in Molecular Biology. She has a Bachelor's degree in Biotechnology from MITS School of Biotechnology (Batch of 2017) and a Master’s degree in Biotechnology from Chandigarh University (Batch of 2019). Her Master’s dissertation work was carried out in the field of Immunology at IISER, Mohali. Following that, she worked as a Junior Research Fellow in the lab of Dr.Anant Patel in CCMB where she gained experience in Animal handling and Behavioral studies. Her broad research interests are in Neurobiology and/or Immunology. Outside the lab, she’s fond of watching anime, solving sudoku, and occasionally sketching. In the long run, she wants to pursue a PhD in Neuroscience focused on psychiatric disorders.",
          email: "sanjana.sinha121@gmail.com",
        },
        {
          name: "Sneha Manjunath",
          position: "Project based trainee",
          image: "sneha2",
          desc: "Sneha joined the lab as a Project-based trainee in May of 2022. She did her Bachelors in Mount Carmel, Bangalore majoring in Biotechnology, Chemistry, and Zoology (Batch of 2019). She has a Master's degree in Genetics and Genomics from The University of Perth, Western Australia (Batch of 2021). Her broad  research interests are in Genetics and Neurobiology. Outside of the lab, she loves to cook  and watch movies. Post her  training, she wants to pursue a PhD in Neuroscience.",
          email: "snehaamanjunath28@gmail.com",
        },
        {
          name: "Shaikh Shafiulla",
          position: "Project based trainee",
          image: "shaikh2",
          desc: "Shaikh joined the lab in August 2022 as a Project based trainee. He has his Bachelor's degree from Acharya Nagarjuna University in Pharmaceutical Sciences and a Master’s degree in Pharmacology from Amity University. Prior to joining the lab, he was a Research Assistant Professor at Southern Institute of Medical Sciences. His broad research interestS are in Developmental Neuroscience and Behavioral Neuroscience.  Outside of the lab, he loves to read and  is particularly influenced by 'Thus Spoke Zarathustra' by Friedrich Nietzsche. In the future, he wants to pursue his PhD training in Neuroscience .",
          email: "adroitshaikh1@gmail.com",
        },
        {
          name: "Ishan Dutta",
          position: "Dissertation trainee",
          image: "ishan2",
          desc: "Ishan joined the lab for his dissertation research in August. He is pursuing his B.Tech in Biotechnology at Thapar University, India (2019-2023). Before joining the lab, he has worked at Dianox ApS as a junior researcher (2021-2022). Along the course of his education, he has developed interests in many fields of biology like neuroscience and regenerative biology. He plans to continue in academia as a career path. In his free time, he reads and writes.",
          email: "heyishandutta@gmail.com ",
        },
        {
          name: "Katha Sanyal",
          position: "Summer trainee",
          image: "katha2",
          desc: "Katha is the newest addition to our crew and joined us in June of 2022 as summer trainee. She did her bachelors in St. Thomas College, Bhilai, Durg University triple majoring in Biotechnology, Botany, Chemistry (Batch of 2021). Currently, she’s pursuing her Masters in Biotechnology at St. Thomas College, Bhilai, Durg University. Her broad research interests are in Epigenetics and epigenome mediated regulation of human diseases. Outside of the lab, she loves to draw illustrations and play mobile/PC games.",
          email: "kathasanyal@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
h4,
h2,
h6,
p {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
  color: #346225 !important;
}
span {
  color: #346225 !important;
  font-size: 19px;
}
.personbox {
  border: 0.5px dotted rgb(18, 66, 26);
}
</style>
