<template>
  <div class="header">
    <div class="nav">
      <ul>
        <li><button @click="itemClick('/home')">首页</button></li>
        <li><button @click="itemClick('/searchByIndex')" >索引查询</button></li>
        <li><button @click="itemClick('/rank')" >评分排名</button></li>
        <li><button @click="itemClick('/management')" >系统管理</button></li>
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
    height: 70px;
    background-color: #cccccc;
  }
  .nav {
    display: block;
    padding-top: 20px;
    margin-left: 450px;
  }
  .nav ul li {
    display: block;
    float: left;
    margin: 0 70px;
  }
  .nav ul li button {
    display: block;
    height: 50px;
    color: black;
    font-size: 20px;
    padding: 0 20px;
  }
  .nav ul li button:hover {
    border-bottom:solid #00a4ff;
  }
  button {
    border: none;
    background-color: #cccccc;
  }
</style>