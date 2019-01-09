<template>

	<div>
		<Header class="header-p" msg="支付">
			<span @click="fanhui()">《</span>
			<span>填写订单</span>
		</Header>
		<section class="section">
			<div class="ddd">
				<div class="dz">
					<div class="dz-l">王先生</div>
					<div class="dz-r">
						<p>134****0638</p>
						<p>河南省郑州市海为科技园千锋教育C区12楼</p>
					</div>
				</div>

				<div class="spje">
					<div><span>商品金额</span><span>￥193.00</span></div>
					<div><span>运费</span><span>￥10.00</span></div>
					<div><span>折扣</span><span>￥35.00</span></div>
				</div>

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
          fanhui(){
				this.$router.go(-1)
			}
        },
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
.spje{
	height:60px;
	background:gold;
}

.dz{
	padding-top:10px;
	height:60px;
	width:100%;
	background:pink;
	border-top:5px solid #ccc;
	border-bottom:6px solid #ccc;
	display: flex;
}
.dz div:first-child{
	width:25%;
	height:100%;
	text-align: center;
}
.dz div:last-child{
	width:75%;
	height:100%;
}
.dz div p{
	font-size: 14px;
}

.section{
		height:70vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		overflow: hidden;
		background:olivedrab;
		
	}
	.ddd{
		height:100%;
		width:100%;
		overflow: auto;
	}

.header-p{
	height:50px;
	width:100%;
	background:yellow;
	display: flex;

}
.header-p span:first-child{
	width:8%;
	height:100%;
	text-align: center;
	line-height:50px;
}
.header-p span:last-child{
	width:82%;
	height:100%;
	text-align: center;
	line-height: 50px;
}

</style>