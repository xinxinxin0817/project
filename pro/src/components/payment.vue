<template>

	<div>
		<Header class="header-p" msg="支付">
		
		</Header>
		<section class="section">
			<div class="ddd">
				

			</div>
	
		</section>
		
		<footer class="foot">
			
		</footer>
		
		
	</div>
</template>

<script>


	export default{
		name:'Payment',
		data(){
			return{
				tit:'所有商品'
			}
		},
		methods:{
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">


</style>