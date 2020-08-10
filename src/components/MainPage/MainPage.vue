<template>
  <div>
    <div class="container">
      <div class="catalog_and_stuff">
        <CatalogStructure />
        <div class="banner_and_offers">
          <MainBanner />
          <keep-alive>
            <MainOffers/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogStructure from "../CatalogStructure/CatalogStructure";
import MainBanner from "../MainPage/MainBanner";
import MainOffers from "../MainPage/MainOffers";
export default {
  components: { CatalogStructure, MainBanner, MainOffers },
};
</script>

<style scoped>

.banner_and_offers{
  width: 75%;
}

.catalog_and_stuff {
  display: flex;
}
</style>