<template>
  <AddContactInfo
      v-if="isPopupAddVisible"
      @closePopup="closePopupAdd "
  />
  <div class="other-info">
    <div class="other-info__content"
         v-if="others.length"
    >
      <div class="other-info__content-wrapper"
           v-for="(other) in others"
           :key="other.id"
      >
        <div class="other-info__box">
          <label>
            <input class="other-info__input other-info__attribute"
                   v-model="contAttribute"
            />
          </label>
          <label>
            <input class="other-info__input other-info__attribute-value"
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

  computed: {
    others () {
      return this.$store.getters.others
    },
    other () {
      return this.$store.getters.othersId(+this.$route.params.id)
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
  }
</style>
