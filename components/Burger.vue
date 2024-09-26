<template>
  <transition name="slide-right">
    <div class="burger">
      <div class="burger_bg" @click="closeModal('burger')"></div>
      <div class="burger_main">
        <div class="burger_head">
          <div class="burger_logo">
            <NuxtLink to="/">
              <img src="@/assets/img/logo.png" alt="" />
              <div class="burger_logo__content">
                <p>Nipoteka Auto</p>
                <span>Авто из Кореи</span>
              </div>
            </NuxtLink>
          </div>
          <div class="burger__close" @click="closeModal('burger')">
            <Icon name="material-symbols:close" :size="30" />
          </div>
        </div>
        <div class="burger_bottom">
          <nav>
            <NuxtLink
              v-for="(item, i) in nav"
              :key="'nav-item-' + i"
              :to="item.link"
              @mouseover="showSubmenu(i)"
              @mouseleave="hideSubmenu()"
            >
              <div class="nav_item__icon" v-if="item.submenu">
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
        <div class="burger__time">
          <ul>
            <li>Владивосток: {{ vladivostokTime }}</li>
            <li>Москва: {{ moscowTime }}</li>
            <li>Сеул: {{ seoulTime }}</li>
          </ul>
        </div>
        <div class="burger__price">
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
        <div class="burger_action">
          <div class="burger_social">
            <a target="_blank" href="/">
              <div class="burger_social__icon">
                <img src="@/assets/img/icon-tg.svg" alt="" />
              </div>
            </a>
            <a target="_blank" href="/">
              <div class="burger_social__icon">
                <img src="@/assets/img/icon-wt.svg" alt="" />
              </div>
            </a>
            <a target="_blank" href="/">
              <div class="burger_social__icon">
                <img src="@/assets/img/icon-phone.svg" alt="" />
              </div>
              <div class="burger_social__txt">
                <p>Телефон:</p>
                <span>8 (800) 000-00-00</span>
              </div>
            </a>
          </div>
          <Button name="Заказать звонок" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "./Button.vue";
import { useModalStore } from "@/stores/useModalStore";

const { closeModal } = useModalStore();

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
    icon: "/img/nav-5.svg",
    submenu: [
      { name: "Наши гарантии", link: "/reference/shield" },
      { name: "Схема работы", link: "/reference/sheme" },
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
.burger {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
}

.burger_bg {
  background-color: $dark;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.burger_main {
  background-color: $white;
  max-width: 90%;
  border-right: 0.1rem solid $light;
  position: relative;
  height: 100%;
  padding: 2rem;
  flex-direction: column;
  display: flex;
  gap: 2rem;
}

.burger_head {
  @include flex-space;
}

.burger__close {
  @include flex-center;
  width: 3rem;
  height: 3rem;
  color: red;
}

.burger_logo {
  a {
    @include flex-start;
    gap: 1rem;

    img {
      width: 6rem;
      height: 6rem;
    }
  }
}

.burger_logo__content {
  p {
    font-size: 1.4rem;
    font-family: $font_4;
    color: $lblue;
  }

  span {
    color: $gray;
    font-size: 1.2rem;
    font-family: $font_4;
    display: block;
  }
}

.stars {
  @include flex-start;
}

.burger_bottom {
  border-bottom: 0.1rem solid $light;
  padding-bottom: 2rem;
  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  a {
    @include flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
}

.submenu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  padding-left: 4rem;
}

.nav_item__icon {
  background-color: $dark;
  border-radius: 100%;
  @include flex-center;
  width: 2.4rem;
  height: 2.3rem;
}

.burger__price {
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      @include flex-start;
      gap: 1rem;
    }
  }
}

.burger__time {
  border-bottom: 0.1rem solid $light;
  padding-bottom: 2rem;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.burger_social {
  @include flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  a {
    @include flex-start;
    gap: 1rem;
  }

  .burger_social__txt {
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 1.4rem;
      display: block;
    }
  }
}

.router-link-active,
.router-link-exact-active {
  color: $lblue;
}
</style>
