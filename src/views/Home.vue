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
            <div class="d-flex justify-space-around pa-3 text-center">
              <h1 color="orange lighten-5">
                Regulatory Networks Encoding Axon Growth in the Nervous System
              </h1>
            </div>
            <div class="d-flex pa-8">
              <p color="orange lighten-5 " class="pa-6 labvision">
                How is axon growth regulated during development and regeneration
                in mammals? Communication in the nervous system is achieved via
                long cables called axons which connect neurons in the brain with
                the rest of the body. Intact axons are critical for proper
                nervous system function. When injured, young neurons are
                remarkably good at regeneration and repair. In contrast, adult
                neurons fail to regenerate resulting in permanent irreversible
                nervous system damage. What molecular pathways drive the
                observed loss of regenerative capacity across development? What
                regulatory mechanisms modulate developmental axon growth? Does
                successful CNS regeneration in adult neurons require a faithful
                recapitulation of developmental mechanisms? Are there
                development independent pathways that co-ordinate repair? These
                are some of the questions we are currently tackling. To get at
                these questions, we use a combinatorial approach which includes
                Bioinformatics, Functional Genomics (Single-cell RNA-Seq,
                ATAC-Seq, Hi-C, ChIP-Seq), in vitro assays of growth, in vivo
                mouse models of injury and behavioral assessments.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col><h2 class="text-center">Research Toolkit</h2> </b-col>
        </b-row>
        <b-row class="techniques mb-5">
          <b-col
            class="mt-2 ml-4"
            cols="4"
            md="2"
            v-for="(tech, index) in techniques"
            :key="index"
          >
            <h4 class="text-center">{{ tech.text }}</h4>
            <b-img
              :src="require(`../assets/images/homepage/${tech.image}`)"
              fluid
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
export default {
  components: {
    ParticlesJS,
  },
  data() {
    return {
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
</style>
