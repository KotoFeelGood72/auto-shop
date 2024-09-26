<template>
  <div class="modalCallback">
    <div class="modalCallback__main">
      <div class="modalCallback__close" @click="closeAllModals()">
        <Icon name="material-symbols-light:close" :size="40" />
      </div>
      <div class="modalCallback__head">
        <h3>
          {{
            modals.modalCallback ? "Заказать звонок" : "Получить консультацию"
          }}
        </h3>
      </div>
      <div class="modalCallback__form">
        <Inputs place="Номер телефона" />
        <Inputs place="Имя" />
        <Button name="Отправить" />
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
import { useModalStoreRefs, useModalStore } from "@/stores/useModalStore";

const { modals } = useModalStoreRefs();
const { closeAllModals } = useModalStore();
</script>

<style scoped lang="scss">
.modalCallback {
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

.modalCallback__main {
  background-color: $light;
  border-radius: 2rem;
  padding: 3rem 10rem;
  position: relative;
  pointer-events: all;

  @include bp($point_2) {
    padding: 2rem;
    border-radius: 1rem;
  }
}

.modalCallback__close {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.modalCallback__close {
  @include flex-center;
  color: #999999;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: red;
  }
}

.modalCallback__head {
  text-align: center;
  margin-bottom: 32px;
}

.modalCallback__form {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 41.3rem;
  margin: 0 auto 3.5rem auto;

  @include bp($point_2) {
    gap: 1rem;
  }

  :deep(input) {
    background-color: #e6e6e6;
  }

  :deep(.button) {
    padding: 1.4rem 7.9rem;
    max-width: 25.3rem;
    margin: 0 auto;
  }
}

.modal__notice {
  @include flex-center;
  gap: 1rem;
  font-size: 1.3rem;
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
