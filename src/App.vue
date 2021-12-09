<template>
  <div id="app">
<!--    <nav-top></nav-top>-->
  <router-view></router-view>
<!--    <Login></Login>-->
  </div>
</template>

<script>
  // import NavTop from 'components/common/navbar/NavTop.vue'
  import Login from "./views/login/Login";
  export default {
    name: 'App',
    components: {
      Login,
    }
  }
</script>

<style>
  @import "assets/css/init.css";
</style>
