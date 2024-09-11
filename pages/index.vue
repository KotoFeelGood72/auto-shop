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
                <img src="@/assets/img/hero-car.png" alt="" />
              </div>
            </div>
            <div class="hero_sale">
              <ul class="hero_country__list">
                <li>
                  <img src="@/assets/img/korea.png" alt="" />
                </li>
                <li>
                  <img src="@/assets/img/china.png" alt="" />
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
          <Button name="Показать результат" />
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
            <Inuts place="Телефон или E-mail" />
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

const options = ["Опция 1", "Опция 2", "Опция 3", "Опция 4"];

const car = ref<any>({
  price: "5 750 000",
  title: "Toyota RAV4",
  year: "2017",
  img: "/img/car.png",
  link: "/",
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

<style scoped lang="scss"></style>
