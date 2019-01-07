<template>
	<div>
		<Header msg="发现" style="background: orange;width:100%;height:80px;"></Header>
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

<style>
/* header{
		height:80px;
			background: blue;
		text-align: center;
		line-height: 50px;
	} */
</style>