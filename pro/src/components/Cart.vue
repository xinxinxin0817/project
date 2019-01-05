<template>
	<div>
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

<style scoped="">
header{
		height:50px;
			background: pink;
		text-align: center;
		line-height: 50px;
	}
</style>