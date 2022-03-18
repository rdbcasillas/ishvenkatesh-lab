<template>
  <div>
    <v-app-bar color="orange lighten-5 ">
      <v-img
        :src="require('../assets/ishlab-icon.png')"
        class="my-3"
        max-height="73"
        max-width="78"
        contain
      />
      <div id="title">
        <v-toolbar-title>Venkatesh Lab</v-toolbar-title>
        <!-- <v-toolbar-subtitle class="subtitle"
          >Molecular Neuroscience @ CCMB</v-toolbar-subtitle
        > -->
      </div>
      <v-spacer></v-spacer>
      <v-container>
        <v-row class="text-right navbar-row text-h4">
          <v-col class="text-h6 font-weight-bold">
            <v-btn color="green darken-4" plain> Research </v-btn>
            <v-btn color="green darken-4" plain> Publications </v-btn>
            <v-btn color="green darken-4" plain> Funding </v-btn>
            <v-btn color="green darken-4" plain> Team </v-btn>
            <v-btn color="green darken-4" plain> Positions </v-btn>
            <v-btn color="green darken-4" plain> Resources </v-btn>
            <v-btn color="green darken-4" plain> Contact </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.title {
  display: flex;
  flex-direction: column;
}
.v-toolbar__title {
  font-size: 38px !important;
  margin-bottom: 0 !important;
  line-height: 1 !important;
  font-family: "Oswald", sans-serif !important;
}
.subtitle {
  font-size: 12px;
}

.v-btn {
  font-size: 16px !important;
  font-weight: bold;
  font-family: "Oswald", sans-serif !important;
}
</style>
