<template>
  <div>
    <el-row>
      <el-button type="warning" plain @click="changeRank(0)">豆瓣</el-button>
      <el-button type="warning" plain @click="changeRank(1)">票房</el-button>
      <el-button type="warning" plain @click="changeRank(2)">imdb</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "buttonForRank",
  data() {
    return {
      isShow:0
    }
  },
  methods: {
    changeRank(t) {
      this.isShow = t
    }
  }
}
</script>

<style scoped>

</style>
