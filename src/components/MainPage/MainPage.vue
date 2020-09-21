<template>
  <div>
    <div class="container">
      <MainBanner/>
      <Production/>
      <!-- <ContactsBanner /> -->
      <Calculator/>
    </div>
  </div>
</template>

<script>

import MainBanner from './MainBanner'
import Production from './Production'
import Calculator from './Calculator'
// import ContactsBanner from './ContactsBanner'

export default {
  components: {MainBanner, Production, Calculator}
};
</script>

<style scoped>

</style>