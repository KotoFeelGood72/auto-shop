<template>
  <div class="filter_main">
    <h2>Каталог авто</h2>
    <div class="filter_grid">
      <div class="filter_col">
        <Selects v-model="filters.model" :options="options" placeholder="Модель" />
        <Selects v-model="filters.fuel_type" :options="fuelOptions" placeholder="Тип топлива" />
        <div class="filter_col__row">
          <Inputs v-model="filters.mileage_from" place="Пробег от" />
          <Inputs v-model="filters.mileage_to" place="Пробег до" />
        </div>
      </div>
      <div class="filter_col">
      {{ filters.manufacturer }}
        <Selects v-model="filters.manufacturer" :options="manufacturerOptions" placeholder="Марка" />
        <Selects v-model="filters.transmission" :options="transmissionOptions" placeholder="Привод" />
        <div class="filter_col__row">
          <Inputs v-model="filters.engine_volume_from" place="Объем от" />
          <Inputs v-model="filters.engine_volume_to" place="Объем до" />
        </div>
      </div>
      <div class="filter_col">
        <div class="filter_col__row">
          <Inputs v-model="filters.year_from" place="Год от" />
          <Inputs v-model="filters.year_to" place="Год до" />
        </div>
        <Selects v-model="filters.transmission" :options="transmissionOptions" placeholder="Трансмиссия" />
        <div class="filter_col__row">
          <Inputs v-model="filters.price_from" place="Цена от" />
          <Inputs v-model="filters.price_to" place="Цена до" />
        </div>
      </div>
    </div>
    <div class="filter-btn">
      <Button @click="applyFilters" name="Показать результат" />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import { useCarsStore } from "~/store/useCarStore";

const {getCars} = useCarsStore()


// Реактивный объект фильтров
const filters = ref({
  model: '',
  fuel_type: '',
  mileage_from: null,
  mileage_to: null,
  manufacturer: '',
  transmission: '',
  engine_volume_from: null,
  engine_volume_to: null,
  year_from: null,
  year_to: null,
  price_from: null,
  price_to: null,
});

// Пример данных для выпадающих списков
const options = ["Опция 1", "Опция 2", "Опция 3", "Опция 4"];
const fuelOptions = ["Бензин", "Дизель", "Электро"];
const manufacturerOptions = ["Acura", "BMW", "Mercedes"];
const transmissionOptions = ["Автомат", "Механика"];


const applyFilters = () => {
  getCars(filters.value)

};
</script>


<style scoped lang="scss"></style>
