<template>
	<div>
		<Header class="header" msg="发现" style="background: #fff;width:100%;height:50px;">
           <span @click="fanhui()">《</span>
			<span>IHerb活动</span>
		</Header>
		<section class="section">
			<div class="banner1"></div>
             <h1>相关商品推荐</h1>
            <div class="banner2">
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
	.header{
        flex-shrink: 0;
		line-height: 50px;
		font-size: 16px;
        
	}
    .header span:first-child {
        margin-left:20px;
    }
   .header span:last-child {
        margin-left:30%;
    }
	.section{
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
	.banner1{
        width:90%;
        height:60%;
        background:#ccc;
        margin-top:20px;

    }
    .banner2{
        width:95%;
       height:29vh;
     
        display: flex;
        
    }
	
    .like{
	
		width:94%;
	
		display: flex;
       
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.like li{
		height:174px;
		width:136px;
        margin-left:20px;
		
		margin-top:10%;

		display: flex;
		flex-direction: column;
	}
	.like p{
		width:136px;
		height:132px;
		background:#ff0;

	}
	.like span{
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