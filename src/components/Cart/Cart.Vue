
<template>
  <div class="container">
    <div class="main_title">
      Корзина покупок
      <div @click="deleteAllProducts()" class="clean_cart">Очистить корзину</div>
    </div>
    <div class="cart_inner">
      <div class="cart_products">
        <div
          class="empty_cart main_block_style main_block_style-less"
          v-show="!getCartProducts.length"
        >Список покупок пуст</div>
        <template v-for="(product, index) in getCartProducts">
          <div :key="index" class="cart_product main_block_style main_block_style-less">
            <div class="cart_product_pic">кек</div>
            <div class="cart_product_info">
              <div class="cart_product_title">{{product.product_object.title}}</div>
              <div class="cart_product_details">{{product.product_object.details_in_row}}</div>
            </div>
            <div class="cart_product_delete">
              <div
                @click="deleteFromCart({productLink: product.product_object.link})"
                class="delete_btn"
              ></div>
            </div>
          </div>
        </template>
      </div>
      <div class="cart_perform"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCartProducts"]),
  },
  methods: {
    ...mapActions(["deleteFromCart", "fetchCart"]),
    ...mapMutations(["updateCartUUID"]),
    async deleteAllProducts() {
      for (let product of this.getCartProducts) {
        await this.deleteFromCart({ productLink: product.product_object.link });
      }
    },
  },
};
</script>

<style scoped>
.main_title {
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.clean_cart {
  font-size: 14px;
  height: 100%;
  cursor: pointer;
}

.empty_cart {
  font-size: 22px;
  font-weight: bold;
  color: #999;
}

.cart_products {
  display: inline-block;
  width: 70%;
}

.cart_product {
  display: flex;
  width: 100%;
}

.cart_product_pic {
  width: 30%;
}

.cart_product_info {
  width: 60%;
}

.cart_product_delete {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete_btn {
  width: 25px;
  height: 25px;
  background: url("https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/cancel.svg")
    no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  background-color: rgba(153, 153, 153, 0.158);
  padding: 5px;
  border-radius: 25px;
  transition-duration: 0.5s;
}

.delete_btn:hover {
  background-color: rgba(255, 0, 0, 0.342);
  transform: rotate(20deg);
}

.cart_product_title {
  font-size: 20px;
}

.cart_product_details {
  overflow: hidden;
  font-size: 12px;
  height: 20px;
  color: rgb(155, 155, 155);
}
</style>