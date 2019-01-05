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
</style>