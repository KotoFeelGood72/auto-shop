import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCarsStore } from "~/store/useCarStore";

export function usePagination() {
  const router = useRouter();
  const route = useRoute();
  const carsStore = useCarsStore();
  const currentPage = ref(Number(route.query.page) || 1);

  // Функция для переключения страницы
  function changePage(newPage: number) {
    if (newPage > 0) {
      currentPage.value = newPage;

      // Обновляем query параметры в URL
      const updatedQuery = {
        ...route.query,
        page: newPage,
      };

      router.push({ query: updatedQuery }).catch((err) => console.error(err));

      // Загружаем данные для новой страницы
      carsStore.getCars({}, newPage);
    }
  }

  // Наблюдатель для изменения текущей страницы в store при загрузке компонента
  watch(
    () => route.query.page,
    (newPage) => {
      currentPage.value = Number(newPage) || 1;
      carsStore.getCars({}, currentPage.value);
    },
    { immediate: true }
  );

  return {
    currentPage,
    changePage,
  };
}
