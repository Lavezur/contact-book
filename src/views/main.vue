<template>
  <div class="main">

    <Popup
      v-if="isPopupVisible"
      @closePopup="closeContactPopup"
    />

    <div class="main__wrapper">
      <div class="main__create-button" @click="showPopup"><p class="main__create-button-text">Добавить контакт</p>
      </div>
      <contactlist/>
    </div>
  </div>
</template>

<script>
import Popup from '../components/popup\'s/newcontact.vue'
import Contactlist from "@/components/contactList/contactlist"

export default {
  name: 'Main',
  components: {
    Contactlist,
    Popup
  },

  data () {
    return {
      isPopupVisible: false
    }
  },

  methods: {
    showPopup () {
      this.isPopupVisible = true
    },
    closeContactPopup () {
      this.isPopupVisible = false
    }
  },
}
</script>

<style lang="scss">
.main {
  max-width: 1440px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 5px;

  .main__wrapper {
    padding: 30px 0 0;
    display: flex;
    flex-direction: column;
    min-height: 800px;

    .main__create-button {
      margin: 18px 0 0 56px;
      cursor: pointer;
      text-transform: uppercase;
      background: none;
      border: 2px solid #ffa260;
      max-width: 248px;
      height: 52px;
      border-radius: 5px;
      background: {
        image: linear-gradient(90deg,#ffa260 50%, transparent 50%);
        position: 100%;
        size: 400%;
      }
      transition: background 420ms ease-in-out;

      &:hover {
        background-position: 0;
      }

      .main__create-button-text {
        color: #1D1F20;
        margin: 0;
        text-align: center;
        padding: 17px 0;
        user-select: none;
        transition: transform 150ms ease;
        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
}
</style>
