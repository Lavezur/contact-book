<template>
  <div class="popup-delete">

    <div class="popup-delete__container">

      <div class="popup-delete__header">
        <div class="popup-delete__header-close" @click="closePopup"></div>
        <span class="popup-delete__header-title">Удалить контакт ?</span>
      </div>
        <div class="popup-delete__delete" @click="deleteHandler"><span class="popup-delete__form-submit-text">Удалить</span></div>
      <div class="popup-delete__cancel" @click="closePopup"><span class="popup-delete__form-submit-text">Отменить</span></div>

    </div>

  </div>
</template>

<script>
export default {
name: "deletecontact",

  computed: {
    contact() {
      return this.$store.getters.contactsId(+this.$route.params.id)
    },
  },

  methods: {
    closePopup () {
      this.$emit('closePopup')
    },

    deleteHandler () {
      this.$store.dispatch('deleteHandler', this.contact.id)
      this.$router.push('/')
    }
  },
}

</script>

<style lang="scss">
.popup-delete {
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: 5;
  background: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: visibility 0.5s linear, opacity 0.5s;

  .popup-delete__container {
    max-width: 450px;
    width: 100%;
    height: 320px;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    box-sizing: border-box;
    border-radius: 10px;

    .popup-delete__delete {
      display: flex;
      cursor: pointer;
      width: 280px;
      height: 45px;
      background-color: #FF6D6D;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 0 auto 25px;
    }

    .popup-delete__cancel {
      display: flex;
      cursor: pointer;
      width: 280px;
      height: 45px;
      background-color: #868686;
      border-radius: 10px;
      box-sizing: border-box;
      margin: 0 auto;
    }

    .popup-delete__form-submit-text {
      height: fit-content;
      margin: 0 auto;
      align-self: center;
    }

    .popup-delete__header {
      display: grid;
      height: 90px;
      padding-bottom: 60px;
      grid-template-columns: 1fr;

      .popup-delete__header-title {
        text-transform: uppercase;
        font-size: 26px;
        line-height: 28px;
        color: #1D1F20;
        margin: 0 auto;
      }

      .popup-delete__header-close {
        background-image: url("../../assets/close.svg");
        width: 24px;
        height: 24px;
        background-size: cover;
        cursor: pointer;
        margin: 15px 25px 0 0;
        justify-self: end;
      }
    }
  }
}
</style>
