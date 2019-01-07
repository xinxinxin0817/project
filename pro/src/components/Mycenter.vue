<template>

	<div>
		<Header msg="我的" style="background: orange;width:100%;height:80px;"></Header>
		
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

<style>
*{
	margin:0;
	padding:0;
}
/* header{
		height:80px;
			background: #0ff;
		text-align: center;
		line-height: 50px;
	} */
</style>