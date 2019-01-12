<template>
	<div>
		
		<section>
			<div class="top-l">
				<div class="my-top">
					<p></p>
					<p>
						<span>{{name}}</span>
						<span>信用积分</span>
					</p>
				</div>
				<div class="my-cen">
					<p>我的订单</p>
					<div class="da-d">
						<div class="my-ding">						
							<p></p><span>等待付款</span>
						</div>
						<div class="my-ding">						
							<p></p><span>处理中</span>
						</div>
						<div class="my-ding">						
							<p></p><span>已出库</span>
						</div>
						<div class="my-ding">						
							<p></p><span>全部订单</span>
						</div>
						
					</div>
					
				</div>
				<div class="my-bot">我的账户</div>
			</div>
			<div class="bottom-l">
				<router-link to=""><p>消息中心</p></router-link>
				<router-link to=""><p>我的产品评论</p></router-link>
				<router-link to=""><p>通知列表</p></router-link>
				<router-link to=""><p>收藏</p></router-link>
				<router-link to="/setting"><p>设置</p></router-link>
				<router-link to=""><p>顾客服务部</p></router-link>

			</div>

		</section>
	</div>
</template>

<script>
		
		

		function getCookie(name){
			var str = document.cookie;
			var arr = str.split("; ");
			for(var i = 0; i < arr.length; i++){
				var arr1 = arr[i].split("=");
				if(arr1[0]==name){
					return arr1[1];
				}
			}
		}
		function setCookie(name,val,n){
			var oDate = new Date();
			oDate.setDate(oDate.getDate()+n);
			document.cookie = name + "=" + val + ";expires="+ oDate ;
		}
		function removeCookie(name){
			setCookie(name,1,-1);
		}
		var aname=getCookie("mingzi")
		console.log(aname)



	export default {
		name:'Logina',
		data(){
			return{
				tit:'更多',
				name:''
			}
		},
		mounted(){
			this.name=aname
			this.$emit('toparent',this.tit)
        },
        methods:{
          fanhui(){
				this.$router.go(-1)
			}
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
	
	section{
		height:92.5vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		background:pink;		
	}
	.top-l{
		width:100%;
		height:52%;
		background:#fff;
	}
	
	.my-top{
		width:100%;
		height:100px;
	
		margin-top:20px;
		display: flex;
		align-items: center;
		padding-left:20px;
		font-size: 14px;
	}
	.my-top p:first-child{
		width:15%;
		height:58%;
		background:rgb(238, 231, 231);
		border-radius: 50%;
		
	}
    .my-top p:last-child{
		width:70%;
		height:60px;
	
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		padding-left: 20px;
		
	}
	.my-cen{
		width:100%;
		height:130px;
	
		margin-top:20px;
	}
	.my-cen p:first-child{
		font-size: 12px;
		color:rgb(46, 44, 44);
		padding-left:20px;
	}
	.da-d{
		width:100%;
		height:100px;
	
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.my-ding{
		display: flex;
		align-items: center;
		width:20%;
		height:80%;
	
		flex-direction: column;
		font-size: 12px;
		color:rgb(51, 49, 49);
	}
	.my-ding p{
		width:50%;
		height:71%;
		background:rgb(241, 237, 237);
		border-radius: 50%;
		margin-bottom:10px;
	}
	.my-bot{
		font-size: 12px;
		color:rgb(51, 49, 49);
		margin-top:15px;
		padding-left: 20px;
	}
	.bottom-l{
		width:100%;
		height:48%;
		background:rgb(248, 245, 245);
		display: flex;
		flex-direction: column;
	}
	.bottom-l p{
		width:100%;
		height:49px;
	
		border-top:1px solid rgb(219, 202, 202);
		color:rgb(73, 72, 72);
		display: flex;
		align-items: center;
		padding-left:10px;
	}

</style>