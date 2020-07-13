<template>
  <div>
    <div class="container">
      <div class="catalog_and_stuff">
        <CatalogStructure />
        <MainBanner />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogStructure from "../CatalogStructure/CatalogStructure";
import MainBanner from "../MainPage/MainBanner";
export default {
  components: { CatalogStructure, MainBanner }
};
</script>

<style scoped>

.catalog_and_stuff{
    display: flex;
}

</style>