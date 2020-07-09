<template>
  
    <div>
        Товары
    </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {

    methods:{
        ...mapActions(['fetchProducts'])
    },
    async mounted(){
        this.fetchProducts();
    }

}

</script>

<style>



</style>