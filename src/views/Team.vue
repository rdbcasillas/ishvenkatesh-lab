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
      <div v-if="section.featured && section.members.length" class="pi-feature">
        <article class="person-card pi-person-card">
          <b-img-lazy
            class="person-photo"
            blank-src="null"
            :alt="section.members[0].name"
            :src="require(`../assets/images/team/${section.members[0].image}.jpeg`)"
          ></b-img-lazy>
          <div class="person-info">
            <h4>{{ section.members[0].name }}</h4>
            <p class="person-position">{{ section.members[0].position }}</p>
            <a
              v-if="section.members[0].email"
              :href="`mailto:${section.members[0].email}`"
              class="person-email"
            >
              {{ section.members[0].email }}
            </a>
          </div>
        </article>
        <div class="pi-writeup">
          <p v-html="section.members[0].desc"></p>
          <a
            class="cv-button"
            :href="require('../assets/cv/Ish_CV.pdf')"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b-icon icon="file-earmark-person"></b-icon>
            View CV
          </a>
        </div>
      </div>
      <b-row v-else>
        <b-col
          v-for="person in section.members"
          :key="person.name"
          cols="12"
          md="6"
          xl="3"
          class="mb-4"
        >
          <article class="person-card">
            <b-img-lazy
              v-if="person.image"
              class="person-photo"
              blank-src="null"
              :alt="person.name"
              :src="require(`../assets/images/team/${person.image}.jpeg`)"
            ></b-img-lazy>
            <div v-else class="person-photo person-placeholder">
              {{ initials(person.name) }}
            </div>
            <div class="person-info">
              <h4>{{ person.name }}</h4>
              <p class="person-position">{{ person.position }}</p>
              <a
                v-if="person.email"
                :href="`mailto:${person.email}`"
                class="person-email"
              >
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
          xl="3"
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
          v-if="selectedPerson.image"
          class="bio-photo"
          :alt="selectedPerson.name"
          :src="require(`../assets/images/team/${selectedPerson.image}.jpeg`)"
        ></b-img>
        <div v-else class="bio-photo bio-placeholder">
          {{ initials(selectedPerson.name) }}
        </div>
        <div>
          <h4>{{ selectedPerson.position }}</h4>
          <a v-if="selectedPerson.email" :href="`mailto:${selectedPerson.email}`">
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
          current: "M.Tech, NIT-Warangal",
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
          name: "Netra Krishna",
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
           email: "shringikasoni@csirccmb.org",
         },
         {
          name: "ManojKumar K",
          position: "Research Associate",
          image: "manoj",
          desc: `Manojkumar joined the lab as a Senior Project Associate in October 2022. He has an integrated M.Tech degree in Bioinformatics from the Bharathidhasan University, Trichy. Following that, he completed his doctoral training under the guidance of Dr. Bharanidharan at Aravind Medical Research Foundation (Under SASTRA Univeristy), Madurai. During his Ph.D, he has developed a tool that filters and prioritizes pathogenic variants specific to eye disease. He is the go-to person for all flavors of Bioinformatics analyses in the lab from NGS to single-cell genomics and everything in between. In the lab, Manoj is also the one Ish goes to first with most of her (only sometimes crazy 😜) ideas - from rigging treadmills for mice from scratch to wanting to try out new algorithms the same day it's published,  to saving Ish with computer hiccups the day of her talks, he handles it all with a smile and gets it done! Outside of the lab his hobbies include Photography 📸, Wildlife conservation 🐾, Travelling 🧳, and Gaming 🕹️ but importantly cooking 🧑🏽‍🍳, and he shares the output of his cooking experiments generously with the lab members! <a href="https://mano2991.netlify.app/" target="_blank" rel="noopener noreferrer">Visit his personal webpage</a>`,
          email: "manojkumarbioinfo@gmail.com",
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
           desc: "Aarthi has joined the lab as a PhD student in October 2025, bringing with her strong technical skills and an Integrated Master’s degree in Biotechnology from VIT University. Her research will focus on deciphering the proteomic and metabolic regulation of axon growth, a fundamental process underlying neural development, connectivity, and regeneration. With a vision to integrate multi-omic approaches, she aims to uncover the key regulatory networks driving axonal growth. Outside the lab, Aarthi enjoys exploring new places and immersing herself in music, pursuits that inspire her curiosity and bring balance to her scientific endeavors.",
           email: "aarthis@csirccmb.org",
         },
        {
          name: "Dhruva Kesireddy",
          position: "Lab Manager, Project Associate",
          image: "dhruva",
          desc: "Dhruva joined the lab as a Project-Based Trainee and subsequently took up the role of Project Associate before transitioning into the position of Lab Manager. He holds a Master's degree in Animal Biology and Biotechnology from the University of Hyderabad. His work encompasses molecular biology, cell culture, and genomics, along with coordinating laboratory procurement, inventory management, and day-to-day lab operations. Beyond the lab, Dhruva enjoys singing and listening to music.",
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
        {
          name: "Achuth",
          position: "PBST, Short Term Trainee",
          image: "achuth",
          desc: "Achuth joined the lab in July 2026 as a Project-Based Student Trainee after completing his Bachelor's degree in Biotechnology from NIT Warangal, where he also spent his final year as an exchange student at IIT Hyderabad developing machine learning models for computational histopathology. Prior to this, he worked with Dr. Linheng Li at the Stowers Institute for Medical Research through the Stowers Summer Scholars and Khorana Scholars (DBT-IUSSTF) programs.<br><br>His research focuses on understanding the epigenetic regulation of axon regeneration after spinal cord injury by integrating bulk and single-nucleus ATAC-seq analyses to uncover transcription factor networks that drive neuronal regeneration. He is fascinated by the potential of interdisciplinary science and believes that integrating computational and experimental approaches will be key to developing the next generation of combinatorial therapies for neurological disorders.",
          email: "",
        },
        {
          name: "Meera",
          position: "Dissertee, Short Term Trainee",
          image: "meera",
          desc: "Meera Manoj joined the lab in June 2026 as a dissertation student from VIT, Vellore, where she is pursuing an Integrated Master's degree in Biotechnology. Her research focuses on understanding how transcription factors regulate neuronal regeneration following spinal cord injury (SCI). Using CRISPR-mediated gene knockdown approaches, she investigates the molecular mechanisms underlying neural repair.<br><br>Outside the lab, she is a passionate dancer and an avid traveller who enjoys discovering new places. She also loves music, films, and web series, and values spending quality time with her loved ones.",
          email: "",
        },
        {
          name: "Susmita Das",
          position: "RICH Trainee, Short Term Trainee",
          image: "sushmitha",
          desc: "Susmita Das is a researcher with a strong interest in neuroscience, mitochondrial biology, metabolomics, and regenerative medicine. She completed her postgraduate studies in Biotechnology at Brainware University and joined the lab as a RICH student in January 2026.<br><br>Her research focuses on the metabolic and mitochondrial mechanisms underlying axon regeneration and neuronal repair, with particular interest in metabolomic regulation of axonal growth and targeted mitochondrial transplantation following spinal cord injury. By integrating metabolomics, molecular biology, and cell-specific targeting approaches, she aims to uncover novel therapeutic strategies for neuronal survival and regeneration.<br><br>Outside the lab, Susmita enjoys reading storybooks, exploring new places, painting, and listening to music. A proud Bengali at heart, she also has a special love for traditional sweets.",
          email: "",
        },
        {
          name: "Ankita Dwivedi",
          position: "MP Young Scientist Fellowship, Short Term Trainee",
          image: "anikita",
          desc: "Ankita Dwivedi joined the lab in April 2026 as an MP Young Scientist Fellow through a fellowship for the training of young scientists. She completed her PhD in Neuroscience from Dr. Harisingh Gour University, Sagar, Madhya Pradesh, and brings a strong research background in neurodegeneration and cognitive dysfunction.<br><br>Her current work focuses on the metabolic control of axonal regeneration, exploring diverse metabolic pathways and their roles in regulating axonal growth and neuronal repair. By integrating metabolic profiling with advanced molecular approaches, she aims to uncover the key metabolic mechanisms driving axonal regeneration.<br><br>Outside the lab, Ankita enjoys exploring new places, playing basketball, and listening to music, which keep her inspired and energized.",
          email: "",
        },
      ]
    };
  },
  computed: {
    teamSections() {
      return [
        {
          title: "Principal Investigator",
          featured: true,
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
        {
          title: "Short Term Trainees",
          names: ["Achuth", "Meera", "Susmita Das", "Ankita Dwivedi"],
        },
      ].map((section) => ({
        title: section.title,
        featured: section.featured,
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
    initials(name) {
      return name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
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
  margin: 0 auto;
  max-width: 260px;
  min-height: 0;
}

.person-photo {
  aspect-ratio: 4 / 5;
  display: block;
  height: 325px;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

.pi-feature {
  align-items: start;
  display: grid;
  gap: 34px;
  grid-template-columns: 260px 1fr;
}

.pi-person-card {
  margin: 0;
}

.pi-writeup {
  color: #346225;
  font-family: "Oswald", sans-serif;
  font-size: 19px;
  font-weight: bold;
  line-height: 1.5;
  padding-top: 2px;
  text-align: justify;
}

.pi-writeup p {
  margin: 0;
}

.person-placeholder,
.bio-placeholder {
  align-items: center;
  background: #f6f0df;
  color: #346225;
  display: flex;
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  font-weight: bold;
  justify-content: center;
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

.cv-button {
  align-items: center;
  border: 1px solid #346225;
  color: #346225;
  display: inline-flex;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  gap: 8px;
  justify-content: center;
  margin-top: 18px;
  padding: 10px 14px;
  text-decoration: none;
}

.cv-button:hover,
.cv-button:focus {
  background: #fff3e0;
  color: #346225;
  text-decoration: none;
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

.bio-placeholder {
  min-height: 260px;
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
    height: 325px;
  }

  .pi-feature {
    grid-template-columns: 1fr;
  }

  .pi-person-card {
    margin: 0 auto;
  }

  .pi-writeup {
    text-align: left;
  }

  .bio-modal {
    grid-template-columns: 1fr;
  }
}
</style>
