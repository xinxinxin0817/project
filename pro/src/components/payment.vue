<template>

	<div>
		<Header class="header-p" msg="支付">
			<span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;margin-left:3%;"></span>
			<span>填写订单</span>
		</Header>
		<section class="section">
			<div class="ddd">
				<div class="dz">
					<div class="dz-l">王先生</div>
					<div class="dz-r">
						<p>134****0638</p>
						<p>河南省郑州市海为科技园千锋教育C区12楼</p>
					</div>
				</div>

				<div class="spje">
					<div><span>商品金额</span><span>￥193.00</span></div>
					<div><span>运费</span><span>￥10.00</span></div>
					<div><span>折扣</span><span>￥35.00</span></div>
				</div>
				<div class="fp">
					<input type="checkbox"/><span>我要开发票</span>
				</div>

				<div class="nr">
					<div class="nr-l"></div>
					<div class="nr-r">
						<p>河南省郑州市海为科技园千锋教育</p>
						<p>净含量：0.8斤</p>
						<p>￥87.00</p>
					</div>
				</div>
				
				<div class="kd">
					<span>配送方式</span>
					<span>快递</span>
				</div>

				<div class="mly">
					买家留言：　选填
					
				</div>

				<div class="gj">
					<span>共一件商品</span>
					<span>小计：￥87.00</span>
				</div>

				<div class="nm">
					<span>匿名购买</span><input type="checkbox"/>
				</div>

			</div>
	
		</section>
		
		<footer class="foot">
			<div class="foot-t">
				<div class="f-t-1">
					<div>小计</div>
					<div>
						<span>￥149.00</span>
						<span>以节省￥38.00</span>
					</div>
				</div>
				<div class="f-t-2">
					<div>邮</div>
					<div>
						<span>￥149.00</span>
						<span>以节省￥38.00</span>
					</div>
				</div>
				<div class="f-t-3">
					<div>税</div>
					<div>
						<span>￥149.00</span>
						<span>以节省￥38.00</span>
					</div>
				</div>
			</div>
			<div class="foot-f">
				<p>合计：￥149.00</p>
				<p><router-link to="" style="color:#000;">提交订单</router-link></p>
			</div>
		</footer>
		
		
	</div>
</template>

<script>


	export default{
		name:'Payment',
		data(){
			return{
				tit:'所有商品'
			}
		},
		methods:{
          fanhui(){
				this.$router.go(-1)
			}
        },
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
a{
	text-decoration: none;
}
.foot{
	
	padding:0 1%;
	border-radius: 10px;
	border-top:2px solid #ccc;
	height:116px;
	width:98%;
}
.foot-t{
	display: flex;
	padding-top:15px;
	
	height:45px;
	width:100%;
	border-bottom:1px solid #ccc;
}
.f-t-1{
	width:33%;
	height:100%;
	display: flex;
}
.f-t-1 div:first-child{
	text-align: center;
	line-height: 36px;
	font-size: 12px;
	width:56px;
	height:36px;
	background:#ccc;
	float:left;
}
.f-t-1 div:last-child span{
	font-size:12px;
	float:right;

}
.f-t-2{
	width:33%;
	height:100%;
	display: flex;
}
.f-t-2 div:first-child{
	text-align: center;
	line-height: 36px;
	font-size: 12px;
	width:56px;
	height:36px;
	background:#ccc;
	float:left;
}
.f-t-2 div:last-child span{
	font-size:12px;
	float:right;

}
.f-t-3{
	width:33%;
	height:100%;
	display: flex;
}
.f-t-3 div:first-child{
	text-align: center;
	line-height: 36px;
	font-size: 12px;
	width:56px;
	height:36px;
	background:#ccc;
	float:left;
}
.f-t-3 div:last-child span{
	font-size:12px;
	float:right;

}
.foot-f{
	padding-top:16px;

	display: flex;
	margin-left:50%;
	width:50%;
	height:40px;
	line-height:40px;
}
.foot-f p:first-child{
	width:60%;
	height:100%;
	font-size:14px;
}
.foot-f p:last-child{
	width:40%;
	height:100%;
	background:#aaa;
	font-size:14px;
	text-align: center;
}


.nm{
	padding:0 3%;
	width:94%;
	height:40px;
	line-height: 40px;
	font-size:16px;
}
.nm span{
	float:left;
}
.nm input{
	margin-top:7px;
	width:24px;
	height:24px;
	float:right;
}

.gj{
	border-bottom:5px solid #f1f1f1;
	padding-left:53%;
	width:47%;
	height:40px;
	line-height: 40px;
	font-size:14px;
}

.mly{
	border-bottom:1px solid #ccc;
	padding-left:3%;
	width:97%;
	height:40px;
	line-height: 40px;
}

.kd{
	margin-top:5px;
	border-top:1px solid #f1f1f1;
	border-bottom:1px solid #f1f1f1;
	padding-left:3%;
	width:97%;
	height:40px;
	line-height: 40px;
}
.kd span:first-child{
	display: inline-block;
	width:40%;
	text-align:left;
}
.kd span:last-child{
	display: inline-block;
	width:56%;
	text-align:right;
}

.nr{
	padding-top:10px;
	height:80px;
	width:100%;

	display: flex;
}
.nr div:first-child{
	width:22%;
	margin: 0 3%;
	height:100%;
	background:rgb(235, 231, 231);
}
.nr div:last-child{
	width:75%;
	height:100%;
}
.nr div p{
	font-size: 14px;
	height:26px;
	line-height: 26px;
}




.fp{
	
	height:40px;
	width:100%;
	border-top:8px solid #f1f1f1;
	border-bottom:8px solid #f1f1f1;
}
.fp input{
	float:left; 
	width:24px;
	height:24px;
	background:#fff;
	border-radius: 50%; 
	margin-top:7px; 
	margin-left:18px;
}
.fp span{
	float:left; 
	height:40px;
	line-height:40px;
	

}

.spje{
	height:90px;
	
}
.spje div:nth-child(1){
	padding:0 5%;
	width:90%;
	height:30px;
	line-height: 30px;
}
.spje div:nth-child(1) span:first-child{
	display: inline-block;
	width:30%;
}
.spje div:nth-child(1) span:last-child{
	font-size: 13px;
	display: inline-block;
	width:70%;
	text-align: right;
}

.spje div:nth-child(2){
	padding:0 5%;
	width:90%;
	height:30px;
	line-height: 30px;

}
.spje div:nth-child(2) span:first-child{
	display: inline-block;
	width:30%;
}
.spje div:nth-child(2) span:last-child{
	font-size: 13px;
	display: inline-block;
	width:70%;
	text-align: right;
}
.spje div:nth-child(3){
	padding:0 5%;
	width:90%;
	height:30px;
	line-height: 30px;

}
.spje div:nth-child(3) span:first-child{
	display: inline-block;
	width:30%;
}
.spje div:nth-child(3) span:last-child{
	font-size: 13px;
	display: inline-block;
	width:70%;
	text-align: right;
}


.dz{
	padding-top:10px;
	height:60px;
	width:100%;
	background:#cfcfcf;
	border-top:8px solid #f1f1f1;
	border-bottom:6px solid #f1f1f1;
	display: flex;
}
.dz div:first-child{
	width:25%;
	height:100%;
	text-align: center;
}
.dz div:last-child{
	width:75%;
	height:100%;
}
.dz div p{
	font-size: 14px;
}

.section{
		height:74.6vh;
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

.header-p{
	height:50px;
	width:100%;
	background:#cfcfcf;
	display: flex;

}
.header-p span:first-child{
	width:8%;
	height:100%;
	text-align: center;
	line-height:50px;
}
.header-p span:last-child{
	width:82%;
	height:100%;
	text-align: center;
	line-height: 50px;
}

</style>