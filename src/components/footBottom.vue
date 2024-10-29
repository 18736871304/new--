<template>
  <div class="footbot">
    <div class="bujv footBox">
      <div class="rank_row footMain">
        <div class="foot_left">
          <div class="foot_title">
            <router-link to="/aboutUs">关于我们</router-link>
            <p>电话：400-9200-713</p>
          </div>
          <div class="foot_title">
            <router-link to="/message">信息披露</router-link>
            <p>邮箱：customer_service29.com</p>
          </div>
          <div style="margin-top: 72px;">
            <div class="footer-copyright">
              <span style="display: flex;  margin-right: 10px;">备案证书号:
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202013874" style="text-decoration:none; display: flex;">
                  <img src="../assets/message/beian.png" style="width: 25px;height: 25px;margin-top: 3px;">
                  <p style=" color:#FFF;"> 沪公网安备 31011202013874 </p> 
                </a>
                &nbsp; &nbsp;
                <a target="_bank" style="color: #FFF;text-decoration:none;" href="https://beian.miit.gov.cn/" id="bei">{{ hostname }}</a>
              </span>
              <span>互联网保险信息披露</span>
            </div>
          </div>

        </div>
        <div class="foot_right">
          <img src="../assets/wechat.jpg" alt="" style="width: 150px;height: 150px;">
          <p>微信公众号</p>
        </div>
      </div>

    </div>
    <div class="bujv" style="height: 100px;" v-if="bottomTan">
      <div :class="footHeight?'bujv_bigbox ':'bujv_bigboxFalse'" id="asd">
      </div>
      <div class="foot_popup">
        <div style="height: 100px;  ">
          <div class="footBujv-left">
            <div class="popup_left" @click="openPopup">
              <img src="../assets/popup_02.png" alt="">
            </div>
          </div>
        </div>
        <div :class="footHeight?'footFrom':'footFromfalse'">
          <div class="footBujv-right">
            <div class="popup_right">
              <p> 今天有 <span>100</span> 人正在预约咨询</p>
              <div class="infor">
                <div class="insureName">
                  <label class="text" for="">姓名</label>
                  <el-input v-model="name" placeholder="请输入您的姓名"></el-input>
                </div>
                <div class="insureName">
                  <label class="text" for="">手机号</label>
                  <el-input v-model="mobile" placeholder="请输入您的手机号（已加密）"></el-input>
                </div>
                <div class="insureName">
                  <label class="text" for="">验证码</label>
                  <div class="nameValue verification-code">
                    <el-input v-model="checkno" placeholder="请输入验证码"></el-input>
                    <div class="send" @click="send">获取验证码</div>
                  </div>
                </div>
                <div class="tijiao" @click="fromSubmit">提交预约</div>
              </div>
              <p>您的信息仅供预约咨询所用，不泄露至任何第三方或用于其他用途。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="close" :style="[{bottom:(footHeight?'660px':'-25px')},{fontSize:'20px'}]" @click="close">X</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  data() {
    return {
      // 弹窗
      name: '',
      mobile: '',
      checkno: '',
      bottomTan: false,


      footHeight: false,
      hostname:"",
    }
  },
  created() {
    console.log(window.location.hostname)
    
    var  host = window.location.hostname;
    if(host=='www.un29.com'){
      this.hostname ='沪ICP备17036366号-2'
    }else{
      this.hostname ='沪ICP备17036366号-3'
    }
  },
  computed: {

  },
  mounted() {


    // this.openPopup()

  },
  methods: {


    openPopup() {
      this.footHeight = !this.footHeight
    },



    close() {
      this.bottomTan = false
    },
    // 点击发送验证码
    send() {

      if (this.checkTel(this.mobile)) {
        var sendobj = {
          mobilenumber: this.mobile
        }
        alert('123')
        //   发送手机号码到后台
        $.ajax({
          url: "https://insure.meihualife.com/user/checkno.do?mobilenumber=" + this.mobile,
          type: "get",
          async: true,
          beforeSend: function () { },
          success: function (data) { },
          error: function (data) { },
          complete: function () { }
        });

        $(".send").attr("disabled", true);
        var time = 60; //倒计时5秒 
        var timer = setInterval(function () {
          time--;
          if (time >= 0) {
            $('.send').addClass('send1')
            $(".send").text(time + "s");
          } else {
            $(".send").text("重新发送");
            $(".send").removeClass('send1')
            $(".send").attr("disabled", false);
            clearTimeout(timer); //清除定时器 
            time = 5; //设置循环重新开始条件 
          }
        }, 1000); //设置定时器 
      }
    },

    // 提交表单
    fromSubmit() {

      if (this.checkTel(this.mobile) && this.checkEmpty(this.checkno)) {

        var params = {
          name: this.name,
          checkno: this.checkno,
          mobile: this.mobile
        }
        $.ajax({
          url: "https://insure.meihualife.com/life/activity/getChannelData.do",
          type: "post",
          async: true,
          data: params,
          beforeSend: function () {
            // $(".loading").show();
          },
          success: function (data) {
            var data = JSON.parse(data)
            if (data.code == "00" || data.code == "02") {
            } else {
              alert(data.message)
            }
          },
          error: function (data) {
          },
          complete: function () {
          }
        });
      } else {
        this.$message({
          message: '请填写所有信息',
          type: 'error'
        });
        return
      }
    },

    // 手机号码验证
    checkTel(telElm) {
      var Regex = {
        mobile: /^(13|14|15|16|17|18)[0-9]{9}$/, //手机
      }
      if (this.checkEmpty(this.mobile)) {
        this.$message({
          duration: 3000,
          message: '手机号不能为空',
          type: 'error'
        });
        return false;
      } else if (!Regex.mobile.test(this.mobile.trim())) {
        // $('.phone-tips').text('请输入有效的联系方式')
        this.$message({
          message: '请输入有效的联系方式',
          type: 'error'
        });
        return false;
      } else {
        return true;
      }
    },
    //空值判断
    checkEmpty(obj) {
      if (typeof (obj) == "undefined") {
        return true;
      } else if (obj == "") {
        return true;
      } else if (obj == null) {
        return true;
      } else {
        var rs = obj.replace(/[ ]/g, "");
        if (rs == "") {
          return true;
        }
      }
      return false;
    }

  }
}
</script>

<style   scoped>
.bujv {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
}

.footBox {
  height: 280px;
  background: #333437;
  padding-bottom: 0;
}
.footMain {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
}

.foot_left {
  width: 100%;
}
.foot_title {
  font-size: 16px;
  display: flex;
  color: #fff;
  margin-bottom: 30px;
}
.foot_title p {
  margin-left: 170px;
}
.foot_right {
}
.foot_right p {
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
}
.footer-copyright {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
}

/*  */

.bujv_bigbox {
  width: 100%;
  height: 700px;
  background: #5483fd;
  opacity: 0.9;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  transition: all 0.5s;
  /* animation-name: exampleFalse;
  animation-duration: 4s;
  animation-delay: 2s;
  animation-fill-mode: forwards; */
}

.bujv_bigboxFalse {
  height: 100px;
  width: 100%;
  background: #5483fd;
  opacity: 0.9;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  transition: all 0.5s;
}

.footFrom {
  height: 600px;
  transition: all 0.5s;
}
.footFromfalse {
  height: 0;
  transition: all 0.5s;
}

.zuibottom {
  width: 100%;
  height: 520px;
  background: #5483fd;
  opacity: 0.9;
  position: fixed;
  bottom: 0;
  z-index: 1000;
}
.popup {
}
.foot_popup {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1001;
  margin: 0 auto;
}

.close {
  position: fixed;
  bottom: 160px;
  right: 30px;
  z-index: 1001;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
.footBujv-left {
  /* width: 725px; */
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -89px auto;
}
.footBujv-right {
  /* border: 1px solid red; */
  width: 1200px;
  height: 600px;
  background: #fff;
  border-radius: 10px;
  color: #000000;
  margin: 0 auto;
}
.popup_right {
  padding: 10px 35px;
}
.popup_right p:first-child {
  font-size: 24px;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 43px;
}
.popup_right p:first-child span {
  color: #da251e;
  font-weight: bold;
}

.infor {
  width: 540px;
  margin: 0 auto;
}
.insureName {
  display: flex;
  margin-bottom: 35px;
}

.insureName .text {
  width: 80px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: justify;
  white-space: pre;
}
::v-deep .infor .insureName .el-input {
  width: 435px;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dddddd;
}
::v-deep .infor .insureName .el-input__inner {
}
::v-deep .infor .verification-code .el-input {
  width: 280px;
  border: 0;
}

::v-deep .infor .insureName .nameValue {
  width: 360px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  width: 435px;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dddddd;
}
.send {
  color: #3244a8;
  line-height: 60px;
  padding: 0 25px;
  cursor: pointer;
}
.tijiao {
  width: 100%;
  height: 56px;
  line-height: 56px;
  background: #ffbe54;
  border-radius: 28px;
  color: #000000;
  font-size: 28px;
  font-weight: bold;
  margin: 30px auto 40px;
}

.popup_right p:last-child {
  font-size: 18px;

  text-align: center;
}

/* 设置所有输入字段的占位文本字体大小 */
::v-deep input::-webkit-input-placeholder {
  font-size: 18px; /* Chrome, Safari, Opera */
}
::v-deep input:-moz-placeholder {
  font-size: 18px; /* Firefox 18- */
}
::v-deep input::-moz-placeholder {
  font-size: 18px; /* Firefox 19+ */
}
::v-deep input:-ms-input-placeholder {
  font-size: 18px; /* Internet Explorer 10+ */
}
</style>


<style>
::v-deep .el-message {
  font-size: 25px;
}
::v-deep .el-message--error .el-message__content {
  font-size: 20px;
}



/* 当屏幕宽度小于1200px时应用的样式 */
@media (max-width: 1200px) {
 
.footbot{
   width: 1200px;
}
 
}

/* 当屏幕宽度大于1200px时应用的样式 */
@media (min-width: 1200px) {


 
}

</style>

 