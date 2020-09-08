<template>
  <div class="container">
    <div class="main_title">Обратная связь</div>
    <div class="form_container">
      <transition name="component-fade" mode="out-in">
        <form @submit.prevent="sendForm">
          <div class="form_block" v-if="!formSent">
               <div class="form_field form_field-radio non-select">
              <div
                class="radio_input"
                :class="{'radio_input-active': form.client_type==1}"
                @click="form.client_type=1"
              >Физическое лицо</div>
              <div
                class="radio_input"
                :class="{'radio_input-active': form.client_type==2}"
                @click="form.client_type=2"
              >Юридическое лицо</div>
            </div>
            <div class="form_field">
              <label for="name">Ваше имя</label>
              <input class="input_field" required type="text" v-model="form.name" id="name" />
            </div>
            <transition name="component-fade" mode="out-in">
              <div class="form_field" v-if="form.client_type==2">
                <label for="company">Компания</label>
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
  border: 1px solid #666;
  border-radius: 5px;
}

.form_field-radio {
  display: flex;
  justify-content: space-around;
}

.radio_input {
  border: 1.2px dashed #ffe373;
  background-color: rgb(255, 249, 195);
  padding: 5px 10px;
  border-radius: 5px;
  color: #666;
  cursor: pointer;
  font-size: 14px;
}

.radio_input-active {
  border-width: 2px;
  color: #666;
  font-weight: bold;
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


