<template>
  <div class="extra_container">
    <div  @click="$router.go(-1)"  class="get_back_block">
      <div class="get_back_block_inner">назад</div>
    </div>
    <div class="container">
      <div class="title_main">
        <div>
          <div class="title">{{product.title}}</div>
          <div class="article">Код продукта: {{product.product_code}}</div>
        </div>
        <div @click="$router.go(-1)" class="get_back">
          <div class="get_back_label main_block_style main_block_style-less">Вернуться назад</div>
        </div>
      </div>
      <div class="product main_block_style main_block_style-less" style="margin-bottom: 0">
        <Product />
      </div>
      <div class="product_info">
        <ProductInfo />
      </div>
    </div>
    <div class="right_side_block"></div>
  </div>
</template>

<script>
import ProductInfo from "./ProductInfo";
import Product from "./Product";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ProductInfo, Product },
  computed: {
    ...mapGetters(["product"]),
  },
  methods: {
    ...mapActions(["fetchProduct"]),
  },
  async mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>

.title {
  font-size: 25px;
  color: #666;
}

.title_main {
  display: flex;
  justify-content: space-between;
  color: #666;
  padding: 15px 0 0 15px;
}

.get_back {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: relative;
  border: 1px solid rgb(194, 194, 194);
  /* border-radius: 3px; */
  padding: 10px 20px;
  transition-duration: 0.5s;
  width: 50px;
}

.get_back:hover {
  background-color: #ffe373;
}

.get_back::after,
.get_back::before {
  position: absolute;
  content: "";
  background-color: #666;
  width: 2px;
  height: 25px;
}

.get_back::before {
  transform: rotate(45deg);
}

.get_back::after {
  transform: rotate(-45deg);
}

.get_back:hover .get_back_label {
  opacity: 1;
  visibility: visible;
  transform: translateX(35px);
}

.get_back_label {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  font-size: 14px;
  display: flex;
  width: 140px;
  right: 110px;
  padding: 5px 10px;
  transition-duration: 1s;
}

.get_back_label::after {
  display: block;
  content: "";
  position: absolute;
  height: 22px;
  width: 22px;
  background-color: #fff;
  top: 5px;
  right: -7px;
  transform: rotate(45deg);
  box-shadow: 2px -2px 5px 0px rgba(0, 0, 0, 0.07);
}
</style>