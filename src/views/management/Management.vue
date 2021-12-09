<template>
  <el-container>
      <el-aside>
        <div class="aside">
          <h5 class="title">数据管理</h5>
            <el-button class="button" size="large" @click="manageCont=!manageCont">新建数据</el-button>
            <el-button class="button" size="large" @click="manageCont=!manageCont">修改删除</el-button>
       </div>
      </el-aside>
      <el-main>
        <span v-if="manageCont">
          <new_film></new_film>
        </span>
        <span v-else>
          <change_data></change_data>
        </span>
      </el-main>
  </el-container>

</template>

<script>
import change_data from "../../components/common/change_data";
import new_film from "../../components/common/new_film";
export default {
  name: "Management",
  data () {
    return{
      manageCont: false
    }

  },
  components: {
    change_data,
    new_film,
  },
  methods: {

  }
}
</script>

<style>
.aside {
  margin-top: 5%;
  margin-left: 10%;
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 200px;*/
}
.el-button{
  height: 50px;
  width: 50px;
}
.button{
  display: block;
  margin-top: 3%;
  margin-right: 3%;
  margin-left: 3.5%;
  height: 70px;
  width: 200px;
}
.title {
  margin-left: 28%;
}
</style>
