<template>
  <div class="button_main">
    <div class="button_inner">
      <div class="button_input">
        <input class="input_class" type="number" min="1" value="1" v-model="productQuantity" />
      </div>
      <div @click="addToCart({productLink, productQuantity}); productQuantity = 1" class="button_action">В корзину</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    productLink: {
      type: String,
      default: undefined,
    }
  },
  data() {
      return {
          productQuantity: 1
      }
  },
  methods: {
      ...mapActions(['addToCart'])
  }
};
</script>

<style scoped>

.button_inner{
    display: flex;
    height: 100%;
}

.input_class{
    width: 70px;
    height: 100%;
    border: none;
    /* border-bottom: 2px solid rgb(220,220,220); */
    text-align: center;
}

.input_class:after{
    content: "";
    width: 100%;
    background: rgb(220,220,220);
    height: 2px;
}

.input_class:focus,
.input_class:active{
    outline: none;
}

.button_main{
    height: 40px;
}


.button_action{
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-left: 5px;
    background: #fc0;
}



</style>