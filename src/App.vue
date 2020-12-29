<template>
  <div id="app"
       class="app"
  >
    <Navigation/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  margin: 0;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  background: #dfe3ff;
  min-height: 100vh;
}

body {
  margin: 0;
}

*{
  text-decoration:none;
}

</style>

<script>
import Navigation from "./components/Navigation/Navigation";
export default {
  components: {Navigation}
}
</script>
