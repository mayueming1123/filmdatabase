<!--列表元素为字典，包含名称，英文名，地区，类型，豆瓣评分，票房，imdb评分-->
<template>
  <div>
    <el-button type="warning" plain @click="changeRank(0)">豆瓣</el-button>
    <el-button type="warning" plain @click="changeRank(1)">票房</el-button>
    <el-button type="warning" plain @click="changeRank(2)">imdb</el-button>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="电影名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="EnglishName"
          label="英文名">
      </el-table-column>
      <el-table-column
          prop="region"
          label="地区">
      </el-table-column>
      <el-table-column
          prop="style"
          label="类型">
      </el-table-column>
      <el-table-column v-if="isShow1"
          prop="score_douban"
          label="豆瓣评分">
      </el-table-column>
      <el-table-column v-if="isShow2"
          prop="mon"
          label="票房">
      </el-table-column>
      <el-table-column v-if="isShow3"
          prop="score_imdb"
          label="imdb评分">
      </el-table-column>
    </el-table>

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
      if (t===0){
        this.isShow1 = 1
        this.isShow2 = 0
        this.isShow3 = 0
        this.type = 'douban'
        getRank(this.type).then(res => {
            this.tableData = res;
          })
      }else if (t===1){
        this.isShow1 = 0
        this.isShow2 = 1
        this.isShow3 = 0
        this.type = 'income'
        getRank(this.type).then(res => {
          this.tableData = res;
        })
      }else if (t===2){
        this.isShow1 = 0
        this.isShow2 = 0
        this.isShow3 = 1
        this.type = 'imdb'
        getRank(this.type).then(res => {
          this.tableData = res;
        })
      }
    }
  }
}
</script>
