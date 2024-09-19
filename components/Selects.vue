<template>
  <div class="custom-select" :class="{ isOpen: isOpen }" ref="selectBox">
    <div class="select-box" @click="toggleDropdown">
      <p class="selected">{{ selectedOption || placeholder }}</p>
      <Icon name="line-md:chevron-down" class="chevron" />
    </div>
    <ul v-if="isOpen" class="options">
      <li
        v-for="(option, index) in options"
        :key="index"
        class="option"
        :class="{ active: option === selectedOption }"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Пропсы для компонента
const props = defineProps<{
  options: string[];
  placeholder: string;
}>();

// Переменные состояния
const isOpen = ref(false);
const selectedOption = ref<string | null>(null);
const selectBox = ref<HTMLElement | null>(null);

// Функция для открытия/закрытия dropdown
const toggleDropdown = (event: MouseEvent) => {
  isOpen.value = !isOpen.value;
};

// Функция для выбора опции
const selectOption = (option: string) => {
  selectedOption.value = option;
  isOpen.value = false;
};

// Функция для закрытия dropdown при клике вне компонента
const handleClickOutside = (event: MouseEvent) => {
  if (selectBox.value && !selectBox.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

// Функция для закрытия dropdown при скролле
const handleScroll = () => {
  isOpen.value = false;
};

// Вешаем обработчики событий при монтировании компонента
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});

// Удаляем обработчики событий при размонтировании компонента
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.custom-select {
  width: 100%;
  position: relative;

  &.isOpen {
    .select-box {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .options {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}

.select-box {
  @include flex-space;
  border: 0.1rem solid #cbcbcb;
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 1.6rem 1.6rem;
  cursor: pointer;
}

.chevron {
  margin-left: 10px;
}

.options {
  position: absolute;
  width: 100%;
  border: 0.1rem solid #ccc;
  background-color: #fff;
  max-height: 15rem;
  overflow-y: auto;
  z-index: 10;
  border-radius: 0.4rem;
  border-top: 0;
}

.option {
  padding: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: #1aa7e825;
    color: $lblue;
  }

  &.active {
    background-color: #1aa7e8;
    color: white;
  }
}

.selected {
  flex-grow: 1;
  text-align: left;
}
</style>
