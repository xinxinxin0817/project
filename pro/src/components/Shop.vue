<template>
	<div>
		<Header msg="关于" class="header" style="background: #fff;height:90px;overflow:hidden;">
			<router-link to="" style="width:95%"><input type="text" placeholder="搜索产品" /></router-link>
			<div class="box" style="width:95%">
			<router-link to="/health" style="width:33%"><p class="teshu">健康主题</p></router-link>
			<router-link to="/category" style="width:33%"><p>类别</p></router-link>
			<router-link to="/brand" style="width:33%"><p>品牌</p></router-link>
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
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width:100%;
}

	.header input{
		width:100%;
		height:30px;
		margin-top:10px;
		border-radius: 4px;
		border:1px solid #cecece;
		text-align: center;
		line-height: 30px;
		margin-bottom:6px;
	
	}
	.header .box{
		
		display: flex;
		align-items: center;
		height:30px;
		margin:10px 12px 0 12px;
		margin-top:10px;
		overflow: hidden;
	}
	.header p{
		float:left;
		width:100%;
		height:26px;		
		text-align: center;
		line-height: 26px;
		color:#cecece;
	
	}
	
	.header p:hover{
		border-bottom:4px solid #cecece;
		
	}

</style>