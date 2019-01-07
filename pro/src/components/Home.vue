<template>
	<div id="ohome">
		<Header msg="关于" class="header" style="background: #ff0;height:90px;">
			<div class="h-ss" style="height:30px;">
				<router-link to="" style="width:80%;"><input type="text" placeholder="" /></router-link>
			</div>
			<div class="h-ls">
			<router-link to=""><p class="teshu">推荐</p></router-link>
			<router-link to=""><p>草木顺势疗法</p></router-link>
			<router-link to=""><p>沐浴和个人护理</p></router-link>
			<router-link to=""><p>美容美妆</p></router-link>
			</div>

		</Header>
		<!-- <h1>home</h1> -->
		<!-- <h2>{{count}}</h2> -->
		<!-- <ul>
			<li v-for="(item,home) in list" :key="home"><router-link :to="'/detail/'+item.pid">{{item.pname}}</router-link></li>
		</ul> -->
<section class="section">
		<!--轮播-->
		<div class="ddd">
		<mt-swipe :auto="4000" style="height:166px; margin:0; padding:0;">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		   <mt-swipe-item style="background: blue;">4</mt-swipe-item>
		</mt-swipe>
		<!--轮播结束-->
		
		<!---->
		<div class="fl">
			<dl>
				<dt>图片</dt>
				<dd>特价产品</dd>
			</dl>
			<dl>
				<dt>图片</dt>
				<dd>尖货排名</dd>
			</dl>
			<dl>
				<dt>图片</dt>
				<dd>新品上架</dd>
			</dl>
			<dl>
				<dt>图片</dt>
				<dd>限时抢购</dd>
			</dl>
		</div>
		<!---->

		<!---->
		<div class="th-fu">
			<h2 class="mzth"><span></span><em>每周特惠</em><span></span></h2>
		</div>
		<div class="th-list">
			<router-link to=""><p>1</p></router-link>
			<router-link to=""><p>2</p></router-link>
			<router-link to=""><p>3</p></router-link>
		</div>
		<!---->
		<!--产品建议开始-->
			<div class="cpjy">
				<h2 class="cp-top"><span>产品建议</span> <router-link class="gd" to="" tag="span">更多》</router-link></h2>
				<div class="cp-cen">
					<router-link to="" style="width:40%"><p>3</p></router-link>
					<router-link to="" style="width:40%"><p>4</p></router-link>
				</div>
				<div class="cp-foot">
					<router-link to="" style="width:40%"><p>1</p></router-link>
					<router-link to="" style="width:40%"><p>2</p></router-link>
				</div>
			</div>
		<!--产品建议结束-->
	</div>
</section>
	</div>
</template>

<script>
	import axios from 'axios';

	import {mapGetters,mapActions} from 'vuex';
	export default {
		name:"Home",
		data(){
			return{
				str:'hello world vuejiashoujia',
				tit:'首页',
				list:[]
			}
		},
		computed:{
			...mapGetters(['count'])
		},
		methods:{
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
			var _this=this;
			// axios({
			// 	method:'get',
			// 	url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
			// 	params:{uid:'11475'}
			// }).then((data)=>{
			// 	_this.list=data.data.data
			// })
			
			
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
	h1{
		color: yellow;
	}
	li{
		height: 50px;
		border-bottom: 1px solid red;
	}
	.section{
		height:79vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		overflow: hidden;
		
	}
	.ddd{
		height:100%;
		width:100%;
		overflow: auto;
	}
	.header{
		width:100%;
		flex: 0;
		display: flex;
		flex-direction: column;
		
	}
	.h-ss{
		margin-top:13px;
		width:100%;
	
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.h-ss input{
		width:100%;
		height:30px;
		border-radius: 4px;
		border:0;
	}
	.h-ls{
		height:50px;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.header p:hover{
		border-bottom:4px solid #cecece;
	}


	.fl{
		font-size:14px;
		padding-top:20px;
		height:90px;
		display: flex;
		justify-content: space-around;
	}
	.fl dt{
		width:55px;
		height:55px;
		background:red;
		border-radius: 50%;
		margin-bottom:10px;
	}
	.th-fu{
		display: flex;
		justify-content: space-around;
	}
	.mzth{
		width:200px;
		background:red;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size:16px;
		height:50px;
		
	}
	.mzth span{
		display:block;
		height:1px;
		width:40px;
		background:#000;
	}

	.th-list{
		display: flex;
		justify-content: space-around;
		background:yellow;	
	}
	.th-list p{
		width:110px;
		height:110px;
		background:blue;
	}
	 .cpjy{
		 margin-top:20px;
		height:310px;
		background:pink;
	 }
	.cp-top{
		width:90%;
		padding:0 5%;
		background:green;
		height:50px;
		font-size:16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cp-cen{
		
		width:100%;
		display: flex;
		justify-content: space-around;
	}
	.cp-cen p{
		background:red;
		width:100%;
		height:100px;
	}

	.cp-foot{
		margin-top:13px;
		width:100%;
		display: flex;
		justify-content: space-around;
	}
	.cp-foot p{
		background:red;
		width:100%;
		height:100px;
	}
</style>