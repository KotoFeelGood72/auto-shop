<template>
  <header class="header">
    <div class="header_top">
      <div class="container">
        <div class="header_main">
          <div class="header_logo">
            <NuxtLink to="/">
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
              <li>Владивосток: {{ vladivostokTime }}</li>
              <li>Москва: {{ moscowTime }}</li>
              <li>Сеул: {{ seoulTime }}</li>
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
            @mouseover="showSubmenu(i)"
            @mouseleave="hideSubmenu()"
          >
            <div class="nav_item__icon">
              <img :src="item.icon" />
            </div>
            <p>{{ item.name }}</p>

            <!-- Выпадающее подменю -->
            <ul v-if="item.submenu && activeSubmenu === i" class="submenu">
              <li v-for="(sub, j) in item.submenu" :key="'sub-item-' + j">
                <NuxtLink :to="sub.link">{{ sub.name }}</NuxtLink>
              </li>
            </ul>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "./Button.vue";

// Массив с данными для навигации
const nav = ref([
  { name: "О компании", link: "/about", icon: "/img/nav-1.svg" },
  { name: "Подбор авто", link: "/shop", icon: "/img/nav-2.svg" },
  { name: "Отзывы клиентов", link: "/", icon: "/img/nav-3.svg" },
  {
    name: "Наши контакты",
    link: "/contacts",
    icon: "/img/nav-4.svg",
  },
  {
    name: "Справка",
    link: "/",
    icon: "/img/nav-5.svg",
    submenu: [
      { name: "Наши гарантии", link: "/shield" },
      { name: "Схема работы", link: "/sheme" },
    ],
  },
]);

// Время для Владивостока, Москвы и Сеула
const vladivostokTime = ref<string>("");
const moscowTime = ref<string>("");
const seoulTime = ref<string>("");

// Функция для получения времени в указанном часовом поясе
const getTimeInTimeZone = (timeZone: string) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("ru-RU", {
    ...options,
    timeZone,
  }).format(new Date());
};

// Обновление времени каждые 60 секунд
const updateTime = () => {
  vladivostokTime.value = getTimeInTimeZone("Asia/Vladivostok");
  moscowTime.value = getTimeInTimeZone("Europe/Moscow");
  seoulTime.value = getTimeInTimeZone("Asia/Seoul");
};

// Вызов обновления времени при монтировании компонента
onMounted(() => {
  updateTime();
  setInterval(updateTime, 60000); // Обновляем время каждую минуту
});

// Реф для отслеживания активного подменю
const activeSubmenu = ref<number | null>(null);

// Показывать подменю при наведении
const showSubmenu = (index: number) => {
  activeSubmenu.value = index;
};

// Скрывать подменю при уходе курсора
const hideSubmenu = () => {
  activeSubmenu.value = null;
};
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
  z-index: 999;

  nav {
    @include flex-space;
    & > a {
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

.submenu {
  position: absolute;
  background-color: $dark;
  width: 100%;
  top: 100%;
  left: 0;
  z-index: 999;
  a {
    @include flex-start;
    font-size: 1.8rem;
    padding: 2rem;
    color: $white;
    &:hover {
      background-color: #00000027;
    }
  }
}
</style>
