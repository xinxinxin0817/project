<template>

	<div>
		<Header class="header" msg="我的">
			<div class="h-top">
				<div class="sy" ><router-link to="/home" ><span style="font-size:26px;">&lt;</span></router-link></div>
				<div class="sy1" ><router-link to="/home" ><span>放</span></router-link></div>
				<div class="sy2" ><router-link to="/cart" ><span>购</span></router-link></div>
			</div>
			<h3 class="cp-top"><span>所有类别</span> <router-link class="gd" to="" tag="span" style="font-size:14px;">类别></router-link></h3>
		</Header>
		<section class="section">
			<div class="ddd">
				<router-link to="/details">
					<div class="box">
					
						<div class="b-l"></div>
						<div class="b-r">
							<p class="b-r-t">Super Omega-3 Gems,<br/>1200毫克，100+30粒软胶囊</p>
							<p class="b-r-f"><span>￥56.09</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>

				<router-link to="/details">
					<div class="box">
					
						<div class="b-l"></div>
						<div class="b-r">
							<p class="b-r-t">Super Omega-3 Gems,<br/>1200毫克，100+30粒软胶囊</p>
							<p class="b-r-f"><span>￥56.09</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>

				<router-link to="/details">
					<div class="box">
					
						<div class="b-l"></div>
						<div class="b-r">
							<p class="b-r-t">Super Omega-3 Gems,<br/>1200毫克，100+30粒软胶囊</p>
							<p class="b-r-f"><span>￥56.09</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>

				<router-link to="/details">
					<div class="box">
					
						<div class="b-l"></div>
						<div class="b-r">
							<p class="b-r-t">Super Omega-3 Gems,<br/>1200毫克，100+30粒软胶囊</p>
							<p class="b-r-f"><span>￥56.09</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>	
			</div>
	
		</section>
		
		
		
		
	</div>
</template>

<script>


	export default{
		name:'AllC',
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
*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
.section{
		height:76vh;
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
	
	height:110px;
	width:100%;
	display: flex;
	flex-direction: column;

}
.h-top{
	
	width:100%;
	height:30px;
	padding:15px 0;
	background:#ccc;
	
}
.sy{
	float: left;
	width:15%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
}
.sy1{
	float:right;
	width:15%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
	margin:0 3%;
}
.sy2{
	
	float:right;
	width:15%;
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
	height:130px;
	background:yellow;
	display: flex;

}
.b-l{
	margin:2% 5%;
	width:24%;
	height:112px;
	background:#aaa;
}
.b-r{
	margin-top:2%;
	width:66%;
	height:112px;
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