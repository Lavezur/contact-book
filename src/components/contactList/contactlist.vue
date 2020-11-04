<template>
  <div class="list" v-if="contacts.length">
    <div class="list__content" v-for="(contact) of contacts"
         :key="contact.id"><router-link tag="button" :to="'/contactInfo/' + contact.id">
      <div class="list__content-wrapper">
        <div class="list__picture"></div>
        <div class="list__name-work">
          <p class="list__name">{{contact.contName}}</p>
          <p class="list__workplace">{{contact.contWorkplace}}</p>
        </div>
        <p class="list__phone">{{contact.contPhone}}</p>
        <p class="list__email">{{contact.contMail}}</p>
      </div>
    </router-link>
    </div>
  </div>
  <p class="list__null" v-else>У вас пока нет контактов :(</p>
</template>

<script>
export default {
  name: "contactlist",
  computed: {
    contacts() {
      return this.$store.getters.contacts
    }
  }
}
</script>

<style lang="scss">
*{
  text-decoration:none;
}

.list {
  display: flex;
  flex-direction: column-reverse;
  margin: 51px 0 0;


  .list__content{
    height: 143px;
    box-shadow: 0 4px 4px rgba(220, 220, 220, 0.25);

    .list__content-wrapper {
      display: flex;
      flex-direction: row;
      max-width: 80%;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      justify-content: space-between;

      .list__picture {
        background-image: url("../../assets/contactIcon.svg");
        width: 71.75px;
        height: 71.75px;
        background-size: cover;
        align-self: center;
      }

      .list__name-work {
        display: flex;
        flex-direction: column;
        max-height: 200px;
        width: 350px;
        text-align: center;
        align-self: center;
        text-overflow: ellipsis;
        overflow: hidden;

        .list__name {
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          text-transform: uppercase;
          color: #2B2927;
          margin: 0 0 9px 0;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .list__workplace {
          font-weight: normal;
          font-size: 15px;
          line-height: 18px;
          color: #2B2927;
          margin: 0;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      .list__phone {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        width: 250px;
        text-transform: uppercase;
        color: #2B2927;
        text-align: center;
        max-height: 29px;
        margin: 0;
        align-self: center;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .list__email {
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        width: 300px;
        text-transform: uppercase;
        color: #2B2927;
        text-align: center;
        max-height: 22px;
        margin: 0;
        align-self: center;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}

.list__null {
  text-align: center;
  font-size: 36px;
  margin: 20% auto 0;
  color: #ffa260;
}

</style>
