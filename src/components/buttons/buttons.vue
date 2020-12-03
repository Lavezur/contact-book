<template>

  <popupDelete
      v-if="isPopupDeleteVisible"
      @closePopup="closePopupDelete"
  />

  <div class="btn__wrapper">
    <button class="btn" type="button" @click="showPopupDelete">
      <span class="btn-text">Удалить</span>
    </button>

    <button class="btn btn-green" type="submit">
      <span class="btn-text btn-edit">Сохранить</span>
    </button>
  </div>
</template>

<script>
import popupDelete from '../popup\'s/deletecontact.vue'

export default {
name: "buttons",
  data () {
    return {
      isPopupDeleteVisible: false
    }
  },

  components: {
    popupDelete
  },

  methods: {
    showPopupDelete () {
      this.isPopupDeleteVisible = true
    },
    closePopupDelete () {
      this.isPopupDeleteVisible = false
    },
  }
}
</script>

<style lang="scss">
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
