<template>
  <div class="container">
    <div class="main_title">Частые вопросы</div>
    <div class="questions_block">
      <div class="q_item" v-for="(q, index) in questions" :key="index">
        <div
          class="q_title non-select main_block_style"
          :class="{active: current_question == index}"
          @click="setCurrent(index)"
        >{{q.question}}</div>
          <div class="q_answer" :class="{active: index==current_question}">
            {{q.answer}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Доставка по вологодской области",
          answer:
            "зкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуо",
        },
        {
          question: "Способы оплаты",
          answer:
            "зкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуозкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуо",
        },
        {
          question: "Производство",
          answer:
            "зкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуозкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуо",
        },
        {
          question: "Доставка по России",
          answer:
            "зкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуозкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуозкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуозкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуозкушпозуопзыкопзщышуопзщшыуопзшыкопзшщыуыушпоыузщшопзыущшопзыущопзышопзыушопзщкшуопзщшукопзщшуопзшщыуо",
        },
      ],
      current_question: undefined,
    };
  },
  methods: {
    setCurrent(index) {
      if (index == this.current_question) {
        this.current_question = undefined;
      } else {
        this.current_question = index;
      }
    },
  },
};
</script>

<style scoped>
.q_item {
  width: 60%;
  text-align: left;
  display: flex;
  margin: 0 auto;
  display: block;
  font-size: 21px;
}

.q_title {
  padding: 10px 20px;
  margin: 5px 0;
  font-weight: bold;
  color: #666;
  width: 100%;
  position: relative;
  cursor: pointer;
}

.q_title::after {
  content: "";
  border-top: 2px solid #666;
  border-left: 2px solid #666;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 40%;
  left: 95%;
  cursor: pointer;
  transition-duration: 0.5s;
  transform: rotate(-225deg);
}

.q_title.active:after {
  transform: rotate(-135deg);
}

.q_title.active{
    background-color: rgb(255, 249, 195);
}

.q_answer{
  word-break: break-all;
  margin-bottom: 20px;
  padding: 5px 20px;
  border-radius: 7px;
  background: #fff;
  transition: 0.3s ease-out;
  display: none;

}

.q_answer.active{
  display: block;
}




</style>