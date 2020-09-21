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
    <div class="section_main main_block_style main_block_style-less">
      <div class="section_inner" v-if="currentSection === 'Описание'">
      {{product.description}}
      </div>
      <div class="section_inner" v-if="currentSection === 'Характеристики'">
        <div class="chars_block">
          <div v-for="(char,index) in product.detail" :key="index" class="char_item">
            <div class="char_name">
              {{char.detail_group.title}}
              <span class="dots"></span>
            </div>
            <div class="char_value">{{char.title}}</div>
          </div>
        </div>
      </div>
      <div class="section_inner" v-if="currentSection === 'Файлы'">
        <div v-for="(file, index) in product.all_files" :key="index" class="file_item">
          <a target="_blank" :href="file.cloud_link"><span class="file_title">{{file.title}}</span></a>
        </div>
      </div>
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

.file_title{
  color: #0d61af;
  border-bottom: 1px dotted;

}

.sections {
  display: grid;
  width: 20%;
  height: 0%;
}

.product_info_inner {
  display: flex;
}

.section_main {
  width: 80%;
}

.sections_inner {
  padding: 0 10px;
}

.section_item {
  padding: 5px 5px 5px 15px;
  font-size: 16px;
  cursor: pointer;
}

.section_item-selected {
  background-color: #ffe373;
  position: relative;
}

.section_item-selected:after {
  position: absolute;
  content: "";
  display: block;
  height: 100%;
  width: 3px;
  top: 0;
  left: -3px;
  background-color: rgb(255, 103, 103);
}

/* chars */
.chars_block {
  width: 100%;
}

.char_item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.dots {
  border-bottom: 1px dotted rgb(145, 145, 145);
  width: 100%;
  margin: 7px;
}

.char_name {
  width: 50%;
  display: flex;
  white-space: nowrap;
}

.char_value {
  width: 50%;
}
</style>