<template>
  <div id="app">
    <Header />
    <transition name="component-fade" mode="out-in">
      <component :is="getCurrentPage"></component>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Contacts from "./components/Contacts/Contacts.vue";
import AboutCompany from "./components/Information/AboutCompany";
import Catalog from "./components/Catalog/Catalog";
import ProductPage from "./components/Product/ProductPage";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Contacts,
    AboutCompany,
    Catalog,
    ProductPage
  },
  computed: {
    ...mapGetters(["getCurrentPage"])
  },
  methods:{
    ...mapMutations(['closeCatalogStructure'])
  },
  created(){
    document.addEventListener('click', (event) => this.closeCatalogStructure(event));
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
  overflow-y: scroll;
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

/* ANIMATION */

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

/* Container */

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
}

.text_content {
  width: 100%;
  overflow-wrap: break-word;
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

.main_block_style-less {
  margin: 15px 0;
  padding: 15px;
}

.main_block_style-right_margin {
  margin-right: 15px;
}

.non-select {
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
}

/* scroll */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f7efef;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #a5a2a2;
  border-radius: 5px;
}
</style>
