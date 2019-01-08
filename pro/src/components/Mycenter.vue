<template>

	<div>
		<Header class="header" msg="我的">
			<div class="sy" ><router-link to="/home" ><span >返回首页</span></router-link></div>
		</Header>
		<section class="section">
			<div class="logo"></div>
			<router-link to="/banner">
				<mt-swipe :auto="4000" style="height:200px; margin:0; padding:0;">
					<mt-swipe-item style="background: red;height:200px;">1</mt-swipe-item>
					<mt-swipe-item style="background: yellow;height:200px;">2</mt-swipe-item>
					<mt-swipe-item style="background: pink;height:200px;">3</mt-swipe-item>
					<mt-swipe-item style="background: blue;height:200px;">4</mt-swipe-item>
				</mt-swipe>
			</router-link>

			<!-- <mt-swipe :auto="4000" style="height:200px; margin:0; padding:0;">
				<router-link to="" tag="div"><mt-swipe-item style="background: red;height:200px;">1</mt-swipe-item></router-link>
				<router-link to="" tag="div"><mt-swipe-item style="background: yellow;height:200px;">2</mt-swipe-item></router-link>
				<router-link to="" tag="div"><mt-swipe-item style="background: pink;height:200px;">3</mt-swipe-item></router-link>
				<router-link to="" tag="div"><mt-swipe-item style="background: blue;height:200px;">4</mt-swipe-item></router-link>
			</mt-swipe> -->

			<div class="dlzc">
				<div class="dl-top"><router-link to="/login" style="width:100%"><p>手机号登录</p></router-link></div>
				<div class="dl-foot"><router-link to="/register" style="width:100%"><p>手机号快捷注册</p></router-link></div>
			</div>
		</section>
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'Mycenter',
		data(){
			return{
				tit:'我的'
			}
		},
		methods:{
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
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
	background:yellow;
	padding-left:4%;
	height:50px;
	width:96%;
	display: flex;
	align-items: center;

}
.sy{
	width:15%;
	height:30px;
	line-height: 30px;
	
	
	font-size:12px;
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