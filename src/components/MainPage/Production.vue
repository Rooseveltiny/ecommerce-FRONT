
<template>
  <div class="section">
    <div class="production">
      <div class="production_inner">
        <div class="production_desription">Перерабатываем тонколистовой прокат лучшего качества вот уже 15 лет!</div>
        <div class="production_video">
            <div class="fade_background"></div>
          <video class="video" loop="loop" autoplay="" muted="">
          <source src="https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/videos/videoplayback.mp4"/>
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style soped>
.production {
  width: 100%;
  height: 250px;
}

.production_inner {
  display: flex;
  height: 100%;
}

.production_desription {
  width: 40%;
  font-size: 25px;
  padding: 25px;
  display: flex;
  align-content: center;
  background-color: #ffe373;
}

.production_video {
  width: 60%;
  height: 100%;
  position: relative;
}

.production_video video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.production_video{
    background: #333;
}

.fade_background{
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 1000;
    opacity: 0.4;
}



@media (max-width: 990px){
  
  .production_desription{
    font-size: 22px;
  }

}

@media (max-width: 770px){
  
  .production_desription{
    font-size: 18px;
  }

}

@media (max-width: 575px){
  
  .production_desription{
    font-size: 18px;
    width: 70%;
  }

  .production_video{
    width: 30%;
  }

}

</style>