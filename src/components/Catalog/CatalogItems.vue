<template>
  <div>
    <div
      v-for="(product, index) in getProducts"
      :key="index"
      class="catalog_item main_block_style main_block_style-less"
    >
      <div class="product_img">
        <img src="https://via.placeholder.com/100" alt />
      </div>
      <div class="product_info">
        <div class="product_title">
          <div @click="updateCurrentProductUuid(product.link); changeCurrentPage('Product')" class="title">{{product.title}}</div>
          <div class="price">
            <div class="product_price">{{product.price}} ₽/</div>
            <div class="product_unit">{{product.unit_of_measurement}}</div>
          </div>
        </div>
        <div class="product_characteristic">{{product.detail[0]}}</div>
        <div class="product_info_inner">
          <div class="balance">
            На складе
            <div class="balance_style">
              <div class="product_balance">{{product.balance}}</div>
              <div class="product_unit">{{product.unit_of_measurement}}</div>
            </div>
          </div>
          <button class="buy_btn">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["changeCurrentPage", "updateCurrentProductUuid"]),
    ...mapActions(["fetchProducts"])
  },
  async mounted() {
    this.fetchProducts();
  },
  computed: { ...mapGetters(["getProducts"]) }
};
</script>

<style scoped>
.product_info {
  display: grid;
  padding: 0 50px;
  width: 100%;
}

.price {
  display: flex;
  font-weight: bold;
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
  border-radius: 7px;
}

.balance_style {
  display: flex;
  padding: 0 5px;
  margin: 0 5px;
  background-color: #fc0;
  position: relative;
}

.buy_btn {
  transition-duration: 0.3s;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
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
</style>