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

<style>
</style>