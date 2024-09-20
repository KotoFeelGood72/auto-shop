<template>
  <div class="main">
    <NuxtLayout>
      <NuxtPage />
      <ModalFilter />
      <Burger />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import ModalFilter from "./components/ModalFilter.vue";
import { useModalStore, useModalStoreRefs } from "@/stores/useModalStore";
import Burger from "./components/Burger.vue";
</script>

<style lang="scss">
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 3.2rem;
  font-family: $font_5;
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
</style>
