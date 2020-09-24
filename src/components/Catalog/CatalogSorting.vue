<template>
  <div class="sorting_inner non-select">

    <div class="found_block">
      <span>Найдено товаров:&nbsp;</span>
      <span class="found">{{getProductsCount}}</span>
    </div>
    <div class="sorting_block">
    <span>Сортировать:&nbsp;</span>
    <span
      @click="showAllSortings"
      class="currentSorting"
      style="cursor: pointer"
    >{{getCurrentSortingType.name}}</span>
    <transition name="bounce">
    <div v-show="showSortingsBlock" class="main_block_style main_block_style-less sorting_list">
      <div
        v-for="sorting in getAllSortingTypes"
        :key="sorting.name"
        class="sorting_item non-select"
        @click="updateSorting(sorting)"
      >{{sorting.name}}</div>
    </div>
    </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      showSortingsBlock: false
    };
  },
  computed: {
    ...mapGetters(["getCurrentSortingType", "getAllSortingTypes", "getProductsCount"])
  },
  methods: {
    ...mapActions(["setQueryParams"]),
    ...mapMutations(["updateSortingCatalog", "updateSortingFromURL"]),
    showAllSortings() {
      this.showSortingsBlock = !this.showSortingsBlock;
    },
    updateSorting(sorting){
        this.updateSortingCatalog(sorting);
        this.showSortingsBlock = false;
        this.setQueryParams();
    }
  },
  mounted(){
    this.updateSortingFromURL();
  },
  watch: {}
};
</script>

<style>



.found{
  color: #0d61af;
  border-bottom: 1px dotted;
}

.found_block{
}

.sorting_list {
  display: grid;
  text-align: left;
  position: absolute;
  top: 15px;
  left: 73%;
  /* width: 33%; */
  background-color: white;
  padding: 15px;
}

.sorting_item {
  padding: 5px;
  cursor: pointer;
}

.sorting_item:hover {
  background-color: #ffe373;
}

.sorting_inner {
  text-align: right;
  position: relative;
  justify-content: space-between;
  display: flex;
  z-index: 1000;
}

.currentSorting {
  color: #0d61af;
  border-bottom: 1px dotted;
}

</style>