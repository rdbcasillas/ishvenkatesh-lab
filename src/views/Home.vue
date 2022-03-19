<template>
  <div>
    <ParticlesJS> </ParticlesJS>
    <div class="labinfo" color="orange lighten-5 ">
      <b-container>
        <b-row>
          <div class="emptyspace"></div>
        </b-row>
        <b-row>
          <div class="d-flex justify-space-around pa-8">
            <h1 color="orange lighten-5">
              Regulatory Networks Encoding Axon Regeneration in the Nervous
              System
            </h1>
          </div>
          <div class="d-flex justify-space-around pa-8">
            <p color="orange lighten-5" class="pa-8">
              We are a digital PR firm that specializes in using online tools to
              create and execute smart messaging strategies that enhance
              signal-to-noise and reach target audiences. Our approach is
              grounded in the scientific method, fueled by data, and catalyzed
              by thoughtful storytelling. We build brand awareness for
              scientists, companies, non-profits, and executives. The Stellate
              team is as diverse as the clients we work with— scientists,
              designers, writers, web developers, and media specialists— working
              together to ensure your stories are heard, shared, and remembered.
            </p>
          </div>
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
};
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 70%;
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
</style>
