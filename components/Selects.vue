<template>
  <div class="custom-select">
    <div class="select-box" @click="toggleDropdown">
      <p class="selected">{{ selectedOption || placeholder }}</p>
      <Icon name="line-md:chevron-down" class="chevron" />
    </div>
    <ul v-if="isOpen" class="options">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="option"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Пропсы для компонента
const props = defineProps<{
  options: string[];
  placeholder: string;
}>();

// Переменные состояния
const isOpen = ref(false);
const selectedOption = ref<string | null>(null);

// Функция для открытия/закрытия dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Функция для выбора опции
const selectOption = (option: string) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 200px;
  font-family: Arial, sans-serif;
}

.select-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
}

.chevron {
  margin-left: 10px;
}

.options {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #fff;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
  border-radius: 4px;
}

.option {
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
}

.selected {
  flex-grow: 1;
  text-align: left;
}
</style>
