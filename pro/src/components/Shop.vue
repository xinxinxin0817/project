<template>
	<div>
		<Header msg="关于" class="header" style="background: #ff0;height:90px;overflow:hidden;">
			<router-link to=""><input type="text" placeholder="搜索产品" /></router-link>
			<div>
			<router-link to="/health"><p class="teshu">健康主题</p></router-link>
			<router-link to="/category"><p>类别</p></router-link>
			<router-link to="/brand"><p>品牌</p></router-link>
			</div>

		</Header>
		<section>
   		<router-view></router-view>
   		</section>
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'Shop',
		data(){
			return{
				tit:'关于'
			}
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
.header{
	overflow: hidden;
}
	.header input{
		width:357px;
		height:30px;
		margin-left:8px;
		margin-top:10px;
		border-radius: 4px;
		border:1px solid #cecece;
		text-align: center;
		line-height: 30px;
	
	}
	.header div{
		width:100%;
		height:30px;
		margin:0px 12px 0 12px;
		margin-top:10px;
		overflow: hidden;
	}
	.header p{
		float:left;
		width:116px;
		height:26px;		
		text-align: center;
		line-height: 26px;
		color:#cecece;
	}
	
	.header p:hover{
		border-bottom:4px solid #cecece;
		
	}

</style>