<template>
  <div class="container">
    <div class="main_title">
      Корзина покупок
      <div
        v-show="getCartProducts.length"
        @click="deleteAllProducts()"
        class="clean_cart"
      >Очистить корзину</div>
    </div>
    <div class="cart_inner">
      <div class="cart_products">
        <div
          class="empty_cart main_block_style main_block_style-less"
          v-show="!getCartProducts.length"
        >Список покупок пуст</div>
        <template v-for="(product, index) in getCartProducts">
          <div :key="index" class="cart_product main_block_style main_block_style-less">
            <div class="cart_product_pic">
              <div class="img_wrapper">
                <img
                  onload="this.style.visibility='visible'"
                  :src="product.product_object.all_images[0].cloud_link"
                  alt
                />
              </div>
            </div>
            <div class="cart_product_info">
              <div class="cart_product_title">
                {{product.product_object.title}}
                <div class="cart_product_delete" @click="deleteFromCartFunc(product)">
                  <span class="delete_btn">Удалить</span>
                  <div  class="delete_icon"></div>
                </div>
              </div>
              <div class="cart_product_code">{{product.product_object.product_code}}</div>
              <ChangeInCart :productInputData="product" />
            </div>
          </div>
        </template>
      </div>
      <div class="cart_perform"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ChangeInCart from "./ChangeInCart";
import dialogs from "../../dialogs/dialogs";

export default {
  components: { ChangeInCart },
  computed: {
    ...mapGetters(["getCartProducts"]),
  },
  methods: {
    ...mapActions(["deleteFromCart", "fetchCart"]),
    ...mapMutations(["updateCartUUID"]),
    async deleteAllProducts() {
      const callBackFunction = async () => {
        for (let product of this.getCartProducts) {
          await this.deleteFromCart({
            productLink: product.product_object.link,
          });
        }
      };

      let dialog = dialogs.YesNoDialog;
      dialog.onConfirm = callBackFunction;
      dialog.message = "Очистить корзину?";
      this.$Simplert.open(dialog);
    },
    async deleteFromCartFunc(product) {
      let obj = { productLink: product.product_object.link };
      let dialog = dialogs.YesNoDialog;
      dialog.message = "Удалить товар?";
      dialog.onConfirm = () => {
        this.deleteFromCart(obj);
      };
      this.$Simplert.open(dialog);
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
  width: 20%;
  display: flex;
  margin: 10px 30px 10px 10px;
}

.cart_product_info {
  width: 100%;
}

.cart_product_delete {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete_icon {
  width: 20px;
  height: 20px;
  margin: 5px 2px;
  background: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/trash-can.svg') no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  opacity: .5;
}

.delete_btn{
  font-size: 13px;
  color: #999;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.cart_product_delete:hover .delete_btn{
  color: rgb(155, 101, 1);
}

.cart_product_delete:hover .delete_icon{
  opacity: 1;
}

.cart_product_title {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

.cart_product_code {
  color: #999;
  font-size: 12px;
}

.cart_product_details {
  overflow: hidden;
  font-size: 12px;
  height: 20px;
  color: rgb(105, 105, 105);
}
</style>