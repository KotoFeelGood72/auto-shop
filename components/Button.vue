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

<style scoped lang="scss"></style>
