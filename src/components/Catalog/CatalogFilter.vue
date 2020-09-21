<template>
  <div>
    <div class="filter_inner non-select">
      <div class="filter_title">Поиск по свойствам</div>

      <div v-for="filter in getAllFilters" :key="filter.name" class="filter_item">
        <div class="filter_name">{{filter.name}}</div>
        <div class="filter_values_block">
          <div v-for="(parameter, index) in filter.parameters" :key="index" class="filter_value">
            <input
              :type="filter.input_type"
              :value="parameter"
              :id="parameter.slug"
              v-model="choosenFilterParameters"
              @change="filterProducts"
            />
            <label :for="parameter.slug">{{parameter.title}}</label>
          </div>
        </div>
      </div>
      <div class="filter_buttons">
        <transition name="bounce">
          <div class="filter_btn_block" v-if="getAllChoosenFilterParameters.length">
            <span @click="clearFilter" class="filter_clear_btn">Очистить фильтр</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      mayShowFilterBtn: false, // old parameter
    };
  },
  computed: {
    ...mapGetters(["getAllFilters", "getAllChoosenFilterParameters"]),
    choosenFilterParameters: {
      get() {
        return this.$store.state.catalog.choosenFilterParameters;
      },
      set(inputValue) {
        this.mayShowFilterBtn = true;
        this.$store.state.catalog.choosenFilterParameters = inputValue;
      },
    },
  },
  methods: {
    ...mapActions(["fetchFilter", "setQueryParams", "fetchProducts"]),
    ...mapMutations(["collectFilterValuesFromURL", "clearFilterParams"]),
    smoothScrollTop: async function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    filterProducts: function () {
      this.setQueryParams();
      this.fetchProducts();
      this.smoothScrollTop();
    },
    clearFilter: function () {
      this.clearFilterParams();
      this.setQueryParams();
      this.smoothScrollTop();
    },
  },
  async mounted() {
    await this.fetchFilter();
    this.collectFilterValuesFromURL();
  },
};
</script>

<style scoped>
.filter_title {
  font-size: 20px;
  text-align: center;
  padding-bottom: 15px;
}

.filter_name {
  font-weight: bold;
  padding-left: 5px;
  background-color: #ffe373;
  display: flex;
  align-items: center;
}

.filter_item {
  padding-bottom: 5px;
}

.filter_value {
  padding: 2px 0;
}

/* .filter_value label, input{
  cursor: pointer;
} */

.filter_values_block{
    overflow: overlay;
    max-height: 135px;
}

.filter_btn_block {
  text-align: center;
}

.filter_btn {
  border: none;
  padding: 7px 25px;
  background-color: #fc0;
  font-size: 20px;
  transition-duration: 0.5s;
  position: relative;
}

.filter_btn:hover {
  background-color: #ffe373;
}

.filter_btn:focus {
  outline: none;
}

.filter_buttons {
  text-align: center;
}

.filter_clear_btn {
  color: #005da3;
}

.filter_clear_btn {
  display: inline-block;
  font-size: 13px;
  border-bottom: 1px #005da3 dotted;
  cursor: pointer;
}

@media (max-width: 990px) {
    .filter_item{
    font-size: 14px;
  }
}

@media (max-width: 990px) {
    .filter_item{
    font-size: 16px;
  }
}




</style>