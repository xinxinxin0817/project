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
				tit:'我的'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
header{
		height:80px;
			background: #0ff;
		text-align: center;
		line-height: 50px;
	}
</style>