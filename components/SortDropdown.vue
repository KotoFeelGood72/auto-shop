<template>
  <div class="sort-dropdown" :class="[{ isOpen: isOpen }]">
    <div class="sort-header" @click="toggleDropdown">
      <div class="sort_icon">
        <Icons
          icon="fluent:arrow-sort-16-regular"
          class="sort-icon"
          :size="30"
        />
      </div>
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
        <Icons
          v-if="selectedOption.value === option.value"
          icon="line-md:check"
          class="check-icon"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

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

// Функция для переключения выпадающего списка
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Функция для выбора опции
const selectOption = (option: any) => {
  selectedOption.value = option;
  isOpen.value = false;
};

// Функция для закрытия dropdown при клике вне области
const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector(".sort-dropdown");
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

// Добавляем обработчик события при монтировании компонента
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Удаляем обработчик при размонтировании компонента
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.sort-dropdown {
  position: relative;
  
  @include bp($point_2, $direction:min) {
    min-width: 23rem;

  }

  .sort-header {
    @include flex-end;
    color: $lblue;
    cursor: pointer;
    gap: 1rem;
    font-size: 1.8rem;
    font-family: $font_4;
    @include bp($point_2) {
      font-size: 1.6rem;
    }
  }

  .sort-options {
    position: absolute;
    top: calc(100% + 2rem);
    left: 0;
    width: 100%;
    background-color: $white;
    border-radius: 1rem;
    overflow: hidden;
    border: 0.1rem solid #e9e9e9;
    @include bp($point_2) {
      min-width: 23rem;
      left: auto;
      right: 0;
    }
  }

  .sort-options li {
    font-size: 1.4rem;
    padding: 1rem 2.3rem;
    cursor: pointer;
    font-family: $font_3;
    &:not(:last-child) {
      border-bottom: 0.1rem solid #e9e9e9;
    }
    &:hover {
      color: $lblue;
    }
  }

  .selected {
    color: $lblue;
  }
}

.sort_icon {
  @include flex-center;
  @include bp($point_2) {
    width: 2rem;
    height: 2rem;
  }
}
</style>
