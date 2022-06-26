<template>
  <div>
    <v-container fluid>
      <v-row class="mt-5" v-for="year in groupedData.keys()" :key="year">
        <v-col v-for="(pub, index) in groupedData.get(year)" :key="index">
          <div v-if="index == 0" class="yearStyle">{{ year }}</div>
          <v-layout class="amber lighten-5 ml-5">
            <v-list-item three-line>
              <v-list-item-content class="d-flex">
                <v-list-item-title
                  ><a target="_blank" :href="pub.URL"> {{ pub.Title }}</a>
                </v-list-item-title>
                <v-list-item-subtitle
                  v-if="pub.AuthorType === 'First'"
                  class="authorStyle"
                >
                  <span class="mainAuthor">{{ pub.Authors[0] }}</span
                  >,
                  {{ pub.Authors.slice(1).toString(" ") }}</v-list-item-subtitle
                >
                <v-list-item-subtitle v-else class="authorStyle">
                  {{ pub.Authors.slice(1).toString(" "), }},

                  <span class="mainAuthor">{{ pub.Authors[0] }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-layout>
        </v-col>
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
import { group } from "d3-array";
export default {
  data() {
    return {
      publicationData: "./publications.json",
      publications: [],
      groupedData: [],
    };
  },
  methods: {
    getData() {
      json(this.publicationData).then((data) => {
        this.publications = data;
        this.groupedData = group(data, (d) => d.Year);
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
  background: rgb(238, 217, 29);
}
a {
  text-decoration: none;
  font-size: 26px;
  font-family: "Oswald", sans-serif !important;
  color: #346225 !important;
}
.yearStyle {
  font-size: 22px;
  color: #346225;
  font-weight: bold;
}
.authorStyle {
  font-family: "Oswald", sans-serif !important;
  font-size: 18px;
}
.mainAuthor {
  font-weight: bold;
}
</style>
