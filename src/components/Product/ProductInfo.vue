<template>
  <div class="product_info_inner">
    <div class="sections main_block_style main_block_style-less main_block_style-right_margin">
      <div class="sections_inner">
        <div
          v-for="section in allSections"
          :key="section"
          class="section_item non-select"
          :class="{'section_item-selected': section == currentSection}"
          @click="currentSection = section"
        >{{section}}</div>
      </div>
    </div>
    <div class="section main_block_style main_block_style-less">
      <div class="section_inner" v-if="currentSection === 'Описание'">{{product.discription}}</div>
      <div
        class="section_inner"
        v-if="currentSection === 'Характеристики'"
      >
      
      <div class="chars_block">

        <div v-for="char in product.characteristics" :key="char" class="char_item">
          <div class="char_name">
            {{Object.keys(char)[0]}}
          <span class="dots"></span></div>
          <div class="char_value">
            {{Object.values(char)[0]}}
          </div>
        </div>

      </div>
      
      </div>
      <div class="section_inner" v-if="currentSection === 'Файлы'">{{product.category}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      allSections: ["Описание", "Характеристики", "Файлы"],
      currentSection: "Описание"
    };
  },
  computed: {
    ...mapGetters(["product"])
  }
};
</script>

<style scoped>
.sections {
  display: grid;
  width: 20%;
}

.product_info_inner {
  display: flex;
}

.section {
  width: 80%;
}

.sections_inner {
  padding: 0 10px;
}

.section_item {
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
}

.section_item-selected {
  background-color: #ffe373;
}


/* chars */
.chars_block{
  width: 100%;
}

.char_item{
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.dots{
  border-bottom: 1px dotted rgb(145, 145, 145);
  width: 100%;
  margin: 7px;
}

.char_name{
  width: 50%;
  display: flex;
  white-space: nowrap;
}

.char_value{
  width: 50%;
}

</style>