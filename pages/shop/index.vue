<template>
  <div class="shop">
    <section class="filter">
      <div class="container">
        <div class="filter_main">
          <h2>Каталог авто</h2>
          <div class="filter_grid">
            <div class="filter_col">
              <Selects :options="options" placeholder="Модель" />
              <Selects :options="options" placeholder="Тип топлива" />
              <div class="filter_col__row">
                <Inputs place="Пробег от" />
                <Inputs place="Пробег до" />
              </div>
            </div>
            <div class="filter_col">
              <Selects :options="options" placeholder="Марка" />
              <Selects :options="options" placeholder="Привод" />
              <div class="filter_col__row">
                <Inputs place="Объем от" />
                <Inputs place="Объем до" />
              </div>
            </div>
            <div class="filter_col">
              <div class="filter_col__row">
                <Inputs place="Год от" />
                <Inputs place="Год до" />
              </div>
              <Selects :options="options" placeholder="Трансмиссия" />
              <div class="filter_col__row">
                <Inputs place="Цена от" />
                <Inputs place="Цена до" />
              </div>
            </div>
          </div>
          <div class="filter-btn">
            <Button name="Показать результат" />
          </div>
        </div>
      </div>
    </section>
    <section class="cars">
      <div class="container">
        <div class="cars_head">
          <h2>Найдено: 24 346 автомобилей</h2>
          <div class="cars_sort">
            <SortDropdown />
          </div>
        </div>
        <ul class="cars_grid">
          <li v-for="(item, i) in 16" :key="'cars-item-' + i">
            <CardCar :data="car" />
          </li>
        </ul>
        <Pagination
          :totalPages="34"
          :currentPage="currentPage"
          @updatePage="handlePageChange"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue";
import Selects from "~/components/Selects.vue";
import Inputs from "~/components/Inputs.vue";
import CardCar from "~/components/CardCar.vue";
import SortDropdown from "~/components/SortDropdown.vue";
import Pagination from "~/components/Pagination.vue";
import Action from "~/components/Action.vue";

const options = ["Опция 1", "Опция 2", "Опция 3", "Опция 4"];

const car = ref<any>({
  price: "5 750 000",
  title: "Toyota RAV4",
  year: "2017",
  img: "/img/car.png",
  link: "/",
  detail: "/",
  character: [
    { icon: "/img/engine.svg", name: "2,3 л/бензин" },
    { icon: "/img/wheel.svg", name: "317 л.с." },
  ],
});

const currentPage = ref(3);

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
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
