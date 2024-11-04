<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero_main">
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
    <section>
    <div class="container">
    
   <Filters/>
    </div>
    </section>
    <section class="cars" ref="scrollTarget" id="scrollTarget">
      <div class="container">
        <div class="cars_head">
          <h2>Найдено: 24 346 автомобилей</h2>
          <div class="cars_head__row">
            <FilterTrigger class="home_filter_trigger" />
            <div class="cars_sort">
              <SortDropdown />
            </div>
          </div>
        </div>
        <ul class="cars_grid">
          <li v-for="(item, i) in cars" :key="'cars-item-' + i">
            <CardCar :data="item" />
          </li>
        </ul>
        <Pagination
          :totalPages="34"
          :currentPage="currentPage"
          :pageSize="16"
          @updatePage="changePage"
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
                  <img src="@/assets/img/form-tg.svg" alt="" class="full" />
                </a>
                <a href="/" target="_blank">
                  <img src="@/assets/img/form-wt.svg" alt="" class="full" />
                </a>
                <a href="/" target="_blank">
                  <img src="@/assets/img/form-vr.svg" alt="" class="full" />
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
                <img src="@/assets/img/spectr-1.png" class="full" alt="" />
              </div>
              <p>Поиск и подбор автомобиля</p>
              <span>Профессиональные рекомендации по выбору автомобиля</span>
            </div>
            <div class="spectr_item">
              <div class="spectr_img">
                <img src="@/assets/img/spectr-2.png" class="full" alt="" />
              </div>
              <p>Доставка в Россию из Кореи</p>
              <span
                >Максимально быстрая доставка автомобиля в состоянии, заявленном
                в инспекционном листе</span
              >
            </div>
            <div class="spectr_item">
              <div class="spectr_img">
                <img src="@/assets/img/spectr-3.png" class="full" alt="" />
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
    <!-- <Action /> -->
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
import FilterTrigger from "~/components/FilterTrigger.vue";
import Filters from "~/components/Filters.vue";
import { useCarsStore, useCarsStoreRefs } from "~/store/useCarStore";

const {cars, currentPage} = useCarsStoreRefs()
const {changePage} = useCarsStore()
</script>

<style scoped lang="scss">
.hero_main {
  padding: 2.8rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}

.hero__row {
  @include flex-start;
  gap: 1.9rem;

  @include bp($point_2) {
    flex-direction: column;
  }
}

.hero_banner {
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  @include flex-start;
  color: $white;
  padding: 5.9rem 6rem 8rem 6.6rem;
  flex-grow: 1;
  background-color: $dark;

  @include bp($point_2) {
    padding: 5rem 3rem;
  }

  h1 {
    font-size: 3rem;
    font-family: $font_6;
    text-transform: uppercase;
    margin-bottom: 1.3rem;
    @include bp($point_2) {
      font-size: 2.4rem;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 160%;
  }
}

.hero_content {
  max-width: 46.9rem;
  position: relative;
  z-index: 2;
  @include bp($point_2) {
    max-width: 100%;
  }
}

.hero_banner__car {
  position: absolute;
  top: 0;
  left: 2rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
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
    @include bp($point_2) {
      width: 100%;
      padding: 1.5rem 1.2rem;
      font-size: 1.3rem;
    }
  }

  h2 {
    color: $txt;
    font-family: $font_5;
    margin-bottom: 3rem;
    font-size: 2.4rem;
    @include bp($point_2) {
      font-size: 2rem;
    }
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

.forms__w {
  @include flex-start;
  gap: 2.1rem;
  margin-bottom: 5rem;

  @include bp($point_2) {
    flex-direction: column;
  }
}

.forms__main {
  background-color: $dark;
  color: $white;
  border-radius: 2rem;
  padding: 3.5rem 5.1rem 3.5rem 5.1rem;
  flex-grow: 1;

  @include bp($point_2) {
    // border-radius: 0;
    padding: 4rem 2rem;
  }

  h3 {
    margin-bottom: 2.5rem;
    font-size: 3.2rem;
    font-family: $font_5;
  }

  &:deep(.input) {
    max-width: 31rem;
    margin-bottom: 2.9rem;

    @include bp($point_2) {
      max-width: 100%;
    }
  }

  p {
    margin-bottom: 1rem;
    @include bp($point_2) {
      font-size: 1.6rem;
    }
  }
}
.forms_bottom {
  @include flex-start;
  margin-bottom: 2rem;
  gap: 3rem;
  @include bp($point_2) {
    flex-direction: column;
    align-items: flex-start;
  }
  :deep(.button) {
    padding: 1.4rem 10.8rem;
    font-size: 1.6rem;
    @include bp($point_2) {
      width: 100%;
    }
  }
}

.forms_social {
  @include flex-start;
  gap: 1.8rem;
  a {
    width: 4.9rem;
    height: 4.9rem;
    @include flex-center;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
}

.services {
  background-color: $light;
  max-width: 51.8rem;
  border-radius: 2rem;
  padding: 3rem 3.2rem;
  max-height: 50rem;

  h3 {
    font-size: 3.2rem;
    font-family: $font_5;
    color: $dark;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    li {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      p {
        color: $blue;
        font-family: $font_5;
        font-size: 1.8rem;
      }
      span {
        font-size: 1.6rem;
      }
    }
  }
}

.forms_notice {
  @include flex-start;
  gap: 0.5rem;
  @include bp($point_2) {
    gap: 1rem;
  }
  .forms_notice__icon {
    width: 1.8rem;
    height: 1.8rem;
    @include flex-center;
  }
  span {
    font-size: 1.3rem;
    @include bp($point_2) {
      font-size: 1rem;
    }
  }
}

.spectr_head {
  margin-bottom: 3.5rem;
  h4 {
    font-size: 3.2rem;
    font-family: $font_5;
    margin-bottom: 1rem;

    @include bp($point_2) {
      font-size: 2.4rem;
    }
  }
  p {
    font-size: 2.4rem;
    @include bp($point_2) {
      font-size: 1.8rem;
    }
  }
}

.spectr_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 2.5rem;

  @include bp($point_2) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
}

.spectr_main {
  margin-bottom: 6rem;
}

.spectr_item {
  background-color: $light;
  border-radius: 2rem;
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  text-align: center;
  min-height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @include bp($point_2) {
    min-height: auto;
  }
  p {
    font-size: 2rem;
    font-family: $font_4;
    margin-bottom: 1rem;
    @include bp($point_2) {
      font-size: 1.6rem;
    }
  }
  span {
    font-size: 1.6rem;
    display: block;
    line-height: 1.8rem;
    @include bp($point_2) {
      font-size: 1.4rem;
    }
  }

  &:nth-child(1) {
    .spectr_img {
      max-width: 18.9rem;
    }
  }
  &:nth-child(2) {
    .spectr_img {
      max-width: 25.6rem;
    }
  }
  &:nth-child(3) {
    .spectr_img {
      max-width: 13.9rem;
    }
  }
}

.spectr_img {
  @include flex-center;
  margin: 0 auto 1.6rem auto;
  height: 11.9rem;

  @include bp($point_2) {
    max-width: 10rem !important;
    height: 7rem;
  }
  img {
    @include bp($point_2) {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.faq_main {
  margin-bottom: 5rem;
  h5 {
    margin-bottom: 2.5rem;
    @include bp($point_2) {
      font-size: 2.4rem;
    }
  }
}

.filter {
  @include bp($point_2) {
    display: none;
  }
}

.cars_head {
  @include bp($point_2) {
    align-items: flex-start;
  }
  h2 {
    @include bp($point_2) {
      text-align: left;
      font-size: 2rem;
      // margin-bottom: 2rem;
    }
  }
}

.home_filter_trigger {
  @include bp($point_2, $direction: min) {
    display: none;
  }
}

.cars_head__row {
  @include flex-space;
  @include bp($point_2) {
    width: 100%;
  }
}
</style>
