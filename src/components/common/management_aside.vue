<template>
  <div>
    <h5>数据管理</h5>
    <el-button @click="btclick('/newData')">新建</el-button>
    <el-button @click="btclick('/changeData')">修改删除</el-button>
  </div>
</template>

<script>
export default {
	name: "management_aside",
	data() {
		return{}
	},
	methods: {
    btclick(Path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style>

</style>
