<template>
  <div class="product">
    <div class="product_image">
      <img src="http://via.placeholder.com/400" alt />
    </div>
    <div class="product_info">
      <div class="product_info_inner">
        <div class="product_price">{{product.price}} ₽/{{product.unit}}</div>
        <div class="characteristic">{{product.characteristic}}</div>
        <div class="balance">Остаток на складе: {{product.balance}}{{product.unit}}</div>
        <div class="characteristic"></div>
      </div>
      <div class="buy_btn_block">
        <button class="buy_btn">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["product"])
  }
};
</script>

<style scoped>
.product {
  display: flex;
}

.product_info {
  padding: 0 50px;
  display: grid;
}

.product_price {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #666;
}

.balance {
  color: #666;
}

.product_info_inner {
}

.buy_btn {
  background-color: #fc0;
  outline: none;
  border: none;
  border-radius: 7px;
  font-size: 20px;
  width: 100%;
  height: 50px;
  transition-duration: 0.5s;
  color: #333;
}

.buy_btn:hover {
  background-color: #ffe373;
}
</style>