<template>
  <div class="filter_main">
    <h2>Каталог авто</h2>
    <div class="filter_grid">
      <div class="filter_col">
        <Selects
          v-model="filters.manufacturer"
          :options="options?.manufacturers"
          placeholder="Марка"
        />
        <Selects
          v-model="filters.model"
          :options="modelOptions"
          placeholder="Модель"
        />
        <Selects
          v-model="filters.fuel_type"
          :options="fuelOptions"
          placeholder="Тип топлива"
        />
        <div class="filter_col__row">
          <!-- <Inputs v-model="filters.mileage_from" place="Пробег от" /> -->
          <!-- <Inputs v-model="filters.mileage_to" place="Пробег до" /> -->
        </div>
      </div>
      <!-- Остальные фильтры остаются без изменений -->
      <div class="filter_col">
        <Selects
          v-model="filters.transmission"
          :options="transmissionOptions"
          placeholder="Привод"
        />
        <div class="filter_col__row">
          <!-- <Inputs v-model="filters.engine_volume_from" place="Объем от" /> -->
          <!-- <Inputs v-model="filters.engine_volume_to" place="Объем до" /> -->
        </div>
      </div>
    </div>
    <div class="filter-btn">
      <Button @click="applyFilters" name="Показать результат" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useCarsStore, useCarsStoreRefs } from "~/store/useCarStore";

const { getCars, getFilters, sendMark } = useCarsStore();
const { options } = useCarsStoreRefs();

// Реактивный объект фильтров
const filters = ref({
  model: "",
  fuel_type: "",
  mileage_from: null,
  mileage_to: null,
  manufacturer: {},
  transmission: "",
  engine_volume_from: null,
  engine_volume_to: null,
  year_from: null,
  year_to: null,
  price_from: null,
  price_to: null,
});

// Опции для выпадающего списка моделей
const modelOptions = ref([]);

// Watcher для отслеживания изменений в поле manufacturer
watch(
  () => filters.value.manufacturer,
  async (newManufacturer) => {
    if (newManufacturer) {
      try {
        // Отправляем выбранную марку в sendMark и получаем список моделей
        console.log(filters.value.manufacturer);
        const response = await sendMark({ manufacturer: newManufacturer });
        modelOptions.value = response.models; // Обновляем список моделей
      } catch (error) {
        console.error("Ошибка при получении моделей:", error);
      }
    } else {
      // Очищаем список моделей, если марка не выбрана
      modelOptions.value = [];
    }
  }
);

// Пример данных для других выпадающих списков
const fuelOptions = ["Бензин", "Дизель", "Электро"];
const transmissionOptions = ["Автомат", "Механика"];

const applyFilters = () => {
  getCars(filters.value);
  getFilters();
};
</script>

<style scoped lang="scss"></style>
