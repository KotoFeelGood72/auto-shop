<template>
  <div class="car">
    <NuxtLink :to="'/shop/' + data.Id">
      <div class="car_img">
        <img class="full" :src="data.photos[0].path" :alt="data.photos[0].code" />
      </div>
      <div class="car_content">
        <h3>{{ data.name }}</h3>
        <p>{{ data.formYear }}</p>
        <ul>
          <li >
            <div class="character_icon"><Icon name="clarity:fuel-line"/></div>
            <p>{{ data.engineFuel }}</p>
          </li>
          <li >
            <div class="character_icon"><Icon name="ph:engine"/></div>
            <p>{{ data.engineVolumeLiters }}</p>
          </li>
        </ul>
        <div class="car_link">
          <ClientOnly>
            <a target="_blank" :href="data.link" v-if="data.link"
              >На оригинальную страницу лота
              <img src="@/assets/img/arrow.svg" alt=""
            /></a>
          </ClientOnly>
        </div>
        <div class="car_bottom">
          <div class="car_price">{{ data.priceRUB }} ₽</div>
          <div class="car_details">Подробнее</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<style scoped lang="scss">
.car {
  background-color: #fdfdfd;
  border-radius: 1.5rem;
  overflow: hidden;
}
.car_img {
  width: 100%;
}

.car_content {
  padding: 1rem 1.9rem 1.8rem 1.9rem;

  h3 {
    font-size: 2rem;
    font-family: $font_5;
  }
  & > p {
    font-size: 1.4rem;
    font-family: $font_4;
    color: $lblue;
    margin-bottom: 1.5rem;
  }

  & > ul {
    @include flex-start;
    font-size: 1.3rem;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
    li {
      @include flex-start;
      gap: 1.5rem;
    }
  }
}

.car_link {
  font-size: 1.3rem;
  color: $gray;
  position: relative;
  margin-bottom: 1rem;
  a {
    @include flex-start;
    gap: 1rem;
    img {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 2.5rem;
    }
  }
}

.car_bottom {
  @include flex-space;
}

.car_price {
  font-size: 2rem;
  font-family: $font_4;
}

.car_details {
  font-size: 1.6rem;
  font-family: $font_4;
  color: $lblue;
}
</style>
