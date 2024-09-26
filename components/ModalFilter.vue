<template>
  <div class="modal-filter">
    <div class="modal_filter__bg" @click="closeModal('filter')"></div>
    <div class="modal_filter__main">
      <div class="modal_filter__close" @click="closeModal('filter')">
        <Icon name="material-symbols:close" :size="30" />
      </div>
      <Filters />
    </div>
  </div>
</template>

<script setup lang="ts">
import Filters from "./Filters.vue";
import { useModalStore } from "@/stores/useModalStore";

const { closeModal } = useModalStore();
</script>

<style scoped lang="scss">
.modal-filter {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  flex-direction: column;
  @include bp($point_2, $direction: min) {
    display: none;
  }
}

.modal_filter__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $dark;
  opacity: 0.5;
}

.modal_filter__main {
  background-color: $white;
  height: 100%;
  max-width: 80%;
  position: relative;
  max-height: 100%;
  overflow-y: auto;
}

.modal_filter__close {
  width: 100%;
  @include flex-end;
  color: red;
  position: absolute;
  top: 2.5rem;
  right: 2rem;
}

:deep(.filter-btn .button) {
  padding: 1.8rem 4rem !important;
  width: 100%;
}
:deep(.filter-btn) {
  width: 100%;
}
</style>
