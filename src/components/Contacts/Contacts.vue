<template>
  <div class="contacts_main">
    <div class="container">
      <div class="contacts_inner">
        <div class="main_title">Контакты</div>

        <div class="contacts_block">
          <div
            class="contacts_info main_block_style-right_margin main_block_style main_block_style-less"
          >
            <div class="contact_item">
              <div class="contact_title">Адрес</div>
              <div class="contact_value">г. Череповец, ул. Красндонцев 5</div>
            </div>
            <div class="contact_item">
              <div class="contact_title">Телефоны</div>
              <div class="contact_value">8(8202)265-265, 8(8202)264-264</div>
            </div>
            <div class="contact_item">
              <div class="contact_title">Электронная почта</div>
              <div class="contact_value">35vdk@mail.ru</div>
            </div>
            <div class="contact_item">
              <div class="contact_title">Группа ВКонтакте</div>
              <a href="https://vk.com/35vdk" target="_blank">
                <div class="contact_value">https://vk.com/35vdk</div>
              </a>
            </div>
            <div class="contact_item">
              <div class="contact_title">Режим работы</div>
              <div class="contact_value">
                <span class="contact_underline">ПН-ПТ</span> с 9:00 до 18:00,
                <span class="contact_underline">СБ</span> с 9:00 до 15:00
              </div>
            </div>
            <div class="contact_item">
              <router-link to="/feedback">
                <div class="contact_callback">Оставить заявку</div>
              </router-link>
            </div>
          </div>

          <div class="contacts_map main_block_style main_block_style-less">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A54f643f82a1802474b9a59cb9838eb33dc3f85bc08911f05eb40f7c962c3394c&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
            <span class="mapLoading" style="z-index: -100">Загрузка карты...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contacts_info {
  width: 50%;
}

.contacts_map {
  width: 50%;
}

.contacts_block {
  display: flex;
  justify-content: space-between;
}

.contact_title {
  font-weight: bold;
}

.contact_item {
  padding: 10px 10px;
  border-bottom: 1px dotted rgb(199, 199, 199);
  transition-duration: 0.7s;
}

.contact_item:hover {
  background-color: rgb(255, 246, 212);
}

.contact_item:last-child {
  border-bottom: none;
}

.contact_underline {
  padding: 2px 5px;
  background-color: rgb(255, 234, 151);
  /* border-radius: 7px; */
  border: 1px dotted #666;
}

a {
  text-decoration: none;
}

.contacts_map {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.mapLoading {
  position: absolute;
  z-index: 0;
  font-size: 25px;
  color: #666;
}

.contact_callback {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fc0;
  /* border-radius: 5px; */
}

@media (max-width: 770px) {
  .contacts_block {
    display: flex;
    flex-wrap: wrap;
  }

  .contacts_block * {
    width: 100%;
  }

  .main_block_style-right_margin {
    margin: 0;
  }

  .contacts_map {
    height: 400px;
  }
}

@media (max-width: 320px) {
  .contacts_map {
    height: 300px;
  }

  .contact_item {
    font-size: 13px;
  }
}
</style>
