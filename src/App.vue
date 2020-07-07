<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin: 0;
  /* overflow: hidden; */
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
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
