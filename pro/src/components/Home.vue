<template>
	<div id="ohome">
		<Header msg="关于" class="header" style="background: #fff;height:90px;">
			<div class="h-ss" style="height:30px;">
				<router-link to="" style="width:80%;">
					<input type="text" placeholder="搜索产品" />
					</router-link>
			</div>
			<div class="h-ls">
			<router-link to="/home"><p class="teshu">推荐</p></router-link>
			<router-link to="/category"><p>草木顺势疗法</p></router-link>
			<router-link to="/category"><p>沐浴和个人护理</p></router-link>
			<router-link to="/category"><p>美容美妆</p></router-link>
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
			<router-link to="/banner">
		<mt-swipe :auto="4000" style="height:166px; margin:0; padding:0;">
		  <mt-swipe-item style="background: red;" v-for="(item,home) in list" :key="home"><img :src="item.pimg" style="width:100%;height:166px;"></mt-swipe-item>
		  <!-- <mt-swipe-item style="background: yellow;"></mt-swipe-item>
		  <mt-swipe-item style="background: pink;"></mt-swipe-item>
		   <mt-swipe-item style="background: blue;"></mt-swipe-item> -->
		</mt-swipe>
		</router-link>
		<!--轮播结束-->
		
		<!---->
		<div class="fl">
		
			<dl>
				<router-link to="/allc">
					<dt><img  v-if="list[3]" :src="list[3].pimg" alt=""></dt>
					<dd>特价产品</dd>
				</router-link>
			</dl>
		
			
			<dl>
				<router-link to="/allc">	
					<dt><img  v-if="list[2]" :src="list[2].pimg" alt=""></dt>
					<dd>尖货排名</dd>
				</router-link>
			</dl>
	

		
			<dl>
				<router-link to="/allc">	
					<dt><img  v-if="list[1]" :src="list[1].pimg" alt=""></dt>
					<dd>新品上架</dd>
				</router-link>
			</dl>
		

	
			<dl>
				<router-link to="/allc">	
					<dt><img  v-if="list[0]" :src="list[0].pimg" alt=""></dt>
					<dd>限时抢购</dd>
				</router-link>
			</dl>
		

		</div>
		<!---->

		<!---->
		<div class="th-fu">
			<h2 class="mzth"><span></span><em>每周特惠</em><span></span></h2>
		</div>
		<div class="th-list">
			<router-link  v-if="list[0]" :to="'/details/'+list[0].pid" style="width:30%"><p><img  v-if="list[0]" :src="list[0].pimg" alt=""></p></router-link>
			<router-link  v-if="list[1]" :to="'/details/'+list[1].pid" style="width:30%"><p><img  v-if="list[1]" :src="list[1].pimg" alt=""></p></router-link>
			<router-link  v-if="list[2]" :to="'/details/'+list[2].pid" style="width:30%"><p><img  v-if="list[2]" :src="list[2].pimg" alt=""></p></router-link>
		</div>
		<!---->
		<!--产品建议开始-->
			<div class="cpjy">
				<h2 class="cp-top"><span>产品建议</span> <router-link class="gd" to="/more" tag="span" style="font-size:14px;"><p @click="more1()">更多</p></router-link></h2>
				<div class="cp-cen">
					<router-link  v-if="list[0]" :to="'/details/'+list[0].pid" style="width:40%"><p><img  v-if="list[0]" :src="list[0].pimg" alt=""></p></router-link>
					<router-link  v-if="list[1]" :to="'/details/'+list[1].pid" style="width:40%"><p><img  v-if="list[1]" :src="list[1].pimg" alt=""></p></router-link>
				</div>
				<div class="cp-foot">
					<router-link  v-if="list[2]" :to="'/details/'+list[2].pid" style="width:40%"><p><img  v-if="list[2]" :src="list[2].pimg" alt=""></p></router-link>
					<router-link  v-if="list[3]" :to="'/details/'+list[3].pid" style="width:40%"><p><img  v-if="list[3]" :src="list[3].pimg" alt=""></p></router-link>
				</div>
			</div>
		
		<!--产品建议结束-->
		<!--bander-->

		<div class="banner">
				banner
		</div>
		<!--bander-->


		<!--今日热门-->
			<div class="jrrm">
				<h2 class="rm-top"><span>今日热门</span> <router-link class="gd1" to="/more" tag="span" style="font-size:14px;"><p @click="more2()">更多</p></router-link></h2>
				<div class="rm-foot">
					<router-link  v-if="list[0]" :to="'/details/'+list[0].pid" style="width:28%">
						<dl>
							<dt><img  v-if="list[0]" :src="list[0].pimg" alt=""></dt>
							<dd>{{list[0].pname}}</dd>
						</dl>
					</router-link>
					<router-link  v-if="list[1]" :to="'/details/'+list[1].pid" style="width:28%">
						<dl>
							<dt><img  v-if="list[1]" :src="list[1].pimg" alt=""></dt>
							<dd>{{list[1].pname}}</dd>
						</dl>
					</router-link>
					<router-link  v-if="list[2]" :to="'/details/'+list[2].pid" style="width:28%">
						<dl>
							<dt><img  v-if="list[2]" :src="list[2].pimg" alt=""></dt>
							<dd>{{list[2].pname}}</dd>
						</dl>
					</router-link>
				
				</div>
			</div>
		<!--今日热门结束-->

		<!--限时购-->
			<div class="xsg">
				<h2 class="xsg-top"><span>限时购</span> <router-link class="gd2" to="/more" tag="span" style="font-size:14px;">更多 >></router-link></h2>
				<div class="xsg-foot">
					<router-link  v-if="list[0]" :to="'/details/'+list[0].pid" style="width:28%">
						<dl>
							<dt><img  v-if="list[0]" :src="list[0].pimg" alt=""></dt>
							<dd>{{list[0].pname}}</dd>
						</dl>
					</router-link>
					<router-link  v-if="list[3]" :to="'/details/'+list[3].pid" style="width:28%">
						<dl>
							<dt><img  v-if="list[3]" :src="list[3].pimg" alt=""></dt>
							<dd>{{list[3].pname}}</dd>
						</dl>
					</router-link>
					<router-link  v-if="list[2]" :to="'/details/'+list[2].pid" style="width:28%">
						<dl>
							<dt><img  v-if="list[2]" :src="list[2].pimg" alt=""></dt>
							<dd>{{list[2].pname}}</dd>
						</dl>
					</router-link>
				
				</div>
			</div>

		<!--限时购end-->

		<!--健康建议-->
			<div class="jkjy">
				<h2 class="jk-top">健康建议</h2>
					<router-link to="/title" style="display:flex;flex-direction:row;">
				<div class="jk-foot">
				<dl>
						<dt></dt>
						<dd>
							<h3>肠胃保健汤</h3>
							<p>健康建议肠胃保健汤肠胃保健汤</p>
						</dd>
					</dl>
				<dl>
						<dt></dt>
						<dd>
							<h3>肠胃保健汤</h3>
							<p>健康建议肠胃保健汤肠胃保健汤</p>
						</dd>
					</dl>
				</div>
				</router-link>
			</div>

		<!--健康建议end-->
		
		<!--健康建议end-->	
	</div>
	
</section>
	
	</div>
	
</template>
<script>
	
	import axios from 'axios';
		import Mock from 'mockjs'

		// Mock.mock('http://www.ddd.com',{
		// 	'users|4':[
		// 		{
		// 			"img":"@image('')",
					
		// 		}
		// 	]
		// })


	import {mapGetters,mapActions} from 'vuex';
	export default {
		name:"Home",
		data(){
			return{
				str:'hello world vuejiashoujia',
				tit:'首页',
				title:'',
				img:'',
				jg:'',
				list:[],
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
			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
					params:{uid:'11475'}
				}).then((data)=>{
					console.log(data.data.data)
					_this.list=data.data.data
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
		border:1px solid #ccc;
		text-align: center;
		line-height: 30px;
		margin-top:15px;
	}
	.h-ls{
		height:50px;
		width:100%;
		display: flex;	
		justify-content: space-around;
	}
	.h-ls p{
		font-size: 14px;
		height:46px;
		line-height: 70px;
		color:rgb(34, 32, 32);
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
		background:rgb(182, 178, 178);
		border-radius: 50%;
		margin-bottom:10px;
	}
	.fl dt img{
		width:100%;
		height:100%;
		border-radius: 50%;
	}
	.fl dd{
			color:rgb(37, 36, 36);
	}
	.th-fu{
		display: flex;
		justify-content: space-around;
	}
	.mzth{
		width:200px;
		
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size:16px;
		height:50px;
		
		
	}
	.mzth em{
		font-style:normal;
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
			
	}
	.th-list p{
		width:100%;
		height:110px;
		
	}
	.th-list p img{
		width:100%;
		height:100%;
	}
	/*产品建议*/
	 .cpjy{
		 margin-top:20px;
		height:280px;
		background:rgb(248, 244, 245);
	 }
	.cp-top{
		width:90%;
		padding:0 5%;
		background:rgb(245, 248, 245);
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
		
		width:100%;
		height:100px;
	}
	.cp-cen p img{
		width:100%;
		height:100%;
	}

	.cp-foot{
		margin-top:13px;
		width:100%;
		display: flex;
		justify-content: space-around;
	}
	.cp-foot p{
		
		width:100%;
		height:100px;
	}
	.cp-foot p img{
		width:100%;
		height:100%;
	}
	/*产品建议end*/


	/*banner*/
	.banner{
		margin:30px 0;
		width:100%;
		height:55px;
		background:red;
	}
	/*banner end*/
	/*今日热门*/
		 .jrrm{
		 margin-top:20px;
		height:211px;
		background:rgb(251, 249, 249);
	 }
	.rm-top{
		width:90%;
		padding:0 5%;
		background:rgb(246, 248, 246);
		height:50px;
		font-size:16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.rm-foot{
		
		width:100%;
		display: flex;
		justify-content: space-around;
	}
	.rm-foot dt{
	
		width:100%;
		height:100px;
	}
	.rm-foot dd{
		font-size:14px;
		height:34px;
		line-height: 34px;
		color:#000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.rm-foot dt img{
		width:100%;
		height:100%;
	}

	/*今日热门end*/

	/*限时购*/
		 .xsg{
		 margin-top:20px;
		height:211px;
		background:rgb(250, 246, 247);
	 }
	.xsg-top{
		width:90%;
		padding:0 5%;
		background:rgb(243, 248, 243);
		height:50px;
		font-size:16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.xsg-foot{
		
		width:100%;
		display: flex;
		justify-content: space-around;
	}
	.xsg-foot dt{
	
		width:100%;
		height:100px;
	}
	.xsg-foot dd{
		color:#000;
		font-size:14px;
		height:34px;
		line-height: 34px;		
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.xsg-foot dt img{
		width:100%;
		height:100%;
	}

	/*限时购end*/
	/*健康建议*/
	.jkjy{
		height:220px;
	
		display: flex;
		flex-direction: column;
	}
	.jk-top{
		height:50px;
		width:95%;
		padding-left:5%;
		font-size:16px;
		line-height:50px;
	}
	.jk-foot{
		width:100%;
		height:170px;
	
		display: flex;
		flex-direction:row
	}
	.jk-foot dl{
		width:45%;
		margin-left:4%;
	}
	.jk-foot dt{
		background:blue;
		width:100%;
		height:100px;
	}
	.jk-foot dd h3{
		font-size:14px;
	}
	.jk-foot dd p{
		font-size:12px;
	}

	/*健康建议end*/
</style>