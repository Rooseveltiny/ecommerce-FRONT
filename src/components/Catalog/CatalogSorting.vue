<template>
  <div class="sorting_inner">
      Сортировать по: {{getCurrentSortingType}}
    <div class="sorting_list">
      <div class="sorting_item">По возрастанию цены</div>
      <div class="sorting_item">По убыванию цены</div>
      <div class="sorting_item">По наименованию</div>
      <div class="sorting_item">По рейтингу</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getCurrentSortingType'])
    }
};
</script>

<style>
.sorting_list {
  display: flex;
  display: none;
}
.sorting_inner{
    text-align: right;
}
</style>