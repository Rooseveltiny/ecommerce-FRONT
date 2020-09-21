
<template>
  <div class="section">
    <div class="banner_main">
      <div class="banner_inner">
        <div class="banner_left_side">
          <img
            width="100%"
            src="https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllBanners/left.jpg"
            alt
          />
        </div>
        <div class="banner_mid_side">
          <div class="content_inner">
            <br />
            <span class="title">Добро</span>
            <br />
            <span class="sub_title">пожаловать</span>
            <br />
            <span class="description">в интернет-магазин "Всё для кровли"</span>
            <div class="pluses">
              <div class="plus_item">Реальные остатки</div>
              <div class="plus_item">Актуальные цены</div>
              <div class="plus_item">Полный каталог</div>
            </div>
          </div>
        </div>
        <div class="banner_right_side">
          <img
            width="100%"
            src="https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllBanners/right.jpg"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner_main {
  width: 100%;
  height: 250px;
}

.banner_inner {
  display: flex;
  height: 100%;
}

.banner_left_side {
  width: 20%;
  background: brown;
  display: flex;
}

.banner_right_side {
  width: 60%;
  background: brown;
  display: flex;
}

/* .banner mid */
.banner_mid_side {
  width: 75%;
  background: rgb(240, 240, 240);
  display: flex;
  align-items: center;
  transition-duration: 0.5s;
}

.content_inner {
  padding: 0 20px 30px 20px;
}

.title {
  font-size: 30px;
}

.sub_title {
  font-size: 30px;
}

.description {
  font-size: 20px;
  transition-duration: 0.5s;
}

.pluses {
  display: flex;
  color: #666;
}

.plus_item {
  background-color: #fc0;
  margin: 5px;
  padding: 5px 15px;
}

.plus_item:first-child {
  margin-left: 0;
}

img {
  width: 100%;
}

@media (max-width: 1200px){
  
  .plus_item{
    text-align: center;
  }

}


@media (max-width: 770px){
  
 .banner_right_side{
   display: none;
 }

  .plus_item{
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  
  .pluses{
    margin-top: 20px;
  }

}

@media (max-width: 575px){
  
 .titile{
   font-size: 22px;
 }

 .sub_title{
   font-size: 22px;
 }

 .description{
   font-size: 14px;
 }

 .pluses{
   display: inline;
 }

 .plus_item{
   padding-left: 0;
   margin-left: 0;
 }

  .banner_mid_side{
    width: 80%;
  }

}

</style>