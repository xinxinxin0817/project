<template>

	<div>
		<Header class="header" msg="我的">
			<div class="h-top">
				<div class="sy" ><router-link to="/home" ><span style="font-size:26px;">&lt;</span></router-link></div>
				<div class="sy1" ><router-link to="/home" ><span>放</span></router-link></div>
				<div class="sy2" ><router-link to="/cart" ><span>购</span></router-link></div>
			</div>
		</Header>
		<section class="section">
			<div class="logo"></div>
	
		</section>
		
		
		
		
	</div>
</template>

<script>


	export default{
		name:'AllC',
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
*{
	margin:0;
	padding:0;
}
a{
	text-decoration: none;
}
.header{
	background:yellow;
	padding-left:4%;
	height:50px;
	width:96%;
	display: flex;
	align-items: center;

}
.sy{
	float: left;
	width:15%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
}
.sy1{
	float:right;
	width:15%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
}
.sy2{
	float:right;
	width:15%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
}



</style>