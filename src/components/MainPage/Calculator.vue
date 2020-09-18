
<template>
  <div class="section">
      <div class="calculator">
          <div class="calculator_inner">
            <div class="calculator_picture"></div>
          <div class="calculator_description">Рассчитайте нужное каличество евроштакетника
             <a class="calc_btn" href="https://calc.uzab.ru" target="_blank"><span class="calc_btn_color">Перейти</span></a>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style soped>

.calculator{
    width:100%;
    height: 250px;
}

.calculator_inner{
    width: 100%;
    display: flex;
    height: 100%;
}

.calculator_picture{
    width: 60%;
}

.calculator_description{
    width: 40%;
    font-size: 25px;
    display: flex;
    padding: 25px;
    background-color: #b3def8;
    position: relative;
    justify-content: center;
}

.calculator_picture{
    background: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllBanners/shtaketnik+banner.jpg') no-repeat;
    background-size: cover;
}

.calc_btn{
    cursor: pointer;
    position: absolute;
    top: 60%;
    background: #2285c4;
    padding: 10px 40px;
    font-size: 25px;
}

.calc_btn_color{
    color: #fff;
}

@media (max-width: 990px){
  
  .calculator_description{
      font-size: 22px;
  }

  .calc_btn_color{
      font-size: 22px;
  }

}

@media (max-width: 770px){
  
  .calculator_description{
      font-size: 18px;
  }

    .calc_btn_color{
      font-size: 18px;
  }

  .calc_btn{
      padding: 5px 25px;
  }

}

@media (max-width: 575px){
  
  .calculator_description{
      font-size: 18px;
  }

    .calc_btn_color{
      font-size: 18px;
  }

  .calc_btn{
      padding: 5px 25px;
  }

  .calculator_picture{
      width:20%;
  }

  .calculator_description{
      width: 80%;
  }

}

</style>