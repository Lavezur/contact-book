<template>
  <AddContactInfo
      v-if="isPopupAddVisible"
      @closePopup="closePopupAdd "
  />
  <div class="other-info">
    <div class="other-info__content"
         v-for="(item) of other"
         :key="item.id"
    >
      <form class="other-info__box">
        <label class="other-info__label other-info__label-attribute">
          <input class="other-info__input other-info__attribute"
                 type="text"
                 placeholder="Название"
                 id="contAttribute"
                 v-model="contAttribute"
          />
        </label>
        <label class="other-info__label other-info__label-attribute-value">
          <input class="other-info__input other-info__attribute-value"
                 type="text"
                 placeholder="Значение"
                 id="contAttValue"
                 v-model="contAttValue"
          />
        </label>
      </form>
    </div>
    <div class="other-info__add">
      <div class="other-info__add-button"
           @click="showPopupAdd"
      />
    </div>
  </div>
<!--  <p class="other-info__null"-->
<!--     v-else-->
<!--  >-->
<!--    Добавьте дополнительную информацию-->
<!--  </p>-->
</template>

<script>
import AddContactInfo from "../Popup's/AddContactInfo";
export default {
  name: "ContactOtherInfo",

  computed: {
    other () {
      return this.$store.getters.othersId(+this.$route.params.id)
    }
  },

  data: () => ({
    contAttribute: '',
    contAttValue: '',
    isPopupAddVisible: false
  }),

  components: {
    AddContactInfo
  },

  mounted () {
    this.contAttribute = this.other.contAttribute
    this.contAttValue = this.other.contAttValue
  },

  methods: {
    showPopupAdd () {
      this.isPopupAddVisible = true
    },
    closePopupAdd () {
      this.isPopupAddVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
  .other-info {
    max-width: 800px;
    width: 100%;
    margin: 40px auto 0;
    padding-bottom: 60px;

    .other-info__box {
      display: flex;
      margin-bottom: 30px;

      .other-info__label {

        .other-info__input {
          outline: none;
          border: none;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
          color: #F1A761;
          padding-left: 15px;
        }

        .other-info__attribute-value {
          color: #454242;
        }
      }

      .other-info__label-attribute {
        margin-right: 20px;
        max-width: 200px;
      }

      .other-info__label-attribute-value {
        width: 100%;
        border-bottom: 1px solid #F1A761;
        padding-bottom: 10px;
      }
    }

    .other-info__add {
      width: fit-content;
      margin: 0 auto;

      .other-info__add-button {
        background: url("../../assets/icons/add.svg") top left / cover no-repeat;
        width: 20px;
        height: 20px;
        margin: 0 auto;
        cursor: pointer;
      }
    }
  }

  .other-info__null {
    margin: 0 auto 20px;
    width: fit-content;
  }
</style>
