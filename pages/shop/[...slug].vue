<template>
  <div class="cars" v-if="car"> 
    <div class="container">
      <div class="cars__head">
        <h1>{{ car.name }}, {{ car.year }}</h1>
        <div class="cars__param">
          Объявление {{car.vehicleId}} от {{ formattedDate }}
          <div class="eye"><Icons icon="mdi:eye" /> 9</div>
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
                v-for="(image, i) in car.photos"
                :key="'single-thumb-slide-' + i"
              >
                <img :src="image.path" :alt="image.code" class="full" />
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
                v-for="(image, i) in car.photos"
                :key="'single-thumb-slide-' + i"
              >
                <img :src="image.path" :alt="image.code" class="full" />
              </SwiperSlide>
              </Swiper>
            </div>
            <div class="cars__nav">
              <div class="cars__btn prev">
                <Icons icon="fluent:chevron-left-16-regular" />
              </div>
              <div class="cars__btn next">
                <Icons icon="fluent:chevron-right-16-regular" />
              </div>
            </div>
          </div>
          <div class="share_car">
            <Icons icon="material-symbols:share" :size="24" />
            <p>Поделиться объявлением</p>
          </div>
        </div>
        <div class="cars__params">
          <ul>
            <li>
              <p>Год:</p>
              <span>{{car.year}}</span>
            </li>
            <li>
              <p>Возраст (лет):</p>
              <span>{{car.age}}</span>
            </li>
            <li>
              <p>Двигатель:</p>
              <span>{{car.engineFuel}} ({{ car.engineVolumeLiters }} м³)</span>
            </li>
            <li>
              <p>Мощность:</p>
              <span>147 л.с.</span>
            </li>
            <li>
              <p>Пробег:</p>
              <span>{{ formattedMileage }}</span>
            </li>
            <li>
              <p>Коробка передач:</p>
              <span>{{car.gearbox}}</span>
            </li>
            <li>
              <p>Тип кузова:</p>
              <span>{{car.body}}</span>
            </li>
            <li>
              <p>Цвет:</p>
              <span>{{car.color}}</span>
            </li>
            <li>
              <p>Руль:</p>
              <span>Левый</span>
            </li>
            <li>
              <p>VIN или номер кузова:</p>
              <span>{{ car.VIN }}</span>
            </li>
            <li>
              <p>Был в аренде:</p>
              <span>{{ car.useRental ? 'Да' : 'Нет' }}</span>
            </li>
          </ul>
        </div>
        <div class="cars__action">
          <div class="cars__price">{{ formatPrice(car.summary.totalVladivostok) }}</div>
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
import { useModalStoreRefs, useModalStore } from "~/store/useModalStore";
import { useCarsStore, useCarsStoreRefs } from "~/store/useCarStore";
import { useRoute } from "vue-router";

const { openModal } = useModalStore();
const { getCarById } = useCarsStore();
const {car} = useCarsStoreRefs()

const thumbsSwiper = ref(null);
const thumbsDirection = ref<any>("vertical");
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const route = useRoute()

const cars = ref<any>(null)

// const car = ref<any>({
//   price: "5 750 000",
//   title: "Toyota RAV4",
//   year: "2017",
//   img: "/img/car.png",
//   link: "https://www.google.ru/",
//   detail: "/",
//   character: [
//     { icon: "/img/engine.svg", name: "2,3 л/бензин" },
//     { icon: "/img/wheel.svg", name: "317 л.с." },
//   ],
// });


const formattedDate = computed(() => {
  const date = new Date(car.value.registerDateTime);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) ;
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  }).format(price);
};

const formattedMileage = computed(() => {
      const mileageStr = car.value.mileage.toString();
      if (mileageStr.length === 5) {
        // Форматирование для 5-значных чисел, разделение на две группы (2 и 3 числа)
        return `${mileageStr.slice(0, 2)} ${mileageStr.slice(2)} км`;
      } else if (mileageStr.length === 6) {
        // Форматирование для 6-значных чисел, разделение на три группы (3 и 3 числа)
        return `${mileageStr.slice(0, 3)} ${mileageStr.slice(3)} км`;
      }
      return `${mileageStr} км`; // На случай других длин числа
    });


onMounted(async() => {
  car.value = await getCarById(String(route.params.slug))
})
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
