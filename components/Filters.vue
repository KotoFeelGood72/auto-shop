<template>
  <div class="filter_main">
    <h2>Каталог авто</h2>
    <div class="filter_grid">
      <div class="filter_col">
        <Selects
          v-model="filters.manufacturer_id"
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
          v-model="filters.model_group"
          :entries="models"
          placeholder="Модель"
        />
        <Selects
          v-model="filters.transmission"
          :options="options?.gearboxes"
          placeholder="Коробка"
        />
        <div class="filter_col__row">
          <Inputs v-model="filters.engine_volume_from" place="Объем от" />
          <Inputs v-model="filters.engine_volume_to" place="Объем до" />
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
      <Button
        @click="() => carsStore.applyFilters(router, scrollEl)"
        name="Показать результат"
        :load="isLoading"
      />
    </div>

    <div ref="scrollEl" class="scrollEl"></div>
  </div>
</template>

<script setup lang="ts">
import { useCarsStore, useCarsStoreRefs } from "~/store/useCarStore";
import { useRouter } from "vue-router";

const carsStore = useCarsStore();
const { options, models, filters, isLoading } = useCarsStoreRefs();
const router = useRouter();

const scrollEl = ref<HTMLElement | null>(null);

onMounted(() => {
  carsStore.getCars(filters.value);
});

watch(
  () => filters.value.manufacturer_id,
  async (newManufacturerId) => {
    if (newManufacturerId) {
      try {
        await carsStore.sendMark({ manufacturers: newManufacturerId?.key });
      } catch (error) {
        console.error("Ошибка при отправке данных о марке:", error);
      }
    }
  }
);
</script>

<style scoped lang="scss">
.filter_main {
  position: relative;
}

.scrollEl {
  position: absolute;
  top: 100%;
}
</style>
