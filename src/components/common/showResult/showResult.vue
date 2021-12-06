<!--列表元素为字典，包含名称，英文名，地区，类型，豆瓣评分，票房，imdb评分-->
<!--电影名，海报，导演，主演，发行日期，简介，英文名，地区，类型，豆瓣排名，票房排名，imdb排名，豆瓣评分，评分人数，票房，imdb评分-->
<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="film_name"
        label="电影名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="poster"
        label="海报"
        width="180">
    </el-table-column>
    <el-table-column
        prop="director"
        label="导演">
    </el-table-column>
    <el-table-column
        prop="main_Actor"
        label="主演">
    </el-table-column>
    <el-table-column
        prop="release_date"
        label="发行日期">
    </el-table-column>
    <el-table-column
        prop="description"
        label="简介">
    </el-table-column>
    <!--电影名，海报，导演，主演，发行日期，简介，英文名，地区，类型，豆瓣排名，票房排名，imdb排名，豆瓣评分，评分人数，票房，imdb评分-->
    <el-table-column
        prop="film_EngName"
        label="英文名">
    </el-table-column>
    <el-table-column
        prop="region"
        label="地区">
    </el-table-column>
    <el-table-column
        prop="film_style"
        label="类型">
    </el-table-column>
    <el-table-column
        prop="rank_douban"
        label="豆瓣排名">
    </el-table-column>
    <el-table-column
        prop="rank_mon"
        label="票房排名">
    </el-table-column>
    <el-table-column
        prop="rank_income"
        label="imdb排名">
    </el-table-column>
    <el-table-column
        prop="score_douban"
        label="豆瓣评分">
    </el-table-column>
    <el-table-column
        prop="people_num"
        label="评分人数">
    </el-table-column>
    <el-table-column
        prop="income"
        label="票房">
    </el-table-column>
    <el-table-column
        prop="score_imdb"
        label="imdb评分">
    </el-table-column>
  </el-table>
</template>

<script>
import {getHomeMultidata} from "../../../network/home";

export default {
  data() {
    return {
      tableData: null
    }
  },
  created()
    {
      getHomeMultidata().then(res => {
        this.tableData = res;
      })
    },
  props: ['tableData']
}
</script>
