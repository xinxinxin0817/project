<template>
	<div>
		
		<section>
			
				<div class="look">
					<h2>最近查看的</h2>
					<span>Senior Health</span>
					<span>维生</span>
                    <span>Senior Healthkkk</span>
					<span>维生</span>
                    <span>Senior Hea</span>
					<span>维生素片</span>
                    <span>Senior Health</span>
				
			    </div>
				<div class="all-brand">
                    <h2>所有品牌:</h2>
                    

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
		width:100%;
		flex:1;
        flex-direction: column;
         align-items: center;
       
     
	   
	}
	
	section .look{
		width:100%;
		height:110px;
	
		padding-left:3%;
        background: rgb(243, 237, 237);
		
	}
	section .look h2{
		font-size: 14px;
		color:rgb(78, 76, 76);
		margin:2%;
		margin-bottom:1%;
	}
	.look span{
		width:10%;
		height:30px;
		border:1px solid #ccc;
		border-radius: 4px;
		font-size: 12px;
		text-align: center;
		line-height: 30px;
		padding:3px 5px;
		color:rgb(78, 76, 76);
        margin:4% 2%;
        background:#fff;
	
	}
    .all-brand{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      
        width:100%;
        height:100%;
    }
	section .all-brand h2{
		font-size: 14px;
		color:rgb(78, 76, 76);
		margin:2%;
		margin-bottom:1%;
        padding:3%;
	}
</style>