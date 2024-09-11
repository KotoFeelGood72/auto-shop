<template>
  <div class="pagination">
    <!-- Кнопка предыдущей страницы -->
    <button
      class="pagination-button"
      @click="prevPage"
      :disabled="currentPage === 1"
    >
      <Icon name="line-md:arrow-left" />
    </button>

    <!-- Отображение первой страницы -->
    <span
      v-if="visiblePages[0] !== 1"
      class="page-number"
      @click="selectPage(1)"
      :class="{ active: currentPage === 1 }"
    >
      1
    </span>

    <!-- Многоточие, если текущая страница достаточно далеко от начала -->
    <span v-if="visiblePages[0] > 2" class="dots">...</span>

    <!-- Отображение видимых страниц -->
    <span
      v-for="page in visiblePages"
      :key="page"
      class="page-number"
      @click="selectPage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </span>

    <!-- Многоточие перед последней страницей -->
    <span
      v-if="visiblePages[visiblePages.length - 1] < totalPages - 1"
      class="dots"
      >...</span
    >

    <!-- Отображение последней страницы -->
    <span
      v-if="visiblePages[visiblePages.length - 1] !== totalPages"
      class="page-number"
      @click="selectPage(totalPages)"
      :class="{ active: currentPage === totalPages }"
    >
      {{ totalPages }}
    </span>

    <!-- Кнопка следующей страницы -->
    <button
      class="pagination-button"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      <Icon name="line-md:arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();

const emit = defineEmits(["updatePage"]);

// Определяем количество видимых страниц
const maxVisiblePages = 5;

// Функция для перехода на предыдущую страницу
const prevPage = () => {
  if (props.currentPage > 1) {
    emit("updatePage", props.currentPage - 1);
  }
};

// Функция для перехода на следующую страницу
const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit("updatePage", props.currentPage + 1);
  }
};

// Функция для выбора страницы
const selectPage = (page: number) => {
  if (page !== props.currentPage) {
    emit("updatePage", page);
  }
};

// Вычисление видимых страниц
const visiblePages = computed(() => {
  const pages = [];
  const startPage = Math.max(
    2, // Начинаем с 2, т.к. первая страница всегда будет отображаться отдельно
    props.currentPage - Math.floor(maxVisiblePages / 2)
  );
  const endPage = Math.min(
    props.totalPages - 1, // Заканчиваем на предпоследней странице, т.к. последняя всегда будет отдельно
    startPage + maxVisiblePages - 1
  );

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  .pagination-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 5px;
    margin: 0 10px;
    display: flex;
    align-items: center;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .page-number {
    margin: 0 5px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      background-color: #00aaff;
      color: white;
    }
  }

  .dots {
    margin: 0 5px;
  }
}
</style>
