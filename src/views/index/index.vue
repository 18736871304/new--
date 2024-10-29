<template>
  <el-row class="container">
    <!-- 头部 -->

    <Head></Head>
    <!-- <router-view name="path"></router-view> -->
    <!-- 侧边导航和内容 -->

  </el-row>
</template>

<script>

import Head from "../head/head";
export default {
  data() {
    return {
      sysName: "美华官网",
      sysUserName: "",
      sysUserAvatar: "",

    };
  },
  components: {

    Head: Head,
  },
  methods: {
    handleOpen(key, keyPath) { },
    handleClose(key, keyPath) { },
    handleselect: function () { },
  },
  mounted() { },
};
</script>

<style scoped>
.container {
  width: 100%;
  background: #f5f5f5;
}
.header {
  width: 100%;
  /* background: #20a0ff; */
}

.tools {
  padding: 0px 23px;
  width: 40px;
  line-height: 60px;
  cursor: pointer;
}

.userinfo-inner {
  display: inline-block;
}
/* .username {
  font-size: 15px;
  color: #999;
  display: inline-block;
}
.username span {
  margin-left: 10px;
  margin-right: 5px;
} */

/* .userinfo-inner img {
  width: 40px;
  height: 40px;
  margin: 5px auto;
  vertical-align: middle;
  border-radius: 50%;
} */
.huanfu {
  width: 35px;
  height: 35px;
  color: #fff;
  fill: currentColor;
  margin: 12.5px auto;
}
.fangda {
  width: 30px;
  height: 30px;
  color: #fff;
  fill: currentColor;
  margin: 15px auto;
}
/* .userinfo {
  
  float: right;
  cursor: pointer;
} */

.main {
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}

.item {
  position: relative;
}

.submenu {
  position: absolute;
  top: 0px;
  left: 60px;
  z-index: 99999;
  height: auto;
  display: none;
}

.title {
  width: 200px;
  float: left;
  color: #475669;
}

.breadcrumb-inner {
  float: right;
}

.content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 68px;
}
</style>
