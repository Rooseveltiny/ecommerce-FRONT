<template>
  <div>
    <div class="pagination non-select">
      <div class="pagination_inner">

        <div
          v-show="getCatalogPageInfo('prevURL')"
          @click="$router.push(getCatalogPageInfo('prevURL'))"
          class="pag_arrow pag_item left"
        ></div>

        <div v-for="(page,index) in getCatalogPageInfo('currentPageNumber')" :key="index" class="pag_item">{{index+1}}</div>
        

        <div class="pag_item">1</div>
        <div class="pag_item current_page">2</div>
        <div class="pag_item">3</div>

        <div
          v-show="getCatalogPageInfo('nextURL')"
          @click="$router.push(getCatalogPageInfo('nextURL'))"
          class="pag_arrow pag_item right"
        ></div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["setQueryParams"]),
    changePage() {
      this.setQueryParams();
    },
  },
  computed: {
    ...mapGetters(["getCatalogPageInfo"]),
  },
};
</script>

<style scoped>
.pagination {
}

.pagination_inner {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.pag_item {
  padding: 5px 15px;
  /* border: 0.2px solid rgb(219, 219, 219); */
  margin: 0 7px;
  font-size: 17px;
  color: #666;
  border-radius: 5px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.pag_item:hover {
  background-color: #ffe373;
}

.pag_arrow {
  position: relative;
}

.pag_arrow:after {
  content: "";
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 35%;
}

.pag_arrow.left:after {
  transform: rotate(-135deg);
  left: 40%;
}

.pag_arrow.right:after {
  transform: rotate(45deg);
  left: 25%;
}

.current_page {
  background-color: #fc0;
}
</style>