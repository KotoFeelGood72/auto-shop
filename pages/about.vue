<template>
  <section class="about">
    <div class="container">
      <div class="about_main">
        <div class="about_content">
          <h1>Автомобили из Кореи под заказ</h1>
          <div class="about_content__txt">
            <p>
              Компания «Восток Транс Импорт» основана в 2008 году. Одним из
              основных видов деятельности является поставка автомобилей с
              внутренних рынков Южной Кореи с полным набором услуг, таких как
              поиск и покупка автомобиля в Корее, подготовка документов для
              отправки из Кореи, перевозка автомобиля на судне во Владивосток,
              таможенное оформление, выдача всех документов для постановки на
              учет в ГИБДД.
            </p>
            <p>
              За многолетний опыт работы мы выстроили систему, которая
              гарантирует покупку качественного автомобиля в Корее, быструю и
              надежную отправку из Кореи и быстрое прохождение таможенного
              контроля. Весь цикл с момента покупки до выдачи ПТС занимает 10-14
              дней. Далее отправляем автомобиль в ваш город, у нас есть
              довольные клиенты, которые воспользовались нашим сервисом,
              практически в каждом крупном городе России.
            </p>
            <p>
              Вся работа проводится дистанционно, поэтому нашим приоритетом
              является максимальное предоставление информации по состоянию
              автомобиля до его покупки. Мы выбираем для вас лучший вариант
              среди десятков предложений от разных дилеров, так как работаем по
              всей территории Кореи. Покупай в удовольствие вместе с нами!
            </p>
          </div>
        </div>
        <div class="about_img">
          <img src="/img/about.png" alt="" class="full" />
        </div>
      </div>
      <div class="about_services">
        <h2>Сотрудничество с ООО «Восток Транс Импорт»</h2>
        <p>означает надежное партнерство и гарантированную честную сделку</p>
        <ul class="about_services__list">
          <li>
            <div class="about_servicesItem__img">
              <img src="/img/about-services-1.png" alt="" class="full" />
            </div>
            <span>Защищенный договор</span>
          </li>
          <li>
            <div class="about_servicesItem__img">
              <img src="/img/about-services-2.png" alt="" class="full" />
            </div>
            <span>Отсутствие скрытых комиссий</span>
          </li>
          <li>
            <div class="about_servicesItem__img">
              <img src="/img/about-services-3.png" alt="" class="full" />
            </div>
            <span>Фото-отчёт на каждом этапе</span>
          </li>
          <li>
            <div class="about_servicesItem__img">
              <img src="/img/about-services-4.png" alt="" class="full" />
            </div>
            <span>Гарантии сделки</span>
          </li>
          <li>
            <div class="about_servicesItem__img">
              <img src="/img/about-services-5.png" alt="" class="full" />
            </div>
            <span>Система скидок</span>
          </li>
        </ul>
      </div>
      <div class="adv">
        <div class="adv__content">
          <h3>Подробнее о нашей работе</h3>
          <div class="adv__txt">
            <p>
              На первом этапе сотрудничества с компанией «Восток Транс Импорт»
              заключается договор, в котором указываются все права и обязанности
              сторон, сроки поставки техники, условия и размер оплаты, основные
              номера (модель, марка, цвет, комплектация, VIN номер и т.п.)
            </p>
            <p>
              Отсутствие скрытых комиссий и прозрачность расчетов создают
              выгодные условия на заказ автомобилей из Южной Кореи. Кроме того,
              вся сделка будет сопровождаться полным фотоотчётом, сделанным на
              каждом этапе перевозки автомобиля.
            </p>
          </div>
        </div>
        <div class="adv__img">
          <img src="/img/adv.png" alt="" class="full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
  position: relative;
  padding: 6rem 0;
}
.about_main {
  @include flex-start;
  padding-bottom: 6rem;
}

.about_content__txt {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 1.8rem;
}

.about_content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 74.7rem;
}

.about_img {
  max-width: 55.4rem;
  position: absolute;
  right: 0;
  top: 12rem;
}

.about_services {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  :deep(h2) {
    font-size: 2.6rem;
  }

  & > p {
    font-size: 1.8rem;
    margin-bottom: 4rem;
  }
}

.about_services__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17%, 1fr));
  grid-gap: 2rem;
  margin-bottom: 6rem;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    font-size: 1.8rem;
    font-family: $font_3;
    color: $dark;
  }
}

.about_servicesItem__img {
  width: 12rem;
  height: 12rem;
  @include flex-center;
}

.adv {
  @include flex-start;
  align-items: flex-start;
  gap: 12.8rem;
}

.adv__content {
  :deep(h3) {
    font-size: 2.6rem;
    margin-bottom: 2.5rem;
  }
}

.adv__txt {
  max-width: 62.7rem;
  p {
    font-size: 1.8rem;
    &:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }
}

.adv__img {
  max-width: 30.8rem;
}
</style>
