<template>
	<div id="model1">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/hello' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>活动管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" sortable width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="tag" label="标签" width="100">
				<template scope="scope">
					<el-button :type="scope.row.tag === '1' ? '回复' : '未回复'">{{scope.row.tag === '1'? '回复' : '未回复'}}</el-button>
				</template>
			</el-table-column>
		</el-table>
		</el-time-select>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'Model1',
	data() {
		return {
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄',
				tag: '1'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄',
				tag: '0'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄',
				tag: '1'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄',
				tag: '0'
			}]
		}
	},
	computed: {
		reversedData () {
			console.log(scope.row.tag)
		}
	}

} 
</script>
<style type="text/css" scoped>
#model1 {
	/*border: 1px solid #ccc;*/
	float: left;
	margin: 20px;
	width: 80%;
	display: inline-block;
}
</style>