<template>
	<div>
		<Header class="header" msg="发现" style="background: #ccc;width:100%;height:40px;">
			{{tit}}
		</Header>
		<section class="section">
			
		</section>
	</div>
</template>

<script>
	export default {
		name:'Other',
		data(){
			return{
				tit:'产品建议'
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
	a{
		text-decoration: none;
	}
	.header{
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
	.section{
		height:86.4vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		overflow: hidden;
		
	}

</style>