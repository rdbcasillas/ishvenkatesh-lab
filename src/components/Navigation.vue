<template>
  <div>
    <div>
      <b-navbar toggleable="lg" variant="info">
        <b-img
          fluid
          width="60px"
          :src="require('../assets/ishlab-icon.png')"
          class="d-inline-block align-top"
          alt="Kitten"
        />
        <b-navbar-brand to="/"
          >Laboratory of Axon Growth & Regeneration at CSIR-CCMB</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/publications" exact-active-class="active"
              >PUBLICATIONS</b-nav-item
            >
            <b-nav-item to="/funding" exact-active-class="active"
              >FUNDING</b-nav-item
            >
            <b-nav-item to="/team" exact-active-class="active">TEAM</b-nav-item>
            <b-nav-item to="/gallery" exact-active-class="active"
              >GALLERY</b-nav-item
            >
            <b-nav-item to="/positions" exact-active-class="active"
              >POSITIONS</b-nav-item
            >
            <b-nav-item
              target="_blank"
              href="https://docs.google.com/document/d/1MidvYKM1vxX2XK6MjtpegF370Rwq50Kc72tBSYR9-Ko/edit?usp=sharing"
            >
              RESOURCES
              <b-icon scale="0.5" icon="box-arrow-up-right"></b-icon>
            </b-nav-item>
            <b-nav-item to="/contact" exact-active-class="active"
              >CONTACT</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
.v-btn--active {
  font-weight: bold !important;
  font-size: 20px !important;
}
nav.bg-info {
  background-color: #fff3e0 !important;
  color: rgba(0, 0, 0, 0.87) !important;
  font-family: "Oswald", sans-serif !important;
}
.nav-item {
  margin: 6px !important;
  font-size: 20px;
}
a.nav-link {
  color: rgba(0, 0, 0, 0.87) !important;
}
a.nav-link:hover {
  color: green !important;
}
a.nav-link.active {
  color: green !important;
  font-weight: bold;
}
.navbar-brand {
  font-size: 30px;
}
@media (max-width: 600px) {
  .navbar-brand {
    font-size: 15px;
  }
}
</style>
