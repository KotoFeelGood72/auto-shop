<template>
  <div class="shield-page">
    <div class="shield">
      <div class="container">
        <div class="shield__head">
          <h1>Наши гарантии</h1>
          <div class="shield_head__subtitle" v-html="page?.title"></div>
        </div>
        <div class="shield__body">
          <div
            v-for="(items, index) in chunkedItems"
            :key="index"
            class="shield_body__item"
          >
            <ul class="shield_body__contents">
              <li v-for="item in items" :key="item.title">
                <p>{{ item.title }}</p>
                <span v-html="item.description"></span>
              </li>
            </ul>
            <div class="shield_body_img">
              <img :src="getImageSrc(index)" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const page = ref<any>(null);

const getQuarantees = async () => {
  const { $main } = useNuxtApp();

  try {
    const response = await $main.get("/guarantees");
    page.value = response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};

onMounted(() => {
  getQuarantees();
});

// Функция для возврата пути к изображению в зависимости от индекса
const getImageSrc = (index: number) => {
  const images = [
    "/img/shield-item-1.png",
    "/img/shield-item-2.png",
    "/img/shield-item-1.png",
    "/img/shield-item-2.png",
  ];
  return images[index] || "/img/shield-item-1.png"; // если индекс за пределами, используем первый
};

// Разделить contentItem на группы по два элемента
const chunkedItems = computed(() => {
  if (!page.value?.contentItem) return [];
  const items = page.value.contentItem;
  const chunkSize = 2;
  const result = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
});
</script>

<style scoped lang="scss">
.shield {
  padding: 6rem 0;
}
.shield__head {
  margin-bottom: 4rem;
  @include flex-start;
  gap: 2.5rem;
  @include bp($point_2) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

.shield_head__subtitle {
  font-size: 2.6rem;
  font-family: $font_4;
  @include bp($point_2) {
    font-size: 2.2rem;
  }
  :deep(span) {
    color: $blue;
  }
}

.shield__body {
  &:nth-child(1) {
    margin-bottom: 4rem;
  }
}

.shield_body__item {
  @include flex-start;
  position: relative;
  min-height: 45rem;
  gap: 2rem;
  @include bp($point_2) {
    flex-direction: column;
  }
  &:nth-child(2) {
    .shield_body_img {
      order: 0;
      margin-right: 0;
      margin-left: -7.8%;
      max-width: 60.2rem;
      @include bp($point_2) {
        margin-left: -5rem;
        margin-right: -5rem;
        order: 1;
      }
    }
    .shield_body__contents {
      order: 1;
    }
  }
}

.shield_body__contents {
  max-width: 74.3rem;

  li {
    padding-bottom: 1.5rem;
    border-bottom: 0.1rem solid #b4b4b4;
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  p {
    font-size: 2.2rem;
    font-family: $font_4;
    margin-bottom: 1rem;
  }
}

.shield_body_img {
  max-width: 63.3rem;
  margin-right: -100%;
  @include bp($point_2) {
    margin-right: -5rem;
    margin-left: -5rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
