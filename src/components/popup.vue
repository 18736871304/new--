<template>
  <div>
    <div class="bujv" v-if="bottomTan">
      <div class="foot_popup">
        <div class="footBujv-right">
          <div class="popup_right">
            <h1>请留下您的问题</h1>
            <p class="dec"> 客服将在<span style="color: #DA251E;">24小时内</span>与您联系，感谢您的耐心等待</p>
            <div class="infor">

              <div class="insureName">
                <label class="text" for="">您的姓名:</label>
                <el-input v-model="name" placeholder="请输入您的姓名"></el-input>
              </div>
              <div class="insureName">
                <label class="text" for="">您的手机:</label>
                <el-input v-model="mobile" placeholder="请输入您的手机号"></el-input>
              </div>
              <div class="insureName">
                <label class="text" for="">验证码:</label>
                <div class="nameValue verification-code">
                  <el-input v-model="checkno" placeholder="请输入验证码"></el-input>
                  <div class="send" @click="send">获取验证码</div>
                </div>
              </div>

              <div class="insureName">
                <label class="text" for="">您的需求:</label>
                <el-input v-model="remark" placeholder="请输入您想要咨询的问题"></el-input>
              </div>
              <div class="tijiao" @click="fromSubmit">提交预约</div>
            </div>
            <p>预约即表示接受<span @click="openInfo" class="infoMengess">《个人信息使用授权》</span>。您提供的个人信息用于我司后续致电进行保险 产品介绍及投保协助，我们不会泄露给任何第三方或其他用。</p>
          </div>
        </div>
      </div>
      <!-- <div class="close" @click="close">X</div> -->
    </div>

    <el-dialog title="个人信息使用授权" append-to-body :visible.sync="infoDialogVisible" width="30%" center>
      <div class="boxtan">
        <div class="gg cc">
          <div class="zhe"></div>
          <div class="actile actile1">
            <p>本人在此授权美华保险销售有限公司（简称"美华保险"）以及美华保险授权的第三方服务者（以下统称"授权方"）在中国法律允许的范围内，收集与此次申请相关的本人的个人信息，已知晓并同意美华保险及其授权方在下列情况下使用本人的个人信息：
            </p>
            <ul>
              <li>审核本次申请，并/或提供相关后续保险服务；</li>
              <li>进行保险产品的销售及相关数据处理；</li>
              <li>根据相关法律法规的要求。</li>
            </ul>
            <p>同时，本人在此确认已经获得本人所指定的受益人和他相关人员同意，为上述目的向美华保险及其授权方提供并授权使用他们的个人信息资料。</p>
          </div>
        </div>
      </div>
    </el-dialog>
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
      bottomTan: true,
      infoDialogVisible: false,
      remark: '',
    }
  },
  computed: {

  },
  mounted() {
    // window.addEventListener('keydown',this.keyDown);

  },
  methods: {
    openInfo() {
      this.infoDialogVisible = true
    },


    close() {
      this.bottomTan = false
    },
    // 点击发送验证码
    send() {
var _this=this
      if (this.checkTel(this.mobile)) {
        var sendobj = {
          mobilenumber: this.mobile
        }
        //   发送手机号码到后台
        $.ajax({
          url: "https://insure.meihualife.com/user/checkno.do?mobilenumber=" + this.mobile,
          type: "get",
          async: true,
          beforeSend: function () { },
          success: function (data) {
            console.log(data)
            var data = JSON.parse(data)
            if (data.code == "1") {
              _this.$message({
                message:data.msg,
                type: 'error'
              });
            }
          },
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
      var _this = this



      if (this.checkTel(this.mobile) && !this.checkEmpty(this.checkno)) {

        var params = {
          name: this.name.trim(),
          checkno: this.checkno.trim(),
          mobile: this.mobile.trim(),
          channelCode: "0016",
          remark: this.remark
        }
        $.ajax({
          url: "https://insure.meihualife.com/life/activity/getChannelData.do",
          type: "post",
          async: true,
          data: params,
          remark: this.remark,

          beforeSend: function () {
            // $(".loading").show();  
          },
          success: function (data) {
            var data = JSON.parse(data)
            if (data.code == "00" || data.code == "02") {
              _this.$bus.$emit('brotherEvent', "close")

              // _this.$bus.$emit('brotherEvent',"close")

            } else {

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


    // keyDown(e){
    //     //如果是回车则执行登录方法
    //   if(e.keyCode == 13){
    //     this.fromSubmit();
    //   }
    // },
    // 手机号码验证
    checkTel(telElm) {
      var Regex = {
        mobile: /^(13|14|15|16|17|18)[0-9]{9}$/, //手机
      }
      if (this.checkEmpty(this.mobile)) {
        this.$message({
          duration: 2000,
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
  height: 400px;
  background: #333437;
  padding-bottom: 0;
}
.footMain {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}
.foot_title {
  font-size: 22px;
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
  font-size: 22px;
  margin-top: 20px;
}
.footer-copyright {
  color: #fff;
  font-size: 20px;
}

/*  */

.popup {
  width: 100%;
  height: 200px;
  background: #5483fd;
  opacity: 0.9;
  /* position: fixed;
    bottom: 0; */
  z-index: 1000;
}
.foot_popup {
  display: flex;
  justify-content: space-between;
  z-index: 1001;
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
  width: 725px;
  /* border: 1px solid red; */
  display: flex;
  align-items: end;
}
.footBujv-right {
  /* border: 1px solid red; */
  /* width: 450px; */
  /* height: 380px; */
  background: #fff;
  border-radius: 10px;
  color: #525151;
}
.popup_right {
  padding: 10px 35px;
}
.popup_right p:first-child {
  font-size: 24px;
  text-align: center;
  margin-bottom: 25px;
}

.insureName {
  display: flex;
  margin-bottom: 16px;
}

.insureName .text {
  width: 100px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: justify;
  white-space: pre;
}
::v-deep .insureName .el-input {
  width: 400px;
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
  border: 1px solid #dddddd;
}
::v-deep .insureName .el-input__inner {
  height: 40px;
  line-height: 40px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
}
::v-deep .verification-code .el-input {
  width: 220px;
  border: 0;
}

::v-deep .insureName .nameValue {
  width: 400px;
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
}
.send {
  color: #3244a8;
  line-height: 60px;
  padding: 0 24px;
  font-size: 20px;
  cursor: pointer;
}
.tijiao {
  border-radius: 28px;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  margin: 0 auto;
  margin: 23px auto;
  width: 508px;
  height: 73px;
  line-height: 73px;
  background: #3244a8;
  border-radius: 37px;
  text-align: center;
}
.popup_right .dec {
  margin: 20px auto 35px;
  font-size: 18px;
  text-align: center;
}
.popup_right p:last-child {
  font-size: 16px;
  color: #525151;
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

.actile p {
  line-height: 0.25rem;
  width: 100%;
  padding-bottom: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 16px;
  color: #666;
  letter-spacing: 0;
  text-align: justify;
  line-height: 30px;
  font-weight: 400;
}
.actile ul {
  margin-bottom: 10px;
}
.actile ul li {
  font-size: 16px;
  color: #666;
  padding: 2px 20px;
  text-indent: 1em;
}

.infoMengess {
  color: #3244a8;
  cursor: pointer;
}
.popup_right h1 {
  text-align: center;
}
</style>
  
  
  <style>
::v-deep .el-message {
  font-size: 25px;
}
::v-deep .el-message--error .el-message__content {
  font-size: 20px;
}
</style>
  
   