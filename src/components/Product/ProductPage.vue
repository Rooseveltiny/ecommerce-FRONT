<template>
  <div>
    <div class="container">
      <div class="title_main">
        <div class="title">{{product.title}}</div>
        <div class="article">Артикул: {{product.id}}</div>
      </div>
      <div class="product main_block_style main_block_style-less">
        <Product />
      </div>
      <div class="product_info">
        <ProductInfo />
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "./ProductInfo";
import Product from "./Product";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ProductInfo, Product },
  computed: {
    ...mapGetters(["product"])
  },
  methods: {
    ...mapActions(["fetchProduct"])
  },
  mounted() {
    this.fetchProduct();
  }
};
</script>

<style scoped>
.title {
  font-size: 25px;
  color: #666;
}

.title_main {
  color: #666;
  padding: 15px 0 0 15px;
}
</style>