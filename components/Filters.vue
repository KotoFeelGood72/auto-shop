<template>
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
</template>

<script setup lang="ts">
const options = ["Опция 1", "Опция 2", "Опция 3", "Опция 4"];
</script>

<style scoped lang="scss"></style>
