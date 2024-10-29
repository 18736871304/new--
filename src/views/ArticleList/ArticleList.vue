<template>
  <div class="template">
    <headNav></headNav>
    <div class="bujv"  style="margin-top: 80px; background: #f5f5f5;">
      <div class="rank_row rank_rowclu">
        <breadcrumb></breadcrumb>
        <!-- <div class="reser" @click="openPopup">
          <img src="../../assets/yuyueBanner.png" alt="">
        </div> -->
      </div>
    </div>
    <div class="bujv">
      <div class="rank_row" style="margin-bottom: 20px;">
        <div class="hotRank mainRank">
          <!-- <div class="title blod">内容精选</div> -->
          <div class="hotRank-top">
            <div class="top-main">
              <el-tabs v-model="articleTypeName" @tab-click="articleTypeClick" class="articleTypeList">
                <el-tab-pane label="推荐" name="00">
                  <div slot="label" class="dianzan">
                    <p class="zan"></p>
                    <p>推荐</p>
                  </div>


                </el-tab-pane>
                <el-tab-pane label="产品测评" name="01"></el-tab-pane>
                <el-tab-pane label="保险科普" name="02"></el-tab-pane>
                <el-tab-pane label="挑选指南" name="03"></el-tab-pane>
                <el-tab-pane label="避坑专题" name="04"></el-tab-pane>
                <el-tab-pane label="产品榜单" name="05"></el-tab-pane>
                <el-tab-pane label="理财观念" name="06"></el-tab-pane>
                <el-tab-pane label="保障观念" name="07"></el-tab-pane>
                <el-tab-pane label="社会热点" name="08"></el-tab-pane>
                <el-tab-pane label="其他类型" name="09"></el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class="tabMain">
            <div class="tabMain_box">
              <actileTable :actile="actileParame"></actileTable>
            </div>
          </div>
        </div>
        <monthRank></monthRank>
      </div>
    </div>
    <footBottom></footBottom>
    <el-dialog title="" :visible.sync="popupVisible" width="640px">
      <div>
        <popup></popup>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import headNav from '@/components/headNav.vue';
import monthRank from '@/components/monthRank.vue';
import actileTable from '@/components/actileTable.vue';
import footBottom from "../../components/footBottom.vue";
import popup from "../../components/popup.vue";
export default {
  metaInfo: {
    title: '美华保险,男性保险,女性保险,少儿保险,儿童保险,成人保险,老年保险', //设置页面title
    meta: [{                 //设置页面meta
      name: 'keyWords',
      content: '美华保险,男性保险,女性保险,少儿保险,儿童保险,成人保险,老年保险'
    },
    {
      name: "description",
      content: "美华保险销售有限公司，成立于2008年11月，是经国家金融监督管理总局(原银保监会)批准设立的首批全国综合性保险服务持牌机构。总部位于上海，注册资金实缴5000万，战略合作全国多达80余家保险公司，提供近千款产品甄选服务，涵盖意外险、医疗险、重疾险、人寿险、年金险、车险等全险种产品，服务用户超过3000万人次。",
    },]
  },
  components: {
    headNav,
    monthRank,
    actileTable,
    footBottom,
    popup
  },
  computed: {
    articles() {
      // 返回文章列表数据
    }
  },
  data() {
    return {
      popupVisible: false,
      articleTypeName: '00',
      actileParame: {
        articleTypeName: '00',
        pageSize: 10
      }
    }
  },
  mounted() {
    this.articleTypeName = this.$route.params.id
    var ss = {
      articleTypeName: this.$route.params.id,
      pageSize: 10
    }
    this.actileParame = ss
  },
  methods: {

    navigateToSomewhere(actileId) {
      // 假设要跳转到的id是123
      var aa = actileId
      var routeData = {
        path: "/ArticleDetailes/" + aa,
        query: {
          // categoryName: '33',
        }
      }
      // 序列化路由对象
      const routeUrl = this.$router.resolve(routeData).href;
      window.open(routeUrl, '_blank');
    },











    openPopup() {
      this.popupVisible = true
    },
    // 选择文章类型
    articleTypeClick(tab, event) {
      let _this = this;
      this.articleTypelabel = tab.$props.label
      var ss = {
        articleTypeName: tab.$props.name,
        pageSize: 10
      }

      this.actileParame = ss
      // this.articleRank()
    },



  }
}
</script>

<style scoped>

.bujv{
   width: 1200px;
   margin: 0 auto;
}
.rank_row {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

::v-deep .articleTypeList .el-tabs__nav {
  height: 95px;
  display: flex;
  flex-wrap: wrap;
  white-space: break-spaces;
  word-wrap: break-word; /* 允许在单词内换行 */
  overflow-wrap: break-word; /* 同上，现代浏览器推荐使用这个属性别名 */
  white-space: normal; /* 允许自动换行 */
}
.mainRank {
  width: 810px;
  background: #fff;
  /* padding: 30px 20px; */
  box-sizing: border-box;
}

.mainRank .hotRank-top {
  height: 95px;
  line-height: 95px;
  padding: 30px 20px;
  padding-bottom: 0;
}


.dianzan {
  display: flex;
  justify-content: center;
  align-items: center;
}
.zan {
  width: 21px;
  height: 19px;
  background: url(../../assets/zan_02.png) no-repeat center center;
  background-size: 100% 100%;
  margin-right: 2px;
}

.is-active .zan {
  width: 21px;
  height: 19px;
  background: url(../../assets/zan_01.png) no-repeat center center;
  background-size: 100% 100%;
}

::v-deep .articleTypeList .el-tabs__active-bar {
  display: none;
}

::v-deep .articleTypeList .el-tabs__active-bar {
  background-color: transparent !important;
}
::v-deep .articleTypeList .el-tabs__nav-wrap::after {
  position: static !important;
}

::v-deep .articleTypeList .el-tabs__item {
  width: 105px;
  /* background: #fff; */
  background: #f5f6fb;
  text-align: center;
  padding: 0;
  margin-right: 20px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}
::v-deep .articleTypeList .el-tabs__item.is-active {
  width: 105px;
  background: #3244a8;
  color: #fff;
  text-align: center;
  padding: 0;
  margin-right: 20px;

  font-weight: 700;
}
::v-deep .articleTypeList .el-tabs__item:hover {
  width: 105px;
  background: #3244a8;
  color: #fff;
  text-align: center;
  padding: 0;
  margin-right: 20px;
}
</style>