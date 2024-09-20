<template>
  <div class="pagination">
    <button
      class="pagination-button"
      @click="prevPage"
      :disabled="currentPage === 1"
    >
      <Icon name="carbon:arrow-left" />
    </button>
    <div class="pagination__numbers">
      <span
        v-if="visiblePages[0] !== 1"
        class="page-number"
        @click="selectPage(1)"
        :class="{ active: currentPage === 1 }"
      >
        1
      </span>
      <span v-if="visiblePages[0] > 2" class="dots">...</span>
      <span
        v-for="page in visiblePages"
        :key="page"
        class="page-number"
        @click="selectPage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </span>

      <span
        v-if="visiblePages[visiblePages.length - 1] < totalPages - 1"
        class="dots"
        >...</span
      >
      <span
        v-if="visiblePages[visiblePages.length - 1] !== totalPages"
        class="page-number"
        @click="selectPage(totalPages)"
        :class="{ active: currentPage === totalPages }"
      >
        {{ totalPages }}
      </span>
    </div>
    <button
      class="pagination-button"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      <Icon name="carbon:arrow-right" />
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
    2,
    props.currentPage - Math.floor(maxVisiblePages / 2)
  );
  const endPage = Math.min(
    props.totalPages - 1,
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
  gap: 14.1rem;

  @include bp($point_2) {
    gap: 1rem;
  }
}
.pagination,
.pagination__numbers {
  @include flex-center;
}

.pagination__numbers {
  gap: 1.6rem;
  @include bp($point_2) {
    gap: 0.2rem;
  }
  span {
    @include flex-center;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.4rem;
    font-family: $font_3;
    cursor: pointer;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $lblue;
    }
  }
}

.page-number {
  &.active {
    background-color: $lblue;
    color: $white;
  }
}

.pagination-button {
  @include flex-center;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ababab;
  &:hover {
    color: $lblue;
  }
}

.dots {
  color: #ababab;
}
</style>
