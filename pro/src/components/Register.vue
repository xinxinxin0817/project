<template>
	<div>

		<Header class="header" msg="注册">
			<div class="sy">
				<router-link to="" >
				<span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;"></span>
				</router-link></div>
				<span class="email">邮箱注册</span>
		</Header>

		
		
		<!-- <div class="section">
			<mt-field label="手机号" placeholder="请输入手机号" v-model="phonenum" style="width:100%"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" v-model="pass"></mt-field>
			<mt-field label="验证码" placeholder="请输入验证码" v-model="yzm"></mt-field>
			
			<mt-button size="normal" type="primary" @click="send()" style="width:80%;margin-left:10%;">发送验证码</mt-button>
			<mt-button size="normal" type="danger" @click="register()" style="width:80%;margin-left:10%;margin-top:2%;">注册</mt-button>
			
			
		</div> -->
		<!-- <section>
			<div class="box2">
				<input type="email" placeholder="请输入邮箱" v-model="email" class="tex">
				<div class="box3">
					<input type="text" placeholder="邮箱验证码" v-model="code" class="txt">
					<button size="normal" type="primary" @click="send()" class="yzm">发送验证码</button>
				</div>
				<input type="password" placeholder="请设置密码" v-model="password" class="pas">
				<router-link to="" style="width:90%;"   ><button @click="register()" class="btn2">注册</button></router-link>
				
			</div>
		</section> -->

			<section>
			<div class="box2">
				<input type="text" placeholder="请输入邮箱" v-model="username" class="tex">
				<div class="box3">
					<!-- <input type="text" placeholder="邮箱验证码" v-model="code" class="txt"> -->
					<!-- <button size="normal" type="primary" @click="send()" class="yzm">发送验证码</button> -->
				</div>
				<input type="password" placeholder="请设置密码" v-model="password" class="pas">
				<router-link to="" style="width:90%;"   ><button @click="register()" class="btn2">注册</button></router-link>
				
			</div>
		</section>

	</div>
</template>

<script>
	import axios from 'axios';
	
	
	export default{
		name:"Register",
		data(){
			return{
				code:'',
				email:'',
				username:'',
				password:'',
				yzm:''
			}
		},
		methods:{
			// send(){
			// 	var _this=this;
			// 	axios({
			// 		method:'get',
			// 		url:'http://10.8.155.66:8081/user/emailcode.do',
			// 		// params:{code:_this.code,id:'1'}
			// 		params:{email:_this.email}
			// 	}).then(function(data){
			// 		console.log(data)

			// 	})
			// },
			send(){
				
			},

			register(){
				var _this=this;
				// axios({
				// 	method:'get',
				// 	url:'http://10.8.155.66:8081/user/register.do',
				// 	params:{email:_this.email,password:_this.password,code:_this.code}
				// }).then(function(data){
				// 	console.log(data)
				// 	if(data.data.code==1000){
				// 		alert("注册成功，跳转登录");
				// 		location.href="#/login"
				// 	}else{
				// 		alert("注册失败，请重新注册");
				// 		location.href="#/register"

				// 	}
				// })

				var _this=this;
				axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/reg.php',
					// params:{code:_this.code,id:'1'}
					params:{username:_this.username,password:_this.password}
				}).then(function(data){
					console.log(data)
						if(data.data.code==1){
						alert("注册成功，跳转登录");
						location.href="#/login"
					}else{
						alert("注册失败，请重新注册");
						location.href="#/register"

					}
				})
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
	}

	.sy{
		width:15%;
		height:30px;
		line-height: 30px;
		
	
	
	}
	.sy span{
		color:#000;
	}
	section{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height:80vh;
	}

	.box2{
		width:83%;
		height:280px;
		
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tex,.pas,.box3{
		width:85%;
		height:50px;
		background:rgb(236, 231, 231);
		border:0;
		padding-left:20px;
		font-size: 16px;
		margin-bottom:15px;
	}
	.txt{
		width:70%;
		height:48px;
		border:0;
		background:rgb(236, 231, 231);
	}
	.yzm{
		background:rgb(236, 231, 231);
		border:1px solid #ccc;
		width:27%;
		height:30px;
	}
	.btn2{
		width:100%;
		height:50px;
		background:rgb(236, 231, 231);
		border:0;
	
		font-size: 16px;
		margin-top:50px;
	}
	.email{
		margin-left:25%;
		font-size: 16px;
	}
</style>