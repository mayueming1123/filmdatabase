<template>

		  <el-container>
		    <el-main>
					<div style="margin:20px 100px">
					  <el-form ref="form" :model="filmDetails" label-width="80px">
						  <el-form-item label="电影名称" @submit.native.prevent>
						    <el-input v-model="filmDetails.film_name" placeholder="电影名称"></el-input>
						  </el-form-item>
						  <el-form-item label="电影海报" @submit.native.prevent>
						    <el-input v-model="filmDetails.poster" placeholder="电影海报"></el-input>
						  </el-form-item>
							<el-form-item label="电影导演" @submit.native.prevent>
							  <el-input v-model="filmDetails.director" placeholder="电影导演"></el-input>
							</el-form-item>
							<el-form-item label="电影主演" @submit.native.prevent>
							  <el-input v-model="filmDetails.main_Actor" placeholder="电影主演"></el-input>
							</el-form-item>
							<el-form-item label="上映时间" @submit.native.prevent>
							  <el-input v-model="filmDetails.release_date" placeholder="上映时间"></el-input>
							</el-form-item>
							<el-form-item label="电影简介" @submit.native.prevent>
							  <el-input v-model="filmDetails.description" placeholder="电影简介"></el-input>
							</el-form-item>
							<el-form-item label="电影类型" @submit.native.prevent>
							  <el-input v-model="filmDetails.film_type" placeholder="电影类型"></el-input>
							</el-form-item>
							<el-form-item label="电影评分" @submit.native.prevent>
							  <el-input v-model="filmDetails.film_score" placeholder="电影评分"></el-input>
							</el-form-item>
							<el-form-item label="制作地区" @submit.native.prevent>
							  <el-input v-model="filmDetails.region" placeholder="电影制作地区"></el-input>
							</el-form-item>
							<el-form-item label="英文名称" @submit.native.prevent>
							  <el-input v-model="filmDetails.engName" placeholder="电影英文名称"></el-input>
							</el-form-item>
							<el-form-item>
							    <el-button type="primary" @click="dataSubmit">添加</el-button>
							    <el-button>取消</el-button>
							  </el-form-item>
						</el-form>
					</div>
				</el-main>
		  </el-container>

</template>

<script>
import axios from "axios";
	export default {
    name: "data_change",
    components: {
    },
    data() {
      return {
        filmDetails: {
          film_name: '',
          poster: '',
          director: '',
          main_Actor: '',
          release_date: '',
          film_type: '',
          engName: '',
          description: '',
          region: ''
        },
      }
    },
    methods: {
      dataSubmit() {
        if (this.filmDetails.film_name == '') {
          alert('电影名不能为空')
        } else {
          console.log(this.filmDetails.film_name)
          console.log('++++++++++++++++++')
          let self = this;
          self.$axios({
            url: "http://127.0.0.1:8000/add/",
            header: {
              // 'Content-Type': 'application/x-www-form-urlencoded',
              // 'Access-Control-Allow-Credentials': true,
              // "Access-Control-Allow-Origin": "*"
            },
            method: "post",
            data: {
              film_name: self.filmDetails.film_name,
              poster: self.filmDetails.poster,
              director: self.filmDetails.director,
              main_Actor: self.filmDetails.main_Actor,
              engName: self.filmDetails.engName,
              release_date: self.filmDetails.release_date,
              film_type: self.filmDetails.film_type,
              region: self.filmDetails.region,
              description: self.filmDetails.description
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
              alert(res.data.message)
              console.log('测试成功')

            } else if (res.data.code === 402) {
              console.log("error")
            } else {
              console.log(res.data.code)
              alert("获取失败")
            }
          }).catch(function (ret) {

          })

        }
      }
    }
  }
</script>

<style>
</style>
