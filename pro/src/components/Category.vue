<template>
	<div>
		
		<section>
			<div class="left">
				<router-link to=""><p>补充剂</p></router-link>
				<router-link to=""><p>草本和顺势疗法</p></router-link>
				<router-link to=""><p>沐浴和个人护理</p></router-link>
				<router-link to=""><p>美容</p></router-link>
				<router-link to=""><p>运动营养</p></router-link>
				<router-link to=""><p>食品百货</p></router-link>
				<router-link to=""><p>婴幼儿</p></router-link>
				<router-link to=""><p>家具</p></router-link>
				<router-link to=""><p>宠物</p></router-link>

			</div>
			<div class="right" style="width:78%">
				<mt-swipe :auto="4000" style="height:100px;width:95%;margin:0; padding:0;margin-top:3%;">
				<mt-swipe-item style="background: red;"></mt-swipe-item>
				<mt-swipe-item style="background: yellow;"></mt-swipe-item>
				<mt-swipe-item style="background: pink;"></mt-swipe-item>
				<mt-swipe-item style="background: blue;"></mt-swipe-item>
				</mt-swipe>
			</div>

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
	a{
		text-decoration: none;
	}
	li{
		list-style: none;
	}
	section{
		display: flex;
		height:79vh;
		overflow: auto;
		background:rgb(233, 123, 243);
		width:100%;
		flex:1;
	   
	}
	section .left{
		width:22%;
		background:pink;
		border-right:1px solid #ccc;
		overflow: auto;
		 display: flex; 
		 flex-direction: column;
		 
	
	}
	section p{

		width:80%;
		height:40px;
		padding-left:10px;
		color:#000;
		background:#0ff;
		word-break: break-all;
		font-size: 12px;
		margin-top:5px;
		margin-left:5px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center; 
		
	}
	section p:hover{
		border-left:4px solid #cecece;
	}
	section .right{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
</style>