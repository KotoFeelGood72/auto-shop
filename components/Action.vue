<template>
  <section class="action">
    <div class="container">
      <div class="action_main">
        <div class="action_content">
          <h3>Остались вопросы? Оставьте данные и мы перезвоним</h3>
          <div class="action_form">
            <Inputs place="Телефон или E-mail" />
            <Button name="Отправить" />
          </div>
          <div class="action_form_bottom">
            <img src="@/assets/img/info.svg" alt="" />
            <span
              >Нажимая кнопку “Отправить” вы соглашаетесь с пользовательским
              соглашением</span
            >
          </div>
          <div class="action_other">
            <div class="action_phone">
              <a href="/" target="_blank">
                <div class="action_phone_icon">
                  <img src="@/assets/img/icon-phone2.svg" alt="" class="full" />
                </div>
                <p>
                  или позвоните нам по номеру <span>8 (800) 200-69-65</span>
                </p>
              </a>
            </div>
            <div class="action_messenger">
              <a href="#" target="_blank">
                <img src="@/assets/img/icon-wt.svg" alt="" class="full" />
                <p>Мы в WhatsApp</p>
              </a>
              <a href="#" target="_blank">
                <img src="@/assets/img/icon-tg.svg" alt="" class="full" />
                <p>Мы в Telegram</p>
              </a>
            </div>
          </div>
        </div>
        <div class="action-car">
          <img src="@/assets/img/action.png" alt="" class="full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Inputs from "./Inputs.vue";
import Button from "./Button.vue";
</script>

<style scoped lang="scss">
.action_main {
  background-color: $dark;
  color: $white;
  @include flex-start;
  border-radius: 2rem;
  position: relative;
  padding: 3rem 5rem;
  overflow: hidden;
  margin-bottom: 6rem;
}

.action_form {
  @include flex-start;
  margin-bottom: 1.5rem;
  gap: 1.2rem;

  :deep(.input) {
    min-width: 31rem;
  }
  :deep(input) {
    font-size: 1.4rem;
    padding: 1.6rem 3.1rem;
    max-height: 4.9rem;
  }

  :deep(.button) {
    font-size: 1.6rem;
    padding: 1.4rem 7.9rem;
    max-height: 4.9rem;
  }
}

.action_content {
  max-width: 61.9rem;

  :deep(h3) {
    margin-bottom: 2rem;
  }
}

.action_form_bottom {
  @include flex-start;
  font-size: 1.3rem;
  color: #e0e0e0;
  gap: 0.3rem;
  margin-bottom: 2rem;

  img {
    width: 1.8rem;
    height: 1.8rem;
    @include flex-center;
  }
}

.action_phone_icon {
  @include flex-center;
  width: 4rem;
  height: 4rem;
}

.action_phone {
  margin-bottom: 3rem;
  @include flex-start;
  a {
    @include flex-start;
    gap: 1rem;
    color: $white;
    font-size: 2rem;
    p {
      @include flex-start;
      gap: 1.5rem;
    }
    span {
      font-family: $font_4;
    }
  }
}

.action_messenger {
  @include flex-start;
  gap: 5rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  a {
    @include flex-start;
    gap: 2.1rem;
    font-family: $font_4;
    &:nth-child(1) {
      color: #29a71a;
    }
    &:nth-child(2) {
      color: $blue;
    }
  }
}

.action-car {
  max-width: 47.4rem;
  position: absolute;
  top: -1rem;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  img {
    object-fit: cover;
  }
}
</style>
