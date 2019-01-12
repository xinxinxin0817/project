<template>
	<div>
		<Header class="header" msg="发现" style="background: #ccc;width:100%;height:40px;">
			发现
		</Header>
		<section class="section">
			<div class="box">
				<div class="b-top">
					<h2 class="b-t-a"><span></span>阿磊</h2>
					<p class="b-t-b">营养健康品全场九折---什么最值得买</p>
					<div class="b-t-c"><router-link v-if="list[3]" to="/allc" style="width:94.6%"><img v-if="list[3]" :src="list[3].pimg" alt="" style="width:100%;height:100%" class="b-t-c1" /></router-link></div>
					<span class="b-t-d">2458人看过</span>
				</div>

				<div class="b-cen">
					<div b-c-l>
						<h2 class="b-c-a"><span></span>YANG</h2>
						<p class="b-c-b">补剂特惠只运动补剂<br/>大类8折介绍！！！</p>
						<span class="b-c-c">健康特惠：48.8元</span>
						<p class="b-c-d">5285人看过</p>
					</div>
					<div class="b-c-r">
						<router-link v-if="list[4]" to="/allc" style="width:100%;"><img v-if="list[4]" :src="list[4].pimg" alt="" style="width:100%;height:100%"  class="b-c-r1" /></router-link>
					</div>
				</div>

				<div class="b-foot">
					<h2 class="b-f-a"><span></span>桐桐</h2>
					<p class="b-f-b">让生活感到幸福,有时候只要花50块钱就可以了</p>
					<div class="b-f-c"><router-link v-if="list[5]" to="/allc" style="width:94.6%"><img v-if="list[5]" :src="list[5].pimg" alt="" style="width:100%;height:100%" class="b-t-c1" /></router-link></div>
					<span class="b-f-d">17.22w人看过</span>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name:'Other',
		data(){
			return{
				tit:'发现',
				title:'',
				img:'',
				jg:'',
				list:[],
				
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
					params:{uid:'14632'}
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
	.header{
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
	.section{
		height:86.4vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		overflow: hidden;
		
	}
	.box{
		height:100%;
		width:100%;
		overflow: auto;
	}
	.b-top{
		margin-top:10px;
		height:300px;
		
	}
	.b-t-a{
		width:97%;
		padding-left:3%;
		font-size:14px;
		height:50px;
		display: flex;
		align-items: center;

	}
	.b-t-a span{
		margin-right:2%;
		display: block;
		background:rgb(202, 204, 200);
		width:30px;
		height:30px;
		border-radius: 50%;
	}
	.b-t-b{
		width:97%;
		padding-left:3%;
		height:30px;
		line-height: 30px;
		font-size: 14px;
	}

	.b-t-c{
		width:100%;
		height:190px;
		display: flex;
		justify-content: center;
	}
	.b-t-c1{
		width:100%;
		height:190px;
		
	}
	.b-t-d{
		width:97%;
		padding-left:3%;
		height:28px;
		line-height: 28px;
		font-size: 14px;
	}

	.b-cen{
		width:97%;
		padding-left:3%;
		height:139px;
		display: flex;
		justify-content: space-between;
		align-items:center; 
	}
	.b-c-l{
		width:40%;
	}
	.b-c-a{
		
		display:flex;
		align-items: center;
		font-size:14px;
	}
	.b-c-a span{
		margin-right:2%;
		display: block;
		background:rgb(202, 204, 200);
		
		width:30px;
		height:30px;
		border-radius: 50%;
	}
	.b-c-b{
	
		font-size:14px;
	}
	.b-c-c{
		
		font-size:12px;
	}
	.b-c-d{
		
		font-size:12px;
	}
	.b-c-r{
		width:58%;
		height:120px;
	}
	.b-c-r1{
		width:100%;
		height:120px;
		
	}



	.b-foot{
		margin-top:10px;
		height:300px;
		
	}
	.b-f-a{
		width:97%;
		padding-left:3%;
		font-size:14px;
		height:50px;
		display: flex;
		align-items: center;

	}
	.b-f-a span{
		margin-right:2%;
		display: block;
		background:rgb(202, 204, 200);
		
		width:30px;
		height:30px;
		border-radius: 50%;
	}
	.b-f-b{
		width:97%;
		padding-left:3%;
		height:30px;
		line-height: 30px;
		font-size: 14px;
	}

	.b-f-c{
		width:100%;
		height:190px;
		display: flex;
		justify-content: center;
	}
	.b-f-c1{
		width:100%;
		height:190px;
		
	}
	.b-f-d{
		width:97%;
		padding-left:3%;
		height:28px;
		line-height: 28px;
		font-size: 14px;
	}
</style>