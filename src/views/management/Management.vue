<template>
  <div>
      <el-container>
        <el-header>

        </el-header>
        <el-aside>
          <management_aside></management_aside>
        </el-aside>
        <el-main>
          <h1>欢迎来到管理员界面</h1>
        </el-main>
      </el-container>
  </div>

</template>

<script>
import change_data from "../../components/common/change_data";
import new_film from "../../components/common/new_film";
import management_aside from "../../components/common/management_aside";
export default {
  name: "Management",
  components: {
    change_data,
    new_film,
    management_aside
  }
}
</script>

<style scoped>

</style>
