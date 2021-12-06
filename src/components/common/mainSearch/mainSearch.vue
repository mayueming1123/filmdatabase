<template>
  <div>
    <div>
      <img src="@/components/common/mainSearch/logo.png" alt="欢迎使用电影数据库" title="欢迎使用电影数据库" class="logo">
    </div>
    <div class="container">
      <form action="" class="parent">
        <input type="text" class="search" placeholder="搜索" v-model="data">
        <input type="button" name="" id="" class="btn" @click="get">
      </form>
    </div>
  </div>
</template>

<script>
import {getInfo} from "../../../network/home";

export default {
  name: "mainSearch",
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        post: 'manager.png',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      data: null,
    }
  },
  methods: {
    get(){
      console.log(this.data)
      console.log(this.tableData)
      // getInfo(this.data).then(res => {
      //   this.result_all = res;
      // })
      this.$emit("send",this.tableData)
    },
  }

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
    margin: -40px 720px;
  }
  .parent {
    position: relative;
  }
  .logo {
    display: block;
    width: 500px;
    height: 250px;
    margin-left: 650px;
    margin-top: 30px;
  }
</style>
