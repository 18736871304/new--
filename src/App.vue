<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

/* 在CSS文件中 */

export default {


  created() {
    // this.$router.replace("home");
    // if (this.$router.path !== "/home") {
    //   if (sessionStorage.getItem("userCode")) {
    //     this.$router.replace("home");
    //   } else {
    //     this.$router.replace("home");
    //   }
    // }
  },
  mounted() {
    // 根据不同路由跳转不同页面
    if (this.isMobile()) {
      console.log(this.$route)
      console.log('手机端')
      //  window.location.href='http://localhost:8080/#/message'
      //  this.$router.replace('/mb_index')
    } else {
      console.log('pc端')
      //  this.$router.replace('/pc_index')
    }
  },

  methods: {
    // 判断是否是手机端，如果是，返回true
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      console.log(flag)
      return flag
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100% !important;
  margin: 0 auto !important;
}
#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
  background: #f5f5f5;
  font-weight: 400;
  font-family: Noto Sans SC;
  font-style: normal;
}

.el-input__inner {
}
.el-input--prefix .el-input__inner {
  border: none;
}

.el-input--prefix .el-input__inner {
  border: none;
}

.el-table .el-table__cell {
  padding: 0 !important;
}

.el-textarea__inner {
  height: 35px !important;
  min-height: 35px !important;
  border-radius: 0 !important;
}

a {
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 继承父元素颜色，状态不变 */
}
/* a:hover {
  color: #333; 
} */
a:active,
a:focus {
  outline: none; /* 去掉点击时的虚线框 */
  color: #333; /* 点击时的颜色 */
}
p {
  margin: 0;
}
div {
  word-break: break-all;
}
.template {
  width: 100%;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style-type: none;
  text-align: center;
  cursor: pointer;
}
</style>
