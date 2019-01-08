<template>
	<div>

		<Header class="header" msg="登录">
			<div class="sy"><router-link to="" ><span @click="fanhui()">返回</span></router-link></div>
		</Header>

		
		
		<div class="section">
			<mt-field label="手机号" placeholder="请输入手机号" v-model="phonenum"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" v-model="pass" style="border-bottom:1px solid #ccc;width:100%;"></mt-field>

			<mt-button size="normal" type="danger" @click="login()" style="width:80%;margin-left:10%;margin-top:30px;">登录</mt-button>
			
			
		</div>


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
		background:yellow;
		display:flex;
		align-items: center;
	}

	.sy{
		width:10%;
		height:30px;
		line-height: 30px;
		text-align: center;
		background:#ccc;
		font-size:12px;
	}
</style>