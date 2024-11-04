import { defineStore, storeToRefs } from "pinia";
import axios from "axios";

export const useCarsStore = defineStore("cars", {
  state: () => ({
    cars: null as any, // Массив всех машин
    car: null as any, // Отдельная машина по ID
    currentPage: 1, // Текущая страница
    pageSize: 16,
    options: null as any,
    isLoading: false as boolean,
  }),
  actions: {
    async getCars(filters = {}, page?: number) {
      const { $main } = useNuxtApp();
      this.isLoading = true; // Начало загрузки

      // Используем текущую страницу, если page не передан
      const currentPage = page ?? this.currentPage;

      // Добавляем параметры по умолчанию
      const defaultFilters = {
        page: currentPage, // Используем текущую страницу
        page_size: this.pageSize, // Используем размер страницы из состояния
        ...filters, // Включаем переданные фильтры
      };

      // Фильтруем объект фильтров, удаляя пустые значения
      const cleanedFilters = Object.fromEntries(
        Object.entries(defaultFilters).filter(
          ([, value]) => value !== null && value !== undefined // Убираем пустые, null и undefined значения
        )
      );

      try {
        // Передаем отфильтрованные query параметры
        const response = await $main.get("auto", {
          params: cleanedFilters, // Включаем очищенные фильтры как query параметры
        });
        this.cars = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Ошибка получения машин:", error);
      } finally {
        this.isLoading = false; // Завершение загрузки
      }
    },

    async getOption() {
      const { $main } = useNuxtApp();
      this.isLoading = true; // Начало загрузки
      try {
        const response = await $main.get("/options");
        this.options = response.data;
      } catch (error) {
        console.error("Ошибка при получении опций:", error);
      } finally {
        this.isLoading = false; // Завершение загрузки
      }
    },

    // Метод для переключения страницы
    changePage(newPage: number) {
      if (newPage > 0) {
        this.currentPage = newPage; // Обновляем текущую страницу
        console.log(this.currentPage, "this.currentPage");
        this.getCars({}, newPage); // Передаем номер новой страницы в getCars
      }
    },

    async getFilters() {
      const { $main } = useNuxtApp();
      this.isLoading = true; // Начало загрузки
      try {
        const response = await $main.get("/options");
        this.options = response.data;
      } catch (error) {
        console.error("Ошибка при получении фильтров:", error);
      } finally {
        this.isLoading = false; // Завершение загрузки
      }
    },

    async sendMark(data: any) {
      const { $main } = useNuxtApp();
      this.isLoading = true; // Начало загрузки
      try {
        const response = await $main.post("/filter-options", data);
        return response.data; // Вернем ответ, если необходимо
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
        throw error;
      } finally {
        this.isLoading = false; // Завершение загрузки
      }
    },

    // Метод для получения автомобиля по ID
    async getCarById(id: string | number) {
      const { $main } = useNuxtApp();
      this.isLoading = true; // Начало загрузки
      try {
        const response = await $main.get(`/auto/${id}`);
        return response.data;
      } catch (error) {
        console.error("Ошибка при получении автомобиля:", error);
      } finally {
        this.isLoading = false; // Завершение загрузки
      }
    },
  },
});

// Для удобства использования с помощью реактивных ссылок
export const useCarsStoreRefs = () => storeToRefs(useCarsStore());
