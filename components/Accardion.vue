<template>
  <div class="accordion">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <div class="accordion-header" @click="toggleItem(index)">
        <span>{{ item.question }}</span>
        <span class="icon">{{ activeIndex === index ? "-" : "+" }}</span>
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
    question: "Если я соберусь покупать машину, что для этого нужно??",
    answer: "Процедура покупки автомобиля включает в себя...",
  },
]);

// Состояние для хранения активного индекса
const activeIndex = ref<number | null>(null);

// Функция для переключения активного элемента
const toggleItem = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped lang="scss">
.accordion {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #f9f9f9;
  font-weight: bold;
}

.accordion-body {
  padding: 15px;
  background-color: #fff;
}

.icon {
  font-size: 18px;
}
</style>
