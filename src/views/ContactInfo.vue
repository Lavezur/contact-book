<template>
  <div class="contact-info"
       v-if="contact"
  >
    <div class="contact-info__back-wrapper">
      <router-link tag="button"
                   :to="'/'"
                   class="contact-info__back-button"
      >
        <div class="contact-info__back-icon" />
        <span class="contact-info__back-text">
            Назад
          </span>
      </router-link>
    </div>
    <ContactMainInfo />
    <ContactOtherInfo />
  </div>
  <p v-else
     class="contact-info__not-found"
  >
    Контакт не найден :(
  </p>
</template>

<script>
import ContactMainInfo from "@/components/ContactMainInfo/ContactMainInfo";
import ContactOtherInfo from "@/components/ContactOtherInfo/ContactOtherInfo";
export default {
  name: 'ContactInfo',

  computed: {
    contact () {
      return this.$store.getters.contactsId(+this.$route.params.id)
    },
  },

  components: {
    ContactOtherInfo,
    ContactMainInfo
  }
}
</script>

<style lang="scss">

  .contact-info {
    max-width: 1440px;
    width: 100%;
    height: fit-content;
    margin: -10px auto 0;
    background: #FFFFFF;
    border-radius: 5px;
    min-height: 720px;

    .contact-info__back-wrapper {
      padding: 60px 0 0 60px;
      width: fit-content;

      .contact-info__back-button {
        display: flex;
        flex-direction: row;
        max-width: fit-content;
        cursor: pointer;

        .contact-info__back-icon {
          background-image: url("../assets/icons/backarrow.svg");
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
    }
  }

  .contact-info__not-found {
    font-size: 36px;
    text-align: center;
    margin: 20% auto;
  }
</style>
