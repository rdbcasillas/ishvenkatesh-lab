<template>
  <div>
    <b-container>
      <b-row>
        <b-col><h2>Team</h2></b-col>
      </b-row>
      <b-row v-for="(person, index) in people" :key="index" class="mb-5 mt-3">
        <b-col class="personbox">
          <h4>{{ person.name }} ({{ person.position }})</h4>
          <h6>{{ person.email }}</h6>
          <div class="d-flex align-items-center">
            <b-img-lazy
              v-bind="imageProps"
              rounded
              blank-src="null"
              :src="require(`../assets/images/team/${person.image}.jpg`)"
            ></b-img-lazy>
            <span class="mt-3 ml-2 text-justify persondesc" v-html="person.desc"></span>
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
          name: "Dr. Prakash",
          position: "CSIR - Research Associate",
          image: "Prakesh",
          desc: "Prakash joined the lab as a Senior Project Associate in September 2024. He completed his master degree in Genetic Engineering at Bharathiar University, Coimbatore, subsequently specialized in Plant Genetic Engineering through a DBT-funded program at Madurai Kamaraj University. Following this, he acquired seven years of valuable experience as a Research Associate at Rasi Seeds R&D Biotech Pvt. Ltd., Salem. He later completed his doctoral program in Molecular Biology at Aravind Medical Research Foundation, Madurai. His Ph.D. research focused on investigating the crosstalk between nuclear and mitochondrial genomes in patients with Leber’s Hereditary Optic Neuropathy (LHON). By utilizing advanced techniques like next-generation sequencing (NGS) and CRISPR-Cas9-mediated genetic knockout models, he uncovered key molecular mechanisms underlying LHON pathogenesis. During his Ph.D. tenure, he was awarded the prestigious ICMR Senior Research Fellowship. In September 2024, Prakash began his journey at the Venkatesh Lab, where he focuses primary mouse neuron culture and the differentiation of induced pluripotent stem cells (iPSCs) into neural progenitor cells for stem cell therapy in a spinal cord injury (SCI) animal model. His research aims to address the challenges posed by the hostile injury environment, with the goal of promoting tissue regeneration and behavioral recovery. Outside of his professional commitments, Prakash enjoys cooking and cherishes quality time with his son and family.",
          email: "cpge1988@gmail.com",
        },
        {
           name: "Dr. Shringika Soni",
           position: "Research Associate",
           image: "Shringika",
           desc: "Shringika Soni is Research Associate and joined the lab in March 2024. She has an Integrated M. Tech in Cognitive Neuroscience and a notable dissertation at NIMHANS, Bengaluru. Before joining PhD, she worked on pre-clinical and clinical models of autism at PGIMER Chandigarh. During her doctoral thesis at Amity University Uttar Pradesh, Noida, she designed an electrochemical nano-aptasensor to detect illicit drug abuse. In March 2024, Shringika started her journey at the Venkatesh lab, focusing on dual therapies in spinal cord injury (SCI) animal model. She is exploring how Nuclear receptor family of transcription factors based gene therapy and stem cell therapy will affect neuroregeneration and recovery in SCI, and what is the mechanism behind functional recovery and plasticity in stem cell graft-induced reconnection. She is also awarded with She Inspire program by India Biosciences to empower and motivate women to work in science. If she is not doing science, you can find her doing sketches, gardening, and exploring new places (especially eateries).",
           email: "shringikasoni@ccmb.res.in",
         },
         {
          name: "ManojKumar K",
          position: "Research Associate",
          image: "manoj_1",
          desc: `Manojkumar joined the lab as a Senior Project Associate in October 2022. He has an integrated M.Tech degree in Bioinformatics from the Bharathidhasan University, Trichy. Following that, he completed his doctoral training under the guidance of Dr. Bharanidharan at Aravind Medical Research Foundation (Under SASTRA Univeristy), Madurai. During his Ph.D, he has developed a tool that filters and prioritizes pathogenic variants specific to eye disease. He is the go-to person for all flavors of Bioinformatics analyses in the lab from NGS to single-cell genomics and everything in between. In the lab, Manoj is also the one Ish goes to first with most of her (only sometimes crazy 😜) ideas - from rigging treadmills for mice from scratch to wanting to try out new algorithms the same day it's published,  to saving Ish with computer hiccups the day of her talks, he handles it all with a smile and gets it done! Outside of the lab his hobbies include Photography 📸, Wildlife conservation 🐾, Travelling 🧳, and Gaming 🕹️ but importantly cooking 🧑🏽‍🍳, and he shares the output of his cooking experiments generously with the lab members! <a href="https://mano2991.netlify.app/" target="_blank" rel="noopener noreferrer">Visit his personal webpage</a>`,
          email: "manojkumar@ccmb.res.in",
        },
        {
          name: "Yogesh Sahu",
          position: "PhD student",
          image: "yogesh2",
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
           image: "Rutuja",
           desc: "Rutuja, with a rich academic background in Biotechnology from Pune University, is at the forefront of pioneering research in stem cell therapy for spinal injuries. Holding both Bachelor's and Master's degrees, she has dedicated her career to exploring the synergistic potential of stem cell implantation at sites of spinal damage. As she embarks on this groundbreaking project, the expectations are high, and there's a palpable sense of anticipation for the remarkable outcomes we believe she will achieve. Outside the lab, Rutuja finds solace and creativity in Mandela art, a passion that complements her scientific pursuits. Her journey is just beginning, and we eagerly look forward to the innovative solutions she is bound to uncover for spinal injury treatment.",
           email: "rutuja.arun@ccmb.res.in",
         },
         {
           name: "Aarthi Sukumar",
           position: "PhD student",
           image: "Aarthi",
           desc: "Aarthi has recently joined the lab as a PhD student in August 2025, bringing with her strong technical skills and an Integrated Master’s degree in Biotechnology from VIT University. Her research will focus on deciphering the metabolic regulation of axon growth, a fundamental process underlying neural development, connectivity, and regeneration. With a vision to integrate metabolic profiling and advanced molecular approaches, she aims to uncover the key regulatory networks driving axonal growth. Outside the lab, Aarthi enjoys exploring new places and immersing herself in music, pursuits that inspire her curiosity and bring balance to her scientific endeavors. Her doctoral work is expected to contribute significantly to our understanding of the metabolic mechanisms that drive neuronal growth and repair.",
           email: "aarthis@csirccmb.org",
         },
        {
          name: "Dhruva Kesireddy",
          position: "Project Associate",
          image: "dhruva",
          desc: "Dhruva has recently joined the lab as a Project-based Student Trainee, bringing with him a Master's degree in Animal Biology and Biotechnology from the University of Hyderabad. His research during his Master's program focused on the  topic of dynamic relocalization of Denovo Methyltransferases of  Dnmt3a and Dnmt3b in Mouse Mammary Epithelial cells during lactogenic differentiation.His research interests include epigenetics and epigenetic regulation. With a keen interest in this field, Dhruva aspires to pursue a Ph.D. in the future. Beyond his academic pursuits, Dhruva  enjoys engaging in various activities outside of the lab. He likes to sing and finds solace in music. In his leisure time, he indulges in watching movies and web series, appreciating the art of storytelling.He likes hanging out with his friends and cousins.",
          email: "dhruvakesireddy@gmail.com",
        },
        {
          name: "Faheem Farooq",
          position: "Project Associate",
          image: "Faheem",
          desc: "Faheem joined the lab in September 2025 as a Project Associate. He holds a Master’s degree in Biotechnology from the University of Kashmir. It was during His dissertation period at IISc that sparked his interest in the field of genome organization, which led him to join CDFD, Hyderabad, as a Project Associate. To gain further expertise in the field and develop his research aptitude skills he joined our group and building on his working knowledge of genome organisation, in the lab he is currently investigating how genome organization regulates regenerative capacity across mouse neuronal development.",
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
          image: "Athul",
          desc: "Athul joined the lab in July 2025 as a dissertation student from VIT, Vellore, where he is currently pursuing an Integrated Master’s degree in Biotechnology. His research focuses on understanding how transcription factors regulate neuronal regeneration in spinal cord injury (SCI) models, as well as developing optical clearing strategies for brain and spinal cord tissues to enable deep imaging. Outside the lab, he is passionate about football, enjoys exploring new places, and engages in light reading during his free time.",
          email: "athulskumar2003@gmail.com",
        },
      ]
    };
  },
};
</script>

<style scoped>
h4, h2, h6, p {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
  color: #346225 !important;
}

span {
  color: #346225 !important;
  font-size: 19px;
}

span >>> a {
  color: #346225;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .persondesc {
    text-align: left !important;
  }
}

.personbox {
  border: 0.5px dotted rgb(18, 66, 26);
}
</style>
