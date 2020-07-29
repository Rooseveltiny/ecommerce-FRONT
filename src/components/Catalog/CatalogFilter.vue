<template>
  <div>
    <div class="filter_inner non-select">
      <div class="filter_title">Поиск по свойствам</div>

        
      <div v-for="filter in getAllFilters" :key="filter.name" class="filter_item">
        <div class="filter_name">{{filter.name}}</div>
        <div v-for="(parameter, index) in filter.parameters" :key="index" class="filter_value">
          <input
            type="checkbox"
            :value="parameter"
            :id="parameter.title"
            v-model="choosenFilterParameters"
          />
          <label :for="parameter.title">{{parameter.title}}</label>
        </div>
      </div>

      <transition name="bounce">
        <div class="filter_btn_block" v-if="mayShowFilterBtn">
          <button @click="filterProducts" class="filter_btn">Поиск</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data(){
    return {
      mayShowFilterBtn: false
    }
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
      }
    }
  },
  methods: {
    ...mapActions(['fetchFilter', 'setQueryParams', 'fetchProducts']),
    ...mapMutations(['collectFilterValuesFromURL']),
    filterProducts: function(e){
      e.preventDefault();
      this.setQueryParams();
      this.fetchProducts();
      this.mayShowFilterBtn = false;
    }
  },
  async mounted(){
    await this.fetchFilter();
    this.collectFilterValuesFromURL();
  },
  watch: {
    // $route: "fetchFilter"
  }
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
}

.filter_item {
  padding-bottom: 5px;
}

.filter_value {
  padding: 2px 0;
}

.filter_btn_block {
  text-align: center;
  padding-top: 5px;
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

</style>