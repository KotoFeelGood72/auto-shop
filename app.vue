<template>
  <NuxtLayout>
    <NuxtPage />
    <transition name="slide-left">
      <ModalFilter v-if="modals.filter" />
    </transition>
    <transition name="slide-left">
      <Burger v-if="modals.burger" />
    </transition>
    <transition name="slide-top">
      <ModalCallback v-if="modals.modalCallback || modals.modalConsult" />
    </transition>
    <transition name="slide-top">
      <ModalCar v-if="modals.ModalCar" />
    </transition>
    <transition name="fade-bg">
      <div v-if="isModalActive" class="page-bg" @click="closeAllModals"></div>
    </transition>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import ModalFilter from "./components/ModalFilter.vue";
import ModalCallback from "./components/ModalCallback.vue";
import ModalCar from "./components/ModalCar.vue";
import { useModalStore, useModalStoreRefs } from "@/stores/useModalStore";
import Burger from "./components/Burger.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { closeAllModals } = useModalStore();
const { modals } = useModalStoreRefs();

const isModalActive = computed(() => {
  return Object.values(modals.value).some((isActive) => isActive);
});

watch(
  () => route.fullPath,
  () => {
    closeAllModals();
  }
);
</script>

<style lang="scss">
.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000008e; /* затемнённый фон */
  z-index: 99;
}

.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: opacity 0.5s ease;
}

.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.fade-bg-enter-to,
.fade-bg-leave-from {
  opacity: 1;
}
.fixed {
  overflow: hidden;
  @include bp($point_5, $direction: min) {
    padding-right: 1.7rem;
  }
}

:root {
  --full-screen: calc(var(--vh, 1vh) * 100);
}

html {
  height: 100%;
  font: 400 calc(100vw / 1440 * 10) / 1.33 $font_1;

  @include bp($point_2) {
    font-size: 10px;
  }
  // &::-webkit-scrollbar-track {
  //   background-color: $black;
  // }

  // &::-webkit-scrollbar {
  //   width: 1rem;
  //   background-color: $black;
  // }

  // &::-webkit-scrollbar-thumb {
  //   background-color: $black;
  // }
}

body {
  position: relative;
  display: flex;
  height: 100%;
  font-size: $font_size_base;
  color: $color_text_base;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $ulight;
  overflow-x: hidden;
  color: $txt;

  @supports (display: grid) {
    display: block;
  }

  @include bp($point_2) {
    font-size: 1.6rem;
  }
}

a {
  text-decoration: none;
  transition: all 0.3s ease;
  color: $txt;

  &:hover,
  &:focus {
    text-decoration: none;
    transition: all 0.3s ease;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Добавляем анимацию для появления элемента слева направо */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Когда элемент только появляется, сдвигаем его за пределы экрана */
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

/* После завершения анимации элемент находится в исходном положении */
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* Когда элемент закрывается, он снова сдвигается за пределы экрана */
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 3.2rem;
  font-family: $font_5;

  @include bp($point_2) {
    font-size: 2.4rem;
  }
}

.filter_main {
  background-color: $white;
  padding: 2.5rem 4.8rem;
  border-radius: 2rem;

  @include bp($point_2) {
    padding: 2rem 3rem;
  }

  h2 {
    margin-bottom: 2.5rem;
    font-family: $font_5;
    font-size: 2.8rem;
    color: $txt;
  }
}

.filter_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}

.filter_col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.filter_col__row {
  display: flex;
  gap: 1.5rem;
}

.filter-btn {
  display: inline-flex;
  .button {
    padding: 1.8rem 10.5rem !important;
    font-size: 1.6rem !important;
  }
}

.cars {
  margin-bottom: 5rem;
}

.cars_head {
  padding-top: 7.5rem;
  @include flex-space;
  margin-bottom: 2.5rem;

  @include bp($point_2) {
    flex-direction: column;
    padding-top: 0;
    gap: 2rem;
    align-items: flex-start;
  }

  h2 {
    font-size: 2.4rem;
  }
}

.cars_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  grid-gap: 2rem;
  margin-bottom: 6.9rem;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}

.main {
  @include bp($point_2) {
    overflow-x: hidden;
  }
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

/* Когда элемент только появляется, сдвигаем его за пределы экрана */
.slide-top-enter-from {
  transform: translateY(-10%);
  opacity: 0;
}

/* После завершения анимации элемент находится в исходном положении */
.slide-top-enter-to {
  transform: translateY(0);
  opacity: 1;
}

/* Когда элемент закрывается, он снова сдвигается за пределы экрана */
.slide-top-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-top-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
