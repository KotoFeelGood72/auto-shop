<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_main">
        <div class="footer_col__info">
          <div class="footer_logo">
            <NuxtLink to="/">
              <img src="@/assets/img/logo.png" alt="" />
              <div class="footer_logo__txt">
                <p>Nipoteka Auto</p>
                <span>Авто из Кореи</span>
              </div>
            </NuxtLink>
          </div>
          <div class="footer_phone">
            <a href="#" target="_blank">
              <img src="@/assets/img/mini-phone.png" alt="" />
              <p>8(000) 000-00-00</p>
            </a>
            <p>Пн-Вс: 09:00-22:00</p>
          </div>
          <div class="footer_payment__list">
            <img
              :src="'/img/payment-' + i + '.png'"
              v-for="i in 4"
              :key="'paymentsMetod-item-' + i"
            />
          </div>
        </div>
        <div class="footer_col__nav">
          <div class="footer_col__title">Навигация</div>
          <NuxtLink to="/">О компании </NuxtLink>
          <NuxtLink to="/">Каталог авто </NuxtLink>
          <NuxtLink to="/">Отзывы клиентов </NuxtLink>
          <NuxtLink to="/">Наши контакты </NuxtLink>
          <NuxtLink to="/">Доставка </NuxtLink>
        </div>
        <div class="footer_col__nav">
          <div class="footer_col__title">Гарантии</div>
          <NuxtLink to="/">Схема поставки </NuxtLink>
          <NuxtLink to="/">Проверка пробега</NuxtLink>
        </div>
        <div class="footer_col__socials">
          <div class="footer_col__title">Социальные сети</div>
          <ul class="footer_socials__list">
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-1.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-2.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-3.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-4.png" alt="" />
              </a>
            </li>
          </ul>
          <p>
            Материалы, представленные на сайте, не являются публичной офертой
          </p>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container">
        <div class="footer_bottom__main">
          <p>© Copyright 2008-2024. ООО "Нипотека авто"</p>
          <p>Авто из Кореи - ООО «Нипотека авто» г. ?????, ул. ??????</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
