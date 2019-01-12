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
                    <div class="brand-a">
						<h6>A</h6>
						<router-link to="/allc"><P>Only   ---一生有你</P></router-link>
						<router-link to="/allc"><P>哥弟GIRDEAR</P></router-link>
						<router-link to="/allc"><P>相宜本草——诠释“本草养肤”理念</P></router-link>
						<router-link to="/allc"><P>欧时力</P></router-link>
						<router-link to="/allc"><P>阿依莲</P></router-link>
						<router-link to="/allc"><P>维沙曼VEROMODA</P></router-link>
					</div>
					<div class="brand-b">
						<h6>B</h6>
						<router-link to="/allc"><P>阿玛尼Armani挚爱唇膏</P></router-link>
						<router-link to="/allc"><P>魅可M.A.C</P></router-link>
						<router-link to="/allc"><P>资生堂臻美</P></router-link>
						<router-link to="/allc"><P>Tom Ford黑金唇膏</P></router-link>
						<router-link to="/allc"><P>纪梵希小羊皮唇膏</P></router-link>
						<router-link to="/allc"><P>迪奥Dior烈焰蓝金唇膏</P></router-link>
						<router-link to="/allc"><P>YSL方管纯口红</P></router-link>
						<router-link to="/allc"><P>生罗兰</P></router-link>
						<router-link to="/allc"><P>欧莱雅</P></router-link>

					</div>
					<div class="brand-c">
						<h6>C</h6>
						<router-link to="/allc"><P>美赞臣</P></router-link>
						<router-link to="/allc"><P>美素佳儿</P></router-link>
						<router-link to="/allc"><P>惠氏</P></router-link>
						<router-link to="/allc"><P>雅培--京润珍珠</P></router-link>
						<router-link to="/allc"><P>飞鹤</P></router-link>
					
					</div>
					<div class="brand-d">
						<h6>D</h6>
						<router-link to="/allc"><P>雅诗·兰黛和约瑟夫·兰黛</P></router-link>
						<router-link to="/allc"><P>美宝莲</P></router-link>
						<router-link to="/allc"><P>一叶子</P></router-link>
						<router-link to="/allc"><P>shsreshin</P></router-link>
						<router-link to="/allc"><P>爱敬</P></router-link>
						<router-link to="/allc"><P>珀莱雅</P></router-link>
					</div>

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
		border-top:1px solid #ccc;
       
     
	   
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
	
        width:90%;
        height:100%;
    }
	section .all-brand h2{
		font-size: 14px;
		color:rgb(78, 76, 76);
		
		margin:3% 0;
        
	}
	.brand-a h6{
		font-size: 16px;
		margin:2% 5%;
	}
	.brand-a p{
		font-size: 14px;
		line-height: 20px;
		color:rgb(82, 80, 80);
		margin-left:7%;
	}
	.brand-b h6{
		font-size: 16px;
		margin:2% 5%;

	}
	.brand-b p{
		font-size: 14px;
		line-height: 20px;
		color:rgb(82, 80, 80);
		margin-left:7%;

	}
	.brand-c h6{
		font-size: 16px;
		margin:2% 5%;

	}
	.brand-c p{
		font-size: 14px;
		line-height: 20px;
		color:rgb(82, 80, 80);
		margin-left:7%;

	}
	.brand-d h6{
		font-size: 16px;
		margin:2% 5%;

	}
	.brand-d p{
		font-size: 14px;
		line-height: 20px;
		color:rgb(82, 80, 80);
		margin-left:7%;

	}
</style>