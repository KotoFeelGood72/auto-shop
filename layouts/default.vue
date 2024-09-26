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
</style>
