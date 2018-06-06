<style lang="less" rel="stylesheet/less">
@green:#58b471;
html,
body,
#app,
.wrapper,
.wrapper-margin {
    // height: 100%;
    box-sizing: border-box;
}

.school-box{
	width:708px;
	position: fixed;
	top: 10%;
	left: 22%;
	z-index: 9999;
	.search-row{
		position: relative;
		.search{
			width: 100%;
			height: 42px;
			border: 1px solid #e7eaed;
			padding: 20px;
			outline-style: none;

		}
		.school-think{
			max-height: 160px;			
			width: 100%;
			position: absolute;
			top:42px;
			left:0;
			border: 1px solid #e7eaed;
			overflow: auto;
			z-index: 99;
			li{
				background-color: #fff;
				border: 1px solid #e7eaed;
				border-top: none;
				padding: 0 20px;				
				height:54px;
				width: 100%;
				line-height: 54px;
				text-align: left;
				cursor: pointer;
			}
		}
	}	
	.ivu-card-head{
		background: @green;
		color: #fff;
		height: 45px;
		line-height: 45px;
	}
	
	.close-pop{
		vertical-align: middle;
		background: @green;
		width:95px;
		height: 42px;
		margin-left:20px;
		color: #fff;
	}
	.filter-bar{
		border:1px solid @green;
		border-radius: 15px;
		height: 30px;
		line-height: 30px;	
		position: relative;
		.letter{
			display: inline-block;
			color: #2b9a49;
			width: 21px;
			height: 21px;
			line-height: 21px;
			text-align: center;
			margin:0 15px;
			margin-top: 4px;
			cursor: pointer;			
			&.more{
				margin-left: 5px;				
			}
			&:hover{
				border-radius: 50%;
				background: @green;
				color: #fff;
			}
			&.active{
				border-radius: 50%;
				background: @green;
				color: #fff;
			}
		}
		.more-box{
			background: #fff;
			z-index: 10;
			border: 1px solid @green;
			width: 30px;
			position: absolute;
			right: 15px;
			top: 30px;
			border-radius: 30px;
			.letter{
				margin:7px 3px; 
			}
		}	
	}
	.province-list,.list-label{
		float: left;
	}
	.list-label{
		color:#333;
		font-size: 16px;	
		padding-top: 10px;	
	}
	.province-list{		
		width:600px;
		height: 180px;
		padding:10px 50px 0 0;
		margin-left: -15px;
		color: #999;		
		.list-item{
			text-align: center;
			cursor: pointer;
			height: 22px;
			line-height: 22px;	
			margin:3px 0;		
			&:hover{
				text-decoration: underline;
			}
			&.active{
				span{
					display: inline-block;
					padding: 0 10px;
					background: @green;
					color: #fff;
					border-radius: 2px;
				}				
			}
		}
	}
	.school-list{
		overflow: auto;
		height: 130px;
		margin-left: 0;
		.list-item{
			text-align: left;
			white-space: nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			padding-left: 20px; 
		};
	}
}
.clear{
	&:after{
		content: "";
		width: 0;
		height: 0;
		display: block;
		clear: both;
	}
}
</style>
<template>
	<Card class='school-box'>
		<div slot='title'>选择学校</div>
		<div >
			<Row class='search-row'>
				<i-col span='14'>
					<input v-model='searchVal' placeholder='请输入关键字' class="search">
					<ul class="school-think">
						<li v-for="item in searchUl" @click = 'chooseSchool(item)'>{{item}}</li>
					</ul>
				</i-col>
				<i-col span='2'>
					<i-button class='close-pop' @click='schoolPicker.flag=false'>关闭</i-button>
				</i-col>
			</Row>
			<hr style="height:1px;border:none;border-top:1px dashed #ebebeb;width: 93%;margin:30px 0 10px 0" />
			<Row>
				<i-col span='19' offset='1'>
					<div class="filter-bar">
						<span class='letter' :class='{active:activeLet == item}' v-for='item in provinceLetter' @click='chooseLetter(item)'>{{item}}</span>
						<span class="letter more" @click  = "open('showMore')">...</span>
						<div class="more-box" v-if='showMore'>
							<span class='letter' :class='{active:activeName == item}' v-for='item in proviceMoreLetter' @click='chooseLetter(item)'>{{item}}</span>
						</div>
					</div>
				</i-col>
			</Row>
			<div class="clear">
				<div class="list-label">城市</div>
				<Row type='flex'
					justify= 'start'
					class='province-list'>
					<i-col span='4' :class='{active:activeSchool == item}' v-for='item in showProvinceList' class='list-item' @click='chooseProvince(item)'>
						<span>{{item}}</span>
					</i-col>				
				</Row>
			</div>			
			<hr style="height:1px;border:none;border-top:1px dashed #ebebeb;width: 93%;margin-top:10px;" />		<div class="clear">
				<div class="list-label">学校</div>
				<Row type='flex'
					justify= 'start'
					class='province-list school-list'>
					<i-col span='8' v-for='item in showSchoolList' class='list-item' title='item.name' @click = 'chooseSchool(item.name)'>{{item.name}}</span></i-col>				
				</Row>
			</div>		
		</div>
	</Card>
</template>
<script>
import _ from 'lodash'
import pinyin from 'pinyin'
import school from '../services/schoolList.json'
	export default {
		props:['schoolPicker'],
		data(){
			return {
				searchVal:'',
				showMore:false,
				activeLet:'A',
				activeSchool:'北京',
				allSchool:[],
				searchUl:[],
				provinceList:[],
				showProvinceList:[],
				showSchoolList:[],
				provinceLetter:[],
				proviceMoreLetter:[],
				schoolList:	[],
			}
		},
		created() {
			let province = [],
				provinceLetter = [],
				letter = [];

				//获取高校列表
				this.schoolList = school;
			for (let i = 0; i < this.schoolList.length; i++) {
				//获取省份
				province.push(this.schoolList[i].name)	
				//默认显示北京高校
				if(this.schoolList[i].id==1){
					this.showSchoolList = this.schoolList[i].schools
				}
				for (var j = this.schoolList[i].schools.length - 1; j >= 0; j--) {
					//获取全部学校列表
					this.allSchool.push(this.schoolList[i].schools[j].name)					
				}			
			}
			for (let i = province.length - 1; i >= 0; i--) {
				//取首字母
				let firstLet = pinyin(province[i],{
					heteronym:true,
					style:pinyin.STYLE_FIRST_LETTER
				});
				if(firstLet[0][0] == 'z'&&firstLet[1][0] == 'q'){  //判断重庆多音字
					provinceLetter.push('C');
				}else{
					provinceLetter.push(_.upperFirst(firstLet[0]).slice(0,1));  //取第一个字的首字母
				}				
			}
					//首字母去重排序
			letter = _.uniq(provinceLetter).sort(function(a,b){return a.localeCompare(b)});
			this.provinceLetter = letter.slice(0,9);
			this.proviceMoreLetter = letter.slice(9);
			this.provinceList = province;
			this.showProvinceList = province;
		},
		methods:{
			open(key) {
				this[key] = !this[key];
			},
			inputSearch() {
				console.log(this.searchVal);
			},
			chooseLetter(key) {
				//初始化列表
				let proArr = [];
				//添加样式
				this.activeLet = key;
				//关闭MORE
				this.showMore = false;
				if(key == 'C'){
					proArr.push('重庆');
					this.showProvinceList = proArr;
					return false;
				}
				for (var i = this.provinceList.length - 1; i >= 0; i--) {						
						//取首字母
					let firstLet = pinyin(this.provinceList[i],{
						heteronym:true,
						style:pinyin.STYLE_FIRST_LETTER
					})[0][0].toUpperCase();
					if (firstLet == key) {
						proArr.push(this.provinceList[i]);
					}
				}
				this.showProvinceList = proArr;
			},
			chooseProvince(key){
				this.activeSchool = key;
				this.showSchoolList = _.find(this.schoolList,{name:key}).schools;
			},
			chooseSchool(obj){	
				console.log(1)
				this.schoolPicker.flag = false;
				this.schoolPicker.theSchool = obj	;		
				//this.$emit('mark-school',obj);
			}
		},
		watch:{
			searchVal:function(newVal){
				//初始化列表
				this.searchUl=[];
				for(var i=0;i<this.allSchool.length;i++){
					if(this.allSchool[i].indexOf(newVal)!==-1&&newVal!==''){
						this.searchUl.push(this.allSchool[i])
					}
				}
			}
		}
	}
</script>