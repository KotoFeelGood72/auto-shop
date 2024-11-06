<template>
  <div class="button" @click="sendEvent" :class="{ disabled: load }">
    <div class="btn-icon" v-if="load">
      <Icons icon="svg-spinners:ring-resize" :size="30" />
    </div>
    <p>{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
const props = defineProps<{
  name?: string;
  load?: boolean;
}>();

const emit = defineEmits<{
  (e: "onClick"): void;
}>();

const sendEvent = () => {
  emit("onClick");
};
</script>

<style scoped lang="scss">
.button {
  background-color: $lblue;
  color: $white;
  font-size: 1.4rem;
  padding: 1.2rem 2.1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-family: $font_4;
  transition: all 0.3s ease-in-out;
  @include flex-center;
  gap: 2rem;

  &.disabled {
    pointer-events: none;
  }
  &:hover {
    background-color: $blue;
  }

  &.secondary {
    background-color: $white;
    border: 0.1rem solid $lblue;
    color: $lblue;
    &:hover {
      background-color: #29abe310;
    }
  }
}

.btn-icon {
  @include flex-center;
}
</style>
