<template>
	<div>
			
		<section>
			
			<ul class="list-h">
				<router-link to="/details"><li v-for="(item,health) in list" :key="health"><p><img :src="item.img1" alt=""></p><span>{{item.title1}}</span></li></router-link>
				
				
			</ul>

		</section>
		
		
		
		
	</div>
</template>

<script>
		import axios from 'axios';
		import Mock from 'mockjs'

		Mock.mock('http://www.aaa.com',{
			'users|10-20':[
				{
					"img1":"@image('110x120')",
					"title1":"@ctitle()"
				}
			]
		})


	export default{
		name:'Health',
		data(){
			return{
				tit:'关于',
				list:[]
			}
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
		},
		methods:{
			tap(){
				
			}
		}
	}
</script>

<style scoped="">
    *{
        margin:0;
        padding:0;
    }
	section{
		display: flex;
		height:79vh;
		flex-direction: column;
		overflow: auto;
		background:rgb(248, 246, 246);
		width:100%;
		flex:1;
	    justify-content: center;
		align-items: center;
	}
	section ul{
		width:94%;
		height:100%;
		 
		
		overflow: auto;
		flex:1;
		flex-wrap:wrap ;
		
		
	}
	section li{
		float:left;
		width:110px;	
		height:150px;
		background:#fff;
		margin-top:10px;
		margin-left:5px;
		list-style: none;
        border:0;
        border:1px solid #ccc;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		color:rgb(43, 41, 41);
	}
	.list-h p{
		width:100%;
		height:120px;
		background:chartreuse;
	}
	.list-h span{
		width:100%;
		height:28px;
		background:#fff;
		line-height: 28px;
		text-align: center;
	}
	
</style>