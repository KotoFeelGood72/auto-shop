<template>
  <div class="shield-page">
    <div class="shield">
      <div class="container">
        <div class="shield__head">
          <h1>Наши гарантии</h1>
          <div class="shield_head__subtitle">
            <span>15</span> лет успешной работы
          </div>
        </div>
        <div class="shield__body">
          <div class="shield_body__item">
            <ul class="shield_body__contents">
              <li>
                <p>Финансовая прозрачность сделки</p>
                <span
                  >Все условия покупки авто и ответственность сторон
                  закрепляются в договоре. Оплата производится за конкретный
                  автомобиль, выбранный в Корее. В квитанции прописывается
                  марка, модель и VIN номер приобретенного авто.</span
                >
              </li>
              <li>
                <p>Безопасное хранение в порту владивостока</p>
                <span
                  >Во время таможенной процедуры автомобиль находится на складе
                  временного хранения под круглосуточной охраной. При выгрузке в
                  порту производится детальная фото-опись, служащая
                  доказательством в случае любых споров.</span
                >
              </li>
            </ul>
            <div class="shield_body_img">
              <img src="/img/shield-item-1.png" alt="" />
            </div>
          </div>
          <div class="shield_body__item">
            <ul class="shield_body__contents">
              <li>
                <p>Надежная доставка авто из кореи</p>
                <span
                  >По территории Кореи автомобили транспортируются на автовозах.
                  По прибытию в порт покупатель получает детальный фотоотчет. По
                  морю машины перевозятся на специализированных судах типа
                  Ro-Ro, которые имеют горизонтальную аппарель и позволяют
                  отказаться от использования кранов. Груз полностью
                  застрахован.</span
                >
              </li>
              <li>
                <p>Технические гарантии</p>
                <span
                  >Все автомобили, которые поступают на продажу в Корее,
                  проходят комплексную проверку экспертом. Также к машине
                  прилагается технический паспорт с отметками о прохождении ТО и
                  истории пробега. На основе всего этого можно сделать вывод и
                  принять правильное решение.</span
                >
              </li>
            </ul>
            <div class="shield_body_img">
              <img src="/img/shield-item-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.shield {
  padding: 6rem 0;
}
.shield__head {
  margin-bottom: 4rem;
  @include flex-start;
  gap: 2.5rem;
  @include bp($point_2) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

.shield_head__subtitle {
  font-size: 2.6rem;
  font-family: $font_4;
  @include bp($point_2) {
    font-size: 2.2rem;
  }
  span {
    color: $blue;
  }
}

.shield__body {
  &:nth-child(1) {
    margin-bottom: 4rem;
  }
}

.shield_body__item {
  @include flex-start;
  position: relative;
  min-height: 45rem;
  gap: 2rem;
  @include bp($point_2) {
    flex-direction: column;
  }
  &:nth-child(2) {
    .shield_body_img {
      order: 0;
      margin-right: 0;
      margin-left: -7.8%;
      max-width: 60.2rem;
      @include bp($point_2) {
        margin-left: -5rem;
        margin-right: -5rem;
        order: 1;
      }
    }
    .shield_body__contents {
      order: 1;
    }
  }
}

.shield_body__contents {
  max-width: 74.3rem;

  li {
    padding-bottom: 1.5rem;
    border-bottom: 0.1rem solid #b4b4b4;
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  p {
    font-size: 2.2rem;
    font-family: $font_4;
    margin-bottom: 1rem;
  }
}

.shield_body_img {
  max-width: 63.3rem;
  margin-right: -100%;
  @include bp($point_2) {
    margin-right: -5rem;
    margin-left: -5rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
