<template>
  <div>
    <div class="container">
      <div class="title_main">
        <div @click="$router.go(-1)" class="get_back">
        </div>
        <div>
        <div class="title">{{product.title}}</div>
        <div class="article">Артикул: {{product.link}}</div>
        </div>
      </div>
      <div class="product main_block_style main_block_style-less" style="margin-bottom: 0">
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
  async mounted() {
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
  display: flex;
  color: #666;
  padding: 15px 0 0 15px;
}

.get_back{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  position: relative;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 3px;
  padding: 10px 20px;
  transition-duration: .5s;
}

.get_back:hover{
    background-color: #ffe373;
}

.get_back:after{
  position: absolute;
  content: '';
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  width: 10px;
  height: 10px;
  right: 12px;
  transform: rotate(-135deg);
}

</style>