<template>
	<div id="ligin">
	  <div class="login">
	  	<span>
	  	<img src="./../assets/logo.png" height="200" width="200">
	  	</span>
	  	<el-input placeholder="请输入用户名" v-model="username">
		  <template slot="prepend">用户名</template>
		</el-input>
		<el-input placeholder="请输入密码" type="password" v-model="password">
		  <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
		</el-input>
		<el-button type="primary" size="small" @click="submit">登录</el-button>
	  </div>
	</div>
</template>
<script type="text/javascript">
  export default {
  	name: 'Login',
  	data () {
  		return {
  		  username: '',
  		  password: ''
  		}
  	},
  	methods: {
  		submit () {
  			if (!this.username) {
  				this.$message('用户名不能为空!')
  				return
  			}
  			if (!this.password) {
  				this.$message('密码不能为空!')
  				return
  			}
				if (!this.username === 'zhaodi' & !this.password === '12345') {
					this.$message('用户名或密码错误!')
  				return
				}
  			this.$message('登录成功!');
  			this.$router.push({ name: 'Model1', params: { username: this.username }})
  			//this.$ajax.get('/login')
			// .then(function(respone){
			//     console.log(response);
			// })
			// .catch(function(error){
			//     console.log(error);
			//     this.$message('登录失败!');
			// });
  		}
  	}
  } 
</script>
<style type="text/css" scoped>
	#login {
		position: relative;
	} 
	.el-input-group__prepend {
		text-align-last: justify;
	}
	.login {
		text-align: center; 
		width: 20%;
		height: 20%;
		position: absolute;
		top: 40%;
		left: 50%;
		margin-left: -10%;
		margin-top: -10%; 
		/*border: 1px solid red;*/
	}
	.el-input {
		margin: 15px 0px;
	}
</style>