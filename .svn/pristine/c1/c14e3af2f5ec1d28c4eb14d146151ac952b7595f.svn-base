<template>

  <div>
    <div class="sideNav">

      <div class="sideNav_box1" @click="openPopup">
        <img src="../assets/yuyue.png" alt="">
      </div>

      <div class="sideNav_shadow">
        <div class="sideNav_box2">
          <!-- @click="QRclick" -->
          <div class="sideNavTxt">
            <!-- <img src="../../assets/qrCodeicon.png" alt=""> -->
            <div class="bgImg"></div>
            <p>扫描二维码</p>
          </div>
          <!-- v-if="QRShow" -->
          <div class="QR">
            <img :src="qrcode" alt="">
            <p>咨询专业老师</p>
          </div>
        </div>

        <div class="sideNav_box3" @click="toTop">
          <a class="scroll-to-top">
            <img src="../assets/topClickicon.png" alt="">
          </a>
        </div>
      </div>

    </div>
    <el-dialog title="" :visible.sync="popupVisible" width="640px">
      <div>
        <popup></popup>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {  getData } from "../api/api";
import popup from "./popup.vue";
export default {
  data() {
    return {
      popupVisible: false,
      qrcode: ''
    }
  },
  components: {
    popup: popup,
  },
  created() {
    this.$bus.$on('brotherEvent', res => {
      if (res == 'close') {
        this.popupVisible = false
      } else {
        this.popupVisible = true
      }
    })




  },
  mounted() {
    this.init()
    // window.addEventListener('keydown',this.keyDown);

  },
  methods: {

    openPopup() {
      this.popupVisible = true
    },
    init() {
      console.log(this.$route)
      var _this = this
      var params = {
        channel: "0016",
        articletype: "01",
        articleurl: "https://www.un29.com/#/",
        position: "1",
        sourcetype: "pc",
        code: ''
      }
      getData('get', 'https://insure.meihualife.com/articlebak/getZhiHuArticleQrCode.do', function (data) {
       
        var qrcode = JSON.parse(data).qrcode
        _this.qrcode = qrcode
      }, params);

    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    },
  },
}
</script>

<style>
/* 侧边导航---开始 */

.sideNav {
  position: fixed;
  top: 50%;
  right: 0px;
  z-index: 2000;
}
.sideNav .sideNav_box1 {
  cursor: pointer;
}
.sideNav_shadow {
  background: #ffffff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  border-radius: 5px 0px 0px 5px;
}
.sideNav .sideNav_box2 {
  width: 80px;
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
  position: relative;
}
.sideNavTxt .bgImg {
  width: 25px;
  height: 25px;
  background: url(../assets/qrCodeicon.png) no-repeat center center;
  background-size: 25px 25px;
  margin: 0 auto;
  margin-bottom: 5px;
}

.sideNavTxt {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: space-around;
}

.sideNav_box2:hover .QR {
  display: block;
}
.sideNav_box2:hover .sideNavTxt .bgImg {
  background: url(../assets/qrCodeiconBlue.png) no-repeat center center;
  background-size: 25px 25px;
}
.sideNav_box2:hover .sideNavTxt p {
  color: #3244a8;
}

.QR {
  width: 190px;
  height: 235px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  position: absolute;
  right: 97px;
  bottom: -73px;
  display: none;
}
.sideNav_box2 .QR p {
  font-size: 18px;
  margin-top: -5px;
}
.sideNav_box2 .QR img {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  padding: 15px;
}
.sideNav .sideNav_box2::after {
  content: "";
  /* margin-top: 20px; */
  /* padding-bottom: 0px; */
  margin-top: 20px;
  border-top: 2px solid #dddddd;
  width: 45px;
  /* height: 0px; */
  display: inline-block;
  vertical-align: middle;
}
.sideNav .sideNav_box3 {
  width: 80px;
  height: 63px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
}

.sideNav_box3 img {
  width: 25px;
  height: 23px;
}
.sideNav_box2 img {
  width: 25px;
  height: 25px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.sideNav_box2 p {
  font-size: 14px;
}

/* 侧边导航---结束 */
</style>
