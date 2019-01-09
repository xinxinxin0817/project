<template>
	<div>
		<Header class="header-b" msg="发现" style="background: #fff;width:100%;height:50px;">
           <span @click="fanhui()">《</span>
			<span>IHerb活动</span>
		</Header>
		<section class="section-b">
			<div class="banner-b"></div>
             <h1>相关商品推荐</h1>
            <div class="banner-c">
               <ul class="like-ban">
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>
					<router-link to=""><li><p></p><span>2222</span></li></router-link>

				</ul>
            </div>
		</section>
        <footer>
            <router-link to=""><p></p></router-link>
        </footer>
	</div>
</template>

<script>
	export default {
		name:'More',
		data(){
			return{
				tit:'更多'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
        },
        methods:{
          fanhui(){
				this.$router.go(-1)
			}
        }
	}
</script>

<style>
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
		background:#ff0;

	}
	.like-ban span{
		font-size: 12px;
		color:#504e4e;
		width:136px;
		height:40px;
		background:pink;
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