<template>
  <div>
    <div class="main_little_title">Предложения</div>
    <div class="offers non-select main_block_style main_block_style-less">
      <div class="offers_inner">
        <div class="offer_categories">
          <div
            class="offer_category_title non-select"
            v-for="(cat, index) in offerCategories"
            :key="index"
            @click="changeCategory(cat)"
            :class="{'offer_category_title--choosen': cat == currentOfferCat}"
          >{{cat}}</div>
        </div>
        <div class="offers_items">
          <div @click="swipe(true)" class="btn">
            <span class="btn_pseudo btn_pseudo-left left_btn"></span>
          </div>
          <template v-for="n in 4">
            <div :key="n" v-if="allOffers[n] != null" class="offer_item">
              <div class="offer_img">
                <img src alt />
              </div>
              <div :key="n" class="offer_title">
                <router-link
                  :to="{ path: `/catalog/product/${allOffers[n].link}` }"
                >{{allOffers[n].title}}</router-link>
              </div>
            </div>
          </template>
          <div class="btn">
            <span @click="swipe(false)" class="btn_pseudo btn_pseudo-right right_btn"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiSettings from "../../store/ApiSettings";

export default {
  data() {
    return {
      offerCategories: ["Новинки", "Актуальное", "Скидки", "Успейте купить"],
      currentOfferCat: "Новинки",
      allOffers: [],
    };
  },
  methods: {
    swipe(left) {
      if (left) {
        this.allOffers.unshift(this.allOffers.pop());
      } else {
        this.allOffers.push(this.allOffers.shift());
      }
    },
    changeCategory(cat) {
      this.currentOfferCat = cat;
    },
    async fetchOffers() {
      const res = await fetch(`${ApiSettings.BASE_ROUTE}` + "/products/all");
      const offers = await res.json();
      this.allOffers = offers;
    },
  },
  mounted() {
    this.fetchOffers();
  },
};
</script>

<style scoped>
.offers {
  padding: 7px;
}

.offers:hover .btn_pseudo {
  opacity: 1;
}

.offer_categories {
  display: flex;
  justify-content: space-around;
}

.offer_category_title {
  cursor: pointer;
  font-size: 14px;
  padding-top: 5px;
  color: #333;
  transition-duration: 0.2s;
}

.offer_category_title:hover:not(.offer_category_title--choosen) {
  /* background-color: #fee373; */
}

.offer_category_title--choosen {
  border-bottom: 1px dotted #666;
  cursor: default;
  font-weight: bold;
}

.offer_img {
  text-align: center;
  width: 80%;
  height: 120px;
  background-color: rgb(219, 219, 219);
  border-radius: 7px;
  margin: 0 auto;
}

.offers_items {
  margin: 15px 0 10px 0;
  display: flex;
  justify-content: space-around;
}

.offer_item {
  display: inline-block;
  width: 25%;
}

.offer_title {
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}

.btn {
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
}

.btn_pseudo {
  transition-duration: 0.7s;
  opacity: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  top: 25%;
}

.btn_pseudo:hover {
  background-color: #fee373;
}

.btn_pseudo::after {
  position: absolute;
  display: block;
  content: "";
  width: 12px;
  bottom: -5%;
  height: 12px;
  border-top: 1px solid #666;
  border-left: 1px solid #666;
  margin: 15px;
}

.btn_pseudo-left {
  left: 20px;
}

.btn_pseudo-right {
  right: 20px;
}

.left_btn::after {
  transform: rotate(-45deg);
  left: 2px;
}

.right_btn::after {
  transform: rotate(135deg);
  left: -3px;
}
</style>