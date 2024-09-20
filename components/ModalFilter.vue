<template>
  <div class="modal-filter">
    <div class="modal_filter"></div>
    <div class="modal_filter__main">
      <div class="modal_filter__close">
        <Icon name="material-symbols:close" />
      </div>
      <Filters />
    </div>
  </div>
</template>

<script setup lang="ts">
import Filters from "./Filters.vue";
</script>

<style scoped lang="scss"></style>
