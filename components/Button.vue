<template>
  <div class="button" @click="sendEvent">
    <div class="btn-icon" v-if="load">
      <Icon name="line-md:loading-twotone-loop" />
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
  &:hover {
    background-color: $blue;
  }
}
</style>
