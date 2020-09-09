<template>
  <div class="container">
    <div class="main_title">Обратная связь</div>
    <div class="form_container">
      <transition name="component-fade" mode="out-in">
        <form @submit.prevent="sendForm">
          <div class="form_block main_block_style" v-if="!formSent">
               <div class="form_field form_field-radio non-select">
              <div
                class="radio_input"
                :class="{'radio_input-active': form.client_type==1}"
                @click="form.client_type=1"
              >Частное лицо</div>
              <div
                class="radio_input"
                :class="{'radio_input-active': form.client_type==2}"
                @click="form.client_type=2"
              >Организация</div>
            </div>
            <div class="form_field">
              <label for="name">Ваше имя</label>
              <input class="input_field" required type="text" v-model="form.name" id="name" />
            </div>
            <transition name="component-fade" mode="out-in">
              <div class="form_field" v-if="form.client_type==2">
                <label for="company">Название организации</label>
                <input class="input_field" required type="text" v-model="form.company" id="company" />
              </div>
            </transition>
            <div class="form_field">
              <label for="phone_number">Номер телефона</label>
              <input
                class="input_field"
                maxlength="12"
                type="tel"
                required
                v-model="form.phone_number"
                id="phone_number"
              />
            </div>
            <div class="form_field">
              <label for="email">Адрес электронной почты</label>
              <input class="input_field" required type="email" v-model="form.email" id="email" />
            </div>
            <input class="submit_btn" type="submit">
          </div>
        </form>
      </transition>
      <transition name="component-fade" mode="out-in">
      <div v-if="formSent" class="form_result">{{formSentInfo}}<router-link class="on_main" to='/'> На главную</router-link></div>
      </transition>
    </div>
  </div>
</template>

<script>
import ApiSettings from "../../store/ApiSettings";

export default {
  data() {
    return {
      form: {
        name: "",
        client_type: 1,
        company: "",
        phone_number: "",
        email: "",
      },
      formSent: false,
      formSentInfo: "Форма успешно отправлена. Наши менеджеры с Вами свяжутся."
    };
  },
  watch: {
    client_type() {
      this.company = "";
    },
  },
  methods: {
    async sendForm() {
      let body = JSON.stringify(this.form);
      let server = `${ApiSettings.BASE_ROUTE}/feedback_form`;
      let response = await fetch(server, { body: body, method: "POST", headers: {"Content-type": "application/json"} });
      if (response.ok){
          this.formSent = true;
      } else {
          alert('Возникла ошибка при отправке формы! Пожалуйста, проверьте корректность введённых данных')
      }
    },
  },
};
</script>

<style scoped>
.form_field {
  display: grid;
  padding-bottom: 10px;
}

.form_block {
  width: 40%;
}

.form_container {
  padding-left: 25px;
}

label {
  font-size: 15px;
  color: #666;
}

.input_field {
  height: 35px;
  /* border: 1px solid rgb(238, 238, 238); */
  border: none;
  border-radius: 5px;
  background-color: #f6f6f6;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
}

.form_field-radio {
  display: flex;
  justify-content: space-around;
}

.radio_input {
  padding: 5px 10px;
  border-radius: 5px;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  position: relative;
}

.radio_input::before{
    content: "";
    /* width: 100%; */
    height: 3px;
    background-color: #fc0;
    transition-duration: .7s;
    position: absolute;
    left: 0;
    bottom: 0;
}

.radio_input.radio_input-active::before {
    width: 100%;
}

.radio_input-active{
    color: #333;
}



input {
  outline: none;
  padding: 10px;
  color: #666;
  font-size: 15px;
}

.submit_btn {
  width: 100%;
    background-color: #fc0;
    margin-top: 10px;
    border: none;
    padding: 12px;
    color: #333;
    border-radius: 5px;
    cursor: pointer;
}

.form_result{
    border: 2px dashed #fc0;
    border-radius: 7px;
    padding: 20px;
    color: #666;
    font-size: 17px;
    background-color: rgb(255, 249, 195);
    width: fit-content;
}

.on_main{
    color: rgb(137, 137, 221);
}

</style>


