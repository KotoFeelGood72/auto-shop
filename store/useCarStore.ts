import { defineStore, storeToRefs } from "pinia";

export const useCarsStore = defineStore("cars", {
  state: () => ({
    cars: null as any,
    car: null as any,
    currentPage: 1,
    pageSize: 16,
    options: null as any,
    isLoading: false as boolean,
    models: null as any,
  }),
  actions: {
    async getCars(filters = {}, page?: number) {
      const { $main } = useNuxtApp();
      this.isLoading = true;
      const currentPage = page ?? this.currentPage;

      const defaultFilters = {
        page: currentPage,
        page_size: this.pageSize,
        ...filters,
      };
      const cleanedFilters = Object.fromEntries(
        Object.entries(defaultFilters).filter(
          ([, value]: [string, any]) =>
            value !== null &&
            value !== undefined &&
            (typeof value === "string" ? value.trim() !== "" : true)
        )
      );

      try {
        const response = await $main.get("auto", {
          params: cleanedFilters,
        });
        this.cars = response.data;
      } catch (error) {
        console.error("Ошибка получения машин:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async getOption() {
      const { $main } = useNuxtApp();
      this.isLoading = true;
      try {
        const response = await $main.get("/options");
        this.options = response.data;
      } catch (error) {
        console.error("Ошибка при получении опций:", error);
      } finally {
        this.isLoading = false;
      }
    },

    changePage(newPage: number) {
      if (newPage > 0) {
        this.currentPage = newPage;
        this.getCars({}, newPage);
      }
    },

    async getFilters() {
      const { $main } = useNuxtApp();
      this.isLoading = true;
      try {
        const response = await $main.get("/options");
        this.options = response.data;
      } catch (error) {
        console.error("Ошибка при получении фильтров:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async sendMark(data: any) {
      const { $main } = useNuxtApp();
      this.isLoading = true;
      try {
        const response = await $main.post("/filter-options", data);
        this.models = response.data.modelGroups;
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async getCarById(id: string | number) {
      const { $main } = useNuxtApp();
      this.isLoading = true;
      try {
        const response = await $main.get(`/auto/${id}`);
        return response.data;
      } catch (error) {
        console.error("Ошибка при получении автомобиля:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export const useCarsStoreRefs = () => storeToRefs(useCarsStore());
