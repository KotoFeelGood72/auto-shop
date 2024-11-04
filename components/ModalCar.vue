<template>
  <div class="modalCar">
    <div class="modalCar__main">
      <div class="modalCar__close" @click="closeAllModals()">
        <Icons icon="material-symbols-light:close" :size="40" />
      </div>
      <div class="modalCar__head">
        <h3>Оставить заявку</h3>
      </div>
      <div class="modal__row">
        <div class="modal__img">
          <img :src="car.photos[0].path"  class="full" />
        </div>
        <div class="modal_form__w">
          <div class="modalForm__head">
            <h3>{{ car.name }}, {{  car.year }}</h3>
            <div class="price">{{ formatPrice(car.summary.totalVladivostok) }}</div>
          </div>
          <div class="modalCar__form">
            <Inputs place="Номер телефона" />
            <Inputs place="Имя" />
            <Button name="Отправить" />
          </div>
        </div>
      </div>
      <div class="modal__notice">
        <img src="@/assets/img/info.svg" alt="" />
        <span
          >Нажимая кнопку “Отправить” вы соглашаетесь с пользовательским
          соглашением</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStoreRefs, useModalStore } from "~/store/useModalStore";
import { useCarsStoreRefs } from "~/store/useCarStore";

const { modals } = useModalStoreRefs();
const { closeAllModals } = useModalStore();
const {car} = useCarsStoreRefs()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0, 
    maximumFractionDigits: 0, 
  }).format(price);
};
</script>

<style scoped lang="scss">
.modalCar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include flex-center;
  z-index: 101;
  pointer-events: none;
  @include bp($point_2) {
    padding: 2rem;
  }
}

.modalCar__main {
  background-color: $light;
  border-radius: 2rem;
  padding: 3rem 3.5rem;
  position: relative;
  pointer-events: all;
  max-width: 84.5rem;
  width: 100%;
  @include bp($point_2) {
    padding: 2rem;
  }
}

.modalCar__close {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.modalCar__close {
  @include flex-center;
  color: #999999;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: red;
  }
}

.modalCar__head {
  text-align: center;
  margin-bottom: 3.2rem;
  @include bp($point_2) {
    margin-bottom: 2rem;
  }
}
.modal_form__w {
  max-width: 40.4rem;
}
.modalCar__form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  @include bp($point_2) {
    align-items: center;
    gap: 1rem;
  }

  :deep(.input) {
    @include bp($point_2) {
      width: 100%;
    }
  }
  :deep(input) {
    background-color: #e6e6e6;
    height: 5rem;
  }

  :deep(.button) {
    padding: 1.4rem 7.9rem;
    max-width: 25.3rem;
    margin-top: 1rem;
  }
}

.modal__notice {
  @include flex-start;
  gap: 1rem;
  font-size: 1.3rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
}

.modal__row {
  @include flex-start;
  gap: 1.7rem;
  margin-bottom: 2.5rem;

  @include bp($point_2) {
    flex-direction: column;
    gap: 1rem;
  }
}

.modal__img {
  max-width: 35.4rem;
  height: 34.3rem;
  border-radius: 2rem;
  overflow: hidden;
  @include bp($point_2) {
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
  }
}

.modalForm__head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  @include bp($point_2) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 2.4rem;
    @include bp($point_2) {
      font-size: 2rem;
    }
  }
  .price {
    font-size: 2.8rem;
    font-family: $font_5;
  }
}
</style>
