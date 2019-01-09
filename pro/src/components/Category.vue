<template>
	<div>
		
		<section>
			<div class="left">
				<router-link to="" ><p @click="da()">补充剂</p></router-link>
				<router-link to="" ><p @click="db()">草本和顺势疗法</p></router-link>
				<router-link to=""><p @click="dc()">沐浴和个人护理</p></router-link>
				<router-link to=""><p @click="dd()">美容</p></router-link>
				<router-link to=""><p @click="de()">运动营养</p></router-link>
				<router-link to=""><p @click="df()">食品百货</p></router-link>
				<router-link to=""><p @click="dg()">婴幼儿</p></router-link>
				<router-link to=""><p @click="dh()">家具</p></router-link>
				<router-link to=""><p @click="di()">宠物</p></router-link>

			</div>
			<div class="right" style="width:78%">
				
				<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
				<mt-swipe-item style="background: red;"></mt-swipe-item>
				<mt-swipe-item style="background: yellow;"></mt-swipe-item>
				<mt-swipe-item style="background: pink;"></mt-swipe-item>
				<mt-swipe-item style="background: blue;"></mt-swipe-item>
				</mt-swipe>
				
				<div class="look">
					<h2>最近查看的</h2>
					<span>Senior Health</span>
					<span>维生素</span>
			    </div>
				<div class="cate-list">
					<h6>{{str}}</h6>
					<router-link to=""><span>查看全部</span></router-link>
				</div>
				<ul>
				<router-link to="/details"><li v-for="(item,category) in list" :key="category"><p><img :src="item.img" alt=""></p><span>{{item.title}}</span></li></router-link>
				
				
					
				</ul>
			</div>
			
			
		</section>
		
		
		
		
	</div>
</template>

<script>

		import axios from 'axios';
		import Mock from 'mockjs'


		Mock.mock('http://www.aaa.com',{
			'users|7-10':[
				{
					"img":"@image('84x100')",
					"title":"@ctitle()"
				}
			]
		})
	export default{
		name:'Category',
		
		data(){
			return{
				tit:'关于',
				str:"补充剂",
				list:[]
			}
		},
		methods:{
			da(){
				this.str="补充剂"
			},
			db(){
				this.str="草本和顺势疗法"
			},
			dc(){
				this.str="沐浴和个人护理"
			},
			dd(){
				this.str="美容"
			},
			de(){
				this.str="运动营养"
			},
			df(){
				this.str="食品百货"
			},
			dg(){
				this.str="婴幼儿"
			},
			dh(){
				this.str="家具"
			},
			di(){
				this.str="宠物"
			},

		},
		mounted(){
			this.$emit('toparent',this.tit)
			axios({
					method:'get',
					url:"http://www.aaa.com"
				}).then((data)=>{
					console.log(data.data.users)
					this.list=data.data.users
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
	li{
		list-style: none;
	}
	section{
		display: flex;
		height:79vh;
		overflow: auto;
		width:100%;
		flex:1;
		border-top:1px solid #ccc;
	   
	}
	section .left{
		width:22%;
	
		
		overflow: auto;
		 display: flex; 
		 flex-direction: column;
		 
	
	}
	section p{

		width:80%;
		height:45px;
		padding-left:10px;
		color:rgb(78, 76, 76);
	
		word-break: break-all;
		font-size: 12px;
		margin-top:5px;
	
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center; 
		
	}
	section p:hover{
		border-left:4px solid #cecece;
	}
	section .right{
		display: flex;
		flex-direction: column;
		align-items: center;
		border-left:1px solid #ccc;
		height:100%;
	}
	section .look{
		width:100%;
		height:40px;
		margin-left:5%;
		margin-top:3%;
		
	}
	section .look h2{
		font-size: 12px;
		color:rgb(78, 76, 76);
		
		margin-bottom:1%;
	}
	.look span{
		width:10%;
		height:30px;
		border:1px solid #ccc;
		border-radius: 4px;
		font-size: 12px;
		text-align: center;
		line-height: 30px;
		padding:3px 3px;
		color:rgb(78, 76, 76);
	
	}
	.cate-list{
		width:95%;
	
		height:50px;
		display: flex;
		justify-content: space-between;
		margin-top:5%;
		line-height: 50px;
	}
	.cate-list h6{
		color:#ccc;
		font-size: 20px;
		font-weight: 500;

	}
	.cate-list span{
		font-size: 12px;
		color:#ccc;
	}
	.right ul{
		width:95%;
		height:100%;	 
		display: flex;
	
		flex:1;
		flex-wrap:wrap ;
		justify-content: space-between;
	
	}
	.right li{
		width:84px;	
		height:116px;
		float:left;
		margin:5px 3px;
	
		margin-bottom:10px;
		list-style: none;
        border:0;
        border:1px solid #ccc;
		display: flex;
		flex-direction: column;
	}
	.right li p{
		width:84px;
		height:100px;
		padding:0;
		margin:0;
	}
	.right li span{
		width:84px;
		height:16px;
		line-height: 16px;
		background:#fff;
		text-align: center;
		color: rgb(66, 64, 64);
		font-size: 12px;
	}
</style>