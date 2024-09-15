<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts_main__w">
        <h1>Контакты</h1>
        <div class="contacts_main">
          <div class="contacts__content">
            <ul>
              <li @click="setMapCenter([132.198484, 43.355023])">
                <p>Артем</p>
                <span>г. Артем, ул. ?, 64 — 301 офис; 3 этаж</span>
              </li>
              <li @click="setMapCenter([38.97695, 45.03547])">
                <p>Краснодар</p>
                <span>г. Краснодар, улица Бабушкина 295</span>
              </li>
              <li>
                <p>Часы работы</p>
                <span>пн-вс: 09.00-22.00</span>
              </li>
              <li>
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <div class="item__icon">
                        <img src="/img/f7_phone.svg" alt="" />
                      </div>
                      <p>+7 918 123 45 67</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <div class="item__icon">
                        <img src="/img/fluent_mail-24-regular.svg" alt="" />
                      </div>
                      <p>example@gmail.com</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="contacts_map">
            <yandex-map
              v-model="map"
              :settings="{
                location: {
                  center: mapCenter,
                  zoom: 14,
                },
              }"
              width="100%"
              height="500px"
            >
              <!-- Добавляем слой YMapDefaultFeaturesLayer для объектов -->
              <yandex-map-default-features-layer />

              <yandex-map-default-scheme-layer />
              <yandex-map-controls :settings="{ position: 'right' }">
                <yandex-map-zoom-control />
              </yandex-map-controls>

              <yandex-map-marker
                v-for="(marker, index) in markers"
                :key="index"
                :settings="marker"
              >
                <div class="marker">
                  <p>Нипотека AUTO</p>
                  <img src="/img/logo.png" alt="" />
                </div>
              </yandex-map-marker>
            </yandex-map>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import type { YMap } from "@yandex/ymaps3-types";
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
} from "vue-yandex-maps";

// Инициализация карты
const map = shallowRef<null | YMap>(null);

// По умолчанию отображаем Краснодар
const mapCenter = ref<[number, number]>([38.97695, 45.03547]);

// Данные для маркеров
const markers = ref([
  {
    coordinates: [132.198484, 43.355023],
    title: "Артем",
    subtitle: `г. Артем, ул. ?, 64 — 301 офис; 3 этаж`,
    color: "#008001",
  },
  {
    coordinates: [38.97437, 45.047208],
    title: "Краснодар",
    subtitle: `г. Краснодар, улица Бабушкина 295`,
    // color: "#008001",
  },
]);

// Функция для смены координат карты
function setMapCenter(newCenter: [number, number]) {
  mapCenter.value = newCenter;
}
</script>

<style scoped lang="scss">
.address-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}

.marker {
  @include flex-center;
  gap: 1rem;
  background-color: #c1ebf5b2;
  padding: 1rem 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(2rem);
  p {
    font-size: 1.4rem;
    font-family: $font_2;
    font-weight: 600;
  }
  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
}
</style>
