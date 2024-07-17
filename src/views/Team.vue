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
            <span class="mt-3 ml-2 text-justify persondesc">{{
              person.desc
            }}</span>
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
           position: "Research Associate",
           image: "Shringika",
           desc: "Dr. Shringika Soni, with her Integrated M. Tech in Cognitive Neuroscience and a notable dissertation at NIMHANS, Bengaluru, has significantly contributed to neurodevelopmental disorder research at PGIMER Chandigarh. Completing her Ph.D. in 2022 from Amity University, Noida, with a focus on aptamer-based diagnostics for psychoactive drug detection, she furthered her expertise as a Senior Project Associate at DST-TEC Centre, University of Hyderabad, Hyderabad. In March 2024, Dr. Soni embarked on an inspiring journey at the Venkatesh lab as SERB-nPDF fellow, focusing on stem cell and gene therapy for spinal cord injury animal model. Her hobbies, including cooking, sketching, and exploring new places, reflect the creativity she brings to her pioneering research. With a rich scientific background, Dr. Soni is expected to deliver ground breaking data, promising to elevate the lab to greater heights.",
           email: "shringikasoni15@gmail.com",
         },
        {
          name: "Manoj Kumar",
          position: "Senior Project Associate",
          image: "manoj",
          desc: "Manojkumar joined the lab as a Senior Project Associate in October 2022. He has an integrated M.Tech degree in Bioinformatics from the Bharathidhasan University, Trichy. Following that, he completed his doctoral training under the guidance of Dr. Bharanidharan at Aravind Medical Research Foundation (Under SASTRA Univeristy), Madurai. During his Ph.D, he has developed a tool that filters and prioritizes pathogenic variants specific to eye disease. He is the go-to person for all flavors of Bioinformatics analyses in the lab from NGS to single-cell genomics and everything in between. In the lab, Manoj is also the one Ish goes to first with most of her (only sometimes crazy :D) ideas - from rigging treadmills for mice from scratch to wanting to try out new algorithms the same day it’s published,  to saving Ish with computer hiccups the day of her talks, he handles it all with a smile and gets it done! Outside of the lab his hobbies include Photography, Wildlife conservation, Travelling, and Gaming but importantly cooking, and he shares the output of his cooking experiments generously with the lab members!",
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
          desc: "Anisha S. Menon is a PhD student and has been a member of the lab since March 2023. She holds a Bachelor's degree in Zoology from Vimala College, Kerala (2018), and a Master's degree in Zoology from St. Joseph's College, Kerala (2020). Her research focuses on the fascinating field of epigenetic regulation of axon regeneration and 3D genome. Anisha investigates the intricate mechanisms underlying the ability of neurons to repair and regrow their axons after injury. Through the study of epigenetic modifications and the dynamic 3D genome architecture, she aims to unravel the molecular processes that drive axon regeneration. In addition to her scientific pursuits, Anisha has a passion for stargazing and cooking during her leisure time. Exploring the night sky and experimenting with new recipes bring her joy and provide a much-needed balance to her research endeavors.",
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
          name: "Sneha Manjunath",
          position: "Project Associate",
          image: "sneha2",
          desc: "Sneha joined the lab as a Project-based trainee in May of 2022. She did her Bachelors in Mount Carmel, Bangalore majoring in Biotechnology, Chemistry, and Zoology (Batch of 2019). She has a Master's degree in Genetics and Genomics from The University of Perth, Western Australia (Batch of 2021). Her broad research interests are in Genetics and Neurobiology. She’s a cloning whiz in the lab who can make any project work and has trained everyone in the lab! Outside of the lab, she loves to cook and watch movies. Post her stint here, she wants to launch a biotech start up that caters to researcher needs in India. She handles lab ups and downs like a champ but She’s also the one who leaves cupcakes for Ish on bad science days (for which Ish is always grateful) :D",
          email: "snehaamanjunath28@gmail.com",
        },
       {
          name: "Katha Sanyal",
          position: "Project Associate",
          image: "katha2",
          desc: "Katha Sanyal is a current master's student at St. Thomas College, Bhilai. Her journey from being a summer trainee to a dissertation trainee in the lab has been extraordinary. She is driving a project centered on CRISPR-based knockdown of inhibitory factors in the context of regeneration. The enthusiasm of her labmates has fueled her interest in neuroscience, inspiring her to pursue a Ph.D. in this field. Immersing herself in the world of neuroscience has been a transformative experience for Katha. She has been exposed to cutting-edge research and has had the opportunity to contribute to exciting projects that have deepened her understanding of the subject. The lab has become her second home, providing a space where she can explore her curiosity and challenge herself to expand the boundaries of knowledge. Apart from her academic pursuits, Katha enjoys exploring new places with friends and finding joy in cooking dinner. This experience has truly ignited her passion for neuroscience and has significantly influenced both her academic and personal endeavors.",
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
          name: "Meghana Madhu",
          position: "Project Associate",
          image: "meghana",
          desc: "Meghana is a graduate of Kakatiya University, Warangal, where she obtained her Masters degree in Biotechnology. When she came across our lab's research, her interest in science piqued and she wanted to join the team. She is excited to be a project-based student trainee, focusing on the topic of 'Transcriptional control of axon regeneration in mammalian CNS neurons.' She believes this opportunity will allow her to acquire new techniques and expand her skill set, potentially paving the way for her future scientific career in Neuroscience. During her leisure time, Meghana does oil pastel sketching and hopes to start blogging soon.",
          email: "meghanamadhu199@gmail.com",
        },
      //{
      //    name: "Apoorva Atmamuri",
      //    position: "Summer Trainee",
      //    image: "apoorva",
      //    desc: "Apoorva, our youngest crew member, joined us in June 2023 as a summer trainee for 2 months. Currently she’s pursuing a B. Tech in Biotechnology at PES University, Bangalore (Batch of 2020-2024) Eternally curious,  she’s soaking up all she can in the 2 months she’s with us. Beyond the lab, she enjoys crafts, reading, classical dance, and travel.",
      //    email: "",
      //  },
       {
          name: "Arupam Biswas",
          position: "Dissertation Student",
          image: "arupam",
          desc: "Arupam Biswas joined the lab in August 2023 as a one year dissertation student. He is the  final-year student of a five-year integrated M.Sc course (Life Sciences Major) at ISERC, Visva-Bharati, Santiniketan, India. His dissertation work is dedicated to enhancing High-Content Screening techniques to assess the impact of Transcription Factors in the context of spinal injuries. His academic interests revolve around Neuropsychiatric and Neurodegenerative Disorders. Beyond the lab, Either find him experimenting with delicious recipes in the kitchen or capturing moments of nature with his camera.",
          email: "arupambiswas007@gmail.com",
        },
        {
          name: "Soupayan Banerjee",
          position: "Project Trainee",
          image: "Soupayan",
          desc: "Hey there, Science buffs! Soupayan is a neuro-enthusiast with a Bachelor's degree in biochemistry from University of Calcutta and Master's in forensic genetics from NLU, Kolkata. He ventured beyond his course subjects to embark on a research journey in Neuroscience at the Venkatesh Lab. But now, he is all about decoding the Transcriptional control of axon regeneration in mammalian CNS neurons, primarily focusing on how our circadian clock genes can control axon regeneration. With his growing skillsets, he aspire to do PhD in near future. When he is not pipetting, he likes to explore cafes and also experiment with cooking.",
          email: "banerjeesoupayan7@gmail.com",
        },
        {
          name: "Deepta Susan Beji",
          position: "Dissertation Trainee",
          image: "Deepta",
          desc: "Deepta, a final-year Integrated M.Sc. student in Biotechnology at VIT Vellore, recently joined the lab for her dissertation. With a passion for molecular biology and bioinformatics, she's eager to see how these fields can help unlock the secrets of the central nervous system. Deepta is part of the team which focuses on 3D genome architecture to understand the molecular mechanisms of axon regeneration. Beyond science, Deepta enjoys unwinding with some baking and a good book.",
          email: "deeptasusan2002@gmail.com",
        },
        {
          name: "Riya Kushwaha",
          position: "Summer Trainee",
          image: "Riya",
          desc: "Riya joined the lab as a summer trainee in June 2024. She is pursuing her bachelors degree in life sciences from Hansraj College, University of Delhi. Her experience in the lab with cloning techniques has encouraged her to take up molecular biology for her further studies. Apart from academics she loves travelling and listening to good music.",
          email: "",
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
@media (max-width: 600px) {
  .persondesc {
    text-align: left !important;
  }
}
.personbox {
  border: 0.5px dotted rgb(18, 66, 26);
}
</style>
