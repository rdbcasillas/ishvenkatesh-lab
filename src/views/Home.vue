<template>
  <div>
    <ParticlesJS> </ParticlesJS>
    <div class="labinfo" color="orange lighten-5 ">
      <v-container>
        <v-row>
          <div class="emptyspace"></div>
        </v-row>
        <v-row>
          <v-col>
            <div class="d-flex justify-space-around pa-6">
              <h1 color="orange lighten-5">
                Regulatory Networks Encoding Axon Growth in the Nervous System
              </h1>
            </div>
            <div class="d-flex pa-8">
              <p color="orange lighten-5 " class="pa-6 text-subtitle-1">
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
          </v-col>
        </v-row>

        <v-row class="mt-5 bottompage">
          <v-col cols="7">
            <h4 class="text-center">LAB NEWS</h4>
            <v-card elevation="2">
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
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="3">
            <h5>Dr. Venkatesh's Twitter feed</h5>
            <div class="overflow-auto tweetdiv">
              <a
                class="twitter-timeline"
                href="https://twitter.com/Ishwariya13?ref_src=twsrc%5Etfw"
                >Tweets by Ishwariya13</a
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ParticlesJS from "../components/ParticlesJS.vue";
export default {
  components: {
    ParticlesJS,
  },
};
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 50%;
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
p {
  color: oldlace;
}
.emptyspace {
  height: 50px;
}
.tweetdiv {
  height: 500px;
}
.v-card__text {
  font-family: "Oswald", sans-serif !important;
  color: #346225 !important;
  font-size: 19px !important;
}
</style>
