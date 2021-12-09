<template>
  <el-container>
    <el-container>
      <el-container>
        <el-header>
          <div class="container">
            <el-row>
              <input type="text" class="search" placeholder="搜索" v-model="data">
              <button type="primary" class="btn" @click="get"></button>
            </el-row>
          </div>
        </el-header>
        <el-main>
          <el-container v-if="!status">

            <el-table
                :data="filmDetails.slice(0,10)"
                stripe
                style="width: 100%">
              <el-table-column label="序号" width="180">
                <template slot-scope="scope">
                  {{scope.$index+1}}
                </template>
              </el-table-column>
              <el-table-column
                  prop="film_name"
                  label="电影名称"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="poster"
                  label="电影海报"
                  width="180">
                <template  slot-scope="scope">
                  <img :src="scope.row.poster"  min-width="70" height="70" />
                </template>
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
              <el-table-column
                  fixed="right"
                  label="操作"
                  width="100">
                <template slot-scope="scope">
                  <el-button class="cont" @click="btchangeData(filmDetails.slice(scope.$index,scope.$index+1)[0])" type="text" size="small">修改</el-button>
                  <el-button class="cont" @click="btdelete(filmDetails.slice(scope.$index,scope.$index+1)[0].film_name)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-container>
          <div style="margin:20px 100px" v-if="status">
            <el-form ref="form" label-width="80px">
              <el-form-item label="电影名称" @submit.native.prevent>
                <el-input :placeholder="changeDetails.film_name" v-model="changeDetails.film_name"></el-input>
              </el-form-item>
              <el-form-item label="电影海报" @submit.native.prevent>
                <el-input :placeholder="changeDetails.poster" v-model="changeDetails.poster"></el-input>
              </el-form-item>
              <el-form-item label="电影导演" @submit.native.prevent>
                <el-input :placeholder="changeDetails.director" v-model="changeDetails.director"></el-input>
              </el-form-item>
              <el-form-item label="电影主演" @submit.native.prevent>
                <el-input :placeholder="changeDetails.main_Actor" v-model="changeDetails.main_Actor"></el-input>
              </el-form-item>
              <el-form-item label="上映时间" @submit.native.prevent>
                <el-input :placeholder="changeDetails.release_date" v-model="changeDetails.release_date"></el-input>
              </el-form-item>
              <el-form-item label="电影简介" @submit.native.prevent>
                <el-input :placeholder="changeDetails.description" v-model="changeDetails.description"></el-input>
              </el-form-item>
              <el-form-item label="电影类型" @submit.native.prevent>
                <el-input :placeholder="changeDetails.film_type" v-model="changeDetails.film_type"></el-input>
              </el-form-item>
              <el-form-item label="制作地区" @submit.native.prevent>
                <el-input :placeholder="changeDetails.region" v-model="changeDetails.region"></el-input>
              </el-form-item>
              <el-form-item label="英文名称" @submit.native.prevent>
                <el-input :placeholder="changeDetails.engName" v-model="changeDetails.engName"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="btsubmit()">修改</el-button>
                <el-button type="primary" @click="btreturn()">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-main>
        <el-footer v-if="!status">
          <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<script>
import {getInfo} from "../../network/home";

export default {
  name: "data_change",
  components: {
  },
  data() {
    return {
      status : false,
      old_film:'',
      changeDetails:{
        film_name: '',
        poster: '',
        director: '',
        main_Actor: '',
        release_date: '',
        film_type: '',
        engName : '',
        region : '',
        description : '',
      },
      data:'',
      filmDetails: [{
        film_name: '',
        poster: '',
        director: '',
        main_Actor: '',
        release_date: '',
        film_type: '',
        engName : '',
        region : '',
        description : '',
      }],
    }

  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      console.log('begin getData')
      this.manageCont = !this.manageCont
      let self = this;
      self.$axios({
        url: "http://127.0.0.1:8000/all_search/",
        header: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Access-Control-Allow-Credentials': true,
          // "Access-Control-Allow-Origin": "*"
        },
        method: "post",
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
    },
    btdelete(name) {
      console.log(name)
      let self = this;
      this.$axios.request({
        url:"http://localhost:8000/del/",
        header:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Credentials': true,
          "Access-Control-Allow-Origin": "*"
        },
        method:"post",
        data : {
          old_film : name
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(function (ret){
        if(ret.data.code === 200){
          alert(ret.data.message)
        }
        else if (ret.data.code === 403){
          console.log("error")
          alert(ret.data.message)
        }
        else if(ret.data.code === 404){
          alert(ret.data.message)
        }
        else {
          alert("error")
        }
      }).catch(function (ret){

      })
    },
    btchangeData(dataDetails) {
      this.changeDetails.film_name = dataDetails.film_name
      this.changeDetails.poster = dataDetails.poster
      this.changeDetails.director = dataDetails.director
      this.changeDetails.film_type = dataDetails.film_type
      this.changeDetails.description = dataDetails.description
      this.changeDetails.main_Actor = dataDetails.main_Actor
      this.changeDetails.release_date = dataDetails.release_date
      this.changeDetails.engName = dataDetails.engName
      this.changeDetails.region = dataDetails.region
      console.log(this.changeDetails.film_name)
      this.status = !this.status
    },
    btreturn() {
      this.status = !this.status
    },
    get(){
      this.isActive = false;
      getInfo(this.data).then(res => {
        console.log(res)
        if (res.data.code === 201){
          alert("没有找到相关电影")
        }else {
          this.filmDetails = res.data.film_info
        }
      })
    },
    btsubmit() {
      console.log(this.changeDetails)
      let self = this;
      this.$axios.request({
        url:"http://localhost:8000/upd/",
        header:{
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Credentials': true,
          "Access-Control-Allow-Origin": "*"
        },
        method:"post",
        data:{
          film_name : this.changeDetails.film_name,
          poster : this.changeDetails.poster,
          director : this.changeDetails.director,
          main_Actor : this.changeDetails.main_Actor,
          engName : this.changeDetails.engName,
          release_date: this.changeDetails.release_date,
          film_type: this.changeDetails.film_type,
          region : this.changeDetails.region,
          description : this.changeDetails.description
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(function (ret){
        if(ret.data.code === 200){
          alert(ret.data.message)
        }
        else if (ret.data.code === 405){
          alert(ret.data.message)
        }
        else if (ret.data.code === 406){
          alert(ret.data.message)
        }
        else{
          alert("获取失败")
        }
      }).catch(function (ret){

      })

    }
  }
}

</script>

<style>
.cont{
  margin: 0px 10px 0px 10px;
}
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
  background-image: url("./mainSearch/search.png");
  background-size: 100%;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  top: 1px;
  left: 321px;
  border: none;
  outline: none;
  cursor: pointer;
}

</style>
