<template>
  <div class="header">
    <div class="nav">
      <ul>
        <li><button @click="itemClick('/home')"><i class="el-icon-s-home">主页</i></button></li>
        <li><button @click="itemClick('/searchByIndex')" ><i class="el-icon-s-grid">索引查询</i></button></li>
        <li><button @click="itemClick('/rank')" ><i class="el-icon-s-data">评分排名</i></button></li>
        <li><button @click="itemClick('/management')" ><i class="el-icon-s-platform">系统管理</i></button></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navTop",
    data() {
      return {
      }
    },
    methods: {
      itemClick(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped>
  .header {
    display: block;
    height: 90px;
    background-color: #cccccc;
    background: url("nav.png") no-repeat 100% ;
    /*background-size: cover;*/
  }
  .nav {
    display: block;
    padding-top: 10px;
    margin-left: 13%;
  }
  .nav ul li {
    position: relative;
    float: left;
    width: 13%;
    height: 50px;
    margin-left: 8%;
  }
  .nav ul li button {
    position: relative;
    display: block;
    height: 50px;
    color: white;
    font-size: 23px;
  }
  .nav ul li button:hover {
    border-bottom:solid orange;

  }
  button {
    border: none;
    background-color: transparent;
  }
  i {
    display: block;
  }
</style>
