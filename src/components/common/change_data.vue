<template>
	<el-container>
	  <el-header>

		</el-header>
	  <el-container>
	    <el-aside width="200px">
				<management_aside></management_aside>
			</el-aside>
	    <el-container>
	      <el-main>
					<el-container>
					  <el-row >
					    <el-row >
					      <el-button type="primary" icon="el-icon-edit" @click.native="btchange()" circle></el-button>
					    	<el-button type="danger" icon="el-icon-delete" @click.native="btdelete()" circle></el-button>
					      <span>管理员</span>
					    </el-row>
					  </el-row>
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
	      <el-footer>
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
import management_aside from "./management_aside";
export default {
	name: "data_change",
	components: {
	  management_aside,
	},
	methods: {
  //   ...mapActions([
  //       'getList'
  //   ]),
	// 	btchange() {
	// 		console.log('change_data')
	// 	},
	// 	btdelete() {
	// 		console.log('delete_data')
	// 	}
	// },
  // computed: {
  //   ...mapState({
  //     filmDetails: state=>state.manage.filmDetails,
  //   })
  }
}

</script>

<style>
</style>
