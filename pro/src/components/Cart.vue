<template>
	<div>
		<Header msg="购物车" style="background: yellow;width:100%;height:80px;"></Header>
		<h1>about</h1>
		
			
		
		
	</div>
</template>

<script>
	export default{
		name:'Shop',
		data(){
			return{
				tit:'购物车'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style>
/* header{
		height:50px;
			background: pink;
		text-align: center;
		line-height: 50px;
	} */
</style>