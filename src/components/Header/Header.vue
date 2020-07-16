<template>
  <div class="main_header non-select">
    <header class="header">
      <div class="container">
        <div class="inner_header">
          <nav class="nav">
            <div class="nav_inner">
              <div class="nav-left-part">
                <span class="nav_link">Череповец</span>
                <span class="nav_link">8(8202)265-265</span>
                <span @click="changeCurrentPage('Contacts')" class="nav_link">Контакты</span>
                <span @click="changeCurrentPage('AboutCompany')" class="nav_link">О компании</span>
                <span @click="changeCurrentPage('AboutProject')" class="nav_link">Проект</span>
              </div>
              <div class="nav-right-part">Вход/Регистрация</div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div class="bottom_header">
      <div class="container">
        <div class="bottom_header_inner">
          <div class="bottom_header_left">
            <div @click="changeCurrentPage('MainPage')" class="logo">
              <img height="40px" :src="require('../../assets/logo/logo.svg')" alt />
            </div>

            <transition name="bounce">
            <div class="catalog" v-if="$route.name != 'MainPage'">
              <div
                @click="showCatalogStructureComponentMethod()"
                class="catalog_inner non-select"
                :class="{active: getCatalogStructureVision}"
                id="CatalogStructure"
              >Каталог</div>
              <CatalogStructure v-show="getCatalogStructureVision" />
            </div>
            </transition>
          </div>
          <div class="bottom_header_right">
            <div class="search">
              <div class="search_input_block">
                <input placeholder="Найти товар" class="search_input" type="text" />
              </div>
              <button class="find_btn">Найти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import CatalogStructure from "../CatalogStructure/CatalogStructure";

export default {
  methods: {
    ...mapMutations(["changeCurrentPage", "showCatalogStructure"]),
    showCatalogStructureComponentMethod: function(){
      this.showCatalogStructure();
    }
  },
  computed: {
    ...mapGetters(["getCatalogStructureVision"])
  },
  components: { CatalogStructure }
};
</script>

<style scoped>
.header {
  background-color: #fc0;
}

/* NAV */

.nav_link {
  cursor: pointer;
  margin-right: 30px;
}

.nav_inner {
  padding: 3px 0 3px 0;
  display: flex;
  justify-content: space-between;
}

.nav-left-part {
  min-width: 35%;
  display: flex;
  justify-content: space-around;
}

.nav-right-part {
  width: 30%;
  text-align: right;
}

/* BOTTOM HEADER */
.bottom_header {
  -webkit-box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.25);
  background-color: #fff;
}

.bottom_header_inner {
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.bottom_header_left {
  display: flex;
}

.catalog {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 50px;
  position: relative;
}

.catalog_inner {
  background-color: #fc0;
  padding: 5px 10px;
  padding-right: 30px;
  font-size: 18px;
  border-radius: 7px;
  transition-duration: 0.5s;
}

.catalog_inner:hover {
  background-color: #ffe373;
}

.catalog_inner:after {
  position: absolute;
  content: "";
  width: 7px;
  height: 7px;
  border-top: 1.5px solid rgb(0, 0, 0);
  border-right: 1.5px solid rgb(0, 0, 0);
  top: 48%;
  right: 12%;
  transform: rotate(-45deg);
  transition-duration: .3s;
}

.catalog_inner.active:after {
  transform: rotate(135deg);
  top: 44%;
}

.bottom_header_right {
  width: 30%;
  text-align: right;
}

.logo {
  padding: 15px 0 10px 0;
}

/* SEARCH temporary BLOCK */

.search_input_block {
  width: 100%;
}

.search_input {
  height: 30px;
  width: 100%;
  border-width: 0.1px;
  padding-left: 7px;
  transition-duration: .5s;
  border-top: none;
  border-left: none;
  border-right: none;
}

.search_input:focus,
.search_input:active {
  outline: none;
  outline-offset: none;
  border-bottom: 1px solid #fc0;
}

.search {
  display: flex;
  justify-content: flex-end;
}

.find_btn {
  margin-left: 20px;
  height: 30px;
  background-color: #fc0;
  border: none;
  padding: 0 20px;
  border-radius: 3px;
}
</style>