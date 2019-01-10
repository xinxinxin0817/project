<template>
	<div>

		<Header class="header" msg="登录">
			
				<router-link to="" ><span @click="fanhui()" class="top-a">返回</span></router-link>
				<span style="" class="top-b">登录</span>
				<router-link to="/register" ><span class="top-c">注册</span></router-link>

			
		</Header>
		
		
<!-- 		
		<div class="section">
			<mt-field label="手机号" placeholder="请输入手机号" v-model="phonenum"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" v-model="pass" style="border-bottom:1px solid #ccc;width:100%;"></mt-field>

			<router-link to="/logina"><mt-button size="normal" type="danger" @click="login()" style="width:80%;margin-left:10%;margin-top:30px;">登录</mt-button></router-link>
			
			
		</div> -->
		<section>
			<div class="box1">
				<input type="text" placeholder="请输入邮箱" class="tex">
				<input type="password" placeholder="密码" class="pas">
				<router-link to="/logina" style="width:90%;"><button>登录</button></router-link>
			</div>
		</section>


	</div>
</template>

<script>
	import axios from 'axios';
	
	
	export default{
		name:"Login",
		data(){
			return{
				phonenum:'',
				pass:'',
				yzm:''
			}
		},
		methods:{
			
			login(){
				var _this=this;
				// axios({
				// 	method:'post',
				// 	url:'http://localhost:3000/login',
				// 	params:{phonenum:_this.phonenum,pass:_this.pass}
				// }).then(function(data){
				// 	console.log(data.data)
				// })
			},
		
			fanhui(){
				this.$router.go(-1)
			}
	
		}
	}
</script>

<style scoped="">

a{
	text-decoration: none;
}
	.header{
		padding-left:4%;
		width:96%;
		height:50px;
		background:rgb(248, 248, 246);
		display:flex;
		align-items: center;
		justify-content: space-between;
		

	}
	.top-a{
		margin-left:10px;
		width:50px;
		height:30px;
		line-height: 30px;
		text-align: center;
		color:#000;
		
	}
	.top-c{
		margin-right:20px;
		color:#000;

	}
	section{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height:80vh;
	}
	.box1{
		width:83%;
		height:262px;
		
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.box1 input{
		width:85%;
		height:50px;
		background:rgb(236, 231, 231);
		border:0;
		padding-left:20px;
		font-size: 16px;
		margin-bottom:15px;
	}
	.box1 button{
		width:100%;
		height:50px;
		background:rgb(236, 231, 231);
		border:0;
	
		font-size: 16px;
		margin-top:50px;
	}



	
</style>