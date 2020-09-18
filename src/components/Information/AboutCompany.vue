<template>
  
    <div class="about_company">
        <div class="container">
                <div class="main_title">
                    О компании
                </div>
            <div class="about_company_inner">
                <div class="about_company-info main_block_style main_block_style-less">
                    <p>Компания "Всё для кровли" была основана в 2005 году в г. Череповце.
                        Основным видом деятельности организации является обработка тонколистового проката давлением. 
                        У предприятия имеется несколько производственных помещений с новейшим скоростным оборудованием,
                        а также опытный штат сотрудников. 
                    </p>
                    <p>
                        Основные виды продукции производимые компанией "Всё для кровли":
                        <ul>
                            <li>Профнастил</li>
                            <li>Металлочерепица</li>
                            <li>Металлический сайдинг</li>
                            <li>Металлоштакетник</li>
                            <li>Доборные элементы</li>
                            <li>Металлические грядки</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="main_title">
                    Наши проекты
                </div>
                <div class="projects">
                    <a href="" target="_blank">
                    <div class="project_item vdk-proj">
                        <div class="project_content">
                        <div class="project_title">Всё для кровли</div>
                        <div class="project_discription">Магазин кровельных материалов</div>
                        </div>
                    </div>
                    </a>
                    <a href="https://uzab.ru" target="_blank">
                    <div class="project_item uzab-proj">
                        <div class="project_content">
                        <div class="project_title">Евроштакетник</div>
                        <div class="project_discription">Металлоштакетник с доставкой по всей России</div>
                        </div>
                    </div>
                    </a>
                    <a href="http://грядки.рус" target="_blank">
                    <div class="project_item beds-proj">
                        <div class="project_content">
                        <div class="project_title">Металлические грядки</div>
                        <div class="project_discription">Ваши клумбы и грядки - всегда в порядке</div>
                        </div>
                    </div>
                    </a>
                    <a href="https://vdkvorota.ru" target="_blank">
                    <div class="project_item vorota-proj">
                        <div class="project_content">
                        <div class="project_title">Откатные ворота</div>
                        <div class="project_discription">Надёжные удобные ворота для Вашего поместья</div>
                        </div>
                    </div>
                    </a>
                </div>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>



/* projects pics */
.vdk-proj{
    background-image: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllProjects/vdk.jpg');
}
.uzab-proj{
    background-image: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllProjects/uzab.jpg');
}
.vorota-proj{
    background-image: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllProjects/vdkvorota.jpg');
}
.beds-proj{
    background-image: url('https://e-commerce-vdk.s3.eu-central-1.amazonaws.com/AllProjects/beds.jpg');
}

/* all other stuff */

a{
    display: contents;
}

.projects {
    display: flex;
}

.project_item{
    position: relative;
    transition-duration: .7s;
    width: 25%;
    text-align: center;
    height: 150px;
    margin: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 7px; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.project_item:hover:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
  z-index: 2;
  /* border-radius: 7px; */
}

.project_item:hover .project_content{
    opacity: 1;
}

.project_content{
    transition-duration: .5s;
    opacity: 0;
    width: 80%;
    z-index: 1000;
}

.project_title{
    font-size: 18px;
    font-weight: bold;
    color: #fff;
}

.project_discription{
    transition-duration: 1s;
    color: #fff;
}

@media (max-width: 575px){
    .projects{
        flex-wrap: wrap;
    }

    .project_item{
        width: 100%;
    }

    .about_company-info{
        font-size: 14px;
    }
}

@media (max-width: 320px){
    .about_company-info{
        font-size: 12px;
    }
}

</style>