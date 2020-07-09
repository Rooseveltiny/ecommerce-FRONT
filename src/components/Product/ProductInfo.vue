<template>
  <div class="product_info_inner">
    <div class="sections main_block_style main_block_style-less main_block_style-right_margin">
      <div class="sections_inner">
        <div
          v-for="section in getAllSections"
          :key="section"
          class="section_item non-select"
          :class="{'section_item-selected': section == getCurrentSection}"
          @click="changeSection(section)"
        >{{section}}</div>
      </div>
    </div>
    <!-- <transition name="component-fade" mode="out-in"> -->
      <!-- <div class="section main_block_style main_block_style-less"> -->
        <ProductInfoInner />
      <!-- </div> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import ProductInfoInner from "./ProductInfoInner";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    ProductInfoInner
  },
  computed: {
    ...mapGetters(["product", "getAllSections", "getCurrentSection"])
  },
  methods: {
    ...mapMutations(["changeSection"])
  }
};
</script>

<style scoped>
.sections {
  display: grid;
  width: 20%;
}

.product_info_inner {
  display: flex;
}



.sections_inner {
  padding: 0 10px;
}

.section_item {
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
}

.section_item-selected {
  background-color: #ffe373;
}
</style>