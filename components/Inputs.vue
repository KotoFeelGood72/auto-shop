<template>
  <div class="input">
    <div class="input__w">
      <input
        :type="type"
        :placeholder="place"
        v-model="localValue"
        :maxlength="maxLength"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    type?: string;
    modelValue?: any;
    place?: string;
    maxLength?: number; // Добавляем новый пропс для максимального количества символов
  }>(),
  {
    type: "text",
    modelValue: "",
    place: "",
    maxLength: 10000, // Значение по умолчанию
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

.mileage-input {
  position: relative;
  &:after {
    content: "КМ";
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    right: 2rem;
    font-size: 1.4rem;
    color: $gray;
  }
}
</style>
