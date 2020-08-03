<template>
  <div>
    <div class="extra_container">
      <div @click="$router.go(-1)" class="get_back_block">
        <div class="get_back_block_inner">назад</div>
      </div>

      <div class="container">
        <div class="main_title">Категории</div>

        <div class="categories main_block_style">
          <div class="categories_inner">
            <div v-for="(cat, index) in allCategories" :key="index" class="category_item">
              <div class="category_img">
                <img src="https:via.placeholder.com/200" alt />
              </div>
              <router-link
                v-if="cat.is_endpoint"
                :to="{ name: 'Catalog', params: { slug: cat.slug }}"
              >{{cat.title}}</router-link>
              <router-link
                v-else
                :to="{ path: '/catalog/categories', query: { parent: cat.slug }}"
              >{{cat.title}}</router-link>
            </div>
          </div>
        </div>
      </div>
    <div class="right_side_block"></div>
    </div>
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
  border-radius: 7px;
}

img {
  width: 100%;
  border-radius: 7px;
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
</style>
