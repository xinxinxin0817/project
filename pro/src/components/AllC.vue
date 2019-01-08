<template>

	<div>
		<Header class="header" msg="我的">
			<div class="sy" ><router-link to="/home" ><span >返回首页</span></router-link></div>
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
	width:15%;
	height:30px;
	line-height: 30px;
	text-align: center;
	background:#ccc;
	font-size:12px;
}

.logo{
	width:100%;
	height:100px;
	background:#cfcfcf;
	margin-bottom:46px;
}

</style>