<template>
	<div>
		<Header msg="关于" style="background: blue;"></Header>
		<h1>about</h1>
		
		
		
		
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

<style>
/* header{
		height:80px;
			background: #ff0;
		text-align: center;
		line-height: 50px;
	} */
</style>