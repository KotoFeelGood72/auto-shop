<template>
  <div class="sheme-page">
    <section class="sheme">
      <div class="container">
        <div class="sheme_main">
          <h1>Схема работы</h1>
          <div class="sheme_grid">
            <div class="sheme_list__row">
              <div class="sheme_item">
                <div class="sheme_item__head">
                  <img src="/img/sheme-1.svg" alt="" />
                  <p>Шаг 1</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">Выбираем автомобиль</div>
                  <ul>
                    <li>Марка, модель</li>
                    <li>Год выпуска</li>
                    <li>Пробег</li>
                    <li>Желаемый бюджет</li>
                    <li>Комплектация</li>
                  </ul>
                </div>
              </div>
              <div class="sheme_item">
                <div class="sheme_item__head">
                  <img src="/img/sheme-2.svg" alt="" />
                  <p>Шаг 2</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">
                    Заключение договора, внесение первоначального взноса
                  </div>
                  <ul>
                    <li>
                      <b>150.000 ₽</b> при стоимости авто до <b>2.000.000 ₽</b>
                    </li>
                    <li>
                      <b>250.000 ₽</b> при стоимости авто от <b>2.000.000 ₽</b>
                    </li>
                    <li>
                      <b>350.000 ₽</b> при стоимости авто от <b>3.000.000 ₽</b>
                    </li>
                    <li>
                      <b>500.000 ₽</b> при стоимости авто от <b>5.000.000 ₽</b>
                    </li>
                    <li>
                      <span class="blue">10%</span> от стоимости авто, если
                      стоимость авто выше <b>7.000.000 ₽</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="sheme_item">
                <div class="sheme_item__head">
                  <img src="/img/sheme-3.svg" alt="" />
                  <p>Шаг 3</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">
                    Выезд наших специалистов на осмотр и диагностику авто:
                  </div>
                  <p>
                    В случае обнаружения дефектов при диагностике и осмотре, не
                    указанных продавцом, мы согласовываем другой автомобиль,
                    который соответствует заявленным требованиям покупателя, и
                    проводим осмотры до идеального результата
                  </p>
                </div>
              </div>
            </div>
            <div class="sheme_list__row">
              <div class="sheme_list__sub">
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-4.svg" alt="" />
                    <p>Шаг 4</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">Бронь авто:</div>
                    <p>
                      Если авто соответствует всем требованиям, мы бронируем его
                      и выставляем вам счет (инвойс), который необходимо
                      оплатить в течении трёх дней
                    </p>
                  </div>
                </div>
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-5.svg" alt="" />
                    <p>Шаг 5</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">Доставка:</div>
                    <p>
                      Авто доставляется на парковку в Южной Корее, где проходит
                      подготовку к отправке во Владивосток
                    </p>
                  </div>
                </div>
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-7.svg" alt="" />
                    <p>Шаг 7</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">Отправка в ваш регион:</div>
                    <p>
                      Когда автомобиль готов к отправке, мы подбираем надежную
                      транспортную компанию, которая доставит в пункт назначения
                    </p>
                  </div>
                </div>
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-8.svg" alt="" />
                    <p>Шаг 8</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">Получение авто:</div>
                    <p>Вы получаете авто и пакет документов у себя в городе</p>
                  </div>
                </div>
              </div>
              <div class="sheme_item last">
                <div class="sheme_item__head">
                  <img src="/img/sheme-6.svg" alt="" />
                  <p>Шаг 6</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">Оплата:</div>
                  <p>
                    По приходу авто во Владивосток, вы оплачиваете пошлину и
                    услуги таможенного оформления (в рублях)
                  </p>
                  <img class="sheme-bg" src="/img/sheme-car.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Action from "~/components/Action.vue";
</script>

<style scoped lang="scss">
.sheme_main {
  padding: 4.9rem 0 6rem 0;

  :deep(h1) {
    font-size: 3.2rem;
    margin-bottom: 2.5rem;
  }
}

.sheme_grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sheme_list__row {
  @include flex-start;
  gap: 2rem;
}

.sheme_list__row {
  &:nth-child(1) {
    .sheme_item {
      &:nth-child(2) {
        ul {
          li {
            &:last-child {
              font-size: 1.4rem;
            }
          }
        }
      }
      &:nth-child(3) {
        max-width: 41.2rem;
      }
    }
  }
  &:nth-child(2) {
    @include flex-start;
    .sheme_item {
      max-width: 30.3rem;
    }
  }
}

.sheme_item {
  background-color: $white;
  border-radius: 1rem;
  padding: 1.5rem 3rem;
  position: relative;

  &.last {
    min-height: 39.2rem;
  }
}

.sheme_item__head {
  @include flex-start;
  color: $blue;
  font-size: 1.6rem;
  font-family: $font_4;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.sheme_item__title {
  font-size: 2rem;
  font-family: $font_4;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;
}

.sheme_item__body {
  p {
    font-size: 1.6rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    li {
      font-size: 1.6rem;
    }
  }
}

.sheme_list__sub {
  @include flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  .sheme_item {
    height: 18.6rem;
    &:nth-child(1) {
      max-width: calc(55% - 1rem);
    }
    &:nth-child(2) {
      max-width: calc(45% - 1rem);
    }
    &:nth-child(3) {
      max-width: calc(65% - 1rem);
    }
    &:nth-child(4) {
      max-width: calc(35% - 1rem);
    }
  }
}

.sheme-bg {
  width: 21rem;
  height: 12rem;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
