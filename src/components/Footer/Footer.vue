<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer_inner">
          <div class="footer--left_col non-select">
            <div class="footer_section">
              <router-link to="/about_company">
                <div class="footer_item">О компании</div>
              </router-link>
              <router-link to="/catalog/categories">
                <div class="footer_item">Каталог продукции</div>
              </router-link>
            </div>
            <div class="footer_section">
              <router-link to="/contacts">
                <div class="footer_item">Контакты</div>
              </router-link>
              <router-link to="/feedback">
                <div class="footer_item">Обратная связь</div>
              </router-link>
            </div>
            <div class="footer_section">
              <router-link to="/faq">
                <div class="footer_item">Частные вопросы</div>
              </router-link>
              <router-link to="/about_project">
                <div class="footer_item">О проекте</div>
              </router-link>
            </div>
          </div>
          <div class="footer--right_col">
            <div class="footer--right_col_inner">
              <div @click="changeCurrentPage('MainPage')" class="logo">
                <img height="40px" :src="require('../../assets/logo/logo.svg')" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeCurrentPage"])
  }
};
</script>

<style scoped>
.footer {
  background: #333;
  margin-top: 25px;
  color: rgb(245, 245, 245);
}

.footer_inner {
  display: flex;
}

.footer_item {
  padding: 4px 0;
  cursor: pointer;
  transition-duration: 0.5s;
}

.footer_item:hover {
  color: #ffe373;
}

.footer--left_col {
  width: 70%;
  padding: 25px 25px 25px 0;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.footer--right_col {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer--right_col_inner {
  display: grid;
}

.logo {
  padding: 10px 20px;
  background: #f7efef;
  border-radius: 15px;
}
</style>