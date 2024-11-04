<template>
  <div class="custom-select" :class="{ isOpen: isOpen }" ref="selectBox">
    <!-- Выбранный элемент или placeholder -->
    <div class="select-box" @click="toggleDropdown">
      <p class="selected">{{ selectedOption?.value || placeholder }}</p>
      <Icons icon="line-md:chevron-down" class="chevron" />
    </div>
    <!-- Список опций -->
    <ul v-if="isOpen" class="options">
      <li
        v-for="option in options"
        :key="option.key"
        class="option"
        :class="{ active: option.key === selectedOption?.key }"
        @click="selectOption(option)"
      >
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Пропсы для компонента
const props = defineProps<{
  options: { key: string; value: string }[]; // Массив объектов с полями key и value
  placeholder: string;
}>();

// Эмит для передачи данных в родительский компонент
const emit = defineEmits(["update:modelValue"]);

// Переменные состояния
const isOpen = ref(false); // Состояние открытия/закрытия дропдауна
const selectedOption = ref<{ key: string; value: string } | null>(null); // Текущий выбранный элемент
const selectBox = ref<HTMLElement | null>(null); // Ссылка на дропдаун

// Функция для открытия/закрытия dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Функция для выбора опции
const selectOption = (option: { key: string; value: string }) => {
  selectedOption.value = option; // Устанавливаем выбранный элемент
  isOpen.value = false; // Закрываем дропдаун
  emit("update:modelValue", { key: option.key, value: option.value }); // Эмитим и ключ, и значение
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.options::-webkit-scrollbar {
  width: 0.6rem;
}

.options::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 0.4rem;
}

.options::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 0.4rem;
  border: 0.1rem solid #ccc;
}

.options::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.option {
  padding: 1rem;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: #1aa7e825;
    color: #1aa7e8;
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
