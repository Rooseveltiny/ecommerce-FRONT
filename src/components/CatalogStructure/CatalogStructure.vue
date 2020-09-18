<template>
  <transition name="component-fade" mode="out-in">
  <div
    v-if="getCatalogStructureVision"
    id="MainCatalogStructure"
    class="main_catalog_structure global_shadow main_block_style main_block_style-less"
  >
    <div id="CatalogCategories" class="catalog_categories">
      <template v-for="(cat, index) in getCategories">
        <div
          :key="index"
          class="catalog_category_item"
          @click="changeCurrentCategory(cat)"
          :class="{active: cat==getCurrentCategory}"
        >
          <div class="catalog_category_icon">
            <img
              :src="cat.small_icon_link"
              width="25px"
              alt
            />
          </div>
          <div class="catalog_category_title">{{cat.title}}</div>
        </div>
      </template>
    </div>
    <div id="CatalogSubCategories" class="catalog_sub_categories">
      <div class="category_title">{{getCurrentCategory.title}}</div>
      <div class="catalog_sub_categories_inner">
        <template v-for="(sub_cat, index) in getCurrentCategory.children">
          <div :key="index" class="catalog_sub_category">
            <div class="catalog_sub_category_title">{{sub_cat.title}}</div>
            <template v-for="(sub_cat_item, index) in sub_cat.children">
              <div :key="index" class="sub_cat_item">
                <router-link :to="{name: 'Catalog', params: {slug: sub_cat_item.slug}}">
                  <span @click="clearFilterParams(); closeCatalogStructure()">{{sub_cat_item.title}}</span>
                </router-link>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
    <div class="category_picture">
      <div class="cat_image">
        <img width="90%" :src="getCurrentCategory.cat_pic_link" alt="">
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getCategories",
      "getCurrentCategory",
      "getCatalogStructureVision",
    ]),
  },
  methods: {
    ...mapActions(["fetchCatalogStructure"]),
    ...mapMutations([
      "changeCurrentPage",
      "clearFilterParams",
      "changeCurrentCategory",
      "closeCatalogStructure",
    ]),
  },
  async mounted() {
    await this.fetchCatalogStructure();
  },
};
</script>

<style scoped>

/* CATEGORIES */

.main_catalog_structure {
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1400;
  display: flex;
}

.catalog_categories {
  width: 30%;
  border-right: 1px solid rgb(231, 231, 231);
}

.catalog_category_item {
  position: relative;
  margin: 4px 15px;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  /* border-radius: 5px; */
  cursor: pointer;
}

.catalog_category_item:hover {
  background-color: rgb(245, 245, 245);
}

.catalog_category_item.active {
  background-color: rgb(245, 245, 245);
}

.catalog_category_icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
  height: 25px;
  width: 25px;
}

/* SUB CATEGORIES */

.catalog_sub_category{
  width: 50%;
}

.catalog_sub_category_title {
  padding: 0 5px;
}

.catalog_category_item:after {
  position: absolute;
  content: "";
  border-right: 2px solid rgb(200, 200, 200);
  border-top: 2px solid rgb(200, 200, 200);
  right: 15px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.catalog_sub_categories {
  margin-left: 15px;
  width: 50%;
}

.catalog_sub_categories_inner{
  display: flex;
  flex-wrap: wrap;
}

.category_title {
  font-weight: 600;
  font-size: 19px;
  color: #666;
  padding-bottom: 20px;
}

.catalog_sub_category_title {
  font-weight: bold;
}

.sub_cat_item {
  color: #666;
  padding: 0 5px;
  transition-duration: .5s;
}

.sub_cat_item:hover {
  /* border-radius: 5px; */
  color: red;
}

/* CATEGORY PICTURE */
.category_picture{
  width: 20%;
  display: flex;
  align-items: center;
}

.cat_image{
  display: flex;
  align-items: center;
}

.cat_image img{
  /* border-radius: 7px; */
}

</style>

