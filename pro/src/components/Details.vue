<template>

	<div>
		<Header class="header-d" msg="我的">
			<div class="h-top">
				<div class="sy" ><router-link to="/home" ><span style="font-size:22px;" class="fh1" @click="fanhui()">&lt;</span></router-link></div>
				<div class="sy1" ><router-link to="/home" ><span class="sp">商品</span><em class="xq">详情</em></router-link></div>
				<div class="sy2" ><router-link to="/cart" style="width:100%;"><span class="osy">首页</span><em class="fx">分享</em></router-link></div>
			</div>
		</Header>
		<section class="section">
			<div class="ddd">
				<router-link to="/banner">
					<mt-swipe :auto="4000" style="height:135px; margin:0; padding:0;">
						<mt-swipe-item style="background: red;"><img style="width:100%;height:100%;" :src="img"/></mt-swipe-item>
						
					</mt-swipe>
				</router-link>

				
					<div class="box">
					
						<div class="b-r">
							<p class="b-r-t">{{title}}</p>
							<p class="b-r-f"><span>￥{{jg}}</span></p>
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

					<div class="djdzk">
						<h2 class="dj-top"><div><span>大家都在看</span></div><div><span>今日热门</span></div></h2>
						<div class="dj-cen">
							<dl>
								<dt></dt>
								<dd>
									<span>纯好油，8冉思</span>
									<span>￥68.88</span>
								</dd>
							</dl>
							<dl>
								<dt></dt>
								<dd>
									<span>纯好油，8冉思</span>
									<span>￥68.88</span>
								</dd>
							</dl>
							<dl>
								<dt></dt>
								<dd>
									<span>纯好油，8冉思</span>
									<span>￥68.88</span>
								</dd>
							</dl>
						</div>

						<div class="dj-foot">
							<dl>
								<dt></dt>
								<dd>
									<span>纯好油，8冉思</span>
									<span>￥68.88</span>
								</dd>
							</dl>
							<dl>
								<dt></dt>
								<dd>
									<span>纯好油，8冉思</span>
									<span>￥68.88</span>
								</dd>
							</dl>
							<dl>
								<dt></dt>
								<dd>
									<span>纯好油，8冉思</span>
									<span>￥68.88</span>
								</dd>
							</dl>
						</div>
					</div>

					<div class="cpgs">
						<h2 class="cp-t">产品概述</h2>
						<div class="cp-f">
							<div></div>
							<div>
								<p>品名：</p>
								<p>净含量</p>
								<p>保质期</p>
								<p>产地</p>
							</div>
						</div>
					</div>

					<div class="xqjs">
						新华社北京1月8日电 国家主席习近平1月8日同吉布提总统盖莱互致贺电，庆祝两国建交40周年。

　　习近平在贺电中指出，建交40年来，中吉关系健康稳定发展，双方在涉及彼此核心利益和重大关切问题上相互理解、相互支持，各领域合作成果丰硕。2017年11月，你来华进行国事访问，我们共同宣布中吉建立战略伙伴关系。去年9月中非合作论坛北京峰会期间，我们就发展中吉关系达成新共识，并见证签署共同推进“一带一路”建设谅解备忘录。我高度重视中吉关系发展，愿同你一道努力，以两国建交40周年为契机，巩固两国政治互信，深化共建“一带一路”合作，落实中非合作论坛北京峰会成果，推动中吉战略伙伴关系不断迈上新台阶。

　　盖莱在贺电中表示，1979年1月8日是吉中外交关系奠基性的时刻，我对40年来吉中关系顺利发展感到满意和自豪。2017年11月，我们共同决定将吉中关系确定为战略伙伴关系，充分表明双方深化吉中关系的决心，也为两国经贸合作指明了方向。吉布提衷心感谢中国政府和人民给予的帮助和支持，将继续坚定奉行一个中国原则。我愿同你共同努力，促进吉中关系不断深入发展。
新华社北京1月8日电 国家主席习近平1月8日同吉布提总统盖莱互致贺电，庆祝两国建交40周年。

　　习近平在贺电中指出，建交40年来，中吉关系健康稳定发展，双方在涉及彼此核心利益和重大关切问题上相互理解、相互支持，各领域合作成果丰硕。2017年11月，你来华进行国事访问，我们共同宣布中吉建立战略伙伴关系。去年9月中非合作论坛北京峰会期间，我们就发展中吉关系达成新共识，并见证签署共同推进“一带一路”建设谅解备忘录。我高度重视中吉关系发展，愿同你一道努力，以两国建交40周年为契机，巩固两国政治互信，深化共建“一带一路”合作，落实中非合作论坛北京峰会成果，推动中吉战略伙伴关系不断迈上新台阶。

　　盖莱在贺电中表示，1979年1月8日是吉中外交关系奠基性的时刻，我对40年来吉中关系顺利发展感到满意和自豪。2017年11月，我们共同决定将吉中关系确定为战略伙伴关系，充分表明双方深化吉中关系的决心，也为两国经贸合作指明了方向。吉布提衷心感谢中国政府和人民给予的帮助和支持，将继续坚定奉行一个中国原则。我愿同你共同努力，促进吉中关系不断深入发展。
					</div>

			</div>
	
		</section>
		
		<footer class="foot-d">
			<div><router-link to="" style="color: #fff;">立即购买</router-link></div>
			<div><router-link to="/cart" style="color: #fff;">加入购物车</router-link></div>
		</footer>
		
		
	</div>
</template>

<script>

	import axios from 'axios';

	export default{
		name:'Details',
		data(){
			return{
				tit:'所有商品',
				title:'',
				img:'',
				jg:'￥55'

			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var id=this.$route.params.id
			console.log(id)
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{uid:'11475',id:_this.$route.params.id}
			}).then((data)=>{
				console.log(data.data)
				_this.title=data.data.data.pname
				_this.jg=data.data.data.pprice
				_this.img=data.data.data.pimg

				// for(var i=0;i<data.data.users.length;i++){
				// 	_this.title=data.data.users.title
				// 	console.log(data.data.users[i].pid)
				// 	if(data.data.users[i].pid==id){
				// 		console.log(data.data.users[i])
				// 		_this.title=data.data.users[i].title
				// 	}
				// }
			})
			console.log(this.$route.params)
		}
	}
</script>

<style scoped="">
.xqjs{
	height:400px;
	text-indent: 2rem;
	
}

.cpgs{
	height:160px;
	width:100%;
	background:yellow;
}
.cp-t{
	width: 90%;
    padding: 0 5%;
    background: #fff;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cp-f{
	height:120px;
	width:100%;
	display: flex;
	justify-content:center;
}
.cp-f div:first-child{
	width:50%;
	height:120px;
	background:red;
}
.cp-f div:last-child{
	width:40%;
	height:120px;
	background:orchid
}
.cp-f div:last-child p{
	height:30px;
	line-height: 30px;
}



.djdzk{
	height:403px;
	width:100%;
	background:orchid;
}
.dj-top{
	padding:0 15%;
	line-height: 30px;
	height:30px;
	width:70%;
	display: flex;
	justify-content: space-between;
}
.dj-top div:first-child{
	width:40%;
	text-align: center;
	font-size:12px;
}
.dj-top div:last-child{
	width:40%;
	text-align: center;
	font-size:12px;
}

.dj-top span:first-child:hover{	
	font-size:20px;
	border-bottom:2px solid #ccc;
}
.dj-top span:last-child:hover{
	font-size:20px;
	border-bottom:2px solid #ccc;
}
.dj-cen{
	margin-top:20px;
	height:160px;
	background:olive;
	display: flex;
	justify-content: space-around;
}
.dj-cen dl:nth-child(1){
	width:30%;
	height:160px;
	background:orange;
}
.dj-cen dl:nth-child(1) dt{
	height:120px;
	width:100%;
	background:orangered;
}
.dj-cen dl:nth-child(1) dd{
	width:100%;
	height:40px;
}
.dj-cen dl:nth-child(1) dd span:first-child{
	font-size:12px;
	text-align: center;
	width:100%;
	display: block;
	height:20px;
	line-height: 20px;
}
.dj-cen dl:nth-child(1) dd span:last-child{
	font-size:15px;
	text-align: center;
	width:100%;
	display: block;
}

.dj-cen dl:nth-child(2){
	width:30%;
	height:160px;
	background:orange;
}
.dj-cen dl:nth-child(2) dt{
	height:120px;
	width:100%;
	background:orangered;
}
.dj-cen dl:nth-child(2) dd{
	width:100%;
	height:40px;
}
.dj-cen dl:nth-child(2) dd span:first-child{
	font-size:12px;
	text-align: center;
	width:100%;
	display: block;
	height:20px;
	line-height: 20px;
}
.dj-cen dl:nth-child(2) dd span:last-child{
	font-size:15px;
	text-align: center;
	width:100%;
	display: block;
}


.dj-cen dl:nth-child(3){
	width:30%;
	height:160px;
	background:orange;
}
.dj-cen dl:nth-child(3) dt{
	height:120px;
	width:100%;
	background:orangered;
}
.dj-cen dl:nth-child(3) dd{
	width:100%;
	height:40px;
}
.dj-cen dl:nth-child(3) dd span:first-child{
	font-size:12px;
	text-align: center;
	width:100%;
	display: block;
	height:20px;
	line-height: 20px;
}
.dj-cen dl:nth-child(3) dd span:last-child{
	font-size:15px;
	text-align: center;
	width:100%;
	display: block;
}


.dj-foot{
	height:160px;
	background:olive;
	display: flex;
	justify-content: space-around;
}
.dj-foot dl:nth-child(1){
	width:30%;
	height:160px;
	background:orange;
}
.dj-foot dl:nth-child(1) dt{
	height:120px;
	width:100%;
	background:orangered;
}
.dj-foot dl:nth-child(1) dd{
	width:100%;
	height:40px;
}
.dj-foot dl:nth-child(1) dd span:first-child{
	font-size:12px;
	text-align: center;
	width:100%;
	display: block;
	height:20px;
	line-height: 20px;
}
.dj-foot dl:nth-child(1) dd span:last-child{
	font-size:15px;
	text-align: center;
	width:100%;
	display: block;
}

.dj-foot dl:nth-child(2){
	width:30%;
	height:160px;
	background:orange;
}
.dj-foot dl:nth-child(2) dt{
	height:120px;
	width:100%;
	background:orangered;
}
.dj-foot dl:nth-child(2) dd{
	width:100%;
	height:40px;
}
.dj-foot dl:nth-child(2) dd span:first-child{
	font-size:12px;
	text-align: center;
	width:100%;
	display: block;
	height:20px;
	line-height: 20px;
}
.dj-foot dl:nth-child(2) dd span:last-child{
	font-size:15px;
	text-align: center;
	width:100%;
	display: block;
}


.dj-foot dl:nth-child(3){
	width:30%;
	height:160px;
	background:orange;
}
.dj-foot dl:nth-child(3) dt{
	height:120px;
	width:100%;
	background:orangered;
}
.dj-foot dl:nth-child(3) dd{
	width:100%;
	height:40px;
}
.dj-foot dl:nth-child(3) dd span:first-child{
	font-size:12px;
	text-align: center;
	width:100%;
	display: block;
	height:20px;
	line-height: 20px;
}
.dj-foot dl:nth-child(3) dd span:last-child{
	font-size:15px;
	text-align: center;
	width:100%;
	display: block;
}


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
		height:84vh;
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

.header-d{
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
.foot-d{
	width:100%;
	height:50px;
	display: flex;
	
	justify-content: space-around;
}
.foot-d div:first-child{
	width:40%;
	height:50px;
	line-height: 50px;
	text-align: center;
	background:red;
	
}
.foot-d div:last-child{
	width:40%;
	height:50px;
	line-height: 50px;
	text-align: center;
	background:blueviolet;
}

</style>