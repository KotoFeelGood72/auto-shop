<!-- @format -->

<template>
  <main class="main">
    <Header />
    <div class="content">
      <slot />
    </div>
    <Action v-if="!isAboutPage" />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Action from "~/components/Action.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isAboutPage = computed(() => {
  return route.name === "about";
});
</script>

<style lang="scss">
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s ease;
}

.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(81, 81, 81, 0.164);
  z-index: 99;
}
</style>
