import { defineStore, storeToRefs } from "pinia";

export const useCarsStore = defineStore("cars", {
  state: () => ({
    cars: null as any, // Массив всех машин
    car: null as any, 
  }),
  actions: {
    async getCars() {
      const { $main } = useNuxtApp();
      try {
        const response = await $main.get('auto');
        this.cars = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Ошибка получения машин:", error);
      }
    },

    getCarById(id: string | number) {
      if (this.cars) {
        // Поиск машины по ID
        const foundCar = this.cars.find((car: any) => car.id === id);
        if (foundCar) {
          this.car = foundCar;
          console.log(this.car);
        } else {
          console.error(`Машина с ID ${id} не найдена`);
        }
      } else {
        console.error('Массив машин пуст');
      }
    }
  },
});

// Для удобства использования с помощью реактивных ссылок
export const useCarsStoreRefs = () => storeToRefs(useCarsStore());
