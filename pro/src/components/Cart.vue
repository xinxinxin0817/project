<template>
	<div>
	
		<Header msg="购物车" class="header" style="background: #ccc;width:100%;height:40px;">
			<router-link to="/cart"><p>购物车</p></router-link>
			<router-link to=""><span @click="da()">三</span></router-link>
			<div class="hide1-a" v-bind:style="[sty]">
				<!-- <button class="all-a">选择全部</button> -->
				<button class="remove-a" @click="remove(all)">移除所有商品</button>
			</div>

		</Header>
		
		<section>
			<div class="inclod">
				
			<div class="cart-list" v-for="(item,i,cart) in cart" :key="cart">
				<input type="checkbox"  :ajg="item.pprice" v-on:click="pjg($event)" name="ral" class="duoxuan" style="width:20px;height:100px;color:#fff"/>
				<p class="img"><img :src="item.pimg" alt=""></p>
				<div class="jisuan">
					<router-link :to="'/details/'+item.pid"><p class="xiang">{{item.pname}}</p></router-link>
					<p class="money">
						<span>{{item.pprice}}</span>

					</p>
				</div>	
			</div>
			

			

			</div>
			<div class="guess">
				<p>猜你喜欢</p>
				<ul class="like1">
					<li v-for="(item,cart) in list" :key="cart"><router-link :to="'/details/'+item.pid"><p><img :src="item.pimg" alt="" style="width:170px;height:240px;"></p><span style="overflow:hidden">{{item.pname}}</span></router-link></li>
					
				</ul>
			</div>
			<div class="fixed">
				<div class="fixed1">
					<div class="box1">
						<p>小计</p>
						<span>￥{{jg}}</span>
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
						合计:<input type="text" @click="quxuan()" value="￥:" class="jine">
						<router-link to="/payment" style="width:52%;height:40px;"><input type="button" value="下单" class="mai"></router-link>
					</div>
				</div>

			</div>
		</section>
			
		
		
	</div>
</template>

<script>



	import axios from 'axios';
	import Mock from 'mockjs'
	// Mock.mock('http://www.ccc.com',{
	// 		'users|6-10':[
	// 			{
	// 				"img":"@image('170x240')",
	// 				"title":"@ctitle()"
	// 			}
	// 		]
	// 	})
	
	// var len=aduoxuan.length;
	// console.log(len);
	function getCookie(name){
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i = 0; i < arr.length; i++){
				var arr1 = arr[i].split("=");
				if(arr1[0]==name){
					return arr1[1];
				}
			}
		}
		function setCookie(name,val,n){
			var oDate = new Date();
			oDate.setDate(oDate.getDate()+n);
			document.cookie = name + "=" + val + ";expires="+ oDate ;
		}
		function removeCookie(name){
			setCookie(name,1,-1);
		}
		var token=getCookie("token")
		console.log(Number(token));

		$(function(){
			$('.quanxuan').click(function(){
			if($('.quanxuan').is(':checked')){
			$('.duoxuan').prop('checked',true);
			}else{
			$('.duoxuan').prop('checked',false);
			} 
			});
			$('.duoxuan').click(function(){
			var i = 0;
			var arr = $('.duoxuan').length;
			$('.duoxuan').each(function(){	
			if($(this).is(':checked')){
			i++;
			};	
			});
			if(i == arr){
			$('.quanxuan').prop('checked',true);
			}else{
			$('.quanxuan').prop('checked',false);
			}

			});
	});

	export default{
		name:'Shop',
		data(){
			return{
				tit:'购物车',
				sty:{
					display:'none'
				},
				list:[],
				title:'',
				img:'',
				count:0,
				jg:"",
				ajg:'',
				cart:[],
				all:[],
				all1:{},
				checked:'false',
				token:token
			}
		},
		mounted(){
					
					
					
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/cart-list.php',
					params:{id:Number(_this.token)}//购物车 上面用户的
				}).then((data)=>{
					//console.log(data)
					_this.cart=data.data.data
					_this.cart.sort()
					//console.log(_this.cart)
					for(var i=0;i<_this.cart.length;i++){
						_this.all.push(Number(_this.cart[i].pid))
					
					}
						_this.all.sort()
					console.log(_this.all)					
				})


			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
					params:{uid:'11475'}//下面的商品 喜欢
				}).then((data)=>{
					//console.log(data.data.data)
					_this.list=data.data.data
					_this.title=data.data.data.pname
					_this.jg=data.data.data.pprice
					
				})
			
		},
		
		methods:{
			remove(all){
				console.log(this.token)
				
				//console.log(this.all.length)
				var _this=this;
				if(_this.all.length<=0){
					alert("购物车为空，无法删除")
					location.href="#/cart"	
				}else{
					for(let i =0;i<this.all.length;i++){
						(function(i){
							axios({
								method:'get',
								url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
								params:{uid:Number(_this.token),pid:_this.all[i]}
							}).then((data)=>{
								//console.log(data)
								
								
							})
						})(i);
					}
					alert("全部删除成功")
					location.reload()	
				}
				
				
			},
			pjg(e){
				
				this.count=1
				console.log(this.count)
				console.log(e)
				console.log(e.srcElement.attributes.ajg.value)
				this.jg=Number(e.srcElement.attributes.ajg.value)
			},
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
			},
			quanxuan(){
					for(var i=0;i<aduoxuan.length;i++){
						aduoxuan[i].checked=true
						console.log(aduoxuan[i])
						console.log(aduoxuan[i].style)
					}
			}
		
			
		},
		 directives:{
			
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
		
		overflow: auto;
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
	.img img{
		width:100%;
		height:100%;
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

		height:30%;
		
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
		float:left;
		margin:5px 3px;
		
		display: flex;
		flex-direction: column;
	}
	.like1 p{
		width:170px;
		height:240px;
		

	}
	.like1 span{
		font-size: 12px;
		color:#504e4e;
		width:170px;
		height:45px;
	
		line-height: 45px;
		text-align: center;
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
	.hide1-a{
		width:40%;
		height:40px;
		position:absolute;
		left:60%;
		top:36px;
		background:#fff;
		
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		display: none;
		border:1px solid #ccc;
		border-radius: 5px;
	}
	.hide1-a button{
		border:0;
		background:#fff;
		font-size: 14px;
		color:#000;
		padding-left:10px;
		margin-top:12px;

	
	}
	
</style>