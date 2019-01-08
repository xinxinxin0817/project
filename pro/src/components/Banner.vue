<template>
	<div>
		<Header class="header" msg="发现" style="background: #ccc;width:100%;height:40px;">
           <span @click="fanhui()">返回</span>
			<span>更多</span>
		</Header>
		<section class="section">
			<div class="guess">
				
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
	
		line-height: 40px;
		font-size: 16px;
        
	}
    .header span:first-child {
        margin-left:20px;
    }
   .header span:last-child {
        margin-left:32%;
    }
	.section{
		height:86.4vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		
		
	}
    
	.guess{
		 background:#fff; 

		height:100%;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:10px;
	}
	
	.like{
	
		width:94%;
		height:100%;
		display: flex;
	
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.like li{
		height:285px;
		width:170px;
	
		margin-bottom:5%;
		display: flex;
		flex-direction: column;
	}
	.like p{
		width:170px;
		height:240px;
		background:#ff0;

	}
	.like span{
		font-size: 12px;
		color:#504e4e;
		width:170px;
		height:45px;
		background:pink;
	}

</style>