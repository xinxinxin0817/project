<template>
	<div>
		
		<section>
			

		</section>
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'Category',
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
	*{
		margin:0;
		padding:0;
	}
	section{
		display: flex;
		flex-direction: column;
		overflow: auto;
		background:pink;
		width:100%;
		height:527px;
		overflow: hidden;
	}
	
</style>