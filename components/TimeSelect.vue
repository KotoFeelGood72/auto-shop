<template>
  <div class="time-selects">
    <div
      class="select-box"
      @click="toggleDropdown('start')"
      :class="{ active: isDropdownOpen === 'start' }"
    >
      <p>{{ startTime || "С " + availableStartTimes[0] }}</p>
      <Icon name="fluent:chevron-down-28-regular" class="icon" :size="26" />
      <ul v-if="isDropdownOpen === 'start'" class="dropdown">
        <li
          v-for="time in availableStartTimes"
          :key="time"
          :class="{ selected: time === startTime }"
          @click="selectStartTime(time)"
        >
          {{ time }}
        </li>
      </ul>
    </div>

    <div
      class="select-box"
      :class="{ active: isDropdownOpen === 'end' }"
      @click="toggleDropdown('end')"
    >
      <p>
        {{ endTime || "До " + availableEndTimes[availableEndTimes.length - 1] }}
      </p>
      <Icon name="fluent:chevron-down-28-regular" class="icon" :size="26" />
      <ul v-if="isDropdownOpen === 'end'" class="dropdown">
        <li
          v-for="time in availableEndTimes"
          :key="time"
          :class="{ selected: time === endTime }"
          @click="selectEndTime(time)"
        >
          {{ time }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const times = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const startTime = ref<string | null>(null);
const endTime = ref<string | null>(null);
const isDropdownOpen = ref<string | null>(null);

const availableStartTimes = computed(() => {
  return times.filter(
    (time) => !endTime.value || time < endTime.value || time === endTime.value
  );
});

const availableEndTimes = computed(() => {
  if (startTime.value === times[times.length - 1]) {
    return [startTime.value];
  }
  return times.filter((time) => !startTime.value || time >= startTime.value);
});

const toggleDropdown = (dropdown: string) => {
  if (isDropdownOpen.value === dropdown) {
    isDropdownOpen.value = null;
  } else {
    isDropdownOpen.value = dropdown;
  }
};

const selectStartTime = (time: string) => {
  startTime.value = time;
  if (endTime.value && endTime.value < time) {
    endTime.value = null;
  }
  isDropdownOpen.value = null;
};

const selectEndTime = (time: string) => {
  endTime.value = time;
  isDropdownOpen.value = null;
};

// Закрытие dropdown при прокрутке
const closeDropdownOnScroll = () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = null;
  }
};

// Обработка событий при монтировании компонента
onMounted(() => {
  window.addEventListener("scroll", closeDropdownOnScroll);
});

// Удаление обработчика событий при размонтировании компонента
onUnmounted(() => {
  window.removeEventListener("scroll", closeDropdownOnScroll);
});
</script>

<style scoped lang="scss">
.time-selects {
  color: $txt;
  @include flex-start;
  gap: 1.2rem;
  margin-bottom: 3.1rem;
  @include bp($point_2) {
    margin-bottom: 2rem;
  }

  .select-box {
    background-color: #efefef;
    @include flex-start;
    gap: 5.1rem;
    position: relative;
    border-radius: 1rem;
    padding: 1.6rem;
    cursor: pointer;
    font-size: 1.4rem;
    font-family: $font_3;

    &.active {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      ul {
        border-top: 0.1rem solid #dfdfdf;
      }
    }
  }
}

.dropdown {
  position: absolute;
  left: 0;
  top: calc(100%);
  background-color: #efefef;
  width: 100%;
  // border-radius: 1rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  max-height: 15rem;
  overflow-y: auto;
  li {
    font-size: 1.4rem;
    padding: 0.4rem 1rem;
    cursor: pointer;
    font-family: $font_3;
    transition: all 0.3s ease-in-out;
    &:not(:last-child) {
      border-bottom: 0.1rem solid #e9e9e9;
    }
    &:hover {
      color: $lblue;
    }
  }
}

.icon {
  color: $lblue;
}

.dropdown {
  position: absolute;
  left: 0;
  top: calc(100%);
  background-color: #efefef;
  width: 100%;
  border-radius: 1rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  max-height: 15rem;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: $lblue transparent;
  // Стилизация прокрутки
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $lblue;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: darken($lblue, 10%);
  }

  li {
    font-size: 1.4rem;
    padding: 0.4rem 1rem;
    cursor: pointer;
    font-family: $font_3;
    transition: all 0.3s ease-in-out;
    &:not(:last-child) {
      border-bottom: 0.1rem solid #e9e9e9;
    }
    &:hover {
      color: $lblue;
    }

    // Отметка выбранного пункта
    &.selected {
      background-color: $lblue;
      color: #fff;
    }
  }
}
</style>
