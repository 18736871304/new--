<template>
  <div class="template">
    <headNav :phoneOrSearch="paramsHead"></headNav>
    <iframe src="https://www.un29.com/aboutUs/about.html" frameborder="0"  style="width: 100%; height: 1030px; display: block;"></iframe>
    <!-- <div class="main">
      <div id="fullPage" class="full-page-container">

        <div class="section section3">
          <div class="header-bg"></div>
          <div class="section-container section3-container">
            <div class="section3-content">
              <div class="section3-title">
                您有足够的理由选择我们
              </div>
            </div>
            <div class="section3-icon-list-wrap">
              <div class="icon-list">
                <div class="icon-item">
                  <img src="../../assets/message/icon-chengli@2x.png">

                </div>
                <div class="icon-text">
                  <div>2008</div>
                  <div>美华保险成立，迄今<span class="year" id="year"></span>年</div>
                </div>
              </div>
              <div class="icon-list">
                <div class="icon-item">
                  <img src="../../assets/message/icon-xuanze@2x.png">
                </div>
                <div class="icon-text">
                  <div id="countUPNum1">1000000+</div>
                  <div>超百万位家庭的选择</div>
                </div>
              </div>
              <div class="icon-list">
                <div class="icon-item">
                  <img src="../../assets/message/icon-24h@2x.png">
                </div>
                <div class="icon-text">
                  <div>365*24</div>
                  <div>每时每刻，为您服务</div>
                </div>
              </div>
              <div class="icon-list">
                <div class="icon-item">
                  <img src="../../assets/message/icon-guwen@2x.png">
                </div>
                <div class="icon-text">
                  <div>2000+</div>
                  <div>专业的保险顾问团队</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section section4" style="height: calc(100vh + 90px);">
          <div class="header-bg"></div>
          <div class="section-container section4-container">
            <div class="section-item-container">
              <div class="section4-top">
                时刻提醒变习惯，长久合规即生命
              </div>
              <div class="section4-bottom">
                <div class="section4-bottom-left">
                  <ul id="introList">
                    <li :class=" num==0?'active':''" @click="open(0)" data-listid="0"><span>全国服务区域</span></li>
                    <li :class=" num==1?'active':''" @click="open(1)" data-listid="1"><span>美华营业执照</span></li>
                    <li :class=" num==2?'active':''" @click="open(2)" data-listid="2"><span>全国区域经营保险业务许可证</span></li>
                    <li :class=" num==3?'active':''" @click="open(3)" data-listid="3"><span>经营互联网保险业务备案</span></li>
                    <li :class=" num==4?'active':''" @click="open(4)" data-listid="4"><span>增值电信业务经营许可证</span></li>
                    <li :class=" num==5?'active':''" @click="open(5)" data-listid="5"><span>中国保险行业协会会员单位</span></li>
                  </ul>
                </div>
                <div class="section4-bottom-right">
                  <ul id="introListImg">
                    <li :class=" num==0?'active':''" v-if="num==0">
                      <img src="../../assets/message/slide7-tab-1@2x.png" class="tab0">
                    </li>
                    <li :class=" num==1?'active':''" v-if="num==1">
                      <img src="../../assets/message/slide7-tab-2@2x.png" class="tab1">
                    </li>
                    <li :class=" num==2?'active':''" v-if="num==2">
                      <img src="../../assets/message/slide7-tab-3@2x.png" class="tab2">
                    </li>
                    <li :class=" num==3?'active':''" v-if="num==3">
                      <img src="../../assets/message/slide7-tab-4@2x.png" class="tab3">
                    </li>
                    <li :class=" num==4?'active':''" v-if="num==4">
                      <img src="../../assets/message/slide7-tab-5@2x.png" class="tab4">
                    </li>
                    <li :class=" num==5?'active':''" v-if="num==5">
                      <img src="../../assets/message/slide7-tab-6@2x.png" class="tab5">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section section5">
          <div class="header-bg"></div>
          <div class="section-container section5-container">
            <div class="section-item-container">
              <div class="section5-content">
                <div class="section5-title">
                  客户与社会的认可成就我们的方法与专业
                </div>
              </div>
              <div class="section5-icon-list-wrap">
                <div class="icon-list">
                  <div class="icon-item">
                    <img src="../../assets/message/icon-xin@2x.png">
                  </div>
                  <div class="icon-text">
                    <div>相信 信念 信仰</div>
                  </div>
                </div>
                <div class="icon-list">
                  <div class="icon-item">
                    <img src="../../assets/message/icon-wang@2x.png">
                  </div>
                  <div class="icon-text">
                    <div>PK自己 看见希望</div>
                  </div>
                </div>
                <div class="icon-list">
                  <div class="icon-item">
                    <img src="../../assets/message/icon-ai@2x.png">
                  </div>
                  <div class="icon-text">
                    <div>大爱=神圣的使命</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div> -->

    <footBottom></footBottom>
  </div>
</template>
<script>

import footBottom from "../../components/footBottom.vue";
import headNav from "../../components/headNav.vue";
export default {
  metaInfo: {
    title: '美华保险,意外险,医疗险,重疾险,定期寿险,理财', //设置页面title
    meta: [{                 //设置页面meta
      name: 'keyWords',
      content: '意外险包括哪些范围,医疗险分类有哪些,重疾险有必要买吗,定期寿险的特点,理财的风险一般有哪些'
    },
    {
      name: "description",
      content: "美华保险销售有限公司，成立于2008年11月，是经国家金融监督管理总局(原银保监会)批准设立的首批全国综合性保险服务持牌机构。总部位于上海，注册资金实缴5000万，战略合作全国多达80余家保险公司，提供近千款产品甄选服务，涵盖意外险、医疗险、重疾险、人寿险、年金险、车险等全险种产品，服务用户超过3000万人次。",
    },]
  },
  components: {
    // 局部注册组件
    footBottom: footBottom,
    headNav:headNav
  },
  data() {
    return {
      num: 0,
      paramsHead: {
        isphone: true
      }
    };
  },

  mounted: function () {
    var ss = {
      isphone: true
    }
    this.paramsHead = ss
  },

  activated() {

  },
  watch: {

  },
  methods: {
    open(item) {
      this.num = item
    },




  },
};
</script>

<!-- 

<style scoped>
 body{
   overflow: hidden;
 }
.header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 0.3438rem;
  background: #222121;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 1.3542rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.header .logo-wrap {
  max-width: 1.9792rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  height: calc(100% - 0.026rem);
  padding-top: 0.026rem;
  cursor: pointer;
}
.header .nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header .nav .nav-item {
  margin-right: 0.3385rem;
  color: #979797;
  font-size: 0.0833rem;
  cursor: pointer;
}
.header .nav .nav-item span:first-child {
  margin-right: 0.0417rem;
}
.header .nav .nav-item:last-child {
  margin-right: 0;
}
.header .nav .nav-item:last-child span {
  margin-right: 0;
}
.header .nav .link:hover {
  color: #ffffff;
}
.header .nav .nav-phone {
  cursor: auto;
}
.header .nav .nav-phone span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header .nav .active {
  color: #ffffff;
  opacity: 1;
}

.main {
  width: 100%;
  height: 100%;
}
.main .full-page-container .header-bg {
  width: 100%;
  height: 0.3438rem;
  background: #222121;
}
.main .full-page-container .section {
  height: 100vh;
  background-color: black;
  -webkit-transition: 1s background-color 1.3s;
  transition: 1s background-color 1.3s;
  color: #ffffff;
  position: relative;
}
.main .full-page-container .section .canvas-bg {
  position: absolute;
}
.main .full-page-container .section-container {
  height: calc(100vh - 0.3438rem);
  /* height: calc(100vh); */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.main .full-page-container .slide-item-container {
  width: 5.9531rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
.main .full-page-container .slide-item-container .slide-left {
  width: 3.75rem;
  opacity: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-title
  .title-cn {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-title
  .title-cn
  .title-number {
  font-size: 0.625rem;
  line-height: 0.8;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-title
  .title-cn
  .symbol {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin-left: 0.0729rem;
  margin-right: 0.1302rem;
  padding-bottom: 4px;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-title
  .title-cn
  .title-text {
  font-size: 0.3646rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: end;
  align-self: flex-end;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-title
  .title-en {
  font-size: 0.1563rem;
  opacity: 0.5;
}
.main .full-page-container .slide-item-container .slide-left .fengexian {
  width: 0.2813rem;
  margin-top: 0.2083rem;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-desc
  .content-cn {
  text-align: justify;
  font-size: 0.1354rem;
  letter-spacing: 1px;
  line-height: 0.25rem;
}
.main
  .full-page-container
  .slide-item-container
  .slide-left
  .slide-left-desc
  .content-en {
  font-size: 0.0833rem;
  opacity: 0.5;
  line-height: 24px;
}
.main .full-page-container .slide-item-container .slide-right {
  margin-left: 0.651rem;
  position: relative;
  opacity: 0;
}
.main
  .full-page-container
  .slide-item-container
  .slide-right
  .slide-right-phone {
  width: 1.5625rem;
  height: 3.125rem;
  position: relative;
}
.main
  .full-page-container
  .slide-item-container
  .slide-right
  .slide-right-phone
  .slide-phone-img {
  position: relative;
  z-index: 2;
}
.main
  .full-page-container
  .slide-item-container
  .slide-right
  .slide-right-phone
  .slide-phone-tag {
  width: 0.96875rem;
  position: absolute;
  right: -0.7396rem;
  top: -0.2708rem;
  z-index: 1;
}
.main .full-page-container .slide-item-container .slide-right-icon-number {
  position: absolute;
  right: -0.276rem;
  bottom: -0.3177rem;
  width: 0.1302rem;
}
.main .full-page-container .section3 {
  background: url("../../assets/message/slide6-bg@2x.png") no-repeat center;
  background-size: cover;
  position: relative;
}
.main .full-page-container .section3 .section3-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-content
  .section3-title {
  font-size: 55px;
  text-align: center;
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-icon-list-wrap {
  width: 61.88%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  margin-top: 70px;
  margin-bottom: 70px;
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-icon-list-wrap
  .icon-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-icon-list-wrap
  .icon-list
  .icon-item {
  /* width: 0.5208rem; */
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-icon-list-wrap
  .icon-list
  .icon-text {
  min-width: 1rem;
  text-align: center;
  margin-top: 30px;
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-icon-list-wrap
  .icon-list
  .icon-text
  div:first-child {
  font-size: 40px;
}
.main
  .full-page-container
  .section3
  .section3-container
  .section3-icon-list-wrap
  .icon-list
  .icon-text
  div:last-child {
  font-size: 30px;
  margin-top: 20px;
}
.main .full-page-container .section4 {
  background: url("../../assets/message/slide7-bg@2x.png") no-repeat center;
  background-size: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  /* display: flex; */
}
.main .full-page-container .section4 .section4-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-top {
  font-size: 55px;
  text-align: center;
  margin-bottom: 100px;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom {
  /* display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-item-align: center;
  align-self: center; */
  /* display: flex;
  position: relative; */
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 1200px;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-left {
  font-size: 30px;
  /* position: absolute;
  left: 50%; */
  /* margin-left: 225px; */
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-left
  ul {
  width: 450px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-left
  ul
  li {
  font-size: 30px;
  opacity: 0.5;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
  height: 70px;
  line-height: 70px;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-left
  ul
  li
  span {
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 33px;
  word-break: keep-all;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-left
  ul
  .active {
  opacity: 1;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#3244A8),
    color-stop(55%, rgba(46, 32, 241, 0.21)),
    color-stop(70%, rgba(81, 70, 243, 0.11)),
    to(rgba(255, 255, 255, 0))
  );
  background: linear-gradient(
    to right,
    #3244A8 0%,
    rgba(46, 32, 241, 0.21) 55%,
    rgba(81, 70, 243, 0.11) 70%,
    rgba(255, 255, 255, 0) 100%
  );
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-right {
  margin-left: 200px;
  /* position: absolute;
  right: 50%; */
  /* margin-right: 1265px; */
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-right
  ul
  li {
  display: none;
  opacity: 0;
  /* min-width: 513px; */
  height: 600px;
}
.main
  .full-page-container
  .section4
  .section4-container
  .section-item-container
  .section4-bottom
  .section4-bottom-right
  ul
  .active {
  opacity: 1;
  display: block;
}
.main .full-page-container .section5 {
  background: url("../../assets/message/slide8-bg@2x.png") no-repeat center;
  background-size: cover;
  position: relative;
}
.main .full-page-container .section5 .section5-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container
  .section5-content
  .section5-title {
  font-size: 55px;
  text-align: center;
  margin-bottom: 100px;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container
  .section5-icon-list-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  margin-top: 0.453125rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container
  .section5-icon-list-wrap
  .icon-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container
  .section5-icon-list-wrap
  .icon-list
  .icon-item {
  /* width: 0.5208rem; */
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container
  .section5-icon-list-wrap
  .icon-list
  .icon-text {
  text-align: center;
  margin-top: 0.2083rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-item-container
  .section5-icon-list-wrap
  .icon-list
  .icon-text
  div {
  font-size: 30px;
}
.main .full-page-container .section5 .section5-container .section-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: auto !important;
  background: rgba(33, 33, 33, 0.5);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.2604rem 0;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-left
  .footer-left-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-left
  .footer-left-left
  .footer-left-bottom
  .footer-logo {
  width: 1.234375rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-left
  .footer-left-right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: 0.3021rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-left
  .footer-left-right
  .footer-left-bottom {
  opacity: 0.5;
  line-height: 0.1615rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-left
  .footer-left-right
  .footer-left-bottom
  .footer-copyright {
  font-size: 0.0729rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 0.6615rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-right
  .qrcode {
  width: 0.625rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-right
  .qrcode-desc {
  text-align: center;
  margin-top: 0.125rem;
  opacity: 0.5;
  font-size: 0.0729rem;
  line-height: 0.1615rem;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-list {
  cursor: pointer;
  opacity: 0.5;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-list
  img {
  width: 12px;
}
.main
  .full-page-container
  .section5
  .section5-container
  .section-footer
  .footer-list
  span {
  font-size: 0.0833rem;
}

.slide-in-left {
  -webkit-animation: ameihua-slideInLeft 0.5s ease 0s forwards;
  animation: ameihua-slideInLeft 0.5s ease 0s forwards;
}

.slide-in-right {
  -webkit-animation: ameihua-slideInRight 0.5s ease 0s forwards;
  animation: ameihua-slideInRight 0.5s ease 0s forwards;
}

.slide-out-left {
  -webkit-animation: ameihua-slideOutLeft 0.5s ease 0s forwards;
  animation: ameihua-slideOutLeft 0.5s ease 0s forwards;
}

.slide-out-right {
  -webkit-animation: ameihua-slideOutRight 0.5s ease 0s forwards;
  animation: ameihua-slideOutRight 0.5s ease 0s forwards;
}

.zoom-in {
  -webkit-animation: ameihua-zoomIn 0.2s ease 0s forwards;
  animation: ameihua-zoomIn 0.2s ease 0s forwards;
}

@-webkit-keyframes ameihua-slideInUp1 {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 250%, 0);
    transform: translate3d(0, 250%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ameihua-slideInUp1 {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 250%, 0);
    transform: translate3d(0, 250%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ameihua-slideInUp2 {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 0.6;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ameihua-slideInUp2 {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 0.6;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ameihua-index-mouse {
  0% {
    opacity: 0.3;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.6;
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  100% {
    opacity: 0.3;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ameihua-index-mouse {
  0% {
    opacity: 0.3;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.6;
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  100% {
    opacity: 0.3;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ameihua-slideInLeft {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ameihua-slideInLeft {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ameihua-slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ameihua-slideInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes ameihua-slideOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes ameihua-slideOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@-webkit-keyframes ameihua-slideOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes ameihua-slideOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@-webkit-keyframes ameihua-zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes ameihua-zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.3);
    transform: scale(0.3);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.tab0 {
  width: 530px;
  height: 408px;
}
.tab1 {
  width: 350px;
  height: 450px;
}
.tab2 {
  width: 502px;
  height: 350px;
}
.tab3 {
  width: 502px;
  height: 350px;
}
.tab4 {
  width: 350px;
  height: 450px;
}
.tab5 {
  width: 490px;
  height: 360px;
}
</style>
   -->