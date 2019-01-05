<template>
	<div id="">
		<h1>home</h1>
		<h2>{{count}}</h2>
		<!-- <ul>
			<li v-for="(item,home) in list" :key="home"><router-link :to="'/detail/'+item.pid">{{item.pname}}</router-link></li>
		</ul> -->
	</div>
</template>

<script>
	import axios from 'axios';

	import {mapGetters,mapActions} from 'vuex';
	export default {
		name:"Home",
		data(){
			return{
				str:'hello world vuejiashoujia',
				tit:'首页',
				list:[]
			}
		},
		computed:{
			...mapGetters(['count'])
		},
		methods:{
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
			var _this=this;
			// axios({
			// 	method:'get',
			// 	url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
			// 	params:{uid:'11475'}
			// }).then((data)=>{
			// 	_this.list=data.data.data
			// })
			
			
		}
	}
	
	
</script>

<style scoped="">
	h1{
		color: yellow;
	}
	li{
		height: 50px;
		border-bottom: 1px solid red;
	}
	
</style>