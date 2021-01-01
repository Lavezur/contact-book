<template>
  <DeleteContact
      v-if="isPopupDeleteVisible"
      @closePopup="closePopupDelete"
  />
  <div class="contact-info__wrapper">
    <form class="contact-info__form"
          method="post"
          novalidate
          name="contact-info-form"
          @submit.prevent="submitHandler"
    >
      <div class="contact-info__main">
        <div class="contact-info__header">
          <div class="contact-info__icon" />
          <label class="contact-info__form-label contact-info__form-label-name">
            <input type="text"
                   class="contact-info__form-name contact-info__form-input"
                   placeholder="Имя"
                   id="contName"
                   v-model="contName"
            />
          </label>
        </div>
        <div class="contact-info__workplace">
          <p class="contact-info__workplace-title">
            Место работы
          </p>
          <label class="contact-info__form-label contact-info__form-label-workplace">
            <input type="text"
                   class="contact-info__form-workplace contact-info__form-input"
                   placeholder="Место работы"
                   id="contWorkplace"
                   v-model="contWorkplace"

            />
          </label>
        </div>
        <div class="contact-info__phone">
          <div class="contact-info__phone-icon" />
          <label class="contact-info__form-label contact-info__form-label-phone">
            <input type="tel"
                   class="contact-info__form-phone contact-info__form-input"
                   placeholder="Контактный номер"
                   id="contPhone"
                   v-model="contPhone"
            />
          </label>
        </div>
        <div class="contact-info__mail">
          <div class="contact-info__mail-icon" />
          <label class="contact-info__form-label contact-info__form-label-mail">
            <input type="email"
                   class="contact-info__form-mail contact-info__form-input"
                   placeholder="Email"
                   id="contMail"
                   v-model="contMail"
            />
          </label>
        </div>
      </div>
      <div class="btn__wrapper">
        <button class="btn" type="button"
                @click="showPopupDelete"
        >
            <span class="btn-text">
              Удалить
            </span>
        </button>
        <button class="btn btn-green"
                type="submit"
        >
            <span class="btn-text btn-edit">
              Сохранить
            </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import DeleteContact from "../Popup\'s/DeleteContact";
export default {
  name: "ContactMainInfo",

  computed: {
    contact () {
      return this.$store.getters.contactsId(+this.$route.params.id)
    }
  },

  data: () => ({
    contName: '',
    contWorkplace: '',
    contPhone: '',
    contMail: '',
    isPopupDeleteVisible: false,
  }),

  components: {
    DeleteContact
  },

  mounted () {
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
    showPopupDelete () {
      this.isPopupDeleteVisible = true
    },
    closePopupDelete () {
      this.isPopupDeleteVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
.contact-info__wrapper {
  max-width: 1023px;
  margin: 0 auto;

  .contact-info__form {
    padding-top: 60px;
    display: flex;
    flex-direction: column;

    .contact-info__main {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;

      .contact-info__header {
        display: flex;
        flex-direction: row;

        .contact-info__icon {
          background-image: url("../../assets/icons/contactIcon.svg");
          min-width: 71.75px;
          height: 71.75px;
          background-size: cover;
        }

        .contact-info__form-label-name {
          display: flex;
          flex-direction: row;
          margin-left: 34px;

          .contact-info__form-name {
            align-self: center;
            font-size: 30px;
            line-height: 37px;
            text-transform: uppercase;
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
          min-width: fit-content;
        }

        .contact-info__form-label-workplace {
          margin-left: 69px;

          .contact-info__form-workplace {
            font-weight: normal;
          }
        }
      }

      .contact-info__phone {
        display: flex;
        flex-direction: row;
        margin: 55px 0 0;

        .contact-info__phone-icon {
          background-image: url("../../assets/icons/phone.svg");
          min-width: 29px;
          height: 29px;
          background-size: cover;
          cursor: pointer;
        }

        .contact-info__form-label-phone {
          margin-left: 40px;
          align-self: center;

          .contact-info__form-phone {
            font-size: 24px;
            line-height: 29px;
            text-transform: uppercase;
          }
        }
      }

      .contact-info__mail {
        display: flex;
        flex-direction: row;
        margin: 35px 0 0;

        .contact-info__mail-icon {
          background-image: url("../../assets/icons/mail.svg");
          min-width: 28px;
          height: 20px;
          background-size: cover;
        }

        .contact-info__form-label-mail {
          margin-left: 40px;
          align-self: center;

          .contact-info__form-mail {
            font-size: 18px;
            line-height: 22px;
            text-transform: uppercase;
            font-weight: normal;
          }
        }
      }

      .contact-info__form-label {
        display: flex;
        width: 100%;
      }

      .contact-info__form-input {
        border: none;
        outline: none;
        align-self: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #F1A761;
        width: 100%;
        font-weight: 600;
        color: #454242
      }
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
  }
}
</style>