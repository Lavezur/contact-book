<template>

  <div class="contact-info" v-if="contact">

    <div class="contact-info__wrapper">

      <router-link tag="button" :to="'/'" class="contact-info__back-button">
        <div class="contact-info__back-icon"></div>
        <span class="contact-info__back-text">Назад</span>
      </router-link>

      <form class="contact-info__form" method="post" novalidate name="contact-info-form" @submit.prevent="submitHandler">

        <div class="contact-info__header">
          <div class="contact-info__icon"></div>
          <label class="contact-info__form-label-name">
            <input type="text" class="contact-info__form-name contact-info__form-input" placeholder="Имя" id="contName" v-model="contName">
          </label>
        </div>

        <div class="contact-info__workplace">
          <p class="contact-info__workplace-title">Место работы</p>
          <label class="contact-info__form-label-workplace">
            <input type="text" class="contact-info__form-workplace contact-info__form-input" placeholder="Место работы" id="contWorkplace" v-model="contWorkplace">
          </label>
        </div>

        <div class="contact-info__phone">
          <div class="contact-info__phone-icon"></div>
          <label class="contact-info__form-label-phone">
            <input type="tel" class="contact-info__form-phone contact-info__form-input" placeholder="Контактный номер" id="contPhone" v-model="contPhone">
          </label>
        </div>

        <div class="contact-info__mail">
          <div class="contact-info__mail-icon"></div>
          <label class="contact-info__form-label-mail">
            <input type="email" class="contact-info__form-mail contact-info__form-input" placeholder="Email" id="contMail" v-model="contMail">
          </label>
        </div>

        <div class="btn__wrapper">
          <button class="btn" type="button" @click="deleteHandler">
            <span class="btn-text">Удалить</span>
          </button>

          <button class="btn btn-green" type="submit">
            <span class="btn-text btn-edit">Сохранить</span>
          </button>
        </div>

      </form>

    </div>

  </div>

  <p v-else class="contact-info__not-found">Контакт не найден :(</p>

</template>

<script>
export default {
  name: 'contactInfo',
  computed: {
    contact() {
      return this.$store.getters.contactsId(+this.$route.params.id)
    },
  },

  data: () => ({
    contName: '',
    contWorkplace: '',
    contPhone: '',
    contMail: ''
  }),

  mounted() {
    this.contName = this.contact.contName
    this.contWorkplace = this.contact.contWorkplace
    this.contPhone = this.contact.contPhone
    this.contMail = this.contact.contMail
  },

  methods: {
    submitHandler () {
      this.$store.dispatch('updateContact', {
        id: this.contact.id,
        contName: this.contName,
        contWorkplace: this.contWorkplace,
        contPhone: this.contWorkplace,
        contMail: this.contMail
      })
      this.$router.push('/')
    },

    deleteHandler () {
      this.$store.dispatch('deleteHandler', this.contact.id)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .contact-info {
    max-width: 1440px;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 720px;

    .contact-info__wrapper {
      max-width: 1023px;
      width: 100%;
      margin: 0 auto;
      padding-top: 68px;

      .contact-info__back-button {
        display: flex;
        flex-direction: row;
        max-width: fit-content;
        cursor: pointer;

        .contact-info__back-icon {
          background-image: url("../assets/backarrow.svg");
          width: 19px;
          height: 16px;
          background-size: cover;
          align-self: center;
        }

        .contact-info__back-text {
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          text-transform: capitalize;
          color: #454242;
          margin-left: 10px;
        }
      }

      .contact-info__form {
        display: flex;
        flex-direction: column;
        padding-top: 60px;

        .contact-info__header {
          display: flex;
          flex-direction: row;
          width: fit-content;

          .contact-info__icon {
            background-image: url("../assets/contactIcon.svg");
            width: 71.75px;
            height: 71.75px;
            background-size: cover;
          }

          .contact-info__form-label-name {
            display: flex;
            flex-direction: row;
            margin-left: 34px;

            .contact-info__form-name {
              align-self: center;
              font-weight: 600;
              font-size: 30px;
              line-height: 37px;
              text-transform: uppercase;
              color: #454242;
            }
          }
        }

        .contact-info__workplace {
          display: flex;
          flex-direction: row;
          margin: 45px 0 0;

          .contact-info__workplace-title {
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: #F1A761;
            margin: 0;
          }

          .contact-info__form-label-workplace {
            margin-left: 69px;
          }
        }

        .contact-info__phone {
          display: flex;
          flex-direction: row;
          margin: 65px 0 0;

          .contact-info__phone-icon {
            background-image: url("../assets/phone.svg");
            width: 29px;
            height: 29px;
            background-size: cover;
          }

          .contact-info__form-label-phone {
            margin-left: 40px;
            align-self: center;

            .contact-info__form-phone {
              font-weight: 600;
              font-size: 24px;
              line-height: 29px;
              text-transform: uppercase;
              color: #2B2927;
            }
          }
        }

        .contact-info__mail {
          display: flex;
          flex-direction: row;
          margin: 35px 0 0;

          .contact-info__mail-icon {
            background-image: url("../assets/mail.svg");
            width: 28px;
            height: 20px;
            background-size: cover;
          }

          .contact-info__form-label-mail {
            margin-left: 40px;
            align-self: center;

            .contact-info__form-mail {
              font-weight: normal;
              font-size: 18px;
              line-height: 22px;
              text-transform: uppercase;
              color: #2B2927;
            }
          }
        }

        .contact-info__form-input {
          border: none;
          outline: none;
          align-self: center;
        }
      }
    }
  }

  .contact-info__not-found {
    font-size: 36px;
    text-align: center;
    margin: 20% auto;
  }

  .btn__wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 120px;
    justify-content: flex-end;
    max-width: 495px;
    width: 100%;
    align-self: flex-end;


    .btn {
      background-color: #FF6D6D;
      text-align: center;
      max-width: 228px;
      width: 100%;
      min-width: 89px;
      height: 46px;
      align-self: center;
      cursor: pointer;
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      border: none;

      &.btn-green {
        background-color: #79e56d;
        margin-left: 40px;
      }

      .btn-text {
        width: 100%;
        color: #fff;
        text-align: center;
        padding: 13px 0 14px;
      }
    }
  }
</style>
