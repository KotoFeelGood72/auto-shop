<template>
  <div class="filter_main">
    <h2>Каталог авто</h2>
    <div class="filter_grid">
      <div class="filter_col">
        <Selects
          v-model="manufacturer"
          :entries="options?.manufacturers"
          placeholder="Марка"
        />

        <Selects
          v-model="filters.fuel_type"
          :options="options?.fuels"
          placeholder="Тип топлива"
        />
        <div class="filter_col__row">
          <Inputs v-model="filters.mileage_from" place="Пробег от" />
          <Inputs v-model="filters.mileage_to" place="Пробег до" />
        </div>
      </div>
      <div class="filter_col">
        <Selects
          v-model="filters.model"
          :entries="models"
          placeholder="Модель"
        />
        <Selects
          v-model="filters.transmission"
          :options="options?.gearboxes"
          placeholder="Коробка"
        />

        <div class="filter_col__row">
          <Inputs v-model="filters.engine_volume_from" place="Обьем от" />
          <Inputs v-model="filters.engine_volume_to" place="Обьем до" />
        </div>
      </div>
      <div class="filter_col">
        <div class="filter_col__row">
          <Selects
            v-model="filters.year_from"
            :entries="options?.years"
            placeholder="Год от"
          />
          <Selects
            v-model="filters.year_to"
            :entries="options?.years"
            placeholder="Год до"
          />
        </div>
        <Selects
          v-model="filters.colors"
          :options="options?.colors"
          placeholder="Привод"
        />
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
import { ref, watch } from "vue";
import { useCarsStore, useCarsStoreRefs } from "~/store/useCarStore";
import { useRouter, useRoute } from "vue-router";

const { getCars, getFilters, sendMark } = useCarsStore();
const { options, models } = useCarsStoreRefs();

const manufacturer = ref<any>(""); // Объявляем марку
const router = useRouter();
const route = useRoute();

const filters = ref({
  model: "", // Изначально пусто
  model_group: "",
  manufacturer_id: "", // Этот параметр можно обновить при необходимости
  year_from: "",
  year_to: "",
  fuel_type: "",
  transmission: "",
  mileage_from: "",
  mileage_to: "",
  engine_volume_from: "",
  engine_volume_to: "",
  price_from: "",
  price_to: "",
  colors: "",
});

// Когда марка меняется, обновляем filters.manufacturer_id
watch(manufacturer, async (newManufacturer) => {
  if (newManufacturer) {
    filters.value.manufacturer_id = newManufacturer.key; // Сохраняем только ключ марки в filters.manufacturer_id
    try {
      await sendMark({ manufacturers: newManufacturer.key });
    } catch (error) {
      console.error("Ошибка при получении моделей:", error);
    }
  } else {
    filters.value.manufacturer_id = ""; // Если марка сброшена, очищаем filters.manufacturer_id
  }
});

const applyFilters = () => {
  getFilters();
  getCars(filters.value);

  if (route.name !== "shop") {
    router.push({ name: "shop" });
  }
};
</script>

<style scoped lang="scss"></style>
