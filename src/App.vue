<template>
  <div id="app">
    <nav-top></nav-top>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavTop from 'components/common/navbar/NavTop.vue'
  export default {
    name: 'App',
    components: {
      NavTop,
    }
  }
</script>

<style>
  @import "assets/css/init.css";
</style>
