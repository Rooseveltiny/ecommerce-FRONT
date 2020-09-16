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
                <router-link to="/contacts">
                  <span class="nav_link">Контакты</span>
                </router-link>
                <router-link to="/feedback">
                  <span class="nav_link">Обратная связь</span>
                </router-link>
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
            <router-link :to="{name: 'MainPage'}">
              <div class="logo">
                <img height="40px" :src="require('../../assets/logo/logo.svg')" alt />
              </div>
            </router-link>

            <transition name="bounce">
              <div class="catalog">
                <div
                  @click="showCatalogStructureComponentMethod()"
                  class="catalog_inner non-select"
                  :class="{active: getCatalogStructureVision}"
                  id="CatalogStructure"
                >Каталог продукции</div>
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

export default {
  methods: {
    ...mapMutations(["openCloseCatalogStructureGeneral"]),
    showCatalogStructureComponentMethod: function () {
      this.openCloseCatalogStructureGeneral();
    },
  },
  computed: {
    ...mapGetters(["getCatalogStructureVision"]),
  },
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
  z-index: 1001;
  display: flex;
  align-items: center;
  margin-left: 50px;
  position: relative;
}

.catalog_inner {
  cursor: pointer;
  background-color: #fc0;
  padding: 5px 10px;
  padding-right: 37px;
  font-size: 15px;
  border-radius: 7px;
  transition-duration: transform 0.5s;
}

.catalog_inner::after,
.catalog_inner::before{
  content: "";
  width: 16px;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  top: 0;
  position: absolute;
  top: 42%;
  right: 11px;
  height: 6px;
  transition: transform .5s;
}


.catalog_inner::before{
  top: 49%;
  border-top: none;
  border-bottom: 3px solid #333;
  height: 7px;
}

.catalog_inner.active::before,
.catalog_inner.active::after{
  width: 20px;
}

.catalog_inner.active::before{
  border-top: none;
  border-bottom: 3px solid rgb(252, 102, 102);
  transform: rotate(-45deg);
  top: 42%;
}

.catalog_inner.active::after{
  border-bottom: none;
  border-top: 3px solid rgb(252, 102, 102);
  transform: rotate(45deg);
  top: 47%;
}



.catalog_inner:hover {
  background-color: #ffe373;
}

.catalog_inner.active{
  background-color: #fff;
  border: 2px solid rgb(252, 102, 102);
  color: rgb(252, 102, 102);
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
  transition-duration: 0.5s;
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

@media (max-width: 990px){
  .nav_inner{
    font-size: 13px;
  }
}

@media (max-width: 575px){
  .nav_inner{
    font-size: 11px;
  }
}

</style>