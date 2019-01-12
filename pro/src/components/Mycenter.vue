<template>

	<div>
		<Header class="header" msg="我的">
			<div class="sy" ><router-link to="/home" ><span  class="iconfont icon-fanhui" style="color:#000;font-size:20px;"></span></router-link></div>
		</Header>
		<section class="section">
			<!-- <div class="logo"></div> -->
			<router-link to="">
				<mt-swipe :auto="4000" style="height:200px; margin:0; padding:0;margin-top:10%">
					<mt-swipe-item style="background: red;height:200px;" v-for="(item,home) in list1" :key="home"><img :src="item.banner_img_url" style="width:100%;height:200px;"></mt-swipe-item>
					<!-- <mt-swipe-item style="background: yellow;height:200px;"></mt-swipe-item>
					<mt-swipe-item style="background: pink;height:200px;"></mt-swipe-item>
					<mt-swipe-item style="background: blue;height:200px;"></mt-swipe-item> -->
				</mt-swipe>
			</router-link>

			<!-- <mt-swipe :auto="4000" style="height:200px; margin:0; padding:0;">
				<router-link to="" tag="div"><mt-swipe-item style="background: red;height:200px;">1</mt-swipe-item></router-link>
				<router-link to="" tag="div"><mt-swipe-item style="background: yellow;height:200px;">2</mt-swipe-item></router-link>
				<router-link to="" tag="div"><mt-swipe-item style="background: pink;height:200px;">3</mt-swipe-item></router-link>
				<router-link to="" tag="div"><mt-swipe-item style="background: blue;height:200px;">4</mt-swipe-item></router-link>
			</mt-swipe> -->

			<div class="dlzc">
				<div class="dl-top"><router-link to="/login" style="width:100%"><p style="color:#000">邮箱登录</p></router-link></div>
				<div class="dl-foot"><router-link to="/register" style="width:100%"><p  style="color:#000">邮箱快捷注册</p></router-link></div>
			</div>
		</section>
		
		
		
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Mycenter',
		data(){
			return{
				tit:'我的',
				title:'',
				img:'',
				jg:'',
				list:[],
				list1:[]
			}
		},
		methods:{
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/bannerlist.php?uid=227',
					params:{uid:'14632'}
				}).then((data)=>{
					console.log(data.data.data)
					_this.list1=data.data.data
					_this.title=data.data.data.pname
					_this.jg=data.data.data.pprice
					
				})
		}
	}
</script>

<style scoped="">
*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
.header{

	padding-left:4%;
	height:50px;
	width:96%;
	display: flex;
	align-items: center;
	background:rgb(248, 248, 246);
}
.sy{
	width:15%;
	height:30px;
	line-height: 30px;
	
	
	font-size:16px;
}
.sy span{
	margin-left:0px;
}


.logo{
	width:100%;
	height:100px;
	background:#cfcfcf;
	margin-bottom:46px;
}
.dlzc{
	margin-top:80px;
	height:100px;
	width:100%;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	
}
.dl-top{
	font-size:14px;
	width:70%;
	height:40px;
	background:#ccc;
	line-height: 40px;
	text-align: center;
}
.dl-foot{
	font-size:14px;
	width:70%;
	height:40px;
	background:#ccc;
	line-height: 40px;
	text-align: center;
}
</style>