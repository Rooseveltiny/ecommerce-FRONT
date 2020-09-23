<template>
  <div class="product">
    <div class="product_image" style="width: 300px; height: 300px">
      <Slider animation="normal" :autoplay="false">
        <SliderItem v-for="(img, index) in product.all_images" :key="index">
          <img width="300" height="300" :src="img.cloud_link" alt />
        </SliderItem>
      </Slider>
    </div>
    <div class="product_info">
      <div class="product_info_inner">
        <div class="product_price">{{product.price}} ₽/{{product.unit_of_measurement}}</div>
        <div class="characteristic"></div>
        <div
          class="balance"
        >Остаток на складе: {{product.balance}}&nbsp;{{product.unit_of_measurement}}
        <hint-component hintContent="Столько товара сейчас лежит на складе)" marginLeft="10px"/>
        </div>
        <div class="characteristic"></div>
      </div>
      <div class="buy_btn_block">
        <button class="buy_btn">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  components: {
    Slider,
    SliderItem,
  },
  methods: {
    ...mapActions(["fetchProduct"]),
  },
  computed: {
    ...mapGetters(["product"]),
  },
  mounted() {
    this.fetchProduct();
  },
  watch: {
    $route: ["fetchProduct"],
  },
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.product_info_inner {
}

.buy_btn {
  background-color: #fc0;
  outline: none;
  border: none;
  /* border-radius: 7px; */
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