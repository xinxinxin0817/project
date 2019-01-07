<template>
	<div>
		<Header msg="购物车" class="header" style="background: #ccc;width:100%;height:40px;">
			<router-link to="/cart"><p>购物车</p></router-link>
			<router-link to=""><span>0</span></router-link>

		</Header>
		
		
			
		
		
	</div>
</template>

<script>
	export default{
		name:'Shop',
		data(){
			return{
				tit:'购物车'
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
a{
	text-decoration: none;
}
li{
	list-style: none;
}
		.header{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.header p{
			margin-left:12px;
			color:rgb(78, 76, 76);

		}
		.header span{
			margin-right:12px;
			color:rgb(78, 76, 76);

		}
		
</style>