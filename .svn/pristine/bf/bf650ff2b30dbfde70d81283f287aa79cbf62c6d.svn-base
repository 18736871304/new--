<template>
  <div class="template">
    <headNav></headNav>
    <div class="bujv" style="margin-top: 80px;">
      <div class="rank_row rank_rowclu">
        <breadcrumb></breadcrumb>
        <div class="reser" @click="openPopup">
          <img src="../../assets/yuyueBanner.png" alt="">
        </div>
      </div>
    </div>
    <div class="bujv">
      <div class="rank_row" style="margin-top: 20px;">
        <div class="hotRank mainRank">

          <div class="hotRank-top">
            <div class="top-main">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="意外" name="01"></el-tab-pane>
                <el-tab-pane label="医疗" name="02"></el-tab-pane>
                <el-tab-pane label="重疾" name="03"></el-tab-pane>
                <el-tab-pane label="定寿" name="04"></el-tab-pane>
                <el-tab-pane label="理财" name="05"></el-tab-pane>
                <el-tab-pane label="车险" name="06"></el-tab-pane>
                <el-tab-pane label="其他" name="07"></el-tab-pane>
              </el-tabs>
            </div>
          </div>

          <div class="insuranceType" style="width: 810px;" v-if="!isproduct">
            <div style="margin: 0 auto;">
              <img src="../../assets/No.png" alt="">
            </div>
          </div>
          <productTable :product="productParame" @productLength="handleproductLength"></productTable>

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
import productTable from '@/components/productTable.vue';
import footBottom from "../../components/footBottom.vue";
import popup from "../../components/popup.vue";
export default {
  metaInfo: {
    title: '产品页面页面title', //设置页面title
    meta: [{                 //设置页面meta
      name: 'keyWords',
      content: '产品页面关键词'
    },
    {
      name: "description",
      content: "产品页面描述",
    },]
  },
  components: {
    headNav,
    monthRank,
    productTable,
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
      activeName: '03',
      productParame: {
        activeName: '03',
        pageSize: 10
      },
      isproduct: true
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

    this.activeName = this.$route.params.id


    var ss = {
      activeName: this.$route.params.id,
      pageSize: 10
    }
    this.productParame = ss
  },
  methods: {

    handleproductLength(msg) {
      console.log("产品" + msg)
      if (msg > 0) {
        this.isproduct = true
      } else {
        this.isproduct = false
      }
    },

    navigateToSomewhere(actileId) {
      // 假设要跳转到的id是123
      var aa = actileId
      var routeData = {
        path: "/ArticleDetailes/" + aa,
        query: {
          // categoryName: '33',
          // categoryId: '45'
        }
      }
      // 序列化路由对象
      const routeUrl = this.$router.resolve(routeData).href;
      window.open(routeUrl, '_blank');
    },


    openPopup() {
      this.popupVisible = true
    },
    // 选择 险种
    handleClick(tab, event) {
      let _this = this;
      this.activeName = tab.$props.name
      var ss = {
        activeName: tab.$props.name,
        pageSize: 10
      }
      this.productParame = ss
      // this.hotRank();
    },


  }
}
</script>

<style scoped>
.rank_row {
  width: 1200px;
  display: flex;

  justify-content: center;
  margin: 0 auto;
}
.rank_rowclu {
  display: flex;
  flex-direction: column;
}
.reser img {
  width: 1200px;
  height: 300px;
  display: block;
}

.hotRank {
  width: 810px;
  background: #fff;
  border-radius: 4px;
  margin-right: 20px;
}

.hotRank-top {
  height: 60px;
  line-height: 60px;
  padding: 10px 20px;
  position: relative;
}

::v-deep .el-tabs__active-bar {
  background-color: #3244a8 !important;
}

::v-deep .el-tabs__item {
  font-size: 20px;
  color: #525151;
  font-weight: 700;
}
::v-deep .el-tabs__item.is-active {
  font-weight: 700;
  color: #3244a8;
}
::v-deep .el-tabs__item:hover {
  color: #3244a8;
}
</style>