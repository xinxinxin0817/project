<template>
  <div>
    <Header class="header-title" msg="发现" style="background: #fff;width:100%;height:50px;">
      <span @click="fanhui()" class="iconfont icon-fanhui" style="font-size:20px;margin-left:20px;"></span>
      <span class="biaoti" style="margin-left:80px;">标题</span>
    </Header>
    <section class="section1">
      <div class="banner3"></div>
      <div class="wenzhang">
        本月15日，在批发市场的一家散装酒经销店内，我们发现了商家对酒类产品进行虚假标识宣传，当场就将此案移交给了红山工商所。”市市场监督管理局食品生产流通科科长刘劲松介绍说，“我们在每个食品经营场所都设立了投诉站，消费者若发现问题，可以直接投诉，我们要求商家必须将问题在‘场内’解决。”
        “本月15日，在批发市场的一家散装酒经销店内，我们发现了商家对酒类产品进行虚假标识宣传，当场就将此案移交给了红山工商所。”市市场监督管理局食品生产流通科科长刘劲松介绍说，“我们在每个食品经营场所都设立了投诉站，消费者若发现问题，可以直接投诉，我们要求商家必须将问题在‘场内’解决。”
        该局副局长韩建明表示，检查人员严格按照食品销售监督检查要点，对辖区大部分超市、农贸市场等地的年货食品展开了检查，发现市区年货食品总体情况较好，暂未发现重大食品安全隐患。
        与此同时，在检查中，检查人员还要求各食品生产经营单位负责人积极展开食品安全风险自查，切实落实食品安全主体责任，认真检查食品安全防范措施的落实情况，及时消除食品安全隐患。同时以承办团圆饭、年夜饭的大中型餐饮单位、火锅店等区域为重点对象，对许可情况、从业人员健康体检及持证情况、采购进货查验、索证索票、台账记录制度落实
      </div>
      <h2 class="title-h">相关商品推荐</h2>
      <div class="banner4">
        <ul class="like-title">
          <router-link to="/details">
            <li>
              <p></p>
              <span>2222</span>
            </li>
          </router-link>
          <router-link to="/details">
            <li>
              <p></p>
              <span>2222</span>
            </li>
          </router-link>
          <router-link to="/details">
            <li>
              <p></p>
              <span>2222</span>
            </li>
          </router-link>
          <router-link to="/details">
            <li>
              <p></p>
              <span>2222</span>
            </li>
          </router-link>
          <router-link to="/details">
            <li>
              <p></p>
              <span>2222</span>
            </li>
          </router-link>
          <router-link to="/details">
            <li>
              <p></p>
              <span>2222</span>
            </li>
          </router-link>
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
export default {
  name: "More",
  data() {
    return {
      tit: "更多"
    };
  },
  mounted() {
    this.$emit("toparent", this.tit);
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.header-title {
  flex-shrink: 0;
  line-height: 50px;
  font-size: 16px;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
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
  height: 86.4vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  align-items: center;
}
.title-h {
  width: 40%;
  height: 30px;
  font-size: 16px;
  font-weight: 100px;

  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  margin-top: 2%;
  margin-left: -60%;
}
.banner3 {
  width: 90%;
  height: 380px;
  background: #ccc;
  margin-top: 3%;
}
.wenzhang {
  width: 90%;
  height: 500px;
  overflow: auto;
  font-size: 14px;
  color: #504e4e;
  margin: 10px 0;
  text-indent: 2em;
  line-height: 24px;
}
.banner4 {
  width: 95%;

  display: flex;
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
  width: 136px;
  height: 132px;
  background: #ff0;
}
.like-title span {
  font-size: 12px;
  color: #504e4e;
  width: 136px;
  height: 40px;
  background: pink;
}

footer {
  height: 50px;
  width: 100%;
  background: #f0ebeb;

  line-height: 50px;
  flex-shrink: 0;
  display: flex;
}
footer p {
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  right: 10%;
}
</style>