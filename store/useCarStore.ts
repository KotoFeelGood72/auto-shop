import { defineStore, storeToRefs } from "pinia";
import axios from "axios";

export const useCarsStore = defineStore("cars", {
  state: () => ({
    cars: null as any, // Массив всех машин
    car: null as any,  // Отдельная машина по ID
    currentPage: 1,    // Текущая страница
    pageSize: 16,      // Размер страницы по умолчанию
    options: null as any
  }),
  actions: {
    // Метод для получения автомобилей с возможностью указания страницы
    async getCars(filters = {}, page = this.currentPage) {
      const { $main } = useNuxtApp();

      // Добавляем параметры по умолчанию
      const defaultFilters = {
        page: page,          // Используем переданную страницу или текущую из состояния
        page_size: this.pageSize,  // Используем размер страницы из состояния
        ...filters,          // Включаем переданные фильтры
      };

      // Фильтруем объект фильтров, удаляя пустые значения
      const cleanedFilters = Object.fromEntries(
        Object.entries(defaultFilters).filter(
          ([, value]) => value !== null && value !== undefined   // Убираем пустые, null и undefined значения
        )
      );

      try {
        // Передаем отфильтрованные query параметры
        const response = await $main.get('auto', {
          params: cleanedFilters  // Включаем очищенные фильтры как query параметры
        });
        this.cars = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Ошибка получения машин:", error);
      }
    },

    async getOption() {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get('/options')
        this.options = response.data
      } catch (error) {
        console.error('Ошибка при получении опций:', error);
      }
    },

    // Метод для переключения страницы
    changePage(newPage: number) {
      if (newPage > 0) {
        this.currentPage = newPage; // Обновляем текущую страницу
        console.log(this.currentPage, 'this.currentPage');
        this.getCars({}, newPage); // Передаем номер новой страницы в getCars
      }
    },

    async getFilters() {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get('/options');
        this.options = response.data;
      } catch (error) {
        console.error('Ошибка при получении фильтров:', error);
      }
    },

    async sendMark(data: any) {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.post('/filter-options', data);
        return response.data; // Вернем ответ, если необходимо
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        throw error;
      }
    },

    // Метод для получения автомобиля по ID
    async getCarById(id: string | number) {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get(`/auto/${id}`);
        return response.data;
      } catch (error) {
        console.error('Ошибка при получении автомобиля:', error);
      }
    },
  },
});

// Для удобства использования с помощью реактивных ссылок
export const useCarsStoreRefs = () => storeToRefs(useCarsStore());
