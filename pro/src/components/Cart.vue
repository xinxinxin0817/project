<template>
	<div>
	
		<Header msg="购物车" class="header" style="background: #ccc;width:100%;height:40px;">
			<router-link to="/cart"><p>购物车</p></router-link>
			<router-link to=""><span>0</span></router-link>

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
				<ul class="like">
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>

				</ul>
			</div>
		</section>
			
		
		
	</div>
</template>

<script>
	export default{
		name:'Shop',
		data(){
			return{
				tit:'购物车'
			}
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
	.like{
	
		width:94%;
		height:100%;
		display: flex;
	
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.like li{
		height:285px;
		width:170px;
	
		margin-bottom:5%;
		display: flex;
		flex-direction: column;
	}
	.like p{
		width:170px;
		height:240px;
		background:#ff0;

	}
	.like span{
		font-size: 12px;
		color:#504e4e;
		width:170px;
		height:45px;
		background:pink;
	}
</style>