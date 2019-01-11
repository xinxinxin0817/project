<template>
	<div>
		<Header class="header-b" msg="发现" style="background: #fff;width:100%;height:50px;">
           <span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;"></span>
			<span>IHerb活动</span>
		</Header>
		<section class="section-b">
			<div class="banner-b">
				<img  :src="img" alt="" style="width;100%;height:100%">
			</div>
             <h1>相关商品推荐</h1>
            <div class="banner-c">
               <ul class="like-ban">
					<li><router-link  v-if="list[0]" :to="'/details/'+list[0].pid"><p><img  v-if="list[0]" :src="list[0].pimg" alt=""></p><span>{{list[0].pname}}</span></router-link></li>
					<li><router-link  v-if="list[1]" :to="'/details/'+list[1].pid"><p><img  v-if="list[1]" :src="list[1].pimg" alt=""></p><span>{{list[1].pname}}</span></router-link></li>
					<li><router-link  v-if="list[2]" :to="'/details/'+list[2].pid"><p><img  v-if="list[2]" :src="list[2].pimg" alt=""></p><span>{{list[2].pname}}</span></router-link></li>
					<li><router-link  v-if="list[3]" :to="'/details/'+list[3].pid"><p><img  v-if="list[3]" :src="list[3].pimg" alt=""></p><span>{{list[3].pname}}</span></router-link></li>
					<li><router-link  v-if="list[0]" :to="'/details/'+list[0].pid"><p><img  v-if="list[0]" :src="list[0].pimg" alt=""></p><span>{{list[0].pname}}</span></router-link></li>
					<li><router-link  v-if="list[1]" :to="'/details/'+list[1].pid"><p><img  v-if="list[1]" :src="list[1].pimg" alt=""></p><span>{{list[1].pname}}</span></router-link></li>
				</ul>
            </div>
		</section>
        <footer>
            <router-link to=""><p></p></router-link>
        </footer>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:'More',
		data(){
			return{
				tit:'更多',
				'list':[],
				img:'',
				jg:'',
				list:[],
				list1:[]

			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
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
				
					_this.list=data.data.data
				})

			var id=this.$route.params.id
			console.log(id)
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{uid:'14632',id:_this.$route.params.id}
			}).then((data)=>{
				//根据点谁的 商品详情
				console.log(data)
				_this.list1=data.data.data;
				

				
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
	.header-b{
        flex-shrink: 0;
		line-height: 50px;
		font-size: 16px;
        
	}
    .header-b span:first-child {
        margin-left:20px;
    }
   .header-b span:last-child {
        margin-left:30%;
    }
	.section-b{
		height:86.4vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		flex:1;
        align-items: center;
		
	}	
    section h1{
        width:40%;
        height:30px;
        font-size: 16px;
        font-weight: 100px;
        border:1px solid #ccc;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        margin-top:2%;
         margin-bottom:2%;
    }
	.banner-b{
        width:90%;
        height:60%;
        background:#ccc;
        margin-top:20px;

    }
    .banner-c{
        width:95%;
       height:29vh;
     
        display: flex;
        
    }
	
    .like-ban{
	
		width:94%;
	
		display: flex;
       
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.like-ban li{
		height:174px;
		width:136px;
        margin-left:20px;
		
		margin-top:10%;

		display: flex;
		flex-direction: column;
	}
	.like-ban p{
		width:136px;
		height:132px;
		

	}
	.like-ban p img{
		width:100%;
		height:100%;
	}
	.like-ban span{
		font-size: 12px;
		color:#504e4e;
		width:136px;
		height:40px;
		line-height: 40px;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
    footer{
		height: 50px;
		width:100%;
		background: #f0ebeb;
		
		line-height: 50px;
		flex-shrink: 0;
		display: flex;
      
     
	}
    footer p{
        position:absolute;
          font-size: 30px;
          font-weight: 700;
          right:10%;
    }
	
</style>