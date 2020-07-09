<template>
  <div>
    <div class="section_inner" v-if="getCurrentSection === 'Описание'">{{product.discription}}</div>
    <div
      class="section_inner"
      v-if="getCurrentSection === 'Характеристики'"
    >{{product.characteristics}}</div>
    <div class="section_inner" v-if="getCurrentSection === 'Файлы'">{{product.category}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurrentSection", "product"])
  }
};
</script>

<style scoped>
.product_info_inner {
  display: flex;
}

.section {
  width: 80%;
}
</style>