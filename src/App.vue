<template>
  <div id="app">
    <Header />
    <component :is="getCurrentPage"></component>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Contacts from "./components/Contacts/Contacts.vue";
import AboutCompany from "./components/Information/AboutCompany";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Contacts,
    AboutCompany
  },
  computed: {
    ...mapGetters(["getCurrentPage"])
  }
};
</script>

<style>
body {
  font-family: "PT Sans", "Helvetica", "Arial", sans-serif;
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin: 0;
  background-color: #f6f6f6;
}
.page {
  overflow: hidden;
}
hr {
  display: block;
  width: 100%;
  height: 1px;
  margin: 40px 0;
  border: 0;
  background-color: #e5e5e5;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
/* Container */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
}
.main_title {
  margin: 0 auto 30px auto;
  font-size: 20px;
  text-align: center;
  /* padding-top: 30px; */
}

.main_block_style {
  border-radius: 7px;
  background-color: #fff;
  margin: 25px 0;
  padding: 25px;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}
</style>
