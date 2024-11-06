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
    loadFilter: false as boolean,
    filters: {
      model_group: "",
      manufacturer_id: "",
      year_from: "",
      year_to: "",
      fuel_type: "",
      transmission: "",
      mileage_from: "",
      mileage_to: "",
      engine_volume_from: "",
      engine_volume_to: "",
      price_from: "",
      price_to: "",
      colors: "",
    } as any,
  }),
  actions: {
    async getCars(filters = {}, page?: number, router?: any) {
      const { $main } = useNuxtApp();
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

      // Устанавливаем query параметры в URL, если передан router
      if (router) {
        router
          .push({ query: cleanedFilters })
          .catch((err: any) => console.error(err));
      }

      this.isLoading = true;
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

    changePage(newPage: number, router: any, scrollToElement: any) {
      if (newPage > 0) {
        this.currentPage = newPage;

        // Обновляем query параметры, если передан router
        if (router) {
          const updatedQuery = {
            ...router.currentRoute.value.query,
            page: newPage,
          };

          router
            .push({ query: updatedQuery })
            .catch((err: any) => console.error(err));
        }

        // Загружаем машины для новой страницы
        this.getCars({}, newPage, router).then(() => {
          // Прокручиваем к элементу, если scrollToElement доступен
          if (scrollToElement && scrollToElement.value) {
            scrollToElement.value.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
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

    // Новый метод для инициализации фильтров из query
    initializeFiltersFromQuery(queryFilters: any) {
      Object.keys(this.filters).forEach((key) => {
        if (queryFilters[key]) {
          this.filters[key] = queryFilters[key]; // Устанавливаем значение фильтра
        }
      });
    },

    async applyFilters(router: any, scrollToElement: any) {
      this.isLoading = true;
      const activeFilters = { ...this.filters };
      // Задаем статично список полей, для которых нужно передавать только значения
      const fieldsWithValues = [
        "year_from",
        "year_to",
        "fuel_type",
        "transmission",
        "mileage_from",
        "mileage_to",
        "engine_volume_from",
        "engine_volume_to",
        "price_from",
        "price_to",
      ]; // Добавьте сюда другие поля, если необходимо

      // Убираем пустые поля и извлекаем значения в зависимости от условий
      const cleanedFilters: any = Object.fromEntries(
        Object.entries(activeFilters)
          .filter(([key, value]) => {
            // Убираем пустые поля
            return value !== "" && value !== null && value !== undefined;
          })
          .map(([key, value]) => {
            if (fieldsWithValues.includes(key)) {
              // Если поле в списке, проверяем, что это объект
              if (typeof value === "object" && value !== null && value.value) {
                // Если это объект, возвращаем значение
                return [key, value.value]; // Здесь value.value - это значение, которое нужно отправить
              } else {
                return [key, value]; // В противном случае просто отправляем значение
              }
            } else if (
              typeof value === "object" &&
              value !== null &&
              value.key
            ) {
              // Если это объект с ключом, возвращаем только ключ
              return [key, value.key];
            }
            return [key, value]; // Возвращаем как есть, если не соответствует ни одному условию
          })
      );

      // Логируем для отладки
      console.log("Cleaned Filters:", cleanedFilters);

      await this.getCars(cleanedFilters); // Вызываем API с отфильтрованными параметрами

      // Обновляем query параметры
      router
        .push({ query: cleanedFilters })
        .catch((err: any) => console.error(err));

      if (scrollToElement && scrollToElement.value) {
        scrollToElement.value.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      this.isLoading = false;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});

// Вызываем эту функцию при инициализации компонента
export const useCarsStoreRefs = () => storeToRefs(useCarsStore());
