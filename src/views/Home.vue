<template>
  <div>
    <ParticlesJS> </ParticlesJS>
    <div class="labinfo" color="orange lighten-5">
      <b-container>
        <b-row>
          <div class="emptyspace"></div>
        </b-row>
        <b-row>
          <b-col>
            <b-row class="d-flex justify-space-around pa-3 text-center">
              <h1 color="orange lighten-5">
                Regulatory Networks Encoding Axon Growth in the Nervous System
              </h1>
              <b-row>
                <b-col>
                  <div class="video-container">
                    <iframe width="720" height="480" src="https://www.youtube.com/embed/4te7sQQBl1g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </b-col>
              </b-row>
            </b-row>
            <b-row class="pa-8">
              <b-col>
                <p color="orange lighten-5" class="pa-6 labvision">
                  <span class="vision">How is axon growth regulated during development and regeneration in mammals?</span>
                  Communication in the nervous system is achieved via long cables called axons which connect neurons in the brain with the rest of the body. Intact axons are critical for proper nervous system function. When injured, young neurons are remarkably good at regeneration and repair. In contrast, adult neurons fail to regenerate resulting in permanent irreversible nervous system damage. What molecular pathways drive the observed loss of regenerative capacity across development? What regulatory mechanisms modulate developmental axon growth? Does successful CNS regeneration in adult neurons require a faithful recapitulation of developmental mechanisms? Are there development independent pathways that co-ordinate repair? These are some of the questions we are currently tackling. To get at these questions, we use a combinatorial approach which includes Bioinformatics, Functional Genomics (Single-cell RNA-Seq, ATAC-Seq, Hi-C, ChIP-Seq), in vitro assays of growth, in vivo mouse models of injury and behavioral assessments.
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col><h2 class="text-center">Research Toolkit</h2></b-col>
        </b-row>
        <b-row class="techniques mb-5">
          <b-col class="mt-2 mr-2 ml-4 mb-2" cols="5" sm="3" md="2" v-for="(tech, index) in techniques" :key="index">
            <h4 class="text-center">{{ tech.text }}</h4>
            <b-img :src="require(`../assets/images/homepage/${tech.image}`)" fluid class="ml-2" width="160" height="160"></b-img>
          </b-col>
        </b-row>
        <hr />
        <b-row class="mt-12 bottompage mb-6">
          <b-col cols="7" md="8" class="labnews">
            <h3 class="text-center">LAB NEWS</h3>
            
            <div v-for="(item, index) in recentNews" :key="'recent-'+index">
              <v-card elevation="2" class="mt-2">
                <v-card-title>{{ item.date }}</v-card-title>
                <v-card-text v-html="item.content"></v-card-text>
              </v-card>
            </div>

            <v-btn block class="mt-4 show-more-btn" @click="showOlderNews = !showOlderNews">
              {{ showOlderNews ? 'Show Less' : 'View Older News' }}
            </v-btn>

            <div v-if="showOlderNews">
              <div v-for="(item, index) in olderNews" :key="'older-'+index">
                <v-card elevation="2" class="mt-2">
                  <v-card-title>{{ item.date }}</v-card-title>
                  <v-card-text v-html="item.content"></v-card-text>
                </v-card>
              </div>
            </div>
          </b-col>
          
          <b-col cols="5" md="4">
            <h3 class="text-center">Ish's Tweets</h3>
            <v-card class="overflow-auto tweetdiv">
              <div class="elfsight-app-49b277f8-63cb-4997-abaa-e683d5b8421c" data-elfsight-app-lazy></div>
            </v-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ParticlesJS from "../components/ParticlesJS.vue";
import news from "@/assets/news.txt";

export default {
  components: {
    ParticlesJS,
  },
  data() {
    return {
      showOlderNews: false,
      news: news,
      techniques: [
        {
          text: "Mouse models of injury",
          image: "mice.png",
        },
        {
          text: "Molecular Biology",
          image: "molbio.png",
        },
        {
          text: "Single Cell Genomics",
          image: "scg.png",
        },
        {
          text: "Cell Culture",
          image: "cellcult.png",
        },
        {
          text: "Bioinformatics",
          image: "bioinfo.png",
        },
      ],
      // ... (Your existing recentNews and olderNews arrays)
      recentNews: [
        {
          "date": "Nov",
          "content": "<h3>November was a huge month for conference participation and awards at IAN - 2025!</h3>\n<ul>\n<li><b>Yogesh and Katha</b> gave a short talk at the IAN - 2025 conference.</li>\n  <li><b>Rutuja</b> won the <b>Best Poster Award</b> at IAN - 2025.</li>\n  <li><b>Shringika</b> won the <b>Travel Award</b> at IAN - 2025.</li>\n</ul>"
        },
        {
          "date": "Oct",
          "content": "We welcomed <b>Aarthi</b> to the lab and the research team."
        },
        {
          "date": "Sep",
          "content": "<h3>September was a busy month!</h3>\n<ul>\n  <li>The team proudly <b>won the Best Exhibit Award at CCMB</b>!</li>\n  <li>We welcomed <b>Faheem</b> to the group, adding new expertise to our growing team.</li>\n  <li>We held a heartfelt <b>farewell for Meghana</b> as she moved on to her next venture.</li>\n  <li><b>Ish</b> shared his knowledge on advanced microscopy by giving a talk at <b>CCMB</b>.</li>\n</ul>"
        },
        {
          "date": "Aug",
          "content": "<b>Praveen</b> officially joined the research group this month."
        },
        {
          "date": "Jul",
          "content": "The lab expanded significantly with the arrival of <b>Netra, Athul, and Dhanuush</b>."
        },
        {
          "date": "May",
          "content": "<b>Rutuja and Yogesh</b> were recognized for their work, winning the <b>Best Poster Award at SNCI</b>."
        },
        {
          "date": "April",
          "content": "<h3>April Speaking Engagements</h3>\n<ul>\n  <li><b>Ish</b> delivered an insightful presentation at the <b>PSG talk</b>.</li>\n  <li>A great honor for <b>Ish</b>, who was invited to serve as a <b>Chief Guest at Bannari Amman Institute of Technology</b>.</li>\n</ul>"
        },
        {
          "date": "Mar",
          "content": "<b>Ish</b> traveled to Odisha to give an invited talk at <b>Utkal University</b>."
        }
      ],
        olderNews: [
          {
          date: 'Jan 2025',
          content: 'Anisha cleared her Compre exams and now she is officially promoted to Senior Research Fellow!'
        },
          {
          date: 'Dec 2024',
          content: 'Ish wraps up the year with an invited talk at NBRC - Delhi'
        },
        {
          date: 'Nov 2024',
          content: 'lab is in full attendance at IAN 2024. We bag three prizes - 2 travel awards and 1 poster prize. See tweet for more <a href="https://x.com/Ishwariya13" target="_blank" rel="noopener noreferrer">click here</a>'
        },
        {
          date: 'Oct 2024',
          content: 'We win a CCMB open day prize second year in a row :star-struck:'
        },
        {
          date: 'Sep 2024',
          content: 'We put up our annual stall for CCMB open day centered on all things Neuroscience! See more <a href="https://x.com/Ishwariya13" target="_blank" rel="noopener noreferrer">here</a>'
        },
        {
          date: 'Aug 2024',
          content: `<h3>A whole lot of news to celebrate!</h3>
          <ul>
            <li>Manoj our senior project associate is promoted to a Research Associate II thanks to our DBT funding!</li>
            <li>Two former short term trainees promoted to Project Associates:
              <ul>
                <li>Meghana Konda</li>
                <li>Dhruva Kesireddy</li>
              </ul>
            </li>
            <li>Three new 1 year trainees joining us:
              <ul>
                <li>Soupayan Banerjee</li>
                <li>Deepta Beji</li>
                <li>Pratikhya Acharya</li>
              </ul>
            </li>
            <li>Yogesh cleared his Compre exams and is now officially promoted to Senior Research Fellow!</li>
          </ul>`
        },
        {
          date: 'July 2024',
          content: 'Shringika Soni wins the She Inspires award from India Bioscience! Congrats Shringika <a href="https://x.com/Ishwariya13" target="_blank" rel="noopener noreferrer">click here</a>'
        },
        {
          date: 'June 2024',
          content: 'Two Summer interns join us! Netra Krishna from KREA and Riya Kushawa (through the Indian Academy of Sciences) from Delhi University!<br><br>Lab is awarded a DBT grant! We are now funded to look at the role of transcription factors in the regulation of axon growth and regeneration!'
        },
        {
          date: 'May 2024',
          content: 'Lab move! We move to a bigger and our more permanent space!'
        },
        {
          date: 'April 2024',
          content: 'CSIR Neuromission grant is awarded to us! This will allow us to develop clinically relevant small molecule compounds to improve outcomes after spinal injuries<br><br>Lab goes for our second annual retreat - see this tweet for more <a href="https://x.com/Ishwariya13/status/1776998423880953864" target="_blank" rel="noopener noreferrer">click here</a>'
        },
        {
          date: 'Mar 2024',
          content: 'Shringika is awarded a SERB NPDF and joins the lab as a postdoc - Welcome aboard Shringika!<br><br>Rutuja Pendharkar joins us as our 3rd PhD student. She will be helming the Functional recovery project using stem cells! Welcome aboard Rutuja!'
        },
        {
          date: 'Feb 2024',
          content: 'Ish gave an invited talk at InSDB 2024 @ NCBS/inSTEM<br><br>Ish gave a plenary talk at Bioanveshna 2024 held at University of Hyderabad<br><br>Ish and entire lab attended CMMDR2024 and presented posters<br><br>Ish gave her Talk on "Decoding the molecular blueprint of regeneration in mammalian CNS neuron"<br><br>Anisha won the best poster award at CMMDR2024<br><br>Dr. Shringika received SERB NPDF<br><br>Katha Sanyal joined back as Project-associate!'
        },
        {
          date: 'Jan 2024',
          content: 'Sneha Manjunath joined back as Project-associate!'
        },
        {
          date: 'Nov 2023',
          content: `Ish gave an invited talk at the Indian Academy of Sciences meeting held in Goa in November 2023, her first meeting as an associate of the academy<br><br>In November 2023, Ish gave an invited talk at The India Investigator Network meeting held at CCMB`
        },
        {
          date: 'Oct 2023',
          content: 'Attended 41st IAN conference at Jiwaji University,Gwalior. Anisha S Menon Won the Best Poster Presentation Award.'
        },
        {
          date: 'Sep 2023',
          content: 'Lab puts together a Know your Brain exhibit for Open Day And won 2nd Prize for the exhibit'
        },
        {
          date: 'Aug 2023',
          content: 'Lab puts together a Genomic exhibit for <b>one week one lab </b> from CSIR<br><br>Arupam Biswas Joined us - one year Dissertation Student in August, 2023'
        },
        {
          date: 'Jun 2023',
          content: 'Dhruva Kesireddy joined us - Project Associate in June 2022.<br><br>Meghana Madhu joined us - Project Associate in June 2022.'
        },
        {
          date: 'Apr 2023',
          content: 'Celebrating One Year of Innovation: Venkatesh Lab Marks its First Anniversary with an Inaugural Lab Retreat'
        },
        {
          date: 'Mar 2023',
          content: 'Anisha S Menon joined as the 2nd PhD student.'
        },
        {
          date: 'Feb 2023',
          content: 'Sneha Manjunath joins us again in her new avatar - Project Associate in February 2022. Sneha will be prepping custom AAVs and involved in all things cloning and genomics!'
        },
        {
          date: 'Jan 2023',
          content: 'Katha Sanyal comes back as a dissertation student. Welcome back Katha, we missed you! She will be crispr-ing growth inhibiting Transcription factors as part of her project!<br><br>Ishan Dutta wraps up his dissertation project and presented a poster in Jan 2023. All the best Ishan!'
        },
        {
          date: 'Dec 2022',
          content: 'Yogesh presents his research at IAN 2022 and won the first prize for best poster presentation! Congratulations Yogesh!<br><br>Sanskruti Karwa joins the lab as a dissertee in December 2022! She will be optimizing models of spinal injuries in the lab.'
        },
        {
          date: 'Nov 2022',
          content: 'Manoj Kumar joins the lab as a first postdoc! Welcome Manoj!<br><br>Ish, Sriram and Vatsal win the India Bioscience grant for scicomm outreach.'
        },
        {
          date: 'Sept 2022',
          content: 'Lab puts together a nervous system exhibit for CCMB Open Day! Some pics <b-link to="/gallery">here</b-link>.'
        },
        {
          date: 'August 2022',
          content: 'Ishan Dutta joins the lab as a dissertee in August 2022.<br><br>Shaikh Shafiulla joins the lab as a Project-based trainee in August 2022.'
        },
        {
          date: 'June 2022',
          content: 'Katha Sanyal joins the lab as a Summer Trainee, Welcome Katha!'
        },
        {
          date: 'May 2022',
          content: 'Sneha Manjunath joins the lab as a Project based trainee, welcome Sneha!<br><br>Sanjana Sinha rotates in the lab as a guest worker, welcome Sanjana!'
        },
        {
          date: 'April 2022',
          content: 'Ish activates her Ramanujan Fellowship, thanks to SERB for funding our work!'
        }
      ]
    };
  },
  methods: {
    loadElfsightScript() {
      // Check if the script is already loaded
      if (!document.querySelector('script[src*="elfsightcdn.com"]')) {
        const script = document.createElement('script');
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.head.appendChild(script);
      }
    }
  },
  mounted() {
    console.log(this.news.split("\n"));
    // Load the Elfsight script when the component is mounted
    this.loadElfsightScript();
  },
};
</script>

<style scoped>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(6, 44, 2);
  background-repeat: no-repeat;
}
.labinfo {
  position: relative;
}
h1 {
  color: oldlace;
  font-size: 60px;
  font-family: "Oswald", sans-serif;
}
h2, h3, h4, h5 {
  color: snow;
  font-family: "Oswald", sans-serif;
}
p {
  color: oldlace;
}
.emptyspace {
  height: 50px;
}
.labvision {
  font-size: 20px !important;
  text-align: justify;
}
.vision {
  font-weight: bold;
  font-style: italic;
}
.tweetdiv {
  height: 800px;
  width: 400px;
}
.v-card__title {
  color: snow !important;
  font-size: 24px !important;
}
.v-card__text {
  font-family: "Oswald", sans-serif !important;
  color: snow !important;
  font-size: 22px !important;
  font-weight: bolder;
  opacity: 1 !important;
}
.techniques {
  border: 0.5px solid;
  border-color: snow;
}
.theme--light.v-sheet {
  background-color: #193311;
  border-color: #ffffff;
  color: snow;
}

.labnews > .v-sheet {
  opacity: 0.6;
}
@media (max-width: 600px) {
  .labvision {
    text-align: center;
  }
}
@media (max-width: 600px) {
  .techniques {
    border: 0px;
  }
}
</style>