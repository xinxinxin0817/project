<template>

	<div>
		<Header class="header" msg="我的">
			<div class="h-top">
				<div class="sy" ><router-link to="/home" ><span style="font-size:22px;" class="fh1">&lt;</span><em class="fh2">《</em></router-link></div>
				<div class="sy1" ><router-link to="/home" ><span class="sp">商品</span><em class="xq">详情</em></router-link></div>
				<div class="sy2" ><router-link to="/cart" style="width:100%;"><span class="osy">首页</span><em class="fx">分享</em></router-link></div>
			</div>
		</Header>
		<section class="section">
			<div class="ddd">
				<router-link to="/banner">
					<mt-swipe :auto="4000" style="height:135px; margin:0; padding:0;">
						<mt-swipe-item style="background: red;">1</mt-swipe-item>
						<mt-swipe-item style="background: yellow;">2</mt-swipe-item>
						<mt-swipe-item style="background: pink;">3</mt-swipe-item>
					</mt-swipe>
				</router-link>

				
					<div class="box">
					
						<div class="b-r">
							<p class="b-r-t">Super Omega-3 Gems,<br/>1200毫克，100+30粒软胶囊</p>
							<p class="b-r-f"><span>￥56.09</span></p>
						</div>
						<div class="b-l">
							<div class="b-l-top">
								<p class="b-l-t1">99%<br/>好评率</p>
							
								<p class="b-l-foot">购买最高可获2积分</p>
							</div>
						</div>
						<div class="b-c-r">></div>
					
					</div>

					<div class="list">
						<ul class="alist">
							<li class="al-a">
								<span>已选</span>
								<span>10毫克</span>
								<span>X1</span>
								<span>></span>
							</li>
							<li class="al-b">
								<span>促销</span>
								<span>积分可兑换</span>
								<span>></span>
							</li>
							<li class="al-c">
								<span>配送</span>
								<span>至郑州二七区海为科技园千锋教育C区12楼</span>
								<span>></span>
							</li>
							<li class="al-d">
								
								<span>国内部分地区不配送 　进口商品存在运输关税</span>
								<span>></span>
							</li>
						</ul>
					</div>

					<div class="banner">
							banner活动
					</div>
					<div class="yhpj">
						<p class="yh-top"><span>用户评价（319）</span><span>99%好评率》</span></p>
						<div class="yh-foot">
							<h2 class="b-t-a"><span></span>小***</h2>
							<p>2018.12.10 10:22 10毫克</p>
							<p>产品不错，给老人买的。效果可以以后会再买！</p>
						</div>
					</div>

			</div>
	
		</section>
		
		
		
		
	</div>
</template>

<script>


	export default{
		name:'Details',
		data(){
			return{
				tit:'所有商品'
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
.yh-foot{
	height:195px;
	width:100%;
}
.yh-foot p:nth-child(2){
	width:95%;
	padding-left:5%;
	font-size:12px;
	height:30px;
	line-height: 30px;
}
.yh-foot p:nth-child(3){
	width:95%;
	padding-left:5%;
	height:30px;
	line-height: 30px;
}

.b-t-a{
		width:95%;
		padding-left:5%;
		font-size:14px;
		height:50px;
		display: flex;
		align-items: center;

	}
	.b-t-a span{
		margin-right:2%;
		display: block;
		background:red;
		width:40px;
		height:40px;
		border-radius: 50%;
	}

.yhpj{
	height:235px;
	width:100%;
	background:green;
	border-bottom:5px solid #ccc;
}
.yh-top{
	width:100%;
	height:38px;
	line-height: 38px;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
}
.yh-top span:first-child{
	display: inline-block;
	width:50%;
	text-align: center;
}
.yh-top span:last-child{
	font-size: 15px;
	display: inline-block;
	width:50%;
	text-align: center;
}

.banner{
	text-align: center;
	line-height: 53px;
	background:yellow;
	width:100%;
	height:53px;
	border-top:5px solid #ccc;
	border-bottom:5px solid #ccc;
}
.al-d{
	width:100%;
	height:41px;
}
.al-d span:nth-child(1){
	display: inline-block;
	width:88%;
	text-align: center;
	font-size: 14px;
}
.al-d span:nth-child(2){
	display: inline-block;
	width:10%;
	text-align: left;
	font-size: 20px;
}

.al-c{
	width:100%;
	height:41px;
}
.al-c span:nth-child(1){
	display: inline-block;
	width:18%;
	text-align: center;
}
.al-c span:nth-child(2){
	display: inline-block;
	width:65%;
	text-align: center;
	font-size: 12px;
}
.al-c span:nth-child(3){
	display: inline-block;
	width:8%;
	text-align: right;
	font-size: 20px;
}


.al-b{
	width:100%;
	height:41px;
}
.al-b span:nth-child(1){
	display: inline-block;
	width:18%;
	text-align: center;
}
.al-b span:nth-child(2){
	display: inline-block;
	width:28%;
	text-align: center;
}
.al-b span:nth-child(3){
	display: inline-block;
	width:45%;
	text-align: right;
	font-size: 20px;
}



.al-a{
	width:100%;
	height:41px;
}
.al-a span:nth-child(1){
	display: inline-block;
	width:18%;
	text-align: center;
}
.al-a span:nth-child(2){
	display: inline-block;
	width:18%;
	text-align: center;
}
.al-a span:nth-child(3){
	display: inline-block;
	width:18%;
	text-align: center;
}
.al-a span:nth-child(4){

	display: inline-block;
	width:36%;
	text-align: right;
	font-size: 20px;
}


*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
.section{
		height:91vh;
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
	background:yellow;
	
	height:60px;
	width:100%;
	display: flex;
	

}
.h-top em{
	font-style: normal;
}
.h-top{
	display: flex;
	align-items: center;
	justify-content: space-around;
	width:100%;
	height:30px;
	padding:15px 0;
	
	
}
.fh1{
	float: left;
	text-align: center;
	display:block;
	width:47%;
	
}
.fh2{
	float: right;
	text-align: center;
	display:block;
	width:47%;
	
}


.fx{
	float: right;
	text-align: center;
	display:block;
	width:47%;
	
}
.osy{
	float: left;
	display:block;
	width:47%;
	
}
.sp{
	float: left;
	display:block;
	width:47%;
	
}
.xq{
	float: right;
	display: block;
	width:47%;

}
.sy{
	
	width:31%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
	
}
.sy1{

	width:31%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
	margin:0 3%;
	
	
}
.sy2{
	
	
	width:31%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
	
}

.cp-top{
		width:92%;
		padding:0 4%;
		background:#fff;
		height:50px;
		font-size:16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
}
.box{
	
	border-top:5px solid #ccc;
	width:100%;
	height:85px;
	background:yellow;
	display: flex;
	border-bottom: 5px solid #ccc;

}
.b-c-r{
	width:10%;
	height:85px;
	line-height:85px;
	font-size:20px;

}
.b-l{
	margin:0 5%;
	width:29%;
	height:85px;
	background:bisque;
}
.b-l-t1{
	border-left: 1px solid #ccc;
	text-align: center;
}
.b-l-foot{
	font-size:12px;
}
.b-r{
	width:55%;
	height:85px;
	background:pink;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
}
.b-r-t{
	font-size:14px;
}
.b-r-f span:first-child{
	display: inline-block;
	font-size: 15px;
	margin:4% 5%;
}
.b-r-f span:last-child{
	display: inline-block;
	margin:4% 5%;
	width:30%;
	height:20px;
	line-height: 20px;
	text-align: center;
	border:1px solid #ccc;
	font-size:13px;
}

</style>