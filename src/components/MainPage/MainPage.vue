<template>
  <div>
    <div class="container">
      <MainBanner/>
      <Production/>
      <Calculator/>
    </div>
  </div>
</template>

<script>

import MainBanner from './MainBanner'
import Production from './Production'
import Calculator from './Calculator'

export default {
  components: {MainBanner, Production, Calculator}
};
</script>

<style scoped>

</style>