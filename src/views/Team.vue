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
          <div class="d-flex">
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
           name: "Dr. Shringika Soni",
           position: "SERB-nPDF",
           image: "Shringika",
           desc: "Shringika Soni is SERB-nPDF and joined the lab in March 2024. She has an Integrated M. Tech in Cognitive Neuroscience and a notable dissertation at NIMHANS, Bengaluru. Before joining PhD, she worked on pre-clinical and clinical models of autism at PGIMER Chandigarh. During her doctoral thesis at Amity University Uttar Pradesh, Noida, she designed an electrochemical nano-aptasensor to detect illicit drug abuse. In March 2024, Shringika started her journey at the Venkatesh lab, focusing on dual therapies in spinal cord injury (SCI) animal model. She is exploring how Nuclear receptor family of transcription factors based gene therapy and stem cell therapy will affect neuroregeneration and recovery in SCI, and what is the mechanism behind functional recovery and plasticity in stem cell graft-induced reconnection. She is also awarded with She Inspire program by India Biosciences to empower and motivate women to work in science. If she is not doing science, you can find her doing sketches, gardening, and exploring new places (especially eateries).",
           email: "shringikasoni@ccmb.res.in",
         },
         {
          name: "Manoj Kumar",
          position: "Research Associate",
          image: "manoj_1",
          desc: `Manojkumar joined the lab as a Senior Project Associate in October 2022. He has an integrated M.Tech degree in Bioinformatics from the Bharathidhasan University, Trichy. Following that, he completed his doctoral training under the guidance of Dr. Bharanidharan at Aravind Medical Research Foundation (Under SASTRA Univeristy), Madurai. During his Ph.D, he has developed a tool that filters and prioritizes pathogenic variants specific to eye disease. He is the go-to person for all flavors of Bioinformatics analyses in the lab from NGS to single-cell genomics and everything in between. In the lab, Manoj is also the one Ish goes to first with most of her (only sometimes crazy :D) ideas - from rigging treadmills for mice from scratch to wanting to try out new algorithms the same day it's published,  to saving Ish with computer hiccups the day of her talks, he handles it all with a smile and gets it done! Outside of the lab his hobbies include Photography, Wildlife conservation, Travelling, and Gaming but importantly cooking, and he shares the output of his cooking experiments generously with the lab members! <a href="https://mano2991.netlify.app/" target="_blank" rel="noopener noreferrer">Visit his personal webpage</a>`,
          email: "manojkumar@ccmb.res.in",
        },
        {
          name: "Prakash",
          position: "CSIR - Research Associate",
          image: "Prakesh",
          desc: "Prakash joined the lab as a Senior Project Associate in September 2024. He completed his master degree in Genetic Engineering at Bharathiar University, Coimbatore, subsequently specialized in Plant Genetic Engineering through a DBT-funded program at Madurai Kamaraj University. Following this, he acquired seven years of valuable experience as a Research Associate at Rasi Seeds R&D Biotech Pvt. Ltd., Salem. He later completed his doctoral program in Molecular Biology at Aravind Medical Research Foundation, Madurai. His Ph.D. research focused on investigating the crosstalk between nuclear and mitochondrial genomes in patients with Leber’s Hereditary Optic Neuropathy (LHON). By utilizing advanced techniques like next-generation sequencing (NGS) and CRISPR-Cas9-mediated genetic knockout models, he uncovered key molecular mechanisms underlying LHON pathogenesis. During his Ph.D. tenure, he was awarded the prestigious ICMR Senior Research Fellowship. In September 2024, Prakash began his journey at the Venkatesh Lab, where he focuses primary mouse neuron culture and the differentiation of induced pluripotent stem cells (iPSCs) into neural progenitor cells for stem cell therapy in a spinal cord injury (SCI) animal model. His research aims to address the challenges posed by the hostile injury environment, with the goal of promoting tissue regeneration and behavioral recovery. Outside of his professional commitments, Prakash enjoys cooking and cherishes quality time with his son and family.",
          email: "cpge1988@gmail.com",
        },
         {
          name: "Praveena Koyyada",
          position: "Senior Project Associate",
          image: "Praveena",
          desc: "Praveena started her journey in neuroscience with Ish's Axon growth and regeneration lab as a Post Doctoral since August 2025. She is a professional graduate with M.Tech in Biotechnology from JNTU and has been awarded PhD in Biochemistry for her work on Systemic analysis of Mycobacterium tuberculosis and its host genome from University of Hyderabad. She brings to the table an experience of implementing Machine learning and Deep learning approaches onto the OMICs studies alongside statistics for drawing biological inferences. Her curiosity for learning, cognition and neuroscience has led to work on the a Chromatin developmental atlas, where she is utilizing the pool of epigenomics and transcriptomics data available at ENCODE consortium. She is interested to develop strategic deep learning method studying the axon development in CNS and further, wants to navigate through translational studies aimed at handling and management of neurodegenerative diseases. Apart from sciences, she is passionate about reading on world history, Indian heritage, science-fiction and fictitious works from notable writers. She also takes deep craving for adventure sports, exploring places and learning arts.",
          email: "praveena.bt94@gmail.com",
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
          desc: `Anisha S. Menon is a PhD student and has been a member of the lab since March 2023. She holds a Bachelor's degree in Zoology from Vimala College, Kerala (2018), and a Master's degree in Zoology from St. Joseph's College, Kerala (2020). Her research focuses on the fascinating field of epigenetic regulation of axon regeneration and 3D genome. Anisha investigates the intricate mechanisms underlying the ability of neurons to repair and regrow their axons after injury. Through the study of epigenetic modifications and the dynamic 3D genome architecture, she aims to unravel the molecular processes that drive axon regeneration. In addition to her scientific pursuits, Anisha has a passion for stargazing and cooking during her leisure time. Exploring the night sky and experimenting with new recipes bring her joy and provide a much-needed balance to her research endeavors. <a href="https://anisha8597.github.io/anisha/" target="_blank" rel="noopener noreferrer">Visit her personal webpage</a> `,
          email: "anisha@ccmb.res.in",
        },
        {
           name: "Rutuja Pendharkar",
           position: "PhD student",
           image: "Rutuja",
           desc: "Rutuja, with a rich academic background in Biotechnology from Pune University, is at the forefront of pioneering research in stem cell therapy for spinal injuries. Holding both Bachelor's and Master's degrees, she has dedicated her career to exploring the synergistic potential of stem cell implantation at sites of spinal damage. As she embarks on this groundbreaking project, the expectations are high, and there's a palpable sense of anticipation for the remarkable outcomes we believe she will achieve. Outside the lab, Rutuja finds solace and creativity in Mandela art, a passion that complements her scientific pursuits. Her journey is just beginning, and we eagerly look forward to the innovative solutions she is bound to uncover for spinal injury treatment.",
           email: "rutuja.arun@ccmb.res.in",
         },
         {
           name: "Aarthi",
           position: "PhD student",
           image: "Aarthi",
           desc: "Aarthi has recently joined the lab as a PhD student in August 2025, bringing with her strong technical skills and an Integrated Master’s degree in Biotechnology from VIT University. Her research will focus on deciphering the metabolic regulation of axon growth, a fundamental process underlying neural development, connectivity, and regeneration. With a vision to integrate metabolic profiling and advanced molecular approaches, she aims to uncover the key regulatory networks driving axonal growth. Outside the lab, Aarthi enjoys exploring new places and immersing herself in music, pursuits that inspire her curiosity and bring balance to her scientific endeavors. Her doctoral work is expected to contribute significantly to our understanding of the metabolic mechanisms that drive neuronal growth and repair.",
           email: "aarthis@csirccmb.org",
         },
     //   {
     //     name: "Sneha Manjunath",
     //     position: "Project Associate",
     //     image: "sneha2",
     //     desc: "Sneha joined the lab as a Project-based trainee in May of 2022. She did her Bachelors in Mount Carmel, Bangalore majoring in Biotechnology, Chemistry, and Zoology (Batch of 2019). She has a Master's degree in Genetics and Genomics from The University of Perth, Western Australia (Batch of 2021). Her broad research interests are in Genetics and Neurobiology. She’s a cloning whiz in the lab who can make any project work and has trained everyone in the lab! Outside of the lab, she loves to cook and watch movies. Post her stint here, she wants to launch a biotech start up that caters to researcher needs in India. She handles lab ups and downs like a champ but She’s also the one who leaves cupcakes for Ish on bad science days (for which Ish is always grateful) :D",
     //     email: "snehaamanjunath28@gmail.com",
     //   },
       {
          name: "Katha Sanyal",
          position: "Project Associate",
          image: "katha2",
          desc: "Katha started her journey as a summer trainee, progressing to a dissertation trainee, and now flourishing as a Project Associate. Katha is currently optimizing CUT&RUN for the lab, and she also oversees in-vivo testing of CRISPR and Small Molecules associated with Axon Regeneration. Immersing herself in the world of neuroscience has been a transformative experience for Katha. She has been exposed to cutting-edge research and has had the opportunity to contribute to exciting projects that have deepened her understanding of the subject. The enthusiasm of her labmates has fueled her interest in neuroscience, inspiring her to pursue a Ph.D. in this field.  The lab has become her second home, providing a space where she can explore her curiosity and challenge herself to expand the boundaries of knowledge. Apart from her academic pursuits, Katha enjoys exploring new places with friends and finding joy in cooking dinner. This experience has truly ignited her passion for neuroscience and has significantly influenced both her academic and personal endeavors.",
          email: "kathasanyal@gmail.com",
        },
        // {
        //   name: "Ishan Dutta",
        //   position: "Dissertation trainee",
        //   image: "ishan2",
        //   desc: "Ishan joined the lab for his dissertation research in August. He is pursuing his B.Tech in Biotechnology at Thapar University, India (2019-2023). Before joining the lab, he has worked at Dianox ApS as a junior researcher (2021-2022). Along the course of his education, he has developed interests in many fields of biology like neuroscience and regenerative biology. He plans to continue in academia as a career path. In his free time, he reads and writes.",
        //   email: "heyishandutta@gmail.com ",
        // },

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
       //{
        //  name: "Meghana Madhu",
        //  position: "Project Associate",
        //  image: "meghana",
        //  desc: "Meghana is a graduate of Kakatiya University, Warangal, where she obtained her Masters degree in Biotechnology. When she came across our lab's research, her interest in science piqued and she wanted to join the team. She is excited to be a project-based student trainee, focusing on the topic of 'Transcriptional control of axon regeneration in mammalian CNS neurons.' She believes this opportunity will allow her to acquire new techniques and expand her skill set, potentially paving the way for her future scientific career in Neuroscience. During her leisure time, Meghana does oil pastel sketching and hopes to start blogging soon.",
        //  email: "meghanamadhu199@gmail.com",
        // },
      //{
      //    name: "Apoorva Atmamuri",
      //    position: "Summer Trainee",
      //    image: "apoorva",
      //    desc: "Apoorva, our youngest crew member, joined us in June 2023 as a summer trainee for 2 months. Currently she’s pursuing a B. Tech in Biotechnology at PES University, Bangalore (Batch of 2020-2024) Eternally curious,  she’s soaking up all she can in the 2 months she’s with us. Beyond the lab, she enjoys crafts, reading, classical dance, and travel.",
      //    email: "",
      //  },
      // {
      //   name: "Arupam Biswas",
      //    position: "Dissertation Student",
      //    image: "arupam",
      //    desc: "Arupam Biswas joined the lab in August 2023 as a one year dissertation student. He is the  final-year student of a five-year integrated M.Sc course (Life Sciences Major) at ISERC, Visva-Bharati, Santiniketan, India. His dissertation work is dedicated to enhancing High-Content Screening techniques to assess the impact of Transcription Factors in the context of spinal injuries. His academic interests revolve around Neuropsychiatric and Neurodegenerative Disorders. Beyond the lab, Either find him experimenting with delicious recipes in the kitchen or capturing moments of nature with his camera.",
      //    email: "arupambiswas007@gmail.com",
      //  },
      {
          name: "Netra Krishna",
          position: "Project Trainee",
          image: "netra",
          desc: "Netra (nay-th-raa) is currently a project trainee in the lab, after completing her bachelor's degree from Krea University. Her initial stint as a summer trainee in Venkatesh Lab sparked her curiosity for neuroscience as well as her motivation to do a PhD, bringing her back to where she first learnt about research. She is currently working on the in vivo mechanisms to study 3D genome changes post spinal cord injury, as well as sharpening her skills in bioinformatics and programming as she ventures into studying nucleosomes and their dynamics. When she's not in the lab, you can find her crocheting, hitting the gym, or on a run 🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️🏃‍♀️",
          email: "netrakrishna.21@gmail.com",
        },
        {
          name: "Dhanuush Balakannan",
          position: "Project Trainee",
          image: "dhanuush",
          desc: "Dhanuush joined the lab as a Project Trainee in July 2025, following his graduation from IISER Mohali. With a long-standing interest in regeneration, he sees this opportunity as a stepping stone toward pursuing a PhD, while expanding his skillset and research experience. In the lab, he is working closely on the stem cell project in spinal cord injury (SCI) models, focusing on motor and sensory behaviour and the mechanisms of recovery after stem cell transplantation. As a science enthusiast, he also contributes to preLights (The Company of Biologists), where he writes about recent preprints in biology. Beyond the lab, he enjoys trekking and watching supernatural and horror films.",
          email: "dhanuush19@gmail.com",
        },
        {
          name: "Athul Narayanayan",
          position: "Dissertation Trainee",
          image: "Athul",
          desc: "Athul joined the lab in July 2025 as a dissertation student from VIT, Vellore, where he is currently pursuing an Integrated Master’s degree in Biotechnology. His research focuses on understanding how transcription factors regulate neuronal regeneration in spinal cord injury (SCI) models, as well as developing optical clearing strategies for brain and spinal cord tissues to enable deep imaging. Outside the lab, he is passionate about football, enjoys exploring new places, and engages in light reading during his free time.",
          email: "athulskumar2003@gmail.com",
        },
        //{
        //  name: "Soupayan Banerjee",
        //  position: "Project Trainee",
        //  image: "Soupayan",
        //  desc: "Hey there, Science buffs! Soupayan is a neuro-enthusiast with a Bachelor's degree in biochemistry from University of Calcutta and Master's in forensic genetics from NLU, Kolkata. He ventured beyond his course subjects to embark on a research journey in Neuroscience at the Venkatesh Lab. But now, he is all about decoding the Transcriptional control of axon regeneration in mammalian CNS neurons, primarily focusing on how our circadian clock genes can control axon regeneration. With his growing skillsets, he aspire to do PhD in near future. When he is not pipetting, he likes to explore cafes and also experiment with cooking.",
        //  email: "banerjeesoupayan7@gmail.com",
       // },
       // {
       //   name: "Deepta Susan Beji",
       //   position: "Dissertation Trainee",
       //   image: "Deepta",
       //   desc: "Deepta, a final-year Integrated M.Sc. student in Biotechnology at VIT Vellore, recently joined the lab for her dissertation. With a passion for molecular biology and bioinformatics, she's eager to see how these fields can help unlock the secrets of the central nervous system. Deepta is part of the team which focuses on 3D genome architecture to understand the molecular mechanisms of axon regeneration. Beyond science, Deepta enjoys unwinding with some baking and a good book.",
       //   email: "deeptasusan2002@gmail.com",
       // },
       // {
       //   name: "Pratikhya",
       //   position: "Dissertation Trainee",
       //   image: "Pratikhya",
       //   desc: "Hello Science Enthusiasts! Pratikhya Acharya has joined the lab in August 2024 as a one-year dissertation student. She is a final year biology major student of Integrated BS-MS Program at Indian Institute of Science Education and Research, Berhampur, India. Her deep-seated passion for neuroscience, kindled during her coursework, has brought her to our team. Currently, She is focused on her project revolving around stem cell therapy for spinal cord injury and aims to embark on a transformative research journey with a PhD in the near future. When she is not doing science, you might catch her enjoying latest movies at the theatre or indulging in a bit of shopping",
       //   email: "pratikhyaacharya0@gmail.com",
       // },
      //  {
      //  name: "Riya Kushwaha",
      //  position: "Summer Trainee",
      //  image: "Riya",
      //  desc: "Riya joined the lab as a summer trainee in June 2024. She is pursuing her bachelors degree in life sciences from Hansraj College, University of Delhi. Her experience in the lab with cloning techniques has encouraged her to take up molecular biology for her further studies. Apart from academics she loves travelling and listening to good music.",
      //  email: "",
      //  },
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
