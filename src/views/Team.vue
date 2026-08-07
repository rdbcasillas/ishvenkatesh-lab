<template>
  <b-container class="team-page">
    <b-row>
      <b-col><h2 class="text-center">Team</h2></b-col>
    </b-row>

    <section
      v-for="section in teamSections"
      :key="section.title"
      class="team-section"
    >
      <h3>{{ section.title }}</h3>
      <b-row>
        <b-col
          v-for="person in section.members"
          :key="person.name"
          cols="12"
          md="6"
          xl="4"
          class="mb-4"
        >
          <article class="person-card">
            <b-img-lazy
              class="person-photo"
              blank-src="null"
              :alt="person.name"
              :src="require(`../assets/images/team/${person.image}.jpeg`)"
            ></b-img-lazy>
            <div class="person-info">
              <h4>{{ person.name }}</h4>
              <p class="person-position">{{ person.position }}</p>
              <a :href="`mailto:${person.email}`" class="person-email">
                {{ person.email }}
              </a>
              <b-button class="more-button" @click="showPerson(person)">
                More about {{ shortName(person.name) }}
              </b-button>
            </div>
          </article>
        </b-col>
      </b-row>
    </section>

    <section class="alumni-section">
      <h3>Former Lab Members</h3>
      <b-row>
        <b-col
          v-for="alum in alumni"
          :key="alum.name"
          cols="12"
          md="6"
          xl="4"
          class="mb-3"
        >
          <div class="alumni-item">
            <strong>{{ alum.name }}</strong>
            <span>{{ alum.current }}</span>
          </div>
        </b-col>
      </b-row>
    </section>

    <b-modal
      v-model="showBio"
      :title="selectedPerson ? selectedPerson.name : ''"
      size="lg"
      hide-footer
      centered
    >
      <div v-if="selectedPerson" class="bio-modal">
        <b-img
          class="bio-photo"
          :alt="selectedPerson.name"
          :src="require(`../assets/images/team/${selectedPerson.image}.jpeg`)"
        ></b-img>
        <div>
          <h4>{{ selectedPerson.position }}</h4>
          <a :href="`mailto:${selectedPerson.email}`">
            {{ selectedPerson.email }}
          </a>
          <p class="bio-desc" v-html="selectedPerson.desc"></p>
        </div>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selectedPerson: null,
      showBio: false,
      imageProps: {
        width: 140,
        height: 160,
        class: "m1",
      },
      alumni: [
        {
          name: "Sanjana Sinha",
          current: "late",
        },
        {
          name: "Sneha Manjunath",
          current: "Thermofisher Scientific",
        },
        {
          name: "Shaik Shafiulla",
          current: "PhD student, Germany",
        },
        {
          name: "Ishan Dutta",
          current: "M.Tech, IIT-Warangal",
        },
        {
          name: "Sanskruti Karwa",
          current: "Research Officer - Gennova Biopharmaceuticals",
        },
        {
          name: "Aastha Khiwani",
          current: "PhD student, PGIMER Chandigarh",
        },
        {
          name: "Arupam Biswas",
          current: "PhD Candidate, Johannes Gutenberg University Mainz, Germany",
        },
        {
          name: "Soupayan Banerjee",
          current: "PhD student, Texas A&M",
        },
        {
          name: "Deepta Beji",
          current: "Masters in International Medicine, EU",
        },
        {
          name: "Meghana Madhu",
          current: "PhD student, Umea University, Sweden",
        },
        {
          name: "Pratikhya Acharya",
          current: "PhD student, Aix Marseilles University, France",
        },
        {
          name: "Katha Sanyal",
          current: "PhD student, University of Jenna, Germany",
        },
        {
          name: "Netra Krishna (2026)",
          current:
            "PhD Student, University of Gottingen, International Max Planck Research School, Neurosciences",
        },
      ],
      people: [
        {
          name: "Dr. Ishwariya Venkatesh",
          position: "Principal Investigator",
          image: "ish",
          desc: "Ishwariya (prefers to go by Ish) was smitten with Science in high school,  when she spent a summer traveling to different research labs in South India as part of an internship at the MS Swaminathan Research Foundation. She received her Bachelor’s degree in Biotechnology from BIT, Sathy (affiliated to Anna University) and doctoral degree in Molecular Neuroscience from The University of Wisconsin - Milwaukee. She underwent post-doctoral training in the lab of Dr.Murray Blackmore at Marquette University, focusing on transcriptional and epigenetic regulation of axon regeneration in the mammalian nervous system. As a Research Asst Professor at Marquette, she continued that line of work, developing Bioinformatic workflows to identify co-operative Transcription Factors that regulate regenerative capacity in the injured spinal cord. At CCMB, she is continuing to probe and identify molecular pathways that regulate regenerative capacity in the injured mammalian nervous system. Outside of the lab, Ish loves to read, cook, explore different forms of art (currently obsessed with Madhubani art) and tend to her home garden.",
          email: "ishwariya.ccmb@csir.res.in",
        },
        {
          name: "Dr. Prakash",
          position: "CSIR - Research Associate",
          image: "prakash",
          desc: "Prakash joined the lab as a Senior Project Associate in September 2024. He completed his master degree in Genetic Engineering at Bharathiar University, Coimbatore, subsequently specialized in Plant Genetic Engineering through a DBT-funded program at Madurai Kamaraj University. Following this, he acquired seven years of valuable experience as a Research Associate at Rasi Seeds R&D Biotech Pvt. Ltd., Salem. He later completed his doctoral program in Molecular Biology at Aravind Medical Research Foundation, Madurai. His Ph.D. research focused on investigating the crosstalk between nuclear and mitochondrial genomes in patients with Leber’s Hereditary Optic Neuropathy (LHON). By utilizing advanced techniques like next-generation sequencing (NGS) and CRISPR-Cas9-mediated genetic knockout models, he uncovered key molecular mechanisms underlying LHON pathogenesis. During his Ph.D. tenure, he was awarded the prestigious ICMR Senior Research Fellowship. In September 2024, Prakash began his journey at the Venkatesh Lab, where he focuses primary mouse neuron culture and the differentiation of induced pluripotent stem cells (iPSCs) into neural progenitor cells for stem cell therapy in a spinal cord injury (SCI) animal model. His research aims to address the challenges posed by the hostile injury environment, with the goal of promoting tissue regeneration and behavioral recovery. Outside of his professional commitments, Prakash enjoys cooking and cherishes quality time with his son and family.",
          email: "cpge1988@gmail.com",
        },
        {
           name: "Dr. Shringika Soni",
           position: "Research Associate",
           image: "shringika",
           desc: "Shringika Soni joined the Venkatesh Lab in March 2024 as a SERB National Postdoctoral Fellow (nPDF) and currently serves as a DBT Research Associate. She holds an Integrated M.Tech. in Cognitive Neuroscience and completed her dissertation at NIMHANS, Bengaluru. Before joining the lab, she worked on preclinical and clinical models of autism at PGIMER, Chandigarh. During her doctoral research at Amity University Uttar Pradesh, Noida, she developed an electrochemical nano-aptasensor for detecting illicit drugs.<br><br>At the Venkatesh Lab, Shringika is investigating combinatorial therapies for spinal cord injury (SCI), focusing on integrating nuclear receptor-based gene therapy and stem cell therapy to promote neuroregeneration and functional recovery. She is also expanding her research into gene therapy for peripheral nervous system (PNS) regeneration, with the goal of testing the same gene therapy approach in both CNS and PNS regeneration.<br><br>Outside the lab, she loves getting her hands dirty in the garden, experimenting with new recipes, practicing yoga, and exploring cafes and hidden food gems. She believes the best ideas often come with a good meal, a little greenery, and a curious mind.",
           email: "shringikasoni@ccmb.res.in",
         },
         {
          name: "ManojKumar K",
          position: "Research Associate",
          image: "manoj",
          desc: `Manojkumar joined the lab as a Senior Project Associate in October 2022. He has an integrated M.Tech degree in Bioinformatics from the Bharathidhasan University, Trichy. Following that, he completed his doctoral training under the guidance of Dr. Bharanidharan at Aravind Medical Research Foundation (Under SASTRA Univeristy), Madurai. During his Ph.D, he has developed a tool that filters and prioritizes pathogenic variants specific to eye disease. He is the go-to person for all flavors of Bioinformatics analyses in the lab from NGS to single-cell genomics and everything in between. In the lab, Manoj is also the one Ish goes to first with most of her (only sometimes crazy 😜) ideas - from rigging treadmills for mice from scratch to wanting to try out new algorithms the same day it's published,  to saving Ish with computer hiccups the day of her talks, he handles it all with a smile and gets it done! Outside of the lab his hobbies include Photography 📸, Wildlife conservation 🐾, Travelling 🧳, and Gaming 🕹️ but importantly cooking 🧑🏽‍🍳, and he shares the output of his cooking experiments generously with the lab members! <a href="https://mano2991.netlify.app/" target="_blank" rel="noopener noreferrer">Visit his personal webpage</a>`,
          email: "manojkumar@ccmb.res.in",
        },
        {
          name: "Yogesh Sahu",
          position: "PhD student",
          image: "yogesh",
          desc: "Yogesh Sahu joined the lab in September of 2022 as a PhD student. He graduated with a Bachelors degree in Zoology from Guru Ghasidas University Bilaspur in 2019. Following this, he received his Masters in Neurobiology from Guru Ghasidas University Bilaspur in 2021. His Phd project in the lab is focused on the molecular regulation of Axon Regeneration by Nuclear receptor family of transcription factors. He is a night owl who enjoys living in the lab (or scope room) and breathing science at all hours (by his own will!) He is a talented multimedia whiz, who whips out funny research memes on instagram by the dozen when not working on science!",
          email: "yogesh@ccmb.res.in",
        },
        {
          name: "Anisha S. Menon",
          position: "PhD student",
          image: "anisha",
          desc: `Anisha S. Menon is a PhD student who joined the lab in March 2023. She completed her Bachelor's in Zoology at Vimala College, Kerala, followed by  Master's in Zoology from St. Joseph's College, Kerala. Her research is mainly to uncover the epigenetic roadblocks that limit CNS regenerative potential. Anisha delves deeply into the world of chromatin remodelers, examining everything from chromatin accessibility and histone modifications to 3D genome architecture—essentially, leaving no epigenetic stone unturned. Beyond the lab bench, her love for reading and writing fuels her interest in science communication, letting her translate complex neuroscience into stories anyone can enjoy (whenever she gets a little downtime 😇 ). <a href="https://anisha8597.github.io/anisha/" target="_blank" rel="noopener noreferrer">Check out her work and musings on her</a> `,
          email: "anisha.ccmb@csir.res.in",
        },
        {
           name: "Rutuja Pendharkar",
           position: "PhD student",
           image: "rutuja",
           desc: "Rutuja, with a rich academic background in Biotechnology from Pune University, is at the forefront of pioneering research in stem cell therapy for spinal injuries. Holding both Bachelor's and Master's degrees, she has dedicated her career to exploring the synergistic potential of stem cell implantation at sites of spinal damage. As she embarks on this groundbreaking project, the expectations are high, and there's a palpable sense of anticipation for the remarkable outcomes we believe she will achieve. Outside the lab, Rutuja finds solace and creativity in Mandela art, a passion that complements her scientific pursuits. Her journey is just beginning, and we eagerly look forward to the innovative solutions she is bound to uncover for spinal injury treatment.",
           email: "rutuja.arun@ccmb.res.in",
         },
         {
           name: "Aarthi Sukumar",
           position: "PhD student",
           image: "aarthi",
           desc: "Aarthi has recently joined the lab as a PhD student in August 2025, bringing with her strong technical skills and an Integrated Master’s degree in Biotechnology from VIT University. Her research will focus on deciphering the metabolic regulation of axon growth, a fundamental process underlying neural development, connectivity, and regeneration. With a vision to integrate metabolic profiling and advanced molecular approaches, she aims to uncover the key regulatory networks driving axonal growth. Outside the lab, Aarthi enjoys exploring new places and immersing herself in music, pursuits that inspire her curiosity and bring balance to her scientific endeavors. Her doctoral work is expected to contribute significantly to our understanding of the metabolic mechanisms that drive neuronal growth and repair.",
           email: "aarthis@csirccmb.org",
         },
        {
          name: "Dhruva Kesireddy",
          position: "Lab Manager, Project Associate",
          image: "dhruva",
          desc: "Dhruva has recently joined the lab as a Project-based Student Trainee, bringing with him a Master's degree in Animal Biology and Biotechnology from the University of Hyderabad. His research during his Master's program focused on the  topic of dynamic relocalization of Denovo Methyltransferases of  Dnmt3a and Dnmt3b in Mouse Mammary Epithelial cells during lactogenic differentiation.His research interests include epigenetics and epigenetic regulation. With a keen interest in this field, Dhruva aspires to pursue a Ph.D. in the future. Beyond his academic pursuits, Dhruva  enjoys engaging in various activities outside of the lab. He likes to sing and finds solace in music. In his leisure time, he indulges in watching movies and web series, appreciating the art of storytelling.He likes hanging out with his friends and cousins.",
          email: "dhruvakesireddy@gmail.com",
        },
        {
          name: "Faheem Farooq",
          position: "Project Associate",
          image: "faheem",
          desc: "Faheem joined the lab in September 2025 as a Project Associate. He holds a Master's degree in Biotechnology from the University of Kashmir. It was during his dissertation period at IISc that his interest in the field of genome organization and regulation was sparked. Building on his working knowledge of genome organization, he is currently investigating in the lab how genome organization regulates regenerative capacity across mouse neuronal development. Apart from science, Faheem loves to play football and is a lifelong Real Madrid fan!",
          email: "faheem@csirccmb.org",
         },
        {
          name: "Dhanuush Balakannan",
          position: "Project Associate",
          image: "dhanuush",
          desc: "Dhanuush joined the lab as a Project Trainee in July 2025, following his graduation from IISER Mohali. With a long-standing interest in regeneration, he sees this opportunity as a stepping stone toward pursuing a PhD, while expanding his skillset and research experience. In the lab, he is working closely on the stem cell project in spinal cord injury (SCI) models, focusing on motor and sensory behaviour and the mechanisms of recovery after stem cell transplantation. As a science enthusiast, he also contributes to preLights (The Company of Biologists), where he writes about recent preprints in biology. Beyond the lab, he enjoys trekking and watching supernatural and horror films.",
          email: "dhanuush19@gmail.com",
        },
        {
          name: "Athul Narayan PS",
          position: "Project Associate",
          image: "athul",
          desc: "Athul joined the lab in July 2025 as a dissertation student from VIT, Vellore, where he is currently pursuing an Integrated Master’s degree in Biotechnology. His research focuses on understanding how transcription factors regulate neuronal regeneration in spinal cord injury (SCI) models, as well as developing optical clearing strategies for brain and spinal cord tissues to enable deep imaging. Outside the lab, he is passionate about football, enjoys exploring new places, and engages in light reading during his free time.",
          email: "athulskumar2003@gmail.com",
        },
      ]
    };
  },
  computed: {
    teamSections() {
      return [
        {
          title: "Principal Investigator",
          names: ["Dr. Ishwariya Venkatesh"],
        },
        {
          title: "Postdoctoral Fellows",
          names: ["Dr. Prakash", "Dr. Shringika Soni", "ManojKumar K"],
        },
        {
          title: "PhD Students",
          names: [
            "Yogesh Sahu",
            "Anisha S. Menon",
            "Rutuja Pendharkar",
            "Aarthi Sukumar",
          ],
        },
        {
          title: "Project Associates",
          names: [
            "Dhruva Kesireddy",
            "Faheem Farooq",
            "Dhanuush Balakannan",
            "Athul Narayan PS",
          ],
        },
      ].map((section) => ({
        title: section.title,
        members: section.names
          .map((name) => this.people.find((person) => person.name === name))
          .filter(Boolean),
      }));
    },
  },
  methods: {
    showPerson(person) {
      this.selectedPerson = person;
      this.showBio = true;
    },
    shortName(name) {
      return name.replace(/^Dr\.\s*/, "").split(" ")[0];
    },
  },
};
</script>

<style scoped>
.team-page {
  padding-top: 48px;
  padding-bottom: 48px;
}

h4, h2, h3, h6, p {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
  color: #346225 !important;
}

h2 {
  font-size: 36px;
  margin-bottom: 34px;
}

h3 {
  border-bottom: 1px solid #346225;
  font-size: 28px;
  margin-bottom: 24px;
  padding-bottom: 10px;
}

h4 {
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 8px;
}

.team-section {
  margin-bottom: 42px;
}

.person-card {
  border: 1px solid #346225;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 460px;
}

.person-photo {
  aspect-ratio: 4 / 5;
  height: 300px;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.person-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px;
}

.person-position {
  font-size: 20px;
  line-height: 1.25;
  margin-bottom: 8px;
}

.person-email {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 17px;
  margin-bottom: 20px;
  overflow-wrap: anywhere;
  text-decoration: underline;
}

.more-button {
  align-self: flex-start;
  background: transparent;
  border: 1px solid #346225;
  border-radius: 0;
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  margin-top: auto;
  padding: 10px 14px;
}

.more-button:hover,
.more-button:focus {
  background: #fff3e0;
  border-color: #346225;
  color: #346225;
}

.alumni-section {
  margin-top: 18px;
}

.alumni-item {
  border: 1px solid rgba(52, 98, 37, 0.55);
  color: #346225;
  display: flex;
  flex-direction: column;
  font-family: "Oswald", sans-serif;
  height: 100%;
  padding: 14px 16px;
}

.alumni-item strong {
  font-size: 19px;
  margin-bottom: 4px;
}

.alumni-item span {
  font-size: 16px;
}

.bio-modal {
  color: #346225;
  display: grid;
  gap: 22px;
  grid-template-columns: 220px 1fr;
}

.bio-photo {
  max-height: 300px;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.bio-modal a,
.bio-desc >>> a {
  color: #346225;
  text-decoration: underline;
}

.bio-desc {
  color: #346225 !important;
  font-family: "Oswald", sans-serif;
  font-size: 19px;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 16px;
}

span >>> a {
  color: #346225;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .person-card {
    min-height: 0;
  }

  .person-photo {
    height: 260px;
  }

  .bio-modal {
    grid-template-columns: 1fr;
  }
}
</style>
