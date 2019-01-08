<template>
	<div>
	
		<Header msg="购物车" class="header" style="background: #ccc;width:100%;height:40px;">
			<router-link to="/cart"><p>购物车</p></router-link>
			<router-link to=""><span @click="da()">0</span></router-link>
			<div class="hide1" v-bind:style="[sty]">
				<button class="all">选择全部</button>
				<button class="remove">移除所有商品</button>
			</div>

		</Header>
		
		<section>
			<div class="inclod">
			<div class="cart-list">
				<input type="checkbox" name="ral" class="duoxuan" style="width:20px;height:100px;color:#fff"/>
				<p class="img"><img src="" alt=""></p>
				<div class="jisuan">
					<p class="xiang">now foods 多巴胺豆 美容养颜 胶囊素食见效</p>
					<p class="money">
						<span>￥199</span>

					</p>
				</div>

			</div>
			<div class="cart-list">
				<input type="checkbox" name="ral" class="duoxuan" style="width:20px;height:100px;color:#fff"/>
				<p class="img"><img src="" alt=""></p>
				<div class="jisuan">
					<p class="xiang">now foods 多巴胺豆 美容养颜 胶囊素食见效</p>
					<p class="money">
						<span>￥199</span>
					</p>
				</div>
			</div>
			</div>
			<div class="guess">
				<p>猜你喜欢</p>
				<ul class="like1">
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>

				</ul>
			</div>
			<div class="fixed">
				<div class="fixed1">
					<div class="box1">
						<p>小计</p>
						<span>￥0.00</span>
					</div>
					<div class="box2">
						<p>邮</p>
						<span>￥0.00</span>
					</div>
					<div class="box3">
						<p>税</p>
						<span>￥0.00</span>
					</div>

				</div>
				<div class="fixed2">
				<div class="meme"><input type="checkbox" name="ram" class="quanxuan" style="width:20px;"/>全选</div>
					<div class="xiadan">
						合计:<input type="text" value="￥:" class="jine">
						<router-link to="" style="width:52%;height:40px;"><input type="button" value="下单" class="mai"></router-link>
					</div>
				</div>

			</div>
		</section>
			
		
		
	</div>
</template>

<script>
	export default{
		name:'Shop',
		data(){
			return{
				tit:'购物车',
				sty:{
					display:'none'
				}
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		},
		
		methods:{
			da(){
				if(this.sty.display=="none"){
					console.log("bbb")
					this.sty={
						display:'block'
					}
				}else{
					console.log("aaa")
					this.sty={
						display:'none'
					}
				}
			}
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
		.header{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.header p{
			margin-left:12px;
			color:rgb(78, 76, 76);

		}
		.header span{
			margin-right:12px;
			color:rgb(78, 76, 76);

		}
	section{
		width:100%;
		height:86.4vh;
		display: flex;
		flex:1;
		flex-direction: column;
		overflow:auto;
		
		
	}	
	.inclod{
		background:rgb(248, 239, 239);
		width:100%;
		height:330px;
	}
	.cart-list{
		width:100%;
		height:100px;
		background:#fff;
		margin-top:3%;
		margin-bottom:3%;
		display: flex;
		align-items: center;
	}
	.duoxuan{
		
		background-color:#fff;
		border-radius: 20px;
		margin-left:20px;
		
	}
	.img{
		width:80px;
		height:80px;
		background:pink;
		margin-left:10px;
	}
	.jisuan{
		display: flex;
	
		width:70%;
		height:80%;
		flex-direction: column;
	}
	.xiang{
		margin-left:10px;
		font-size: 14px;
		color:#504e4e;
	}
	.money{
		display: flex;
		justify-content: flex-start;
		margin-top:10px;
		margin-left:5px;
		font-size: 14px;
	}






	.guess{
		 background:#fff; 

		height:100%;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}
	.guess p{
		color:#504e4e;
		height:45px;
		line-height: 45px;
		margin-top:1px;
	}
	.like1{
	
		width:94%;
		height:100%;
		display: flex;
	
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.like1 li{
		height:285px;
		width:170px;
	
		margin-bottom:5%;
		display: flex;
		flex-direction: column;
	}
	.like1 p{
		width:170px;
		height:240px;
		background:#ff0;

	}
	.like1 span{
		font-size: 12px;
		color:#504e4e;
		width:170px;
		height:45px;
		background:pink;
	}
	.fixed{
		width:100%;
		height:110px;
		background:#fff;
		position: absolute;
		left:0;
		top:76%;
		border-radius: 10px 10px 0 0;
	}
	.fixed1{
		height:55px;
		border-bottom:1px solid #cecece;
		border-left:1px solid #cecece;
		border-right:1px solid #cecece;
		border-radius: 20px 20px 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
	}
	.box1{
		width:30%;
		height:40px;
		display: flex;
		align-items: center;
	}
	.box1 p{
		width:40%;
		height:40px;
		background:#ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.box2{
		width:30%;
		height:40px;
		display: flex;
		align-items: center;
	}
	.box2 p{
		width:40%;
		height:40px;
		background:#ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.box3{
		width:30%;
		height:40px;
		display: flex;
		align-items: center;
	}
	.box3 p{
		width:40%;
		height:40px;
		background:#ccc;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fixed2{
		height:54px;
	
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		font-size: 14px;
	}
	.meme{
		width:20%;
		height:40px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
	.xiadan{
		width:40%;
		height:40px;
	
		display: flex;
	
		align-items: center;
	}
	.jine{
		width:36px;
		height:20px;
		border:0;
	}
	.mai{
		width:100%;
		height:40px;
		border:0;
		background:#ccc;
	}
	.hide1{
		width:40%;
		height:80px;
		position:absolute;
		left:60%;
		top:36px;
		background:#fff;
		
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		display: none;
	}
	.hide1 button{
		border:0;
		background:#fff;
		font-size: 14px;
		color:#000;
		padding-left:10px;
	
	}
	
</style>