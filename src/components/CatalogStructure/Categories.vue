<template>
  <div class="extra_container">
    <div @click="$router.go(-1)" class="get_back_block">
      <div class="get_back_block_inner">назад</div>
    </div>

    <div class="container">
      <div class="main_title">Категории</div>

      <div class="categories main_block_style">
        <div class="categories_inner">
          <div v-for="(cat, index) in allCategories" :key="index" class="category_item">
            <!-- new -->
            <template v-if="cat.is_endpoint">
              <router-link :to="{ name: 'Catalog', params: { slug: cat.slug }}">
                <div class="category_img">
                  <img
                    src="https://via.placeholder.com/200"
                    :alt="require('../../assets/logo/loadingBlock.gif')"
                  />
                </div>
                <div class="cat_title">{{cat.title}}</div>
              </router-link>
            </template>
            <template v-else>
              <router-link :to="{ path: '/catalog/categories', query: { parent: cat.slug }}">
                <div class="category_img">
                  <img
                    src="https://via.placeholder.com/200"
                    :alt="require('../../assets/logo/loadingBlock.gif')"
                  />
                </div>
                <div class="cat_title">{{cat.title}}</div>
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="right_side_block"></div>
  </div>
</template>

<script>
import ApiSettings from "../../store/ApiSettings";
import router from "../../router/router";

export default {
  data() {
    return {
      allCategories: [],
    };
  },
  watch: {
    $route: "fetchCategories",
  },
  methods: {
    async fetchCategories() {
      const categoryAndQueryParams = router.currentRoute.fullPath;
      const res = await fetch(
        `${ApiSettings.BASE_ROUTE}${categoryAndQueryParams}`
      );
      let categories = await res.json();
      this.allCategories = categories;
    },
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
.category_img {
  width: 100%;
  /* background-color: red; */
  /* border-radius: 7px; */
}

img {
  width: 100%;
  /* border-radius: 7px; */
}

.categories {
  display: flex;
  justify-content: space-between;
}

.categories_inner {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.category_item {
  padding: 0 15px 15px 15px;
  width: 25%;
  display: grid;
  justify-items: center;
}

.cat_title{
  text-align: center;
}

</style>
