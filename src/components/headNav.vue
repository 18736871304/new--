<template>
  <div>
    <div :class="[ isBg ? 'gudingHeard_Bg' : 'gudingHeard' ]">
      <div class="divFlex">
        <div class="newNav" style="">
          <img src="../assets/logoBlack.png" alt="">
        </div>
        <div class="neaHeadmain">
          <router-link to="/">首页</router-link>
          <router-link to="/ArticleList/00">保险课堂</router-link>
          <router-link to="/aboutUs">关于我们</router-link>
          <router-link to="/message">信息披露</router-link>

        </div>
        <div style=" display: flex; align-items: center;">
          <div style="  display: flex; align-items: center; justify-content: center; width: 323px;" v-if="isphone">
            <img src="../assets/phone.png" alt="" style="width: 20px; height: 20px;">
            <span style="font-size: 24px;">&nbsp;&nbsp;&nbsp;400-9200-713</span>
          </div>

          <div class="searchBox" v-else style="width: 323px;">
            <el-input placeholder="请输入你想搜索的关键词" v-model="searchValue" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="searchBtn" class="searchBtn"></el-button>
            </el-input>
          </div>

          <div class="newzixun" @click="openPopup">方案咨询</div>
        </div>

      </div>
      <el-dialog title="" :visible.sync="popupVisible" append-to-body width="640px">
        <div>
          <popup></popup>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
  
  <script>
import popup from "./popup.vue";
export default {
  components: {
    // 局部注册组件
    popup: popup
  },

  data() {
    return {
      popupVisible: false,
      searchValue: '',
      isphone: false,
      isBg: false
    }
  },
  props: {
    // 声明接收的数据  
    phoneOrSearch: {
      // type: String, // 指定数据的类型  
      required: false, // 指定该数据是必需的  
      default: () => { isphone: false; isBg: false } // 指定默认值  
    }
  },

  watch: {
    phoneOrSearch(newValue, oldValue) {
      if (newValue.isphone) {
        this.isphone = newValue.isphone
      } else { }
      if (newValue.isBg) {
        this.isBg = newValue.isBg
      }else{
        this.isBg =false
      }
    }
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
    window.addEventListener('keydown',this.keyDown);
  },
  methods: {
    openPopup() {
      this.popupVisible = true
    },
    keyDown(e){
        //如果是回车则执行登录方法
      if(e.keyCode == 13){
        this.searchBtn();
      }
    },
    searchBtn() {

      this.$router.push({ path: "/search", query: { searchValue: this.searchValue } })

      // var routeData = {
      //   path: "/search",
      //   query: {
      //     searchValue: this.searchValue,
      //   }
      // }
      // // 序列化路由对象
      // const routeUrl = this.$router.resolve(routeData).href;
      // // 在新窗口中打开路由链接
      // window.open(routeUrl, '_blank');

    },
  }
}
  </script>
  
  <style  scoped>
.divFlex {
  width: 1200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 20px;
  box-sizing: border-box;
}

.newNav {
  width: 144px;
  height: 40px;
}
.neaHeadmain {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.neaHeadmain a {
  font-size: 20px;
  font-weight: 400;
  font-weight: 500;
}
.newNav img {
  width: 100%;
  height: 100%;
}

.newzixun {
  width: 140px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #3244a8;
  margin-left: 30px;
  cursor: pointer;
  border-radius: 5px;
}
.input-with-select .searchBtn {
  background-color: #3244a8;
  height: 40px;
  border-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  /* width: 50px; */
}

/* 设置所有输入字段的占位文本字体大小 */
::v-deep input::-webkit-input-placeholder {
  font-size: 16px; /* Chrome, Safari, Opera */
}
::v-deep input:-moz-placeholder {
  font-size: 16px; /* Firefox 18- */
}
::v-deep input::-moz-placeholder {
  font-size: 16px; /* Firefox 19+ */
}
::v-deep input:-ms-input-placeholder {
  font-size: 16px; /* Internet Explorer 10+ */
}
</style>
  <style>
.searchBox .el-input__inner {
  width: 260px;
  height: 40px;
  line-height: 40px;
}
.input-with-select .searchBtn .el-icon-search {
  color: #fff;
  font-size: 20px;
}

.gudingHeard {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 80px;
  z-index: 2000;
}

.gudingHeard_Bg {
  width: 1200px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 80px;
  z-index: 2000;
  background: url(../assets/nav_1.png) no-repeat center center;
  background-size: 100% 80px;
}
</style>