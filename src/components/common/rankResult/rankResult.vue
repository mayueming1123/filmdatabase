<!--列表元素为字典，包含名称，英文名，地区，类型，豆瓣评分，票房，imdb评分-->
<template>
  <div>
    <div class="buttons">
      <el-button type="warning" round @click="changeRank(0)">豆瓣</el-button>
      <el-button type="warning" round @click="changeRank(1)">票房</el-button>
      <el-button type="warning" round @click="changeRank(2)">imdb</el-button>
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="film_name"
          label="电影名">
      </el-table-column>
      <el-table-column
          prop="film_Engname"
          label="英文名">
      </el-table-column>
      <el-table-column
          prop="region"
          label="地区">
      </el-table-column>
      <el-table-column
          prop="film_type"
          label="类型">
      </el-table-column>
      <el-table-column v-if="isShow1"
          prop="douban_score"
          label="豆瓣评分">
      </el-table-column>
      <el-table-column v-if="isShow2"
          prop="film_Income"
          label="票房">
      </el-table-column>
      <el-table-column v-if="isShow3"
          prop="imdb_score"
          label="imdb评分">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import {getRank} from "../../../network/rank";
import {getHomeMultidata} from "../../../network/home";

export default {
  data() {
    return {
      tableData: null,
      isShow1: 1,
      isShow2: 0,
      isShow3: 0,
      type:'douban',
    }
  },
  methods: {
    changeRank(t) {
      this.tableData = [{
        film_name: "加载中......"
      }]
      if (t===0){
        this.isShow1 = 1
        this.isShow2 = 0
        this.isShow3 = 0
        this.type = 'douban'
        getRank(this.type).then(res => {
          console.log(res)
          this.tableData = res.data.content;
          })
      }else if (t===1){
        this.isShow1 = 0
        this.isShow2 = 1
        this.isShow3 = 0
        this.type = 'income'
        getRank(this.type).then(res => {
          console.log(res)
          this.tableData = res.data.content;
        })
      }else if (t===2){
        this.isShow1 = 0
        this.isShow2 = 0
        this.isShow3 = 1
        this.type = 'imdb'
        getRank(this.type).then(res => {
          console.log(res)
          this.tableData = res.data.content;
        })
      }
    }
  }
}
</script>


<style scoped>
  .buttons {
    margin-top: 2%;
    padding-bottom: 2%;
    margin-left: 5%;
    margin-right: 5%;
    border-bottom: #050505 solid 1px;
  }
  .el-button {
    margin-right: 5%;
  }
  .table {
    margin-top: 2%;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
