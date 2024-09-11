<template>
  <header class="header">
    <div class="header_top">
      <div class="container">
        <div class="header_main">
          <div class="header_logo">
            <NuxtLink>
              <img src="@/assets/img/logo.png" alt="" />
              <div class="header_logo__content">
                <p>Nipoteka Auto</p>
                <span>Авто из Кореи</span>
                <div class="stars">
                  <Icon name="wpf:star" />
                  <div class="star__txt">
                    4,7
                    <span> (204)</span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="header__time">
            <ul>
              <li>Владивосток: 18:54</li>
              <li>Москва: 11:54</li>
              <li>Сеул: 17:54</li>
            </ul>
          </div>
          <div class="header__price">
            <ul>
              <li>
                <img src="@/assets/img/dollar.png" alt="" />
                <p>RUB/USD: 88.09</p>
              </li>
              <li>
                <img src="@/assets/img/won.png" alt="" />
                <p>KRW/USD: 1381.4</p>
              </li>
            </ul>
          </div>
          <div class="header_action">
            <div class="header_social">
              <a target="_blank" href="/">
                <div class="header_social__icon">
                  <img src="@/assets/img/icon-tg.svg" alt="" />
                </div>
              </a>
              <a target="_blank" href="/">
                <div class="header_social__icon">
                  <img src="@/assets/img/icon-wt.svg" alt="" />
                </div>
              </a>
              <a target="_blank" href="/">
                <div class="header_social__icon">
                  <img src="@/assets/img/icon-phone.svg" alt="" />
                </div>
                <div class="header_social__txt">
                  <p>Телефон:</p>
                  <span>8 (800) 000-00-00</span>
                </div>
              </a>
            </div>
            <Button name="Заказать звонок" />
          </div>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="container">
        <nav>
          <NuxtLink
            v-for="(item, i) in nav"
            :key="'nav-item-' + i"
            :to="item.link"
          >
            <div class="nav_item__icon">
              <img :src="item.icon" />
            </div>
            <p>{{ item.name }}</p>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from "./Button.vue";

const nav = ref<any>([
  { name: "О компании", link: "/", icon: "/img/nav-1.svg" },
  { name: "Подбор авто", link: "/", icon: "/img/nav-2.svg" },
  { name: "Отзывы клиентов", link: "/", icon: "/img/nav-3.svg" },
  { name: "Наши контакты", link: "/", icon: "/img/nav-4.svg" },
  { name: "Справка", link: "/", icon: "/img/nav-5.svg" },
]);
</script>

<style scoped lang="scss"></style>
