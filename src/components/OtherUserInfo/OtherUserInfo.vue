<template>
  <AddContactInfo
      v-if="isPopupAddVisible"
      @closePopup="closePopupAdd "
  />
  <div class="other-info">
    <div class="other-info__content"
         v-if="other.length"
    >
      <div class="other-info__content-wrapper">
        <div class="other-info__box">
          <label>
            <input class="other-info__input other-info__attribute"
                   placeholder="Название"
                   id="contAttribute"
                   v-model="contAttribute"
            />
          </label>
          <label>
            <input class="other-info__input other-info__attribute-value"
                   placeholder="Значение"
                   id="contAttValue"
                   v-model="contAttValue"
            />
          </label>
        </div>
      </div>
    </div>
    <p class="other-info__null"
       v-else
    >
      Добавьте дополнительную информацию
    </p>
    <div class="other-info__add">
      <div class="other-info__add-button"
           @click="showPopupAdd"
      />
    </div>
  </div>
</template>

<script>
import AddContactInfo from "../Popup's/AddContactInfo";
export default {
  name: "OtherUserInfo",

  props: ['id'],

  computed: {
    other () {
      return this.$store.getters.others
    }
  },

  components: {
    AddContactInfo
  },

  data () {
    return {
      contAttribute: '',
      contAttValue: '',
      isPopupAddVisible: false
    }
  },

  mounted() {
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

<style lang="scss">
  .other-info {
    margin-top: 40px;

    .other-info__content-wrapper {

      .other-info__box {
        display: flex;

        .other-info__attribute {

        }

        .other-info__attribute-value {

        }
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

    .other-info__null {
      margin: 0 auto 20px;
      width: fit-content;
    }
  }
</style>
