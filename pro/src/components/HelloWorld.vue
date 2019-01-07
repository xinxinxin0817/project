<template>
  <div class="hello">
   	<!-- <header>{{title}}</header> -->
   	<!-- <mt-header fixed :title="title"></mt-header>	 -->
   	<section>
   		<router-view @toparent="getdata"></router-view>
   	</section>
   	<footer>
   		<router-link to="/home" tag="span">首页</router-link>
   		<router-link to="/shop" tag='span'>选购</router-link>
   		<router-link to='/find' tag="span">发现</router-link>
   		<router-link to='/cart' tag="span">购物车</router-link>
   		<router-link to='/mycenter' tag="span">我的</router-link>
   	</footer>
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '首页'
    }
  },
  methods:{
  	getdata(msg){
  		this.title=msg;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
	/*vw== 可视窗口 横向宽度*/
	/*vh==竖向高度*/
	.router-link-active{
		color: #fff;
		background:red;
	}
	*{
		margin:0;
		padding:0;
	}
	
	.hello{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	footer{
		height: 50px;
		background: #cecece;
		text-align: center;
		line-height: 50px;
	}
	
	section{
		flex: 1;
	}
	footer{
		overflow: hidden;
	}
	
	footer span{
		float: left;
		width: 20%;
	}
	
	
</style>
