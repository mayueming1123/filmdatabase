<template>
  <div>
    <nav-top></nav-top>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTop from "../components/common/navbar/NavTop";
export default {
  name: 'topbar',
  components: {
    NavTop,
  }
}
</script>

<style>
@import "../assets/css/init.css";
</style>
