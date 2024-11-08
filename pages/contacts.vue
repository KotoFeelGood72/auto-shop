<template>
  <section class="contacts" v-if="contacts">
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
                <span
                  >{{ contacts.working_hours.days }}
                  {{ contacts.working_hours.days }}</span
                >
              </li>
              <li>
                <ul>
                  <li>
                    <a
                      :href="'tel:' + contacts.contact_info.phone"
                      target="_blank"
                    >
                      <div class="item__icon">
                        <img src="/img/f7_phone.svg" alt="" />
                      </div>
                      <p>{{ contacts.contact_info.phone }}</p>
                    </a>
                  </li>
                  <li>
                    <a
                      :href="'mailto:' + contacts.contact_info.email"
                      target="_blank"
                    >
                      <div class="item__icon">
                        <img src="/img/fluent_mail-24-regular.svg" alt="" />
                      </div>
                      <p>{{ contacts.contact_info.email }}</p>
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
            >
              <yandex-map-default-features-layer />
              <yandex-map-default-scheme-layer />
              <yandex-map-controls :settings="{ position: 'right' }">
                <yandex-map-zoom-control />
              </yandex-map-controls>
              <yandex-map-controls :settings="{ position: 'left' }">
                <yandex-map-geolocation-control />
              </yandex-map-controls>
              <yandex-map-controls
                :settings="{ position: 'bottom left', orientation: 'vertical' }"
              >
                <yandex-map-open-maps-button
                  :settings="{ title: 'Найти нас на карте' }"
                />
              </yandex-map-controls>
              <!-- Добавляем кликабельные маркеры -->
              <YandexMapDefaultMarker
                v-for="(marker, index) in markers"
                :key="index"
                :settings="marker"
                @click="selectMarker(marker)"
              >
              </YandexMapDefaultMarker>
            </yandex-map>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import {
  useContactsStore,
  useContactsStoreRefs,
} from "~/store/useContactsStore";
import type { YMap } from "@yandex/ymaps3-types";
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapOpenMapsButton,
  YandexMapDefaultMarker,
  YandexMapZoomControl,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapGeolocationControl,
} from "vue-yandex-maps";

// Инициализация карты
const map = shallowRef<null | YMap>(null);

const { contacts } = useContactsStoreRefs();

// Центр карты по умолчанию (Краснодар)
const mapCenter = ref<[number, number]>([38.97695, 45.03547]);

// Маркеры с координатами, названиями и информацией о том, как доехать
const markers = ref([
  {
    coordinates: [132.198484, 43.355023],
    title: "Артем",
    subtitle: `г. Артем, ул. ?, 64 — 301 офис; 3 этаж`,
    directions: "Можно доехать на автобусе №5, либо на личном авто.",
    color: "#008001",
  },
  {
    coordinates: [38.97437, 45.047208],
    title: "Краснодар",
    subtitle: `г. Краснодар, улица Бабушкина 295`,
    directions: "Можно доехать на маршрутке №123, либо на такси.",
    // color: "#008001",
  },
]);

// Реактивное свойство для выбранного маркера
const selectedMarker = ref<any>(null);

// Функция для смены центра карты
function setMapCenter(newCenter: [number, number]) {
  mapCenter.value = newCenter;
}

// Функция для выбора маркера и отображения информации о маршруте
function selectMarker(marker: any) {
  selectedMarker.value = marker;
}
</script>

<style scoped lang="scss">
.contacts_main {
  @include flex-space;
  gap: 5rem;
  @include bp($point_2) {
    flex-direction: column;
  }
  & > div {
    width: 45%;
    @include bp($point_2) {
      width: 100%;
    }
  }
}

.contacts_main__w {
  padding: 6rem 0;
}

.contacts__content {
  padding-top: 2.9rem;
  ul {
    & > li {
      cursor: pointer;
      & > p {
        font-size: 2.2rem;
        color: $lblue;
        font-family: $font_4;
        margin-bottom: 1rem;
      }

      span {
        font-size: 1.8rem;
      }
      &:not(:last-child) {
        margin-bottom: 3.5rem;
      }

      ul {
        @include flex-start;
        gap: 3.7rem;
        @include bp($point_2) {
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }
        li {
          margin: 0 !important;
        }
        a {
          @include flex-start;
          gap: 1rem;
          font-size: 1.8rem;
          font-family: $font_3;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: $lblue;
          }
        }
      }
    }
  }
}

.item__icon {
  @include flex-center;
  width: 2.6rem;
  height: 2.6rem;
}

.contacts_map {
  border-radius: 1rem;
  height: 34.4rem;
  overflow: hidden;
}
</style>
