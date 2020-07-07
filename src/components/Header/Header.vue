<template>
  <div class="main_header">
    <header class="header">
      <div class="container">
        <div class="inner_header">
          <nav class="nav">
            <div class="nav_inner">
              <div class="nav-left-part">
                <span class="nav_link">Череповец</span>
                <span class="nav_link">8(8202)265-265</span>
                <span class="nav_link">Информация</span>
                <span class="nav_link">Контакты</span>
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
            <div class="logo">
                <img height="40px" :src="require('../../assets/logo/logo.svg')" alt="">
            </div>
          </div>
          <div class="bottom_header_right">
            <div class="search">
              <input type="text" />
              <button>Найти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  background-color: #fc0;
}

/* NAV */

.nav {
}

.nav_link {
  cursor: pointer;
  margin-right: 15px;
  /* font-weight: bold; */
  /* color: #fff; */
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
  -webkit-box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 8px 10px -11px rgba(0, 0, 0, 0.55);
}

.bottom_header_inner {
    align-items: center;
  /* padding: 15px 0 15px 0; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.bottom_header_left{
}

.bottom_header_right {
  width: 30%;
  text-align: right;
}

.logo{
    padding: 15px 0 10px 0;
}



</style>