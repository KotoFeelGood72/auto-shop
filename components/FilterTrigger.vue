<template>
  <div class="filter_trigger" @click="openModal('filter')">
    <p>Фильтры</p>
    <div class="filter_trigger__icon">
      <Icon name="fluent:chevron-down-48-regular" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/useModalStore";

const { openModal } = useModalStore();
</script>

<style scoped lang="scss">
.filter_trigger {
  @include flex-start;
  gap: 1rem;
  // background-color: $white;
  color: $lblue;
  // padding: 0.5rem 1rem;
  font-size: 1.6rem;
  font-family: $font_4;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.filter_trigger__icon {
  @include flex-center;
  color: $lblue;
}
</style>
