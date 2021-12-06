<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button @click="query_change()" label="1"></el-radio-button>
            <el-radio-button @click="query_change()" label="2"></el-radio-button>
            <el-radio-button @click="query_change()" label="3"></el-radio-button>
            <el-radio-button @click="query_change()" label="4"></el-radio-button>
          </el-radio-group>
        </div>
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button @click="query_change()" label="2"></el-radio-button>
            <el-radio-button @click="query_change()" label="2"></el-radio-button>
            <el-radio-button @click="query_change()" label="3"></el-radio-button>
            <el-radio-button @click="query_change()" label="4"></el-radio-button>
          </el-radio-group>
        </div>
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button @click="query_change()" label="3"></el-radio-button>
            <el-radio-button @click="query_change()" label="2"></el-radio-button>
            <el-radio-button @click="query_change()" label="3"></el-radio-button>
            <el-radio-button @click="query_change()" label="4"></el-radio-button>
          </el-radio-group>
        </div>
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button @click="query_change()" label="4"></el-radio-button>
            <el-radio-button @click="query_change()" label="2"></el-radio-button>
            <el-radio-button @click="query_change()" label="3"></el-radio-button>
            <el-radio-button @click="query_change()" label="4"></el-radio-button>
          </el-radio-group>
        </div>


      </el-aside>
      <el-container>
        <el-main>
          <el-container>
            <el-table
                :data="filmDetails"
                stripe
                style="width: 100%">
              <el-table-column
                  prop="film_name"
                  label="电影名称"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="director"
                  label="导演"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="main_Actor"
                  label="主演">
              </el-table-column>
              <el-table-column
                  prop="release_date"
                  label="上映日期"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="film_type"
                  label="电影类型"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="region"
                  label="上映地区"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="description"
                  label="电影简介"
                  width="180">
              </el-table-column>
            </el-table>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "indexQuery",
  data() {
    return{
      film_data:[],
      query_selection:[]
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
