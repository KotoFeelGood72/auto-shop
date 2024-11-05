<template>
  <div class="shop">
    <div class="container">
      <Filters />
    </div>
    <section class="cars">
      <div class="container">
        <div class="cars_head">
          <h2>Найдено: {{ cars?.total_count }} автомобилей</h2>
          <div class="cars_sort">
            <SortDropdown />
          </div>
        </div>
        <ul class="cars_grid">
          <li v-for="(car, i) in cars?.cars" :key="'cars-item-' + i">
            <CardCar :data="car" />
          </li>
        </ul>
        <Pagination
          :totalPages="34"
          :currentPage="currentPage"
          :pageSize="16"
          @updatePage="changePage"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CardCar from "~/components/CardCar.vue";
import SortDropdown from "~/components/SortDropdown.vue";
import Pagination from "~/components/Pagination.vue";
import Filters from "~/components/Filters.vue";
import { useCarsStore, useCarsStoreRefs } from "~/store/useCarStore";

const { cars, currentPage, isLoading } = useCarsStoreRefs();
const { changePage } = useCarsStore();
</script>

<style scoped lang="scss">
.shop {
  padding: 8rem 0 0 0;
  @include bp($point_2) {
    padding: 0;
    :deep(.filter-btn .button) {
      padding: 1.8rem 2rem !important;
      width: 100%;
    }
    :deep(.filter-btn) {
      width: 100%;
    }
  }
}

.filter {
  :deep(.container) {
    @include bp($point_2) {
      padding: 0;
    }
  }

  .filter_main {
    @include bp($point_2) {
      border-radius: 0;
      margin-bottom: 4rem;
    }
  }
}

.cars {
  :deep(.sort-options) {
    @include bp($point_2) {
      left: 0;
      right: auto;
    }
  }
}
</style>
