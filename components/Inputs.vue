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
    modelValue?: string;
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
  border: 0.1rem solid #cbcbcb;
  font-size: 1.6rem;
  color: $dark;
  padding: 1.7rem 1.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: $white;
}
</style>
