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
            <div v-for="i in 4" :key="'paymentsMetod-item-' + i">
              <img :src="'/img/payment-' + i + '.png'" class="full" />
            </div>
          </div>
        </div>
        <div class="footer_col__nav">
          <div class="footer_col__title">Навигация</div>
          <NuxtLink to="/about">О компании </NuxtLink>
          <NuxtLink to="/shop">Каталог авто </NuxtLink>
          <NuxtLink to="/reviews">Отзывы клиентов </NuxtLink>
          <NuxtLink to="/contacts">Наши контакты </NuxtLink>
        </div>
        <div class="footer_col__nav">
          <div class="footer_col__title">Гарантии</div>
          <NuxtLink to="/reference/shield">Наши гарантии </NuxtLink>
          <NuxtLink to="/reference/sheme">Схема поставки </NuxtLink>
        </div>
        <div class="footer_col__socials">
          <div class="footer_col__title">Социальные сети</div>
          <ul class="footer_socials__list">
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-1.png" alt="" class="full" />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-2.png" alt="" class="full" />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-3.png" alt="" class="full" />
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <img src="/img/footer-social-4.png" alt="" class="full" />
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
          <p>Авто из Кореи - ООО «Нипотека авто»</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  background-color: $white;
}

.footer_main {
  @include flex-start;
  align-items: flex-start;
  padding: 4.8rem 0;
  gap: 2rem;
  @include bp($point_2) {
    padding: 2rem 0;
    gap: 3rem;
  }

  @include bp($point_2) {
    flex-direction: column;
  }
  & > div {
    width: 25%;
    height: 100%;
    @include bp($point_2) {
      width: 100%;
    }
    &:not(:last-child) {
      border-right: 0.1rem solid #dfdfdf;
      @include bp($point_2) {
        border: none;
      }
    }
  }
}

.footer_bottom {
  background-color: $dark;
  color: $white;
  font-size: 1.4rem;
  @include bp($point_2) {
    font-size: 0.8rem;
  }

  .footer_bottom__main {
    @include flex-space;
    gap: 5rem;
    padding: 2rem 0;
    @include bp($point_2) {
      gap: 1rem;
      padding: 2rem 0;
    }
  }
}

.footer_logo {
  a {
    @include flex-start;
    gap: 1rem;
    line-height: 1.6rem;

    img {
      max-width: 5.6rem;
    }

    p {
      font-size: 1.8rem;
      font-family: $font_5;
      // line-height: 1.6rem;
      color: $blue;
    }
    span {
      font-family: $font_4;
      color: $dark;
      font-size: 1.2rem;
      display: block;
      // line-height: 0;
    }
  }
}

.footer_phone {
  a {
    @include flex-start;
    gap: 1rem;
    font-family: $font_4;
    color: $dark;
    margin-bottom: 0.9rem;
  }
  & > p {
    font-size: 1.4rem;
    font-family: $font_2;
  }
}

.footer_col__info {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.footer_payment__list {
  @include flex-start;
  gap: 1.6rem;
  div {
    width: 3.2rem;
    height: 3.2rem;
    @include flex-center;
  }
}

.footer_col__title {
  font-size: 1.6rem;
  font-family: $font_4;
  margin-bottom: 2.4rem;
}

.footer_col__nav {
  display: flex;
  flex-direction: column;
  a {
    font-size: 1.6rem;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}

.footer_col__socials {
  p {
    font-size: 1.4rem;
    color: #4b5563;
  }
}

.footer_socials__list {
  @include flex-start;
  gap: 1.5rem;
  margin-top: -1.4rem;
  margin-bottom: 8.8rem;
  @include bp($point_2) {
    margin-bottom: 3rem;
  }
  li {
    @include flex-center;
    width: 3.4rem;
    height: 3.4rem;
    a {
      @include flex-center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
