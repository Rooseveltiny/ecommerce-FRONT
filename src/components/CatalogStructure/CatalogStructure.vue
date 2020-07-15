<template>
  <div
    id="CatalogStructureInner"
    class="catalog_shadow_box non-select main_block_style main_block_style-less"
    :class="{'catalog_structure-main': getCurrentPage == 'MainPage', 'catalog_structure-mini': getCurrentPage != 'MainPage'}">
    <div class="catalog_structure_inner">
      <div class="catalog_main_title">Каталог</div>
      <div class="catalog_item">
        Профнастил
        <div
          id="CatalogStructureInnerBlock"
          class="catalog_side_block main_block_style main_block_style-less"
        >
          <div class="catalog_items_side">
            <div class="catalog_item_side_title">Профнастилы</div>
            <div @click="changeCurrentPage('Catalog')" class="catalog_item_side">Профанстил С-8</div>
            <div class="catalog_item_side">Профанстил С-10</div>
            <div class="catalog_item_side">Профанстил С-21</div>
          </div>
        </div>
      </div>
      <div class="catalog_item">Доборные элементы</div>
      <div class="catalog_item">Строительные материалы</div>
      <div class="catalog_item">
        Металлочерепица
        <div class="catalog_side_block main_block_style main_block_style-less">
          <div class="catalog_items_side">
            <div class="catalog_item_side_title">М/Ч</div>
            <div class="catalog_item_side">Каскад</div>
            <div class="catalog_item_side">Монтеррей</div>
            <div class="catalog_item_side">Даймонд</div>
          </div>
        </div>
      </div>
      <div class="catalog_item">Гладкий лист</div>
      <div class="catalog_item">Рулоны</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getCurrentPage'])
  },
  methods: {
    ...mapMutations(['changeCurrentPage'])
  }
};
</script>

<style scoped>

.catalog_structure-mini {
  position: absolute;
  top: 57px;
  left: -150px;
  border-radius: 0 0 7px 7px;
  padding-right: 0;
  width: calc(100% * 2.5);
  z-index: 1000;
}

.catalog_structure-main {
  cursor: pointer;
  width: 25%;
  padding-right: 0;
}

.catalog_main_title{
  font-size: 20px;
  text-align: center;
}

.catalog_shadow_box {
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
}

.catalog_item {
  padding: 10px 5px;
  padding-left: 15px;
  padding-right: 20px;
}

.catalog_item:hover {
  background-color: #fc0;
}

.catalog_item:hover .catalog_side_block {
  visibility: visible;
}

.catalog_structure_inner {
  position: relative;
}

.catalog_side_block {
  visibility: hidden;
  position: absolute;
  top: -14px;
  min-width: calc(100% * 2);
  left: calc(100% + 10px);
  transition: visibility 0.2s;
  z-index: 1000;
}

.catalog_items_side {
}

.catalog_side_block:hover {
  visibility: visible;
}

.catalog_item_side_title {
  font-weight: bold;
  text-align: center;
}

.catalog_item_side {
  padding: 0 15px;
}

.catalog_item_side:hover {
  background-color: #fc0;
}
</style>