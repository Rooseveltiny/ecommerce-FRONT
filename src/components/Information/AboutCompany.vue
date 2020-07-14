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
                    <div class="project_item">
                        <div class="project_content">
                        <div class="project_title">Всё для кровли</div>
                        <div class="project_discription">Магазин кровельных материалов</div>
                        </div>
                    </div>
                    <div class="project_item">
                        <div class="project_content">
                        <div class="project_title">Евроштакетник</div>
                        <div class="project_discription">Металлоштакетник с доставкой по всей России</div>
                        </div>
                    </div>
                    <div class="project_item">
                        <div class="project_content">
                        <div class="project_title">Металлические грядки</div>
                        <div class="project_discription">Ваши клумбы и грядки - всегда в порядке</div>
                        </div>
                    </div>
                    <div class="project_item">
                        <div class="project_content">
                        <div class="project_title">Откатные ворота</div>
                        <div class="project_discription">Надёжные удобные ворота для Вашего поместья</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>

.about_company-info{

}

.projects {
    display: flex;
}

.project_item{
    width: 25%;
    text-align: center;
    height: 150px;
    margin: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
}

.project_item:hover .project_discription {
    opacity: .8;
}

.project_content{
    width: 80%;
}

.project_title{
    font-size: 18px;
    font-weight: bold;
}

.project_discription{
    opacity: 0;
    transition-duration: 1s;
}

</style>