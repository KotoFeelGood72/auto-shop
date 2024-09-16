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
                  <div class="stars__icon">
                    <Icon name="wpf:star" :size="20" />
                  </div>
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
                <img src="@/assets/img/dollar.svg" alt="" />
                <p>RUB/USD: 88.09</p>
              </li>
              <li>
                <img src="@/assets/img/won.svg" alt="" />
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

<style scoped lang="scss">
.header_main {
  @include flex-space;
  gap: 5rem;
  padding: 2rem 0;
}

.header_bottom {
  background-color: $dark;
  color: $white;
  padding: 0 1.5rem;

  nav {
    @include flex-space;
    a {
      @include flex-center;
      gap: 1rem;
      color: inherit;
      font-size: 2rem;
      font-family: $font_3;
      padding: 1.9rem 4.1rem 1.9rem 2rem;
      flex-grow: 1;
      position: relative;
      &:hover {
        background-color: #0000002f;
        &:after {
          // border-color: #0000002f;
          height: 0;
        }
      }

      &:after {
        content: "";
        right: 0;
        position: absolute;
        height: 3.9rem;
        border-right: 0.1rem solid $gray;
        transition: all 0.3s ease-in-out;
      }
      &:not(:last-child) {
      }
    }
  }
}

.nav_item__icon {
  @include flex-center;
  width: 2.4rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.header_logo {
  a {
    @include flex-start;
    gap: 0.8rem;
    img {
      max-width: 6.7rem;
    }

    p {
      font-size: 1.8rem;
      font-family: $font_5;
      color: $blue;
      line-height: 1rem;
    }
  }
}

.header_logo__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > span {
    font-family: $font_5;
    font-size: 1.2rem;
    color: $m-gray;
  }
}

.stars {
  @include flex-start;
  font-family: $font_3;
  gap: 0.6rem;
}

.stars__icon {
  color: #ffc107;
  @include flex-center;
}

.star__txt {
  font-size: 1.4rem;
  span {
    color: $gray;
  }
}

.header__time,
.header__price {
  font-size: 1.4rem;
  font-family: $font_3;
}

.header__time {
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
}

.header__price {
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    li {
      @include flex-start;
      gap: 0.7rem;

      img {
        width: 1.4rem;
        height: 1.4rem;
        object-fit: contain;
      }
    }
  }
}

.header_action {
  @include flex-start;
  gap: 3rem;
}

.header_social {
  @include flex-start;
  gap: 1.5rem;
  a {
    @include flex-center;
    gap: 1.5rem;
    img {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
}

.header_social__txt {
  p {
    font-size: 1.2rem;
    color: $gray;
    line-height: 1rem;
  }
  span {
    font-size: 1.8rem;
    font-family: $font_3;
  }
}
</style>
