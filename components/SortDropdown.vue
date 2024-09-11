<template>
  <div class="sort-dropdown">
    <div class="sort-header" @click="toggleDropdown">
      <Icon name="line-md:arrow-up-down" class="sort-icon" />
      <span>{{ selectedOption?.label || options[0].label }}</span>
    </div>
    <ul v-if="isOpen" class="sort-options">
      <li
        v-for="(option, index) in options"
        :key="index"
        :class="{ selected: selectedOption.value === option.value }"
        @click="selectOption(option)"
      >
        {{ option.label }}
        <Icon
          v-if="selectedOption.value === option.value"
          name="line-md:check"
          class="check-icon"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ref([
  { label: "По дате", value: "date" },
  { label: "По рейтингу", value: "rating" },
  { label: "По возрастанию цены", value: "price-asc" },
  { label: "По убыванию цены", value: "price-desc" },
  { label: "Показать все", value: "all" },
]);

// Выбираем первую опцию по умолчанию
const selectedOption = ref(options.value[0]);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>

<style scoped lang="scss">
.sort-dropdown {
  position: relative;
  width: 200px;
  font-family: Arial, sans-serif;

  .sort-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  .sort-icon {
    margin-right: 10px;
  }

  .sort-options {
    position: absolute;
    width: 100%;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    z-index: 10;
  }

  .sort-options li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: #f0f0f0;
    }
  }

  .selected {
    background-color: #e0f7fa;
  }

  .check-icon {
    margin-left: 10px;
  }
}
</style>
