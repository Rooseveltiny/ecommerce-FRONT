<template>
  
<div>
    <div class="filter_inner">
        <div class="filter_title">Поиск по свойствам</div>
        <div v-for="filter in getAllFilters" :key="filter.name" class="filter_item">
            <div class="filter_name">
                {{filter.name}}
            </div>
            <div v-for="parameter in filter.parameters" :key="parameter.value" class="filter_value">
                <input type="checkbox" :id="parameter.value" v-model="parameter.choosen">
                <label :for="parameter.value">{{parameter.value}}</label>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getAllFilters'])
    }
}
</script>

<style scoped>

.filter_title{
    font-size: 20px;
    text-align: center;
    padding-bottom: 15px;
}

.filter_name{
    font-weight: bold;
    padding-left: 5px;
    background-color: #ffe373;
}

.filter_item{
    padding-bottom: 5px;
}


.filter_value{
    padding: 2px 0;
}

</style>