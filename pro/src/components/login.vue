<template>
	<div>

		<Header class="header" msg="登录">
			
				<router-link to="" ><span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;"></span></router-link>
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
				<!-- <input type="text" placeholder="请输入邮箱" v-model="email" class="tex"> -->
				<input type="text" placeholder="请输入邮箱" v-model="username" class="tex">
				<input type="password" placeholder="密码" v-model="password" class="pas">
				<router-link to="" style="width:90%;"><button  @click="login()">登录</button></router-link>
			</div>
		</section>


	</div>
</template>

<script>
		function getCookie(name){
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i = 0; i < arr.length; i++){
				var arr1 = arr[i].split("=");
				if(arr1[0]==name){
					return arr1[1];
				}
			}
		}
		function setCookie(name,val,n){
			var oDate = new Date();
			oDate.setDate(oDate.getDate()+n);
			document.cookie = name + "=" + val + ";expires="+ oDate ;
		}
		function removeCookie(name){
			setCookie(name,1,-1);
		}




	import axios from 'axios';
	
	
	export default{
		name:"Login",
		data(){
			return{
				username:'',
				email:'',
				password:'',
				yzm:''
			}
		},
		methods:{
			
			// login(){
			// 	var _this=this;
			// 	axios({
			// 		method:'get',
			// 		url:'http://10.8.155.66:8081/user/login.do',
			// 		params:{email:_this.email,password:_this.password}
			// 	}).then(function(data){
			// 		console.log(data)
			// 		if(data.data.code==1000){
			// 			//setCookie("token",data.data.token,{expires:30});
			// 			alert("登录成功，跳转个人主页");
			// 			location.href="#/logina"

			// 		}else{
			// 			alert("登录失败，请重新登录");
			// 			location.href="#/login"

			// 		}
			// 	})
			// },

			login(){
				var value=$('.tex').val();
				if(value==""){
					alert("请输入用户名")
					return
			
				}
				var _this=this;
				axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/login.php',
					params:{username:_this.username,password:_this.password}
				}).then(function(data){
					console.log(data)
					if(data.data.code==1){
						setCookie("token",data.data.data.id,{expires:30});
						setCookie("mingzi",data.data.data.username,{expires:30});
						alert("登录成功，跳转主页");
						location.href="#/home"

					}else{
						alert("登录失败，请重新登录");
						location.href="#/login"

					 }
				})
			},
		
			fanhui(){
				location.href="/home"
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