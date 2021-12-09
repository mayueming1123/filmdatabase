<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="top_top">
      <div class="top">
      <img src="@/components/common/mainSearch/logo.png" alt="欢迎使用电影数据库" title="欢迎使用电影数据库" class="logo">
      <div class="container">
      <form action="" class="parent">
        <input type="text" class="search" placeholder="搜索" v-model="data">
        <input type="button" name="" id="" class="btn" @click="get">
      </form>
    </div>
    </div>
    </div>
    <div v-if="isActive" class="show_result">
      <h1 class="title1">今日推荐</h1>
      <div class="first_show" v-for="(item,index) in tableData">
        <img alt="海报" :src="item.poster" class="poster1">
        <p class="title">{{item.film_name}}</p>
      </div>
    </div>
    <div class="show" v-if="!isActive">
      <h1 class="title1">查询结果</h1>
      <el-container v-for="(item,index) in tableData" :key="item.poster" class="searchResult" >
        <el-aside width="220px" >
          <img alt="海报" :src="item.poster" class="poster"></el-aside>
        <el-main class="info">
        <p>电影名：{{item.film_name}}


          导演：{{item.director}}


          主演：{{item.main_Actor}}


          发行日期：{{item.release_date}}


          简介：{{item.description}}


          英文名：{{item.film_Engname}}


          地区：{{item.region}}</p>
      </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import {getHomeMultidata, getInfo} from "../../../network/home";

export default {
  name: "mainSearch",
  data() {
    return {
      isActive: true,
      tableData: [{
        release_date: '加载中......',
        poster: "加载中......",
        film_name: '加载中......',
        director: '加载中......',
        film_Engname: '加载中......',
        region: "加载中......"
      },
      ],
      data: null,
    }
  },
  methods: {
    get(){
      this.isActive = false;
      getInfo(this.data).then(res => {
        console.log(res)
        if (res.data.code === 201){
          alert("没有找到相关电影")
        }else {
          this.tableData = res.data.film_info
        }
      })
    },
  },
  created()
  {
    getHomeMultidata().then(res => {
      console.log(res);
      this.tableData = res.data.film_info;
      console.log(this.tableData);
    })
  },

  }

</script>

<style scoped>
  .search {
    width: 350px;
    height: 50px;
    border-radius: 18px;
    outline: none;
    border: 1px solid #ccc;
    padding-left: 20px;
    font-size: 20px;
    position: absolute;
  }
  .btn {
    height: 50px;
    width: 50px;
    position: absolute;
    background-image: url("search.png");
    background-size: 100%;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    top: 1px;
    left: 321px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .container {
    height: 70px;
    width: 800px;
    padding-left: 55px;
  }
  .parent {
    position: relative;
  }
  .logo {
    display: block;
    width: 500px;
    height: 250px;
    /*margin-top: 30px;*/
  }
  .table {
    margin-top: 50px;
  }
  .top {
    margin-left: 35%;
    padding-bottom: 5%;
  }
  .top_top {
    background: url("nav.png") 100% no-repeat;
  }
  .show_result {
    background-color: #1f1d1d;
  }
  .title1 {
    color: white;
    padding-top: 3%;
    padding-left: 3%;
    font-size: 30px;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    height: 200px;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .poster {
    width: 200px;
    display: inline;

  }
  .show {
    /*padding-top: 5%;*/
    /*padding-left: 3%;*/
    background-color: #1f1d1d;
  }
  p {
    display: block;
    height: 15px;
    color: white;

  }
  .poster1 {
    display: inline-block;
    width: 182px;
    height: 268px;
  }
  .searchResult {
    margin-top: 3%;
    margin-left: 5%;
  }
  .first_show {
    margin-left: 5%;
    margin-bottom: 5%;
    padding-top: 3%;
    display: inline-block;
    width: 15%;
    height: 20%;

  }
  .title {
    margin: 3% auto;
    color: white;
  }
  img {
    border-radius: 5%;
  }
</style>
