<template>
	<div>
		<h1>other</h1>
	</div>
</template>

<script>
	export default {
		name:'Other',
		data(){
			return{
				tit:'发现'
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
			background: blue;
		text-align: center;
		line-height: 50px;
	}
</style>