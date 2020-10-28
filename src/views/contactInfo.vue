<template>

  <div class="contact-info" v-if="contact">

    <div class="contact-info__wrapper">

      <router-link tag="button" :to="'/'" class="contact-info__back-button">
        <div class="contact-info__back-icon"></div>
        <span class="contact-info__back-text">Назад</span>
      </router-link>

      <form class="contact-info__form" method="post" novalidate name="contact-info-form">

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
            <input type="url" class="contact-info__form-mail contact-info__form-input" placeholder="Email" id="contMail" v-model="contMail">
          </label>
        </div>

        <!--<button class="contact-info__form-delete" type="submit"><span class="contact-info__form-delete-text">Сохранить</span></button>-->

        <div class="btn">
          <div class="btn-back">
            <p>Вы уверены что хотите удалить контакт ?</p>
            <button class="yes">Да</button>
            <button class="no">Нет</button>
          </div>
          <div class="btn-front">Удалить</div>
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

    data: () => ({
      contName: '',
      contWorkplace: '',
      contPhone: '',
      contMail: ''
    }),

    mounted() {
      this.contName = this.contact.contName
    },

    methods: {
      closePopup () {
        this.$emit('closePopup')
      },
      submitHandler () {
        this.$store.dispatch('createContact', contact)
      }
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
    min-height: 750px;

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

  $transition-duration: 0.8s;
  $transition-easing: cubic-bezier(0.230, 1.000, 0.320, 1.000);
  $bounce-easing: cubic-bezier(0.175, 0.885, 0.320, 1.275);
  $closed-width: 200px;
  $closed-height: 80px;
  $opened-width: 400px;
  $opened-height: 160px;

  .description {
    margin-top: 50px;
    text-align: center;
    color: #999;
    transition: opacity 0.3s ease;
  }

  .description a {
    color: #4A9DF6;
    text-decoration: none;
  }

  .btn.is-open ~ .description {
    opacity: 0;
  }

  .btn {
    display: block;
    position: relative;
    width: $closed-width;
    height: $closed-height;
    transition: width $transition-duration $transition-easing,
    height $transition-duration $transition-easing,
    transform $transition-duration $bounce-easing;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    text-align: center;
    align-self: center;
    margin-top: 100px;
  }

  .btn-front {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    line-height: $closed-height;
    color: #fff;
    cursor: pointer;
    backface-visibility: hidden;
    -webkit-tap-highlight-color: rgba( 0, 0, 0, 0 );
    transition: background 0.15s ease,
    line-height $transition-duration $transition-easing;
    background: #FF6D6D;
    border: 1px solid #EF9A4B;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .btn-front:hover {
    background-color: lighten(#F44336, 10%);
  }
  .btn.is-open .btn-front {
    pointer-events: none;
    line-height: $opened-height;
  }

  .btn-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #eee;
    color: #222;
    transform: translateZ(-2px) rotateX(180deg);
    overflow: hidden;
    transition: box-shadow $transition-duration ease;
  }
  .btn-back p {
    margin-top: 27px;
    margin-bottom: 25px;
  }
  .btn-back button {
    padding: 12px 20px;
    width: 30%;
    margin: 0 5px;
    background-color: transparent;
    border: 0;
    border-radius: 2px;
    font-size: 1em;
    cursor: pointer;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba( 0, 0, 0, 0 );
    transition: background 0.15s ease;

    &:focus {
      outline: 0;
    }

    &.yes {
      background-color: #2196F3;
      color: #fff;

      &:hover {
        background-color: lighten(#2196F3, 10%);
      }
    }

    &.no {
      color: #2196F3;

      &:hover {
        background-color: #ddd;
      }
    }
  }

  .btn.is-open .btn-back {
    box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  }

  .btn[data-direction="left"] .btn-back,
  .btn[data-direction="right"] .btn-back {
    transform: translateZ(-2px) rotateY(180deg);
  }

  .btn.is-open {
    width: $opened-width;
    height: $opened-height;
  }

  .btn[data-direction="top"].is-open {
    transform: rotateX(180deg);
  }

  .btn[data-direction="right"].is-open {
    transform: rotateY(180deg);
  }

  .btn[data-direction="bottom"].is-open {
    transform: rotateX(-180deg);
  }

  .btn[data-direction="left"].is-open {
    transform: rotateY(-180deg);
  }
</style>
