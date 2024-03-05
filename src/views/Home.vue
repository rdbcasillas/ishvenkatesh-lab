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
            </b-row>
            <b-row class="pa-8">
              <b-col>
                <p color="orange lighten-5" class="pa-6 labvision">
                  <span class="vision"
                    >How is axon growth regulated during development and
                    regeneration in mammals?</span
                  >
                  Communication in the nervous system is achieved via long
                  cables called axons which connect neurons in the brain with
                  the rest of the body. Intact axons are critical for proper
                  nervous system function. When injured, young neurons are
                  remarkably good at regeneration and repair. In contrast, adult
                  neurons fail to regenerate resulting in permanent irreversible
                  nervous system damage. What molecular pathways drive the
                  observed loss of regenerative capacity across development?
                  What regulatory mechanisms modulate developmental axon growth?
                  Does successful CNS regeneration in adult neurons require a
                  faithful recapitulation of developmental mechanisms? Are there
                  development independent pathways that co-ordinate repair?
                  These are some of the questions we are currently tackling. To
                  get at these questions, we use a combinatorial approach which
                  includes Bioinformatics, Functional Genomics (Single-cell
                  RNA-Seq, ATAC-Seq, Hi-C, ChIP-Seq), in vitro assays of growth,
                  in vivo mouse models of injury and behavioral assessments.
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col><h2 class="text-center">Research Toolkit</h2> </b-col>
        </b-row>
        <b-row class="techniques mb-5">
          <b-col
            class="mt-2 mr-2 ml-4 mb-2"
            cols="5"
            sm="3"
            md="2"
            v-for="(tech, index) in techniques"
            :key="index"
          >
            <h4 class="text-center">{{ tech.text }}</h4>
            <b-img
              :src="require(`../assets/images/homepage/${tech.image}`)"
              fluid
              class="ml-2"
              width="160"
              height="160"
            ></b-img>
            <!-- <b-card
              :title="tech.text"
              :img-src="require(`../assets/images/homepage/${tech.image}`)"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
            </b-card> -->
          </b-col>
        </b-row>
        <hr />
        <b-row class="mt-12 bottompage mb-6">
          <b-col cols="7" md="8" class="labnews">
            <h3 class="text-center">LAB NEWS</h3>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Feb 2024</v-card-title>
              <v-card-text>
                Ish gave a inivted talk on regeneration at InStem, Bangalore 
              </v-card-text>
              <v-card-text>Univeristy of Hyderabad invited Ish for a talk on regeneration</v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Feb 2024</v-card-title>
              <v-card-text>
                Ish and entire lab attended CMMDR2024 and presented posters
              </v-card-text>
              <v-card-text>
                Ish gave her Talk on "Decoding the molecular blueprint of regeneration in mammalian CNS neuron"
              </v-card-text>  
              <v-card-text>
                Anisha won the best poster award
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Feb 2024</v-card-title>
              <v-card-text>
                Dr. Shringika recived SERB NPDF, will be joining our lab soon !
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Feb 2024</v-card-title>
              <v-card-text>
                Katha Sanyal joined back as Project-associate !
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Jan 2024</v-card-title>
              <v-card-text>
                Sneha Manjunath joined back as Project-associate !
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Nov 2023</v-card-title>
              <v-card-text>
                Ish gave a talk "Decoding the molecular blueprint of regeneration in mammalian CNS neurons"
                at IAScAM2023, Goa<a href>(https://twitter.com/IAScBng/status/1721026522448900327)</a>
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Oct 2023</v-card-title>
              <v-card-text>
                Attended 41st IAN conference at Jiwaji
                Univeristy,Gwalior. Anisha S Menon Won 
                the Best Poster Presentation Award. 
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Sep 2023</v-card-title>
              <v-card-text>
                Lab puts together a Know your Brain exhibit for Open Day
                And won 2nd Prize for the exhibit
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Aug 2023</v-card-title>
              <v-card-text>
                Lab puts together a Genomic exhibit for <b>one week one lab </b> from CSIR  
              </v-card-text>
              <v-card-text>
                Arupam Biswas Joined us - one year Dissertation Student
                in August, 2023
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Jun 2023</v-card-title>
              <v-card-text>
                Dhruva Kesireddy joined us  - Project Associate 
                in June 2022.
              </v-card-text>
              <v-card-text>
                Meghana Madhu  joined us  - Project Associate 
                in June 2022.
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Apr 2023</v-card-title>
              <v-card-text>
              Celebrating One Year of Innovation: Venkatesh Lab Marks its First Anniversary with an Inaugural Lab Retreat
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Mar 2023</v-card-title>
              <v-card-text>
                Anisha S Menon joined as the 2nd PhD student.
            </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Feb 2023</v-card-title>
              <v-card-text>
                Sneha Manjunath joins us again in her new avatar - Project
                Associate in February 2022. Sneha will be prepping custom AAVs
                and involved in all things cloning and genomics!
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Jan 2023</v-card-title>
              <v-card-text>
                Katha Sanyal comes back as a dissertation student. Welcome back
                Katha, we missed you! She will be crispr-ing growth inhibiting
                Transcription factors as part of her project!
              </v-card-text>
              <v-card-text>
                Ishan Dutta wraps up his dissertation project and presented a
                poster in Jan 2023. All the best Ishan!
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Dec 2022</v-card-title>
              <v-card-text>
                Yogesh presents his research at IAN 2022 and won the first prize
                for best poster presentation! Congratulations Yogesh!
              </v-card-text>
             <v-card-text>
                Sanskruti Karwa joins the lab as a dissertee in December 2022!
                She will be optimizing models of spinal injuries in the lab.
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Nov 2022</v-card-title>
              <v-card-text>
                Manoj Kumar joins the lab as a first postdoc! Welcome Manoj!
              </v-card-text>
              <v-card-text>
                Ish, Sriram and Vatsal win the India Bioscience grant for
                scicomm outreach.
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>Sept 2022</v-card-title>
              <v-card-text>
                Lab puts together a nervous system exhibit for CCMB Open Day!
                Some pics <b-link to="/gallery">here</b-link>.
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>August 2022</v-card-title>
              <v-card-text>
                Ishan Dutta joins the lab as a dissertee in August 2022.
              </v-card-text>
              <v-card-text>
                Shaikh Shafiulla joins the lab as a Project-based trainee in
                August 2022.
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>June 2022</v-card-title>
              <v-card-text>
                Katha Sanyal joins the lab as a Summer Trainee, Welcome
                Katha!</v-card-text
              >
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>May 2022</v-card-title>
              <v-card-text>
                Sneha Manjunath joins the lab as a Project based trainee,
                welcome Sneha!
              </v-card-text>
              <v-card-text>
                Sanjana Sinha rotates in the lab as a guest worker, welcome
                Sanjana!
              </v-card-text>
            </v-card>
            <v-card elevation="2" class="mt-2">
              <v-card-title>April 2022</v-card-title>
              <v-card-text>
                Ish activates her Ramanujan Fellowship, thanks to SERB for
                funding our work!
              </v-card-text>
            </v-card>
          </b-col> 
          <b-col cols="5" md="4">
            <h3 class="text-center">Ish's Tweets</h3>
            <v-card class="overflow-auto tweetdiv">
              <a
                class="twitter-timeline"
                href="https://twitter.com/Ishwariya13?ref_src=twsrc%5Etfw"
                >Tweets by Ishwariya13</a
              >
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
    };
  },
  mounted() {
    console.log(this.news.split("\n"));
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
h2,
h3,
h4,
h5 {
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
  height: 500px;
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
