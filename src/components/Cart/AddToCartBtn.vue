<template>
  <div class="button_main">
    <div class="button_inner" :class="{disabled: showLoading}">
      <div class="button_input">
        <input v-on:keyup.enter="()=>{addToCartFunc({productLink, productQuantity}); productQuantity = 1}" class="input_class" type="number" min="1" value="1" v-model="productQuantity" />
      </div>
      <div
        @click="addToCartFunc({productLink, productQuantity}); productQuantity = 1"
        class="button_action non-select"
        :class="{active: showLoading}"
      >В корзину</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    productLink: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      productQuantity: 1,
      showLoading: false
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    async addToCartFunc(data){
      this.showLoading = true
      await this.addToCart(data).catch(()=>{
        this.showLoading = false;
      });
      this.showLoading = false;
    }
  },
};
</script>

<style scoped>
.button_inner {
  display: flex;
  height: 100%;
}

.input_class {
  width: 70px;
  height: 100%;
  border: 1px solid rgb(220,220,200);
  text-align: center;
}

.button_input {
  position: relative;
}

.input_class:focus,
.input_class:active {
  outline: none;
}

.button_main {
  height: 40px;
}

.button_action {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-left: 5px;
  background: #fc0;
  cursor: pointer;
  justify-content: flex-end;
}

.button_action:after{
  content: '';
  width: 25px;
  height: 25px;
  background: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/pics/loadingBlock.gif') no-repeat;
  background-size: cover;
  position: absolute;
  right: -30px;
  display: none;
}

.button_action.active{
  cursor: not-allowed;
}

.button_action.active:after{
  display: block;
}

</style>