<template>
  <nav class="navigation">
    <div class="navigation__text-content">
      <h1 class="navigation__title">
        Книга Контактов
      </h1>
      <span class="navigation__text">
        Приятно + полезно
      </span>
    </div>
    <div class="navigation__logo" />
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss">
  .navigation {
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    max-width: 1440px;
    width: 100%;
    height: 130px;
    margin: 0 auto;
    background-color: #1D1F20;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 0 0 10px 10px;
    justify-content: space-between;
    z-index: 1;

    .navigation__text-content {
      display: flex;
      flex-direction: column;
      margin: 35px 0 0 78px;

      .navigation__title {
        font-weight: bold;
        font-size: 34px;
        line-height: 38px;
        letter-spacing: 0.1em;
        font-variant: small-caps;
        text-transform: uppercase;
        margin: 0;
        user-select: none;
      }

      .navigation__text {
        margin-left: 12px;
        font-size: 12px;
        line-height: 18px;
        user-select: none;
      }
    }

    .navigation__logo {
      width: 72px;
      height: 72px;
      background-image: url("../../assets/icons/computer.svg");
      background-size: cover;
      margin: 25px 70px 0 0;
    }
  }
</style>
