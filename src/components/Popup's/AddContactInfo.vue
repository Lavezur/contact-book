<template>
  <div class="popup-add">
    <div class="popup-add__container">
      <div class="popup-add__header">
        <span class="popup-add__header-title">
          Добавьте информацию контакта
        </span>
        <div class="popup-add__header-close"
             @click="closePopup"
        />
      </div>
      <form class="popup-add__form"
            method="post"
            novalidate
            name="popup-add-Form"
            @submit.prevent="submitHandler"
      >
        <label class="popup-add__form-label">
          <input type="text"
                 class="popup-add__form-input"
                 placeholder="Название"
                 id="contAttribute"
                 v-model="contAttribute"
          />
          <input type="text"
                 class="popup-add__form-input"
                 placeholder="Значение"
                 id="contAttValue"
                 v-model="contAttValue"
          />
        </label>
        <button class="popup-add__form-submit"
                type="submit"
        >
          <span class="popup-add__form-submit-text">
            Сохранить
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddContactInfo",

  data () {
    return {
      contAttribute: '',
      contAttValue: ''
    }
  },

  methods: {
    closePopup () {
      this.$emit('closePopup')
    },

    submitHandler () {
      const other = {
        contAttribute: this.contAttribute,
        contAttValue: this.contAttValue,
        id: Date.now()
      }
      this.$store.dispatch('createOther', other)
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.popup-add {
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: visibility 0.5s linear, opacity 0.5s;

  .popup-add__container {
    max-width: 650px;
    width: 100%;
    height: 520px;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    box-sizing: border-box;
    border-radius: 10px;

    .popup-add__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 30%;
      padding-bottom: 10px;

      .popup-add__header-title {
        text-transform: uppercase;
        font-size: 32px;
        line-height: 36px;
        color: #1D1F20;
        align-self: flex-end;
        margin-left: 40px;
        text-align: center;
      }
      .popup-add__header-close {
        background: url("../../assets/icons/close.svg") top left / cover no-repeat;
        min-width: 24px;
        height: 24px;
        cursor: pointer;
        margin: 25px 35px 0 0;
      }
    }

    .popup-add__form {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      width: 100%;
      margin: 0 auto;

      .popup-add__form-label {
        display: grid;
        row-gap: 30px;
        margin-top: 50px;

        .popup-add__form-input {
          border: none;
          padding-bottom: 10px;
          outline: none;
          display: block;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          width: 100%;
          font-size: 18px;
        }
      }
    }

    .popup-add__form-submit {
      text-transform: uppercase;
      background: none;
      border: 2px solid #ffa260;
      max-width: 268px;
      width: 100%;
      height: 52px;
      border-radius: 5px;
      outline: none;
      margin: 55px auto 0;
      cursor: pointer;
      :active, :focus {
        outline: none;
      }

      .popup-add__form-submit-text {
        color: #1D1F20;
        margin: 0;
        text-align: center;
        padding: 17px 0;
        font-size: 16px;
        line-height: 18px;
        user-select: none;
      }
    }
  }
}
</style>
