<template>
  <div class="catalog_main">
    <div class="container">
      <div class="catalog_inner">
        <div class="navigation main_block_style main_block_style-less" style="margin-bottom: 0">
          <NavigationChain />
        </div>
        <div class="filter_items_pagination">
          <div class="filter main_block_style-right_margin main_block_style main_block_style-less">
            <CatalogFilter />
          </div>
          <div class="sorting_and_items">
            <div class="sorting main_block_style main_block_style-less">
              <CatalogSorting />
            </div>
            <div class="catalog_items main_block_style main_block_style-less">
              <CatalogItems />
            </div>
            <div class="pagination main_block_style main_block_style-less">
              <CatalogPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItems from "./CatalogItems";
import CatalogPagination from "./CatalogPagination";
import CatalogSorting from "./CatalogSorting";
import CatalogFilter from "./CatalogFilter";
import NavigationChain from "./NavigationChain";

export default {
  components: {
    CatalogItems,
    CatalogPagination,
    CatalogFilter,
    CatalogSorting,
    NavigationChain
  }
};
</script>

<style scoped>
/* Navigation */
.navigation {
  width: 100%;
}

/* Filter Sorting and Pagination */
.filter_items_pagination {
  display: flex;
}

.filter {
  width: 30%;
}

.sorting_and_items {
  width: 70%;
}

.pagination {
  margin: 0 auto;
}
</style>