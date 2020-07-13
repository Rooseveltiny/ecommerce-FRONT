<template>
  <div class="sorting_inner non-select">
    <span>Сортировать:&nbsp;</span>
    <span
      @click="showAllSortings"
      class="currentSorting"
      style="cursor: pointer"
    >{{getCurrentSortingType}}</span>
    <div v-show="showSortingsBlock" class="main_block_style main_block_style-less sorting_list">
      <div
        v-for="sorting in getAllSortingTypes"
        :key="sorting"
        class="sorting_item non-select"
        @click="updateSorting(sorting)"
      >{{sorting}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      showSortingsBlock: false
    };
  },
  computed: {
    ...mapGetters(["getCurrentSortingType", "getAllSortingTypes"])
  },
  methods: {
    ...mapMutations(["updateSortingCatalog"]),
    showAllSortings() {
      this.showSortingsBlock = !this.showSortingsBlock;
    },
    updateSorting(sorting){
        this.updateSortingCatalog(sorting);
        this.showSortingsBlock = false;
    }
  },
  mounted(){
    if (localStorage.currentCatalogSorting){
      this.updateSortingCatalog(localStorage.currentCatalogSorting);
    }
  },
  watch: {
    getCurrentSortingType(newSorting){
      localStorage.currentCatalogSorting = newSorting;
    }
  }
};
</script>

<style>
.sorting_list {
  display: grid;
  text-align: left;
  position: absolute;
  top: 15px;
  left: 73%;
  width: 27%;
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
}

.currentSorting {
  color: #0d61af;
  border-bottom: 1px dotted;
}
</style>