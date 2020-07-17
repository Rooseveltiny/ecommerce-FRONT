<template>
  <div
    id="CatalogStructureInner"
    class="catalog_shadow_box non-select main_block_style main_block_style-less"
    :class="{'catalog_structure-main': $route.name == 'MainPage', 'catalog_structure-mini': $route.name != 'MainPage'}"
  >
    <div class="catalog_structure_inner">
      <div class="catalog_main_title">Каталог</div>

      <div v-for="(cat, index) in getCategories" :key="index" class="catalog_item">
        {{cat.title}}
        <div
          id="CatalogStructureInnerBlock"
          class="catalog_side_block main_block_style main_block_style-less"
        >
          <div v-for="(child, index) in cat.children" :key="index" class="catalog_items_side">
            <div class="catalog_item_side_title">{{child.title}}</div>
            <div class="catalog_items_side_inner">
              <div
                v-for="(childInner, index) in child.children"
                :key="index"
                class="catalog_item_side"
                @click="changeCurrentPage('Catalog')"
              >{{childInner.title}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="catalog_item">Доборные элементы</div>
      <div class="catalog_item">Строительные материалы</div>
      <!-- <div class="catalog_item">
        Металлочерепица
        <div class="catalog_side_block main_block_style main_block_style-less">
          <div class="catalog_items_side">
            <div class="catalog_item_side_title">М/Ч</div>
            <div class="catalog_item_side">Каскад</div>
            <div class="catalog_item_side">Монтеррей</div>
            <div class="catalog_item_side">Даймонд</div>
          </div>
        </div>
      </div>-->
      <div class="catalog_item">Гладкий лист</div>
      <div class="catalog_item">Рулоны</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCategories"])
  },
  methods: {
    ...mapActions(["fetchCatalogStructure"]),
    ...mapMutations(["changeCurrentPage"])
  },
  async mounted() {
    await this.fetchCatalogStructure();
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

.catalog_main_title {
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
  left: calc(100% + 10px);
  transition: visibility 0.2s;
  z-index: 1000;
  padding: 15px;
  display: grid;
  width: calc(100% * 3);
}

.catalog_items_side {
  flex-wrap: wrap;
}

.catalog_items_side_inner {
  display: flex;
  flex-wrap: wrap;
}

.catalog_side_block:hover {
  visibility: visible;
}

.catalog_item_side_title {
  font-weight: bold;
  text-align: left;
  padding: 7px 0;
}

.catalog_item_side {
  padding: 0 15px;
  width: 50%;
  color: #666;
}

.catalog_item_side:hover {
  background-color: #fc0;
}
</style>