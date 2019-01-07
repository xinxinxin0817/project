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
		height:79vh;
		flex-direction: column;
		overflow: auto;
		background:pink;
		width:100%;
		flex:1;
	    justify-content: center;
		align-items: center;
	}
	section ul{
		width:94%;
		height:100%;
		 
		display: flex;
		overflow: auto;
		flex:1;
		flex-wrap:wrap ;
		justify-content: space-between;
		
	}
	section li{
		width:110px;	
		height:150px;
		background:#fff;
		margin-top:10px;
		list-style: none;
        border:0;
        border:1px solid #ccc;
	}
	
</style>