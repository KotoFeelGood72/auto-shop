<template>
  <div class="time-selects">
    <!-- Первый селект для времени начала -->
    <div class="select-box" @click="toggleDropdown('start')">
      <p>{{ startTime || "С " + availableStartTimes[0] }}</p>
      <Icon name="line-md:arrow-small-down" class="icon" />
      <ul v-if="isDropdownOpen === 'start'" class="dropdown">
        <li
          v-for="time in availableStartTimes"
          :key="time"
          @click="selectStartTime(time)"
        >
          {{ time }}
        </li>
      </ul>
    </div>

    <!-- Второй селект для времени окончания -->
    <div class="select-box" @click="toggleDropdown('end')">
      <p>
        {{ endTime || "До " + availableEndTimes[availableEndTimes.length - 1] }}
      </p>
      <Icon name="line-md:arrow-small-down" class="icon" />
      <ul v-if="isDropdownOpen === 'end'" class="dropdown">
        <li
          v-for="time in availableEndTimes"
          :key="time"
          @click="selectEndTime(time)"
        >
          {{ time }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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

// Состояния для времени
const startTime = ref<string | null>(null);
const endTime = ref<string | null>(null);
const isDropdownOpen = ref<string | null>(null);

// Доступные опции для времени начала
const availableStartTimes = computed(() => {
  return times.filter(
    (time) => !endTime.value || time < endTime.value || time === endTime.value
  );
});

// Доступные опции для времени окончания
const availableEndTimes = computed(() => {
  // Если startTime выбрано и оно является последним временем, отобразить его как единственное доступное
  if (startTime.value === times[times.length - 1]) {
    return [startTime.value]; // Показываем только выбранное время
  }
  return times.filter((time) => !startTime.value || time >= startTime.value);
});

// Открытие/закрытие выпадающего списка
const toggleDropdown = (dropdown: string) => {
  if (isDropdownOpen.value === dropdown) {
    isDropdownOpen.value = null;
  } else {
    isDropdownOpen.value = dropdown;
  }
};

// Выбор времени начала
const selectStartTime = (time: string) => {
  startTime.value = time;

  // Если время окончания установлено и меньше времени начала, сбрасываем его
  if (endTime.value && endTime.value < time) {
    endTime.value = null;
  }
  isDropdownOpen.value = null;
};

// Выбор времени окончания
const selectEndTime = (time: string) => {
  endTime.value = time;
  isDropdownOpen.value = null;
};
</script>

<style scoped lang="scss">
.time-selects {
  display: flex;
  gap: 20px;
}

.select-box {
  position: relative;
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  margin-left: 10px;
  color: #00aaff;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
