<template>
  <div class="input">
    <div class="input__w">
      <input :type="type" :placeholder="place" v-model="localValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = withDefaults(
  defineProps<{
    type?: string;
    modelValue: string;
    place?: string;
  }>(),
  {
    type: "text",
    modelValue: "",
    place: "",
  }
);

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss">
input {
  @include app;
  border: 0.1rem solid #b2b2b2;
  font-size: 1.6rem;
  color: $dark;
  padding: 1.4rem 1.5rem;
  width: 100%;
}
</style>
