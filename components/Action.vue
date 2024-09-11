<template>
  <section class="action">
    <div class="container">
      <div class="action_main">
        <div class="action_content">
          <h3>Остались вопросы? Оставьте данные и мы перезвоним</h3>
          <div class="action_form">
            <Inputs />
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
                  <img src="@/assets/img/icon-phone2.svg" alt="" />
                </div>
                <p>или позвоните нам по номеру 8 (800) 200-69-65</p>
              </a>
            </div>
            <div class="action_messenger">
              <a href="#" target="_blank">
                <img src="@/assets/img/icon-wt.svg" alt="" />
                <p>Мы в WhatsApp</p>
              </a>
              <a href="#" target="_blank">
                <img src="@/assets/img/icon-tg.svg" alt="" />
                <p>Мы в Telegram</p>
              </a>
            </div>
          </div>
        </div>
        <div class="action-car">
          <img src="@/assets/img/action.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Inputs from "./Inputs.vue";
import Button from "./Button.vue";
</script>

<style scoped lang="scss"></style>
