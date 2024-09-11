<template>
  <div class="car">
    <NuxtLink to="/">
      <div class="car_img">
        <img :src="data.img" alt="" />
      </div>
      <div class="car_content">
        <h3>{{ data.title }}</h3>
        <p>{{ data.year }}</p>
        <ul>
          <li v-for="item in data.character">
            <img :src="item.icon" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
        <div class="car_link">
          <a target="_blank" :href="data.link"
            >На оригинальную страницу лота
            <img src="@/assets/img/arrow.svg" alt=""
          /></a>
        </div>
        <div class="car_bottom">
          <div class="car_price">{{ data.price }} ₽</div>
          <div class="car_details">Подробнее</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss"></style>
