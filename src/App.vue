<template>
  <div id="app">
    <div class="page">
      <Header />
      <div class="content">
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer";

import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  computed: {},
  methods: {
    ...mapMutations(["closeCatalogStructureGeneral"])
  },
  created() {
    document.addEventListener("click", event =>
      this.closeCatalogStructureGeneral(event)
    );
  }
};
</script>

<style>
.footer {
  margin-top: auto;
}

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  transition: opacity 0.2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
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

.main_title {
  text-align: left;
  padding-top: 30px;
  font-size: 25px;
  color: #666;
  margin: 0 auto 10px auto;
}
</style>
