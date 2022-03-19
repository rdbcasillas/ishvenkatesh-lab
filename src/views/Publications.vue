<template>
  <div>
    <v-container fluid>
      <v-row class="pb-8">
        <v-layout class="amber lighten-5">
          <v-flex class="d-flex justify-center" md12>
            <h2>PUBLICATIONS</h2>
          </v-flex>
        </v-layout>
      </v-row>
      <v-row v-for="pub in publications" :key="pub">
        <v-layout class="amber lighten-5">
          <v-flex class="d-flex justify-center" md12>
            <v-list-item three-line>
              <v-list-item-content class="d-flex justify-center" md12>
                <v-list-item-title
                  ><a href="https://google.com">{{ pub.Title }}</a>
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  pub.Authors.toString()
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-flex>
        </v-layout>
      </v-row>
      <!-- <v-row>
        <v-hover v-slot="{ hover }">
          <v-list-item
            :class="
              hover
                ? 'lime lighten-1 font-weight-bold'
                : 'lime lighten-4 font-weight-bold'
            "
            one-line
          >
            <div>
              <v-list-item-content>
                <v-list-item-title v-for="pub in publications" :key="pub">
                  {{ pub.Title }}
                </v-list-item-title>
              </v-list-item-content>
            </div>
          </v-list-item>
        </v-hover>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import { json } from "d3-fetch";
export default {
  data() {
    return {
      publicationData: "./publications.json",
      publications: [],
    };
  },
  methods: {
    getData() {
      json(this.publicationData).then((data) => {
        console.log(data);
        this.publications = data;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.pubheader {
  height: 20px;
  background: steelblue;
}
a:hover {
  text-decoration: none;
}
</style>
