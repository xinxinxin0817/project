<template>
	<div>
		
		<section>
			<div class="wrap" style="width:100%;height;100%;display:flex;">
				<div class="left" id="left">
					<p @click="da()" class="abc">补充剂</p>
					<p @click="db()" class="abc">草本和顺势疗法</p>
					<p @click="dc()" class="abc">沐浴和个人护理</p>
					<p @click="dd()" class="abc">美容</p>
					<p @click="de()" class="abc">运动营养</p>
					<p @click="df()" class="abc">食品百货</p>
					<p @click="dg()" class="abc">婴幼儿</p>
					<p @click="dh()" class="abc">家具</p>
					<p @click="di()" class="abc">宠物</p>
				</div>
				<div class="right" style="width:78%" id="right">
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>补充剂</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>草本和顺势疗法</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>沐浴和个人护理</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>美容</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>运动营养</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>食品百货</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>婴幼儿</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>家具</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
					<div class="hide">	
						<!-- 轮播			 -->
						<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
						<mt-swipe-item style="background: red;" v-for="(item,category) in list1" :key="category"><img :src="item.banner_img_url" style="width:100%;height:100px;"></mt-swipe-item>
						</mt-swipe>	
						<!-- 轮播结束			 -->
						<div class="look">
							<h2>最近查看的</h2>
							<span>Senior Health</span>
							<span>维生素</span>
						</div>
						<div class="cate-list">
							<h6>宠物</h6>
							<router-link to=""><span>查看全部</span></router-link>
						</div>
						<ul class="list-c">
							<li v-for="(item,category) in list" :key="category"><router-link :to="'/details/'+item.pid" style="width:84px;height:116px;"><p><img :src="item.pimg" alt="" style="width:84px;height:100px;"></p><span style="width:84px;height:16px;">{{item.pname}}</span></router-link></li>					
						</ul>
					</div>
				</div>	
			</div>		
		</section>
		
		
		
		
	</div>
</template>

<script>
//     var left=document.getElementById('left');
// var left_li=document.getElementsByClassName('abc');

// function foo(){
// 	console.log("aa")
// }
// foo()
var left=document.getElementById('left');
	var left_li=document.getElementsByClassName('abc');
	// var ap=document.getElementsByClassName('abc');
    var right=document.getElementById('right');
    var right_li=document.getElementsByClassName('hide');
function tab(){

    var len=left_li.length;
	var i=0;
	// console.log(right_li)
	// console.log(left)
	
	// console.log(left_li)

    for(let i=0;i<len;i++){
		
			left_li[i].index=i;
			 
			left_li[i].onmouseover=function(){
			 console.log(left_li[i])
				
            for(i=0;i<len;i++){
				left_li[i].className='';
                right_li[i].className='hide';
            }
            left_li[this.index].className='abc';
            right_li[this.index].className='';
        }
    }
}
tab("left","p","right","div","onmouseover");








		import axios from 'axios';
		import Mock from 'mockjs'

	export default{
		name:'Category',
		
		data(){
			return{
				tit:'关于',
				str:"补充剂",
				list:[],
				title:'',
				img:'',
				jg:'',
				list1:[]
			}
		},
		methods:{
			da(){
				this.str="补充剂"
				console.log(left_li)
				right_li[1].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
				right_li[0].style.display="block"
			},
			db(){
				this.str="草本和顺势疗法"
			
			left_li[0].style.borderLeft="0"

				
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
				right_li[1].style.display="block"
					console.log(right_li[1])
			},
			dc(){
				this.str="沐浴和个人护理"
				right_li[0].style.display="none"
				right_li[1].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
			left_li[0].style.borderLeft="0"

				right_li[2].style.display="block"
			},
			dd(){
				this.str="美容"
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[1].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
			left_li[0].style.borderLeft="0"
				
				right_li[3].style.display="block"
			},
			de(){
				this.str="运动营养"
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[1].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
			left_li[0].style.borderLeft="0"
				
				right_li[4].style.display="block"

			},
			df(){
				this.str="食品百货"
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[1].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
			left_li[0].style.borderLeft="0"
				
				right_li[5].style.display="block"
			},
			dg(){
				this.str="婴幼儿"
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[1].style.display="none"
				right_li[7].style.display="none"
				right_li[8].style.display="none"
			left_li[0].style.borderLeft="0"

				right_li[6].style.display="block"
			},
			dh(){
				this.str="家具"
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[1].style.display="none"
				right_li[8].style.display="none"
			left_li[0].style.borderLeft="0"
				
				right_li[7].style.display="block"
			},
			di(){
				this.str="宠物"
				right_li[0].style.display="none"
				right_li[2].style.display="none"
				right_li[3].style.display="none"
				right_li[4].style.display="none"
				right_li[5].style.display="none"
				right_li[6].style.display="none"
				right_li[7].style.display="none"
				right_li[1].style.display="none"
				
				right_li[8].style.display="block"
			left_li[0].style.borderLeft="0"

			},

		},
		mounted(){
			left_li[0].style.borderLeft="4px solid #cecece"
			right_li[0].style.display="block"
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
			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/bannerlist.php?uid=227',
					params:{uid:'14632'}
				}).then((data)=>{
					console.log(data.data.data)
					_this.list1=data.data.data
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
	li{
		list-style: none;
	}
	section{
		display: flex;
		height:79vh;
		overflow: auto;
		width:100%;
		flex:1;
		border-top:1px solid #ccc;
	   
	}
	section .left{
		width:22%;
	
		
		overflow: auto;
		 display: flex; 
		 flex-direction: column;
		 
	
	}
	section p{

		width:80%;
		height:45px;
		padding-left:10px;
		color:rgb(78, 76, 76);
	
		word-break: break-all;
		font-size: 12px;
		margin-top:5px;
	
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center; 
		
	}
	section p:hover{
	
		border-left:4px solid #cecece;
	}
	section .right{
		display: flex;
		flex-direction: column;
		align-items: center;
		border-left:1px solid #ccc;
		height:100%;
	}
	section .look{
		width:100%;
		height:40px;
		
		margin-top:3%;
		
	}
	section .look h2{
		font-size: 12px;
		color:rgb(78, 76, 76);
		
		margin-bottom:1%;
	}
	.look span{
		width:10%;
		height:30px;
		border:1px solid #ccc;
		border-radius: 4px;
		font-size: 12px;
		text-align: center;
		line-height: 30px;
		padding:3px 3px;
		color:rgb(78, 76, 76);
	
	}
	.cate-list{
		width:95%;
	
		height:50px;
		display: flex;
		justify-content: space-between;
		margin-top:5%;
		line-height: 50px;
	}
	.cate-list h6{
		color:#ccc;
		font-size: 20px;
		font-weight: 500;

	}
	.cate-list span{
		font-size: 12px;
		color:#ccc;
	}
	.list-c{
		width:95%;
		height:100%;	 
		display: flex;
	
		flex:1;
		flex-wrap:wrap ;
		justify-content: space-between;
	
		
	}
	.list-c li{
		width:84px;	
		height:116px;
		
		
	
		margin-top:5px;
		list-style: none;
        border:0;
        border:1px solid #ccc;
		display: flex;
		flex-direction: column;
		
	}
	.list-c p{
		width:84px;
		height:100px;
		padding:0;
		margin:0;
	}
	.list-c img{
		margin:0;
		padding:0;
	}
	.list-c span{
		width:84px;
		height:16px;
		line-height: 16px;
		background:#fff;
		text-align: center;
		color: rgb(66, 64, 64);
		font-size: 12px;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}
	.hide{
		display: none;
		margin-left:2%;
	}
</style>