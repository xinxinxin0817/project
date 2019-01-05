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
				tit:'关于'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
</style>