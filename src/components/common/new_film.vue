<template>
		<el-container>
		  <el-header>
				Header

			</el-header>
		  <el-container>
		    <el-aside width="200px">
					<management_aside></management_aside>
				</el-aside>
		    <el-main>
					<div>
						<el-radio-group v-model="labelPosition" size="small">
						  <el-radio-button label="left">左对齐</el-radio-button>
						  <el-radio-button label="right">右对齐</el-radio-button>
						  <el-radio-button label="top">顶部对齐</el-radio-button>
						</el-radio-group>
						<div style="margin: 20px;"></div>

						<el-form ref="form" :label-position="labelPosition" :model="form" label-width="80px">
						  <el-form-item label="电影名称" @submit.native.prevent>
						    <el-input v-model="form.film_name" placeholder="电影名称"></el-input>
						  </el-form-item>
						  <el-form-item label="电影海报" @submit.native.prevent>
						    <el-input v-model="form.poster" placeholder="电影海报"></el-input>
						  </el-form-item>
							<el-form-item label="电影导演" @submit.native.prevent>
							  <el-input v-model="form.director" placeholder="电影导演"></el-input>
							</el-form-item>
							<el-form-item label="电影主演" @submit.native.prevent>
							  <el-input v-model="form.main_Actor" placeholder="电影主演"></el-input>
							</el-form-item>
							<el-form-item label="上映时间" @submit.native.prevent>
							  <el-input v-model="form.release_date" placeholder="上映时间"></el-input>
							</el-form-item>
							<el-form-item label="电影简介" @submit.native.prevent>
							  <el-input v-model="form.description" placeholder="电影简介"></el-input>
							</el-form-item>
							<el-form-item label="电影类型" @submit.native.prevent>
							  <el-input v-model="form.film_type" placeholder="电影类型"></el-input>
							</el-form-item>
							<el-form-item label="电影评分" @submit.native.prevent>
							  <el-input v-model="form.film_score" placeholder="电影评分"></el-input>
							</el-form-item>
							<el-form-item label="制作地区" @submit.native.prevent>
							  <el-input v-model="form.region" placeholder="电影制作地区"></el-input>
							</el-form-item>
							<el-form-item label="英文名称" @submit.native.prevent>
							  <el-input v-model="form.engName" placeholder="电影英文名称"></el-input>
							</el-form-item>
							<el-form-item>
							    <el-button type="primary" @click="onSubmit">添加</el-button>
							    <el-button>取消</el-button>
							  </el-form-item>
						</el-form>
					</div>
				</el-main>
		  </el-container>
		</el-container>
</template>

<script>
import management_aside from "./management_aside";
	export default {
		name:"data_change",
		components: {
		  management_aside,
		},
    data() {
		  return{
		    filmDetails:[]
      }
    }
    // computed: {
    //   ...mapState({
    //     filmDetails: state=>state.manage.filmDetails,
    //   })
    // },
		// data() {
		//   return {
    //     filmDetails:{
    //
    //     }
		//       }
		//   },
		//   methods: {
    //   ...mapActions([
    //       'getList'
    //   ]),
		//   onSubmit() {
		//     console.log('submit!');
		//   }
		// }
	}
</script>

<style>
</style>
