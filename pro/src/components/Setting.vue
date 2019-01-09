<template>
	<div>
		<Header msg="发现" style="background: #fff;width:100%;height:50px;">
           <span @click="fanhui()">返回</span>
			<span>设置</span>
		</Header>
		<section>
			<div class="shezhi">
                <p class="teshu">语言</p>
                <p>提醒</p>
                <p>缓存设置</p>
         
            </div>
            <router-link to="/login" style="display:flex;width:100%;"><div class="tuichu">退出登录</div></router-link>
		</section>
       
	</div>
</template>

<script>
	export default {
		name:'More',
		data(){
			return{
				tit:'更多'
			}
		},
		mounted(){
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
	header{
        flex-shrink: 0;
		line-height: 50px;
		font-size: 16px;
        
	}
    header span:first-child {
        margin-left:20px;
    }
   header span:last-child {
        margin-left:30%;
    }
	section{
		height:86.4vh;
		display: flex;
		flex-direction: column;
		overflow:auto;
		flex:1;
        align-items: center;
		
	}	
    .shezhi{
        width:100%;
        height:40%;
        margin-top:20px;

    }
   .shezhi p{
       width:100%;
		height:49px;
	
		
		color:rgb(73, 72, 72);
		display: flex;
		align-items: center;
		padding-left:10px;
        border-bottom:1px solid #ccc;
        background:rgb(247, 241, 241);
   }
   .tuichu{
       width:100%;
		height:49px;
		color:rgb(73, 72, 72);
		display: flex;
		align-items: center;
		padding-left:10px;
        border-bottom:1px solid #ccc;
        border-top:1px solid #ccc;

        background:rgb(247, 241, 241);
        justify-content: center;
   }
  
	
	
</style>