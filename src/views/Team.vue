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
          <div v-if="section.members[0].cv" class="cv-container mt-3">
            <a
              :href="section.members[0].cv"
              target="_blank"
              rel="noopener noreferrer"
              class="cv-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 1.5v2.121a.379.379 0 0 0 .379.379H12"/>
                <path d="M4.5 12.5A.5.5 0 0 1 5 12h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
              </svg>
              View Curriculum Vitae (CV)
            </a>
          </div>
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

    <section class="alumni-section" id="alumni">
      <div class="alumni-header">
        <p class="alumni-kicker">Lab Alumni</p>
        <h3 class="alumni-title">From Venkatesh Lab to PhD Journeys Globally</h3>
        <div class="alumni-statement">
          <p>
            Many of our one-year trainees join us with a clear goal: to build the research foundation, mentorship network, and application support needed to pursue PhD training in India or abroad. Our commitment to their training does not depend on whether they continue with us or move on to another lab. We guide them in choosing programs and mentors, preparing for interviews, strengthening applications, and provide recommendation letters across multiple application cycles, even after their formal lab tenure has ended.
          </p>
        </div>
      </div>

      <div class="phd-alumni-grid">
        <article
          v-for="alum in phdAlumni"
          :key="alum.name"
          class="phd-alum-card"
        >
          <div class="phd-alum-photo-wrap">
            <img
              v-if="alum.image"
              class="phd-alum-photo"
              :src="require(`../assets/images/alumini/${alum.image}`)"
              :alt="alum.name"
              loading="lazy"
            />
            <div v-else class="phd-alum-photo phd-alum-placeholder">
              <span>{{ initials(alum.name) }}</span>
            </div>
          </div>
          <div class="phd-alum-info">
            <h4 class="phd-alum-name">{{ alum.name }}</h4>
            <div class="phd-alum-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <span>{{ alum.position }}</span>
            </div>
            <p class="phd-alum-institution">{{ alum.institution }}</p>
          </div>
        </article>
      </div>

      <div class="other-alumni-block" v-if="summerTrainees && summerTrainees.length">
        <h4 class="other-alumni-title">Summer Trainees</h4>
        <div class="other-alumni-grid">
          <div
            v-for="trainee in summerTrainees"
            :key="trainee.name"
            class="alumni-item"
          >
            <strong>{{ trainee.name }}</strong>
            <span v-if="trainee.institution">{{ trainee.institution }}</span>
          </div>
        </div>
      </div>

      <div class="other-alumni-block" v-if="otherAlumni && otherAlumni.length">
        <h4 class="other-alumni-title">Additional Lab Alumni</h4>
        <div class="other-alumni-grid">
          <div
            v-for="alum in otherAlumni"
            :key="alum.name"
            class="alumni-item"
          >
            <strong>{{ alum.name }}</strong>
            <span>{{ alum.current }}</span>
          </div>
        </div>
      </div>
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
          <div v-if="selectedPerson.cv" class="cv-container mt-3">
            <a
              :href="selectedPerson.cv"
              target="_blank"
              rel="noopener noreferrer"
              class="cv-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 1.5v2.121a.379.379 0 0 0 .379.379H12"/>
                <path d="M4.5 12.5A.5.5 0 0 1 5 12h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
              </svg>
              View Curriculum Vitae (CV)
            </a>
          </div>
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
      phdAlumni: [
        {
          name: "Katha Sanyal",
          institution: "University of Jena, Germany",
          position: "PhD Student",
          image: "katha2.jpg",
        },
        {
          name: "Arupam Biswas",
          institution: "Johannes Gutenberg University Mainz, Germany",
          position: "PhD Candidate",
          image: "arupam.jpg",
        },
        {
          name: "Soupayan Banerjee",
          institution: "Texas A&M University, USA",
          position: "PhD Student",
          image: "Soupayan.jpg",
        },
        {
          name: "Pratikhya Acharya",
          institution: "Aix-Marseille University, France",
          position: "PhD Student",
          image: "Pratikhya.jpg",
        },
        {
          name: "Aastha Khiwani",
          institution: "PGIMER Chandigarh, India",
          position: "PhD Student",
          image: "aastha.jpg",
        },
        {
          name: "Netra Krishna",
          institution: "International Max Planck Research School (IMPRS) / University of Göttingen, Germany",
          position: "PhD Student",
          image: "netra.jpg",
        },
        {
          name: "Meghana Madhu",
          institution: "Umeå University, Sweden",
          position: "PhD Student",
          image: "meghana.jpg",
        },
      ],
      summerTrainees: [
        {
          name: "Pranjal Dubey",
          institution: "University of Delhi",
        },
        {
          name: "Nandana Raghunandan",
          institution: "Pondicherry University",
        },
        {
          name: "Riya Kushawa",
          institution: "University of Delhi",
        },
        {
          name: "Netra Krishna",
          institution: "KREA University",
        },
        {
          name: "Apoorva Atmuri",
          institution: "M.Tech in IIT, Hyderabad",
        },
        {
          name: "Katha Sanyal",
          institution: "Project Associate CCMB",
        },
        {
          name: "Abhilaya Makkuva",
          institution: "Center for Human Genetics, Bangalore",
        },
        {
          name: "Tumu Vinit Reddy",
          institution: "Babasaheb Bhimrao Ambedkar University, Lucknow",
        },
      ],
      otherAlumni: [
        {
          name: "Deepta Beji",
          current: "Masters in International Medicine, EU",
        },
        {
          name: "Sneha Manjunath",
          current: "Thermo Fisher Scientific",
        },
        {
          name: "Sanskruti Karwa",
          current: "Research Officer, Gennova Biopharmaceuticals",
        },
        {
          name: "Ishan Dutta",
          current: "M.Tech, NIT-Warangal",
        },
      ],
      people: [
        {
          name: "Dr. Ishwariya Venkatesh",
          position: "Principal Investigator",
          image: "ish",
          cv: process.env.BASE_URL + "cv/Ish_CV.pdf",
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
  padding-bottom: 64px;
  padding-top: 56px;
}

h2, h3, h4 {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-weight: 600;
}

p {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
}

h2 {
  font-size: 2.3rem;
  margin-bottom: 40px;
}

h3 {
  border-bottom: 1px solid var(--color-border);
  color: var(--color-accent-dark);
  font-size: 1.55rem;
  margin-bottom: 24px;
  padding-bottom: 10px;
}

h4 {
  font-size: 1.3rem;
  line-height: 1.25;
  margin-bottom: 6px;
}

.team-section {
  margin-bottom: 48px;
}

.person-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 260px;
  min-height: 0;
  overflow: hidden;
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.person-card:hover {
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
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
  gap: 36px;
  grid-template-columns: 260px 1fr;
}

.pi-person-card {
  margin: 0;
}

.pi-writeup {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 1.05rem;
  line-height: 1.7;
  padding-top: 2px;
  text-align: justify;
}

.pi-writeup p {
  margin: 0;
}

.cv-container {
  display: flex;
  margin-top: 16px;
}

.cv-button {
  align-items: center;
  background-color: var(--color-accent, #0b66c2);
  border: 1px solid var(--color-accent, #0b66c2);
  border-radius: var(--radius-sm, 6px);
  color: #ffffff !important;
  display: inline-flex;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  gap: 8px;
  padding: 8px 16px;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.cv-button:hover,
.cv-button:focus {
  background-color: var(--color-accent-dark, #084e96);
  border-color: var(--color-accent-dark, #084e96);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #ffffff !important;
  transform: translateY(-1px);
}

.person-placeholder,
.bio-placeholder {
  align-items: center;
  background: var(--color-surface-muted);
  color: var(--color-accent);
  display: flex;
  font-family: var(--font-heading);
  font-size: 44px;
  font-weight: 600;
  justify-content: center;
}

.person-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px;
}

.person-position {
  color: var(--color-muted);
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 8px;
}

.person-email {
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 18px;
  overflow-wrap: anywhere;
  text-decoration: none;
}

.person-email:hover {
  text-decoration: underline;
}

.more-button {
  align-self: flex-start;
  background: transparent;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: auto;
  padding: 9px 14px;
  transition: background 0.15s ease, color 0.15s ease;
}

.more-button:hover,
.more-button:focus {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-accent-contrast);
}

.alumni-section {
  border-top: 1px solid var(--color-border);
  margin-top: 56px;
  padding-top: 40px;
}

.alumni-header {
  margin-bottom: 28px;
}

.alumni-kicker {
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.alumni-title {
  border-bottom: none;
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.85rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 18px;
  padding-bottom: 0;
}

.alumni-statement {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-accent);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.7;
  padding: 22px 26px;
}

.alumni-statement p {
  color: var(--color-ink-soft);
  font-size: 1.02rem;
  line-height: 1.7;
  margin: 0;
  text-align: justify;
}

.phd-alumni-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-bottom: 48px;
}

.phd-alum-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.phd-alum-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.phd-alum-photo-wrap {
  aspect-ratio: 1 / 1;
  background: var(--color-surface-muted);
  overflow: hidden;
  position: relative;
  width: 100%;
}

.phd-alum-photo {
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

.phd-alum-placeholder {
  align-items: center;
  background: var(--color-accent-light);
  color: var(--color-accent);
  display: flex;
  font-family: var(--font-heading);
  font-size: 2.4rem;
  font-weight: 600;
  justify-content: center;
}

.phd-alum-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px;
}

.phd-alum-name {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.22rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 8px;
}

.phd-alum-badge {
  align-items: center;
  align-self: flex-start;
  background: var(--color-accent-light);
  border-radius: 999px;
  color: var(--color-accent-dark);
  display: inline-flex;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  gap: 6px;
  margin-bottom: 10px;
  padding: 4px 10px;
}

.phd-alum-institution {
  color: var(--color-ink-soft);
  font-family: var(--font-body);
  font-size: 0.94rem;
  line-height: 1.5;
  margin: 0;
}

.other-alumni-block {
  border-top: 1px solid var(--color-border);
  margin-top: 12px;
  padding-top: 32px;
}

.other-alumni-title {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.other-alumni-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.alumni-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-ink);
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  height: 100%;
  padding: 14px 16px;
}

.alumni-item strong {
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.alumni-item span {
  color: var(--color-muted);
  font-size: 0.9rem;
}

.bio-modal {
  color: var(--color-ink-soft);
  display: grid;
  gap: 22px;
  grid-template-columns: 220px 1fr;
}

.bio-photo {
  border-radius: var(--radius-sm);
  max-height: 300px;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.bio-placeholder {
  border-radius: var(--radius-sm);
  min-height: 260px;
}

.bio-modal a,
.bio-desc >>> a {
  color: var(--color-accent);
  text-decoration: underline;
}

.bio-desc {
  color: var(--color-ink-soft) !important;
  font-family: var(--font-body);
  font-size: 1.02rem;
  line-height: 1.65;
  margin-top: 16px;
}

span >>> a {
  color: var(--color-accent);
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
