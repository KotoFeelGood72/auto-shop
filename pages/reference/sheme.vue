<template>
  <div class="sheme-page" v-if="page">
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
                  <div class="sheme_item__title">{{ page.stepOne.title }}</div>
                  <div
                    class="sheme_item__list"
                    v-html="page.stepOne.description"
                  ></div>
                </div>
              </div>
              <div class="sheme_item">
                <div class="sheme_item__head">
                  <img src="/img/sheme-2.svg" alt="" />
                  <p>Шаг 2</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">
                    {{ page.stepTwo.title }}
                  </div>
                  <div
                    class="sheme_item__list"
                    v-html="page.stepTwo.description"
                  ></div>
                </div>
              </div>
              <div class="sheme_item">
                <div class="sheme_item__head">
                  <img src="/img/sheme-3.svg" alt="" />
                  <p>Шаг 3</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">
                    {{ page.stepThree.title }}
                  </div>
                  <div
                    class="sheme_item__body__desc"
                    v-html="page.stepThree.description"
                  ></div>
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
                    <div class="sheme_item__title">
                      {{ page.stepFour.title }}
                    </div>
                    <div
                      class="sheme_item__body__desc"
                      v-html="page.stepFour.description"
                    ></div>
                  </div>
                </div>
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-5.svg" alt="" />
                    <p>Шаг 5</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">
                      {{ page.stepFive.title }}
                    </div>
                    <div
                      class="sheme_item__body__desc"
                      v-html="page.stepFive.description"
                    ></div>
                  </div>
                </div>
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-7.svg" alt="" />
                    <p>Шаг 7</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">
                      {{ page.stepSeven.title }}
                    </div>
                    <div
                      class="sheme_item__body__desc"
                      v-html="page.stepSeven.description"
                    ></div>
                  </div>
                </div>
                <div class="sheme_item">
                  <div class="sheme_item__head">
                    <img src="/img/sheme-8.svg" alt="" />
                    <p>Шаг 8</p>
                  </div>
                  <div class="sheme_item__body">
                    <div class="sheme_item__title">
                      {{ page.stepEight.title }}
                    </div>
                    <div
                      class="sheme_item__body__desc"
                      v-html="page.stepEight.description"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="sheme_item last">
                <div class="sheme_item__head">
                  <img src="/img/sheme-6.svg" alt="" />
                  <p>Шаг 6</p>
                </div>
                <div class="sheme_item__body">
                  <div class="sheme_item__title">{{ page.stepSix.title }}</div>
                  <div
                    class="sheme_item__body__desc"
                    v-html="page.stepSix.description"
                  ></div>
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

const page = ref<any>(null);

const getSheme = async () => {
  const { $main } = useNuxtApp();

  try {
    const response = await $main.get("/schem_of_work");
    page.value = response.data;
  } catch (error) {}
};

onMounted(() => {
  getSheme();
});
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
  @include bp($point_2) {
    flex-direction: column;
  }
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
      @include bp($point_2) {
        max-width: 100%;
      }
    }
  }
}

:deep(.blue) {
  color: $blue;
}

.sheme_item {
  background-color: $white;
  border-radius: 1rem;
  padding: 1.5rem 3rem;
  position: relative;

  @include bp($point_2) {
    width: 100%;
  }

  &.last {
    min-height: 39.2rem;
    @include bp($point_2) {
      min-height: 32.2rem;
    }
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
  :deep(p) {
    font-size: 1.4rem;
  }
  :deep(ul) {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    @include bp($point_2) {
      gap: 0.5rem;
    }
    li {
      font-size: 1.4rem;
    }
  }
}

.sheme_list__sub {
  @include flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  @include bp($point_2) {
    flex-direction: column;
  }

  .sheme_item {
    height: 18.6rem;
    @include bp($point_2) {
      height: auto;
    }
    &:nth-child(1) {
      max-width: calc(55% - 1rem);
      @include bp($point_2) {
        max-width: 100%;
      }
    }
    &:nth-child(2) {
      max-width: calc(45% - 1rem);
      @include bp($point_2) {
        max-width: 100%;
      }
    }
    &:nth-child(3) {
      max-width: calc(65% - 1rem);
      @include bp($point_2) {
        max-width: 100%;
      }
    }
    &:nth-child(4) {
      max-width: calc(35% - 1rem);
      @include bp($point_2) {
        max-width: 100%;
      }
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
