<template>
  <div class="product_parameters">
    <div class="product_parameters_inner">
      <div class="field_item">
        <div class="field_title">Длина, м.
          <hint-component hintContent="Укажите длину листа/трубы/сайдинга/штакетника"/>
        </div>
        <input
          class="input_class"
          step = "0.1"
          type="number"
          min="0"
          @change="ProductOnChange()"
          v-model="productInputData.product_length"
        />
      </div>
      <div class="field_item">
        <div class="field_title">Кол-во, шт.</div>
        <input
          class="input_class"
          type="number"
          min="0"
          @change="ProductOnChange()"
          v-model="productInputData.product_quantity"
        />
      </div>
      <div class="field_item">
        <div
          class="field_title"
        >Количество, {{productInputData.product_object.unit_of_measurement}}.</div>
        <input
          class="input_class"
          type="number"
          min="0"
          @change="ProductOnChange()"
          v-model="productInputData.quantity"
        />
      </div>
      <div class="field_item">
        <div class="field_title">Цена</div>
        {{productInputData.product_object.price}}
      </div>
      <div class="field_item">
        <div class="field_title">Сумма</div>
        {{getSum()}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data(){
        return {
            changeTimer: undefined
        }
    },
  props: {
    productInputData: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(["onProductChange"]),
    ProductOnChange() {
    if (this.changeTimer != undefined) {clearTimeout(this.changeTimer);}
    this.changeTimer = setTimeout(()=>{this.onProductChange(this.productInputData)}, 1000);
    },
    getSum() {
      return (
        Number(this.productInputData.product_object.price) *
        Number(this.productInputData.quantity)
      );
    },
  },
};
</script>

<style scoped>
.product_parameters_inner {
  text-align: end;
  padding: 20px 0 0 0;
  display: flex;
}

.field_item {
  width: 100%;
  display: inline-block;
  text-align: center;
  padding: 0 10px;
  margin: auto;
  border-left: 1px solid rgb(230, 230, 230);
}

.field_item:last-child {
  border-right: 1px solid rgb(230, 230, 230);
}

.input_class {
  width: 100%;
  height: 30px;
  text-align: center;
  border: 1px solid rgb(220,220,200);
}

.field_title {
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>