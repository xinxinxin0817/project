<template>
  <div class="hello">
   	<!-- <header>{{title}}</header> -->
   	<!-- <mt-header fixed :title="title"></mt-header>	 -->
   	<section>
   		<router-view @toparent="getdata"></router-view>
   	</section>
   	<footer>
   		<span><router-link style="width:100%;height:100%;" to="/home" tag="span">首页</router-link></span>
   		<span><router-link style="width:100%;height:100%;" to="/shop" tag='span'>选购</router-link></span>
   		<span><router-link style="width:100%;height:100%;" to='/find' tag="span">发现</router-link></span>
   		<span @click="shaxin()"><router-link style="width:100%;height:100%;" to='/cart'  tag="span">购物车</router-link></span>
   		<span @click="denglu()"><router-link style="width:100%;height:100%;" to='/mycenter' tag="span">我的</router-link></span>
   	</footer>
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
		var token=getCookie("token")
		console.log(Number(token));




export default {
  name: 'HelloWorld',
  data () {
    return {
	  title: '首页',
	  token:token
    }
  },
  methods:{
  	getdata(msg){
  		this.title=msg;
	  },
	shaxin(){
		console.log("aaa")
		location.reload()
	},
	denglu(){
		if(this.token){
			location.href="#/logina"
		}
	}  

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
	/*vw== 可视窗口 横向宽度*/
	/*vh==竖向高度*/
	/* .router-link-active{
		color: #fff;
		background:red;
	} */
	*{
		margin:0;
		padding:0;
	}
	body{display:flex;flex-direction: column;}
	.hello{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	footer{
		height: 50px;
		width:100%;
		background: #e0dada;
		text-align: center;
		line-height: 50px;
		flex-shrink: 0;
		display: flex;
		color:rgb(71, 67, 67);
	}
	
	section{
		flex: 1;
	}
	/* footer{
		overflow: hidden;
		z-index: 1;
	} */
	
	footer span{
		float: left;
		width: 20%;
	}
	footer span:hover{
		color: #fff;
		background:rgb(148, 142, 142);
	}
	
	
</style>
