<template>
  <div>
    <Header class="header-title" msg="发现" style="background: #fff;width:100%;height:50px;">
      <span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;margin-left:20px;"></span>
      <span class="biaoti" style="margin-left:80px;">标题</span>
    </Header>
    <section class="section1">
      <div class="banner3"><img :src="img" alt="" style="width:100%;height:100%"></div>
      <div class="wenzhang">
        本月15日，在批发市场的一家散装酒经销店内，我们发现了商家对酒类产品进行虚假标识宣传，当场就将此案移交给了红山工商所。”市市场监督管理局食品生产流通科科长刘劲松介绍说，“我们在每个食品经营场所都设立了投诉站，消费者若发现问题，可以直接投诉，我们要求商家必须将问题在‘场内’解决。”
        “本月15日，在批发市场的一家散装酒经销店内，我们发现了商家对酒类产品进行虚假标识宣传，当场就将此案移交给了红山工商所。”市市场监督管理局食品生产流通科科长刘劲松介绍说，“我们在每个食品经营场所都设立了投诉站，消费者若发现问题，可以直接投诉，我们要求商家必须将问题在‘场内’解决。”
        该局副局长韩建明表示，检查人员严格按照食品销售监督检查要点，对辖区大部分超市、农贸市场等地的年货食品展开了检查，发现市区年货食品总体情况较好，暂未发现重大食品安全隐患。
        与此同时，在检查中，检查人员还要求各食品生产经营单位负责人积极展开食品安全风险自查，切实落实食品安全主体责任，认真检查食品安全防范措施的落实情况，及时消除食品安全隐患。同时以承办团圆饭、年夜饭的大中型餐饮单位、火锅店等区域为重点对象，对许可情况、从业人员健康体检及持证情况、采购进货查验、索证索票、台账记录制度落实
      </div>
     
      <div class="banner4">
        <h2 class="title-h">相关商品推荐</h2>
        <ul class="like-title">
         				<li v-for="(item,title) in list" :key="title" :pid="item.pid">
                   <router-link style="width:100%;"  :to="'/details/'+item.pid">
                      <p><img :src="item.pimg" alt="" style="width:136px;height:144px;"></p>
                      <span>{{item.pname}}</span>
                   </router-link>
                </li>

           
         
        </ul>
      </div>
    </section>
    <footer>
      <router-link to>
        <p></p>
      </router-link>
    </footer>
  </div>
</template>

<script>

	import axios from 'axios';


export default {
  name: "tiylt",
  data() {
    return {
      tit: "更多",
      title:'',
				img:'',
				jg:'',
				list:[],
				list1:[]
    };
  },
  mounted() {
    this.$emit("toparent", this.tit);
  var _this=this;
			axios({
					method:'get',
					url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
					params:{uid:'14632'}
				}).then((data)=>{
					//console.log(data.data.data)
					_this.list=data.data.data
				})




    
			var id=this.$route.params.id
			console.log(id)
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{uid:'14632',id:_this.$route.params.id}
			}).then((data)=>{
				console.log(data.data.data)
				_this.list1=data.data.data;
				_this.title=data.data.data.pname
				_this.jg=data.data.data.pprice
				_this.img=data.data.data.pimg

				
			})
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped="">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.header-title {
  
  line-height: 50px;
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
}
.span-t {
  margin-right: 26%;
  margin-left: 2%;
}

.biaoti {
  width: 40%;
  height: 30px;
  background: rgb(240, 234, 234);
  display: inline-block;
  text-align: center;
  line-height: 30px;
  margin-top: 4%;
  margin: 0;
}
.section1 {
 
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  align-items: center;
}

.banner3 {
  width: 90%;
  height: 170px;
  background: #ccc;
  margin-top: 3%;
}
.wenzhang {
  width: 90%;
 
 display: flex;
  font-size: 14px;
  color: #504e4e;
  margin-top:10px;
  text-indent: 2em;
  line-height: 24px;
}
.banner4 {
  width: 95%;

  display: flex;
  flex-direction: column;
 
}
.banner4 h2{
   width: 150%;
  height: 40px;
  font-size: 16px;
  font-weight: 100px;

  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  margin-top: 2%;
  margin-left: -60%;
}

.like-title {
  width: 94%;

  display: flex;

  justify-content: space-between;
  flex-wrap: wrap;
}
.like-title li {
  height: 174px;
  width: 136px;
  margin-left: 20px;

  margin-bottom: 10%;

  display: flex;
  flex-direction: column;
}
.like-title p {
  width: 146px;
  height: 144px;
 
}
.like-title span {
  font-size: 12px;
  color: #504e4e;
  width: 136px;
  height: 30px;
  line-height: 30px;

 
  overflow: hidden;
  display: inline-block;
}

footer {
  height: 50px;
  width: 100%;
  background: #f0ebeb;

  line-height: 50px;
  flex-shrink: 0;
  display: flex;
  position: fixed;

}
footer p {
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  right: 10%;
}
</style>