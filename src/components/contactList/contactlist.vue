<template>
  <table class="list" v-if="contacts.length">
    <thead>
      <tr>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(contact) of contacts">
        <td>{{contact.contName}}</td>
        <td>{{contact.contWorkplace}}</td>
        <td>{{contact.contPhone}}</td>
        <td>{{contact.contMail}}</td>
      </tr>
    </tbody>
  </table>
  <p class="list__null" v-else>У вас пока нет контактов</p>
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

</style>
