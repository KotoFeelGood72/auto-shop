<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <div class="accordion-header" @click="toggleItem(index)">
        <span>{{ item.question }}</span>
        <div class="accordion-icon">
          <Icons
            :size="40"
            :icon="activeIndex === index ? 'ic:round-minus' : 'ic:round-plus'"
          />
        </div>
      </div>
      <div v-if="activeIndex === index" class="accordion-body">
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Пример данных для аккордеона
const items = ref([
  {
    question:
      "Делаете ли вы русификацию, можно ли «отшить», «отключить» мочевину?",
    answer: "Да, мы предоставляем услуги по русификации и отключению мочевины.",
  },
  {
    question:
      "Как сейчас привезти авто, как покупателя коснутся изменения в законодательстве?",
    answer:
      "Существует несколько изменений, которые влияют на покупку автомобилей.",
  },
  {
    question: "Если я соберусь покупать машину, что для этого нужно?",
    answer:
      "Для покупки автомобиля вам потребуется выполнить несколько шагов...",
  },
  {
    question: "Если я соберусь покупать машину, что для этого нужно?",
    answer: "Процедура покупки автомобиля включает в себя...",
  },
]);

const activeIndex = ref<number | null>(null);

const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.accordion-item {
  background-color: $white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  user-select: none;

  .accordion-header {
    @include flex-space;
    cursor: pointer;

    span {
      font-size: 2rem;
      font-family: $font_3;

      @include bp($point_2) {
        font-size: 1.6rem;
      }
    }

    .accordion-icon {
      color: $lblue;
      font-size: 2rem;
    }
  }

  .accordion-body {
    padding-top: 1rem;
  }
}

.accordion-icon {
  @include flex-center;
}

.accordion-body {
  p {
    font-size: 1.6rem;
    @include bp($point_2) {
      font-size: 1.4rem;
    }
  }
}
</style>
