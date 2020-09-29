<template>
  <div>
    <template v-for="(product, index) in getProducts">
      <div :key="index" class="catalog_item main_block_style main_block_style-less">
        <div class="product_img">
          <template v-if="product.all_images.length">
            <div class="img_wrapper">
              <img onload="this.style.visibility='visible'" :src="product.all_images[0].cloud_link" alt />
            </div>
          </template>
        </div>
        <div class="product_info">
          <div class="product_title">
            <router-link :to="{ path: `/catalog/product/${product.link}` }">
              <div class="title">{{product.title}}</div>
            </router-link>
            <div class="price">
              <div class="product_price">{{product.price}} ₽/</div>
              <div class="product_unit">{{product.unit_of_measurement}}</div>
            </div>
          </div>
          <div class="product_characteristic">
            <div
              v-for="(detail, index) in product.detail"
              :key="index"
              class="product_characteristic_item"
            >{{detail}}</div>
          </div>
          <div class="product_info_inner">
            <div class="balance">
              На складе
              <div class="balance_style">
                <div class="product_balance">{{product.balance}}</div>
                <div class="product_unit">{{product.unit_of_measurement}}</div>
              </div>
              <hint-component :hintContent="balanceHint" iconWidthHeight="15px"/>
            </div>
            <addToCartBtn :productLink="product.link" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import addToCartBtn from '../Cart/AddToCartBtn'

export default {
  components: {addToCartBtn},
  data(){
    return {
      balanceHint: 'Сколько товара в данный момент лежит на складе'
    }
  },
  methods: {
    ...mapMutations(["changeCurrentPage"]),
    ...mapActions(["fetchProducts", "fetchFilter"]),
  },
  watch: {
    $route: ["fetchProducts", "fetchFilter"],
  },
  mounted() {
    this.fetchProducts();
  },
  computed: { ...mapGetters(["getProducts"]) },
};
</script>

<style scoped>
.product_info {
  display: grid;
  padding: 0 35px;
  width: 100%;
}

.price {
  display: flex;
  font-weight: bold;
}

.product_img{
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
}

.product_title {
  font-family: "PT Sans", "Helvetica", "Arial", sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.product_characteristic {
  color: #666;
  font-size: 15px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow: hidden;
}

.product_characteristic_item {
  margin-right: 10px;
  padding: 0 10px;
  border: 1.2px dashed #ffe373;
  /* border-radius: 7px; */
  background-color: rgb(255, 249, 195);
  /* cursor: none; */
  white-space: nowrap;
}

.catalog_item {
  display: flex;
}

.product_info_inner {
  display: flex;
  justify-content: space-between;
}

.balance {
  display: flex;
  align-items: center;
  color: #666;
  /* border-radius: 7px; */
}

.balance_style {
  display: flex;
  padding: 0 5px;
  margin: 0 5px;
  /* background-color: #fc0; */
  position: relative;
}

.buy_btn {
  transition-duration: 0.3s;
  border: 1px solid #d9d9d9;
  /* border-radius: 7px; */
  padding: 0 20px;
  outline: none;
  background-color: #fff;
  color: #333;
}

.catalog_item:hover .buy_btn {
  background-color: #fc0;
}

.title {
  color: #333;
  cursor: pointer;
  transition-duration: 0.5s;
}

.title:hover {
  color: rgb(155, 101, 1) !important;
}

.buy_btn:hover {
  background-color: #ffe373 !important;
}

@media (max-width: 990px){
  .product_characteristic{
    font-size: 12px;
  }

  .product_info_inner{
    padding-top: 10px;
  }
}


</style>