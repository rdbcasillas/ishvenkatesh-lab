<template>
  <div>
    <b-container>
      <b-row class="mt-4">
        <b-col>
          <b-img-lazy
            thumbnail
            fluid-grow
            alt="Tree outside our building"
            :src="require(`../assets/images/campusbird.jpg`)"
          >
          </b-img-lazy>
        </b-col>
        <b-col cols="8" md="6">
          <h4>Contact Us</h4>
          <p>
            Our lab is located in the fifth floor of the R&D Building in the
            main campus of CSIR-CCMB.
          </p>
          <p>To get in touch with Dr.Ishwariya Venkatesh:</p>
          <ul class="list-group">
            <li class="list-group-item">Email: ishwariya@ccmb.res.in</li>
            <li class="list-group-item">Phone: 040-27192825</li>
            <li class="list-group-item">
              Twitter:
              <a target="_blank" href="https://twitter.com/Ishwariya13">
                @Ishwariya13</a
              >
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h4 {
  font-family: "Oswald", sans-serif !important;
  font-weight: bold;
  color: #346225 !important;
}
p {
  font-family: "Oswald", sans-serif !important;
  color: #346225 !important;
  font-size: 19px;
}
</style>
