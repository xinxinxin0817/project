<template>
	<div>
			
		<section>
			
			<ul class="list-h">
				<li v-for="(item,health) in list" :key="health" :pid="item.pid"><router-link style="width:100%;"  :to="'/details/'+item.pid"><p><img :src="item.pimg" alt=""></p><span>{{item.pname}}</span></router-link></li>
				
				
			</ul>

		</section>
		
		
		
		
	</div>
</template>

<script>
		import axios from 'axios';
		import Mock from 'mockjs'

		// Mock.mock('http://www.aaa.com',{
		// 	'users|10-20':[
		// 		{
		// 			"pid|+1":1,
		// 			"img":"@image('110x120')",
		// 			"title":"@ctitle()",
					
		// 		}
		// 	]
		// })


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
			var _this=this;

			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
					params:{uid:'11475'}
				}).then((data)=>{
					console.log(data.data.data)
					this.list=data.data.data
				})
		},
		methods:{
			
		}
	}
</script>

<style scoped="">
a{
	text-decoration: none;
}
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
	.list-h{
		width:94%;
		height:100%;
		 
		
		overflow: auto;
		flex:1;
		flex-wrap:wrap ;
		
		
	}
	.list-h li{
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
	.list-h li p{
		width:100%;
		height:120px;
		background:chartreuse;
	}
	.list-h p img{
		width:100%;
		height:120px;
	}
	.list-h li span{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		color:rgb(102, 101, 101);
		display:block;
		width:100%;
		height:28px;
		background:#fff;
		line-height: 28px;
		text-align: center;
	}
	
</style>