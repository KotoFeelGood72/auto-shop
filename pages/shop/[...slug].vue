<template>
  <div class="cars">
    <div class="container">
      <div class="cars__head">
        <h1>Продажа Chery Tiggo 7 Pro, 2021 год в Владивостоке</h1>
        <div class="cars__param">
          Объявление 761329879 от 17.07.2024
          <div class="eye"><Icon name="mdi:eye" /> 9</div>
        </div>
      </div>
      <div class="cars__main">
        <div class="cars__sliders">
          <div class="cars_thumb__slider">
            <Swiper
              :slides-per-view="3"
              :space-between="31"
              :modules="[Thumbs]"
              :direction="thumbsDirection"
              :breakpoints="{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  direction: 'horizontal',
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                  direction: 'vertical',
                },
              }"
              watch-slides-progress
              @swiper="setThumbsSwiper"
            >
              <SwiperSlide
                v-for="(image, i) in 4"
                :key="'single-thumb-slide-' + i"
              >
                <img :src="`/img/car-gallery.jpg`" alt="" class="full" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="car_slider__w">
            <div class="cars_slider">
              <Swiper
                :slides-per-view="1"
                :space-between="20"
                :modules="[Navigation, Thumbs]"
                :thumbs="{ swiper: thumbsSwiper }"
                :autoHeight="true"
                :navigation="{
                  prevEl: `.prev`,
                  nextEl: `.next`,
                }"
              >
                <SwiperSlide
                  v-for="(image, i) in 4"
                  :key="'single-item-slide-' + i"
                >
                  <img :src="`/img/car-gallery.jpg`" alt="" class="full" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="cars__nav">
              <div class="cars__btn prev">
                <Icon name="fluent:chevron-left-16-regular" />
              </div>
              <div class="cars__btn next">
                <Icon name="fluent:chevron-right-16-regular" />
              </div>
            </div>
          </div>
          <div class="share_car">
            <Icon name="material-symbols:share" :size="24" />
            <p>Поделиться объявлением</p>
          </div>
        </div>
        <div class="cars__params">
          <ul>
            <li>
              <p>Двигатель:</p>
              <span>Бензиновый (1.5 м³)</span>
            </li>
            <li>
              <p>Мощность:</p>
              <span>147 л.с.</span>
            </li>
            <li>
              <p>Год:</p>
              <span>2017</span>
            </li>
            <li>
              <p>Пробег:</p>
              <span>40 000 км</span>
            </li>
            <li>
              <p>Коробка передач:</p>
              <span>Вариатор</span>
            </li>
            <li>
              <p>Привод:</p>
              <span>Передний</span>
            </li>
            <li>
              <p>Цвет:</p>
              <span>Белый</span>
            </li>
            <li>
              <p>Руль:</p>
              <span>Левый</span>
            </li>
            <li>
              <p>Комплектация:</p>
              <span>Ultimate</span>
            </li>
            <li>
              <p>Владельцы:</p>
              <span>1 владелец</span>
            </li>
          </ul>
        </div>
        <div class="cars__action">
          <div class="cars__price">2 179 000 ₽</div>
          <div class="cars__action__btns">
            <Button
              name="Консультация бесплатно"
              @click="openModal('modalConsult')"
            />
            <Button
              name="Оставить заявку"
              class="secondary"
              @click="openModal('ModalCar')"
            />
          </div>
        </div>
      </div>
      <div class="cars__other">
        <h2>Похожие автомобили</h2>
        <ul class="cars_grid">
          <li v-for="(item, i) in 16" :key="'cars-item-' + i">
            <CardCar :data="car" />
          </li>
        </ul>
        <div class="more__car">Показать еще</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import CardCar from "~/components/CardCar.vue";
import { useModalStoreRefs, useModalStore } from "@/stores/useModalStore";

const { openModal } = useModalStore();

const thumbsSwiper = ref(null);
const thumbsDirection = ref("vertical");
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const car = ref<any>({
  price: "5 750 000",
  title: "Toyota RAV4",
  year: "2017",
  img: "/img/car.png",
  link: "https://www.google.ru/",
  detail: "/",
  character: [
    { icon: "/img/engine.svg", name: "2,3 л/бензин" },
    { icon: "/img/wheel.svg", name: "317 л.с." },
  ],
});
</script>

<style scoped lang="scss">
.cars__head {
  padding-top: 4.1rem;
  @include flex-space;
  align-items: flex-end;
  gap: 4rem;
  margin-bottom: 2rem;
  @include bp($point_2) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    @include bp($point_2) {
      font-size: 2.4rem;
      order: 1;
    }
  }
}

.cars__param {
  @include flex-end;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  opacity: 0.4;
  gap: 2.3rem;
  white-space: nowrap;
  @include bp($point_2) {
    order: 0;
  }

  .eye {
    @include flex-end;
    gap: 0.5rem;
  }
}

.cars__main {
  @include flex-start;
  align-items: flex-start;
  gap: 1.6rem;
  margin-bottom: 6rem;
  @include bp($point_2) {
    flex-direction: column;
    max-width: 100%;
  }
}

.cars__sliders {
  @include flex-start;
  flex-wrap: wrap;
  position: relative;
  gap: 0.8rem;
  max-width: 62.8rem;
  @include bp($point_2) {
    flex-direction: column;
    max-width: 100%;
  }

  .swiper {
    @include bp($point_2) {
      width: 100%;
    }
  }
}

.cars_thumb__slider {
  max-width: 10rem;
  height: 36.5rem;

  @include bp($point_2) {
    order: 2;
    height: 10rem;
    max-width: 100%;
  }

  :deep(.swiper) {
    height: 100%;
  }

  :deep(.swiper-slide) {
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
  }
}

.cars_slider {
  max-width: 52rem;
  height: 36.5rem;
  @include bp($point_2) {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  :deep(.swiper-slide) {
    border-radius: 2rem;
    overflow: hidden;
  }
}

.car_slider__w {
  position: relative;
  max-width: 100%;
}

.share_car {
  width: 100%;
  @include flex-start;
  font-size: 1.6rem;
  color: $lblue;
  font-family: $font_3;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 1.8rem;

  @include bp($point_2) {
    display: none;
  }
  &:hover {
    color: $blue;
  }
}

.cars__nav {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  @include flex-space;
  transform: translate(-50%, -50%);
  z-index: 99;
  pointer-events: none;
  padding: 0 1.2rem;
  & > div {
    pointer-events: all;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background: #3a3c48b4;
    @include flex-center;
    color: $white;
  }
}

.swiper-slide-thumb-active {
  position: relative;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0.2rem solid $lblue;
    content: "";
    border-radius: 1rem;
    background-color: #403f3f22;
    pointer-events: none;
  }
}

.cars__params {
  flex-grow: 1;
  min-width: 28rem;
  @include bp($point_2) {
    min-width: auto;
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    @include bp($point_2) {
      gap: 1rem;
    }
    li {
      @include flex-start;
      font-size: 1.6rem;
      gap: 0.8rem;
      font-family: $font_3;

      p {
        color: #8b8b8b;
      }
    }
  }
}

.cars__price {
  font-size: 2.8rem;
  font-family: $font_5;
  margin-bottom: 1.8rem;
}

.cars__action__btns {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  :deep(.button) {
    padding: 1.2rem 4.9rem;
  }
}

.cars__action {
  margin-top: -1rem;
}

.cars__other {
  h2 {
    font-size: 2.4rem;
    margin-bottom: 2.5rem;
  }

  :deep(.cars_grid) {
    margin-bottom: 3rem;
  }
}

.more__car {
  font-size: 1.8rem;
  color: $lblue;
  font-family: $font_3;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: $blue;
  }
}
</style>
