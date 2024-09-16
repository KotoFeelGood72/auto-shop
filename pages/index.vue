<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero_main">
          <div class="hero_time__work">
            <img src="@/assets/img/timework.png" alt="" />
          </div>
          <div class="hero__row">
            <div class="hero_banner">
              <div class="hero_content">
                <h1>Покупка автомобилей в южной корее</h1>
                <p>
                  Мы предоставляем возможность покупки достойного автомобиля в
                  рамках вашего бюджета без пробега по РФ, переплат, скрытых
                  комиссий и дополнительных расходов.
                </p>
              </div>
              <div class="hero_banner__car">
                <img src="@/assets/img/banner.png" alt="" />
              </div>
            </div>
            <div class="hero_sale">
              <ul class="hero_country__list">
                <li>
                  <img class="full" src="@/assets/img/korea.png" alt="" />
                </li>
                <li>
                  <img class="full" src="@/assets/img/china.png" alt="" />
                </li>
              </ul>
              <h2>Начать автоподбор автомобиля с Японского аукциона и Китая</h2>
              <Button name="Консультация и доступ к лотам аукциона" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="filter">
      <div class="container">
        <div class="filter_main">
          <h2>Каталог авто</h2>
          <div class="filter_grid">
            <div class="filter_col">
              <Selects :options="options" placeholder="Модель" />
              <Selects :options="options" placeholder="Тип топлива" />
              <div class="filter_col__row">
                <Inputs place="Пробег от" />
                <Inputs place="Пробег до" />
              </div>
            </div>
            <div class="filter_col">
              <Selects :options="options" placeholder="Марка" />
              <Selects :options="options" placeholder="Привод" />
              <div class="filter_col__row">
                <Inputs place="Объем от" />
                <Inputs place="Объем до" />
              </div>
            </div>
            <div class="filter_col">
              <div class="filter_col__row">
                <Inputs place="Год от" />
                <Inputs place="Год до" />
              </div>
              <Selects :options="options" placeholder="Трансмиссия" />
              <div class="filter_col__row">
                <Inputs place="Цена от" />
                <Inputs place="Цена до" />
              </div>
            </div>
          </div>
          <div class="filter-btn">
            <Button name="Показать результат" />
          </div>
        </div>
      </div>
    </section>
    <section class="cars">
      <div class="container">
        <div class="cars_head">
          <h2>Найдено: 24 346 автомобилей</h2>
          <div class="cars_sort">
            <SortDropdown />
          </div>
        </div>
        <ul class="cars_grid">
          <li v-for="(item, i) in 16" :key="'cars-item-' + i">
            <CardCar :data="car" />
          </li>
        </ul>
        <Pagination
          :totalPages="34"
          :currentPage="currentPage"
          @updatePage="handlePageChange"
        />
      </div>
    </section>
    <section class="forms">
      <div class="container">
        <div class="forms__w">
          <div class="forms__main">
            <h3>Оставить заявку</h3>
            <Inputs place="Телефон или E-mail" />
            <p>В какое время вам удобно с нами связаться?</p>
            <TimeSelect />
            <div class="forms_bottom">
              <Button name="Отправить" />
              <div class="forms_social">
                <a href="/" target="_blank">
                  <img src="@/assets/img/form-tg.svg" alt="" />
                </a>
                <a href="/" target="_blank">
                  <img src="@/assets/img/form-wt.svg" alt="" />
                </a>
                <a href="/" target="_blank">
                  <img src="@/assets/img/form-vr.svg" alt="" />
                </a>
              </div>
            </div>
            <div class="forms_notice">
              <div class="forms_notice__icon">
                <img src="@/assets/img/info.svg" />
              </div>
              <span
                >Нажимая кнопку “Отправить” вы соглашаетесь с пользовательским
                соглашением</span
              >
            </div>
          </div>
          <div class="services">
            <h3>Преимущества</h3>
            <ul>
              <li>
                <p>Экономия</p>
                <span
                  >Более низкие цены за счет исключения наценок дилеров и
                  выгодных условий поставки</span
                >
              </li>
              <li>
                <p>Индивидуальный подход</p>
                <span
                  >Возможность выбора уникальных моделей и комплектаций,
                  идеально подходящих под нужды клиента</span
                >
              </li>
              <li>
                <p>Высокое качество</p>
                <span
                  >Надежные и долговечные автомобили с передовыми технологиями
                  от ведущих корейских производителей
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="spectr">
      <div class="container">
        <div class="spectr_main">
          <div class="spectr_head">
            <h4>Полный спектр услуг по покупке автомобиля из Кореи</h4>
            <p>Самые выгодные условия сотрудничества</p>
          </div>
          <div class="spectr_grid">
            <div class="spectr_item">
              <div class="spectr_img">
                <img src="@/assets/img/spectr-1.png" alt="" />
              </div>
              <p>Поиск и подбор автомобиля</p>
              <span>Профессиональные рекомендации по выбору автомобиля</span>
            </div>
            <div class="spectr_item">
              <div class="spectr_img">
                <img src="@/assets/img/spectr-2.png" alt="" />
              </div>
              <p>Доставка в Россию из Кореи</p>
              <span
                >Максимально быстрая доставка автомобиля в состоянии, заявленном
                в инспекционном листе</span
              >
            </div>
            <div class="spectr_item">
              <div class="spectr_img">
                <img src="@/assets/img/spectr-3.png" alt="" />
              </div>
              <p>Таможенное оформление</p>
              <span
                >Быстрое и четкое прохождение таможенных формальностей в полном
                соответствии с законом</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <div class="faq_main">
          <h5>Часто задаваемые вопросы</h5>
          <Accardion />
        </div>
      </div>
    </section>
    <Action />
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue";
import Selects from "~/components/Selects.vue";
import Inputs from "~/components/Inputs.vue";
import CardCar from "~/components/CardCar.vue";
import SortDropdown from "~/components/SortDropdown.vue";
import Pagination from "~/components/Pagination.vue";
import TimeSelect from "~/components/TimeSelect.vue";
import Accardion from "~/components/Accardion.vue";
import Action from "~/components/Action.vue";

const options = ["Опция 1", "Опция 2", "Опция 3", "Опция 4"];

const car = ref<any>({
  price: "5 750 000",
  title: "Toyota RAV4",
  year: "2017",
  img: "/img/car.png",
  link: "https://www.google.ru/",
  detail: "/",
  character: [
    { icon: "/img/engine.svg", name: "2,3 л/бензин" },
    { icon: "/img/wheel.svg", name: "317 л.с." },
  ],
});

const currentPage = ref(3);

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>

<style scoped lang="scss">
.hero_main {
  padding: 2.8rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

.hero_time__work {
  max-width: 8.8rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.hero__row {
  @include flex-start;
  gap: 1.9rem;
}

.hero_banner {
  border-radius: 2rem;
  overflow: hidden;
  @include flex-start;
  color: $white;
  padding: 5.9rem 6rem 8rem 6.6rem;
  position: relative;
  flex-grow: 1;

  h1 {
    font-size: 3rem;
    font-family: $font_6;
    text-transform: uppercase;
    margin-bottom: 1.3rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 160%;
  }
}

.hero_content {
  max-width: 46.9rem;
}

.hero_banner__car {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero_sale {
  background-color: $light;
  padding: 3.8rem 2.2rem;
  height: 30rem;
  max-width: 41.2rem;
  border-radius: 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  :deep(.button) {
    padding: 1.8rem 1.9rem;
  }

  h2 {
    color: $txt;
    font-family: $font_5;
    margin-bottom: 3rem;
  }
}

.hero_country__list {
  @include flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  li {
    width: 5rem;
    height: 5rem;
    @include flex-center;
  }
}

.filter_main {
  background-color: $white;
  padding: 2.5rem 4.8rem;
  border-radius: 2rem;

  h2 {
    margin-bottom: 2.5rem;
    font-family: $font_5;
    font-size: 2.8rem;
    color: $txt;
  }
}

.filter_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.filter_col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.filter_col__row {
  display: flex;
  gap: 1.5rem;
}

.filter-btn {
  display: inline-flex;
  :deep(.button) {
    padding: 1.8rem 10.5rem;
    font-size: 1.6rem;
  }
}

.cars {
  margin-bottom: 5rem;
}

.cars_head {
  padding-top: 7.5rem;
  @include flex-space;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 2.4rem;
  }
}

.cars_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
  grid-gap: 2rem;
  margin-bottom: 6.9rem;
}

.forms__w {
  @include flex-start;
  gap: 2.1rem;
}

.forms__main {
  background-color: $dark;
  color: $white;
  border-radius: 2rem;
  padding: 3rem 5.1rem 5.6rem 2rem;

  h3 {
    margin-bottom: 2.5rem;
    font-size: 3.2rem;
    font-family: $font_5;
  }

  &:deep(.input) {
    max-width: 31rem;
    margin-bottom: 2.9rem;
  }

  p {
    margin-bottom: 1rem;
  }
}
.forms_bottom {
  @include flex-start;
}
</style>
