<template>
  <div class="custom-select" :class="{ isOpen: isOpen }" ref="selectBox">
    <!-- Выбранный элемент или placeholder -->
    <div class="select-box" @click="toggleDropdown">
      <p class="selected">{{ selectedOption?.value || placeholder }}</p>
      <Icons icon="line-md:chevron-down" class="chevron" />
    </div>
    <ul v-if="isOpen" class="options">
      <li
        v-for="option in displayOptions"
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
import { ref, computed, onMounted, watch, onBeforeUnmount } from "vue";

const props = defineProps<{
  options?: { key: any; value: any }[] | any[];
  entries?: Record<any, any>;
  placeholder: string;
  modelValue?: { key: any; value: any }; // Добавлено для начального значения
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedOption = ref<{ key: any; value: any } | null>(null);
const selectBox = ref<HTMLElement | null>(null);

const normalizeOptions = (
  options: string[] | { key: string; value: string }[]
) => {
  if (Array.isArray(options) && typeof options[0] === "string") {
    return options.map((value, index) => ({ key: `option-${index}`, value }));
  }
  return options as { key: string; value: string }[];
};

const displayOptions = computed(() => {
  if (props.entries) {
    return Object.entries(props.entries).map(([key, value]) => ({
      key,
      value,
    }));
  } else if (props.options) {
    return normalizeOptions(props.options);
  } else {
    return [];
  }
});

// Функция для открытия/закрытия выпадающего списка
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Функция для выбора опции
const selectOption = (option: { key: string; value: string }) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit("update:modelValue", { key: option.key, value: option.value });
};

// Инициализация компонента
onMounted(() => {
  // Ищем соответствующий элемент в displayOptions по modelValue
  if (props.modelValue) {
    const matchingOption = displayOptions.value.find(
      (option) => option.key === props.modelValue?.key
    );
    if (matchingOption) {
      selectedOption.value = matchingOption;
    }
  }

  // Добавляем слушатели для кликов вне компонента и скролла
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});

// Обработчик клика вне компонента
const handleClickOutside = (event: MouseEvent) => {
  if (selectBox.value && !selectBox.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

// Закрытие выпадающего списка при скролле
const handleScroll = () => {
  isOpen.value = false;
};

// Слушаем изменения modelValue, чтобы обновлять selectedOption
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      const matchingOption = displayOptions.value.find(
        (option) => option.key === newValue.key
      );
      if (matchingOption) {
        selectedOption.value = matchingOption;
      } else {
        selectedOption.value = null; // Очищаем, если соответствие не найдено
      }
    }
  },
  { immediate: true }
);

// Убираем слушатели при уничтожении компонента
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
