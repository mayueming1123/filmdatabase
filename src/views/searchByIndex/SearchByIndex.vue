<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside style="margin-left: 20px" width="300px" class="aside">
        <div  class="type" style="margin: 5% 3%">
          <h2>类型</h2>
          <el-radio-group v-model="film_t" @change="query_change" size="medium">
            <el-radio-button name="1" label="动作"></el-radio-button>
            <el-radio-button name="1" label="爱情"></el-radio-button>
            <el-radio-button name="1" label="科幻"></el-radio-button>
            <el-radio-button name="1" label="喜剧"></el-radio-button>
            <el-radio-button name="1" label="剧情"></el-radio-button>
            <el-radio-button name="1" label="犯罪"></el-radio-button>
            <el-radio-button name="1" label="惊悚"></el-radio-button>
            <el-radio-button name="1" label="家庭"></el-radio-button>
            <el-radio-button name="1" label="动画"></el-radio-button>
            <el-radio-button name="1" label="历史"></el-radio-button>
            <el-radio-button name="1" label="战争"></el-radio-button>
            <el-radio-button name="1" label="冒险"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin: 5% 3%">
          <h2>年份</h2>
          <el-radio-group v-model="year_f" @change="query_change" size="medium">
            <el-radio-button name='2' label="2000"></el-radio-button>
            <el-radio-button name='2' label="2001"></el-radio-button>
            <el-radio-button name='2' label="2002"></el-radio-button>
            <el-radio-button name='2' label="2003"></el-radio-button>
            <el-radio-button name='2' label="2004"></el-radio-button>
            <el-radio-button name='2' label="2005"></el-radio-button>
            <el-radio-button name='2' label="2006"></el-radio-button>
            <el-radio-button name='2' label="2007"></el-radio-button>
            <el-radio-button name='2' label="2008"></el-radio-button>
            <el-radio-button name='2' label="2009"></el-radio-button>
            <el-radio-button name='2' label="2010"></el-radio-button>
            <el-radio-button name='2' label="2011"></el-radio-button>
            <el-radio-button name='2' label="2012"></el-radio-button>
            <el-radio-button name='2' label="2013"></el-radio-button>
            <el-radio-button name='2' label="2014"></el-radio-button>
            <el-radio-button name='2' label="2015"></el-radio-button>
            <el-radio-button name='2' label="2016"></el-radio-button>
            <el-radio-button name='2' label="2017"></el-radio-button>
            <el-radio-button name='2' label="2018"></el-radio-button>
            <el-radio-button name='2' label="2019"></el-radio-button>
            <el-radio-button name='2' label="2020"></el-radio-button>
          </el-radio-group>
        </div>
        <div style="margin: 5% 3%">
          <h2>地区</h2>
          <el-radio-group v-model="area_f" @change="query_change" size="medium">
            <el-radio-button name='3' label="美国"></el-radio-button>
            <el-radio-button name='3' label="英国"></el-radio-button>
            <el-radio-button name='3' label="中国"></el-radio-button>
            <el-radio-button name='3' label="德国"></el-radio-button>
            <el-radio-button name='3' label="韩国"></el-radio-button>
            <el-radio-button name='3' label="日本"></el-radio-button>
            <el-radio-button name='3' label="西班牙"></el-radio-button>
            <el-radio-button name='3' label="意大利"></el-radio-button>
            <el-radio-button name='3' label="新西兰"></el-radio-button>

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
                  prop="poster"
                  label="海报"
                  width="180">
                <template   slot-scope="scope">
                  <img :src="scope.row.poster"  min-width="70" height="70" />
                </template>
              </el-table-column>
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
      filmDetails: [{
        film_name: '',
        poster: 'manager.png',
        director: '',
        main_Actor: '',
        release_date: '',
        film_type: '',
        film_score: '',
        engName: ''
      }],
      area_f: '',
      year_f: '',
      film_t: '',
    }
  },
  mounted() {
    this.query_change()
  },
  methods: {
    query_change() {
      this.filmDetails = [{film_name: '没找到___QAQ'}]
      let self = this;
      console.log(self.film_t)
      self.$axios({
        url: "http://127.0.0.1:8000/conbined_search/",
        header: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Access-Control-Allow-Credentials': true,
          // "Access-Control-Allow-Origin": "*"
        },
        method: "post",
        data : {
          type : self.film_t,
          area : self.area_f,
          year : self.year_f,
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(res => {
        if (res.data.code === 200) {
          self.filmDetails = res.data.film_info
          console.log('测试成功')
        } else if (res.data.code === 201) {
          console.log("error")
          alert("没有找到电影")
        } else {
          console.log(res.data.code)
          alert("获取失败")
        }
      }).catch(function (ret) {
      })
    }
  }
}
</script>

<style>
.aside {
  color: #333;
  width: 400px;
  text-align: center;
  line-height: 20px;
}
.el-radio-button__inner {
  border: none;
}
.el-radio-group {
  border: none;
}



</style>
