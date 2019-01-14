<template>

	<div>
		<Header class="header" msg="我的">
			<div class="h-top">
				<div class="sy" ><router-link to="" ><span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;color:#000;"></span></router-link></div>
				<div class="sy1" ><router-link to="/cart" ><span class="iconfont icon-gouwucheman" style="font-size:20px;color:#000;"></span></router-link></div>
				
			</div>
			<h3 class="cp-top"><span>所有类别</span> <router-link class="gd" to="" tag="span" style="font-size:14px;">类别></router-link></h3>
		</Header>
		<section class="section">
			<div class="ddd">
				<router-link :to="'/details/'+list[0].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[0]" :src="list[0].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[0].pname}}</p>
							<p class="b-r-f"><span>{{list[0].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>

				<router-link :to="'/details/'+list[9].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[9]" :src="list[9].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[9].pname}}</p>
							<p class="b-r-f"><span>{{list[9].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>

				<router-link :to="'/details/'+list[2].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[2]" :src="list[2].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[2].pname}}</p>
							<p class="b-r-f"><span>{{list[2].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>

				<router-link :to="'/details/'+list[3].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[3]" :src="list[3].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[3].pname}}</p>
							<p class="b-r-f"><span>{{list[3].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>
				<router-link :to="'/details/'+list[4].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[4]" :src="list[4].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[4].pname}}</p>
							<p class="b-r-f"><span>{{list[4].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>
				<router-link :to="'/details/'+list[5].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[5]" :src="list[5].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[5].pname}}</p>
							<p class="b-r-f"><span>{{list[5].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>
				<router-link :to="'/details/'+list[6].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[6]" :src="list[6].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[6].pname}}</p>
							<p class="b-r-f"><span>{{list[6].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>
				<router-link :to="'/details/'+list[7].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[7]" :src="list[7].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[7].pname}}</p>
							<p class="b-r-f"><span>{{list[7].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>
				<router-link :to="'/details/'+list[8].pid">
					<div class="box">
					
						<div class="b-l"><img  v-if="list[8]" :src="list[8].pimg" alt=""></div>
						<div class="b-r">
							<p class="b-r-t">{{list[8].pname}}</p>
							<p class="b-r-f"><span>{{list[8].pprice}}</span><span>立即购买</span></p>
						</div>
					
					</div>
				</router-link>
			</div>
	
		</section>
		
		
		
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'AllC',
		data(){
			return{
				tit:'所有商品',
				title:'',
				img:'',
				jg:'',
				list:[],
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
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

	display: flex;

}
.b-l img{
	width:100%;
	height:100%;
}
.b-l{
	margin:2% 5%;
	width:24%;
	height:112px;
}
.b-r{
	margin-top:2%;
	width:56%;
	height:112px;

	display:flex;
	flex-direction: column;
	justify-content: space-between;
}
.b-r-t{
	font-size:14px;
	color:rgb(51, 49, 49);
}
.b-r-f span:first-child{
	display: inline-block;
	font-size: 15px;
	margin:4% 5%;
	color:rgb(51, 49, 49);

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
	color:rgb(51, 49, 49);

}

</style>