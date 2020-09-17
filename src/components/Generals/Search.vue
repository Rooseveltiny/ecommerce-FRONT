<template>
  <div class="search" id="uniqueIDSearchBlock43521">
    <div
      class="search_input_block"
      @click="searchActive=true"
      :class="{active: searchActive}"
      id="search_input_block"
    >
      <input placeholder="Найти товар" class="search_input"  type="text" v-model="searchInput" />
      <div class="search_icon">
        <img
          width="18px"
          src="https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/search.png"
          alt
        />
      </div>
      <div
        class="search_results main_block_style main_block_style-less"
        v-if="getSearchResult.products.length || getSearchResult.categories.length"
      >
        <div class="search_results_inner">
          <div class="search_results_block" v-if="getSearchResult.products.length">
            <div class="search_results_title">Продукция</div>
            <div class="search_results_items">
              <template v-for="(result, index) in getSearchResult.products">
                <router-link :key="index" :to="{path: `/catalog/product/${result.link}`}">
                  <div class="search_result_item" id="searchElementItem21321">{{result.title}}</div>
                </router-link>
              </template>
            </div>
          </div>
          <div class="search_results_block" v-if="getSearchResult.categories.length">
            <div class="search_results_title">Категории</div>
            <div class="search_results_items">
              <template v-for="(result, index) in getSearchResult.categories">
                <router-link :key="index" :to="{name: 'Catalog', params: {slug: result.slug}}">
                  <div class="search_result_item" id="searchElementItem21321">{{result.title}}</div>
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      searchInput: "",
      timerId: undefined,
      searchActive: false,
    };
  },
  computed: {
    ...mapGetters(["getSearchResult"]),
  },
  methods: {
    ...mapActions(["fetchSearchResult"]),
    ...mapMutations(["clearSearchResult"]),
  },
  watch: {
    searchInput: function () {
      if (this.searchInput.length > 2) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(
          this.fetchSearchResult,
          300,
          this.searchInput
        );
      } else {
        clearTimeout(this.timerId);
        this.clearSearchResult();
      }
    },
  },
  created() {
    document.addEventListener("click", (event) => {
      if (this.searchActive) {
        if (event.srcElement.id !== "searchElementItem21321") {
          for (let element of event.path) {
            if (element.id == "uniqueIDSearchBlock43521") {
              return;
            }
          }
        }
        this.searchActive = false;
        this.searchInput = "";
        this.clearSearchResult();
      }
    });
  },
};
</script>

<style scoped>
.search_input_block {
  width: 70%;
  display: flex;
  position: relative;
  z-index: 1200;
  transition-duration: 0.3s;
}

.search_input {
  height: 34px;
  width: 100%;
  border-width: 0.1px;
  padding: 15px 20px;
  transition-duration: 0.5s;
  border: none;
  background: rgb(235, 235, 235);
  border-radius: 20px;
}

.search_input:focus,
.search_input:active {
  outline: none;
  outline-offset: none;
}

#search_input_block.active {
  width: 100%;
}

.search {
  display: flex;
  justify-content: flex-end;
}

.search_icon {
  opacity: 0.5;
  position: absolute;
  right: 20px;
  top: 25%;
  display: flex;
}

/* Search result */

.search_results {
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 1000;
  text-align: left;
  max-height: 30vw;
  overflow-y: scroll;
}

.search_results_title {
  color: #999;
  font-size: 18px;
  padding-bottom: 3px;
  margin-bottom: 3px;
  border-bottom: 1px solid rgb(201, 201, 201);
}

.search_result_item {
  padding: 5px 10px;
  transition-duration: 0.5s;
  border-radius: 7px;
  cursor: pointer;
}

.search_result_item:hover {
  background: rgb(245, 245, 245);
}
</style>