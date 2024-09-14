<template>
  <div class="sheme-page">
    <section class="sheme">
      <div class="container">
        <div class="sheme_main">
          <h1>Схема работы</h1>
          <ul class="sheme_grid">
            <li class="sheme_item">
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
            </li>
            <li class="sheme_item">
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
            </li>
            <li class="sheme_item">
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
            </li>
            <li class="sheme_item">
              <div class="sheme_item__head">
                <img src="/img/sheme-4.svg" alt="" />
                <p>Шаг 4</p>
              </div>
              <div class="sheme_item__body">
                <div class="sheme_item__title">Бронь авто:</div>
                <p>
                  Если авто соответствует всем требованиям, мы бронируем его и
                  выставляем вам счет (инвойс), который необходимо оплатить в
                  течении трёх дней
                </p>
              </div>
            </li>
            <li class="sheme_item">
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
            </li>
            <li class="sheme_item">
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
            </li>
            <li class="sheme_item">
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
            </li>
            <li class="sheme_item">
              <div class="sheme_item__head">
                <img src="/img/sheme-8.svg" alt="" />
                <p>Шаг 8</p>
              </div>
              <div class="sheme_item__body">
                <div class="sheme_item__title">Получение авто:</div>
                <p>Вы получаете авто и пакет документов у себя в городе</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Action />
  </div>
</template>

<script setup lang="ts">
import Action from "~/components/Action.vue";
</script>

<style scoped lang="scss"></style>
