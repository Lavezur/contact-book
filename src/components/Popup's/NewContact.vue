<template>
  <div class="popup">
    <div class="popup__container">
      <div class="popup__header">
        <span class="popup__header-title">
          Добавьте Контакт
        </span>
        <div class="popup__header-close"
             @click="closePopup"
        />
      </div>
      <form class="popup__form"
            method="post"
            novalidate
            name="popupForm"
            @submit.prevent="submitHandler"
      >
        <label class="popup__form-label">
          <input type="text"
                 class="popup__form-name popup__form-input"
                 placeholder="Имя"
                 id="contName"
                 v-model="contName"
          />
          <input type="text"
                 class="popup__form-workplace popup__form-input"
                 placeholder="Место работы"
                 id="contWorkplace"
                 v-model="contWorkplace"
          />
          <input type="tel"
                 class="popup__form-number popup__form-input"
                 placeholder="Контактный номер"
                 id="contPhone"
                 v-model="contPhone"
          />
          <input type="email"
                 class="popup__form-mail popup__form-input"
                 placeholder="Email"
                 id="contMail"
                 v-model="contMail"
          />
        </label>
        <button class="popup__form-submit"
                type="submit">
          <span class="popup__form-submit-text">
            Сохранить
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewContact',

  data () {
    return {
      contName: '',
      contWorkplace: '',
      contPhone: '',
      contMail: ''
    }
  },

  methods: {
    closePopup () {
      this.$emit('closePopup')
    },

    submitHandler () {
      const contact = {
        contName: this.contName,
        contWorkplace: this.contWorkplace,
        contPhone: this.contPhone,
        contMail: this.contMail,
        id: Date.now()
      }

      this.$store.dispatch('createContact', contact)
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
  .popup{
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    z-index: 5;
    background: rgba(0, 0, 0, 0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: visibility 0.5s linear, opacity 0.5s;

    .popup__container {
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

      .popup__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 90px;
        padding-bottom: 10px;

        .popup__header-title {
          text-transform: uppercase;
          font-size: 32px;
          line-height: 36px;
          color: #1D1F20;
          align-self: flex-end;
          margin-left: 40px;
        }
        .popup__header-close {
          background-image: url("../../assets/icons/close.svg");
          width: 24px;
          height: 24px;
          background-size: cover;
          cursor: pointer;
          margin: 25px 35px 0 0;
        }
      }

      .popup__form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        height: 380px;

        .popup__form-label {
          display: grid;
          row-gap: 30px;
          margin-top: 30px;

          .popup__form-input {
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

      .popup__form-submit {
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

        .popup__form-submit-text {
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
