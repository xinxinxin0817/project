<template>
	<div>
			
		<section>
			<ul>
				<li></li>
				<li class="list"></li>
				<li></li>
				<li></li>
				<li class="list"></li>
				<li></li>
				<li></li>
				<li class="list"></li>
				<li></li>
				<li></li>
				<li class="list"></li>
				<li></li>
				<li></li>
				<li class="list"></li>
				<li></li>
				
			</ul>

		</section>
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'Health',
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
	section ul{
		width:355px;
		margin-left:10px;
	
		overflow: auto;
		height:100%;
	}
	section li{
		float:left;
		width:108px;
		height:150px;
		background:#fff;
		margin-top:10px;
		list-style: none;
        border:0;
        border:1px solid #ccc;
	}
	section .list{
		margin-left:12px;
		margin-right:12px;
	}
</style>