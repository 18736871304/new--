<template>
  <!-- 按de可以快速出来页面模板 -->
  <div class="template">

    <headNav class="" style="background: #fff;"></headNav>
    <div style="width: 1200px; margin: 80px auto;">
      <div class="breadcrumb">您搜索的“<span>{{searchValue}}</span>”相关结果如下 </div>

      <div class="rank_row">

        <div class="hotRank mainRank actileHtml" v-if="!listLength">

        </div>
        <div class="hotRank mainRank actileHtml">
          <div style="background: #fff;width: 810px; " v-if="!listLength">
            <img src="../../assets/No.png" alt="" style="width: 400px;height: 300px;">
          </div>
          <div>
            <div style="background: #fff; ">
              <productTable :product="productParame" @productLength="handleproductLength"></productTable>
            </div>
            <div style="background: #fff;  margin: 20px auto;">
              <!-- <div class="searchTitle">理赔公告</div> -->
              <claimTable :claim="claimParame" @claimLength='handleclaimLength'></claimTable>
            </div>
            <div style="background: #fff; ">
              <actileTable :actile="actileParame" @actileLength="handleactileLength"></actileTable>
            </div>

          </div>

        </div>
        <monthRank></monthRank>
      </div>

    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
import { getData } from "../../api/api";
import monthRank from '@/components/monthRank.vue';
import footBottom from '@/components/footBottom.vue';
import headNav from '@/components/headNav.vue';
import actileTable from '@/components/actileTable.vue';
import productTable from '@/components/productTable.vue';
import claimTable from '@/components/claimTable.vue';
export default {
  metaInfo() {
    return {
      title: this.PageTitle,
      meta: [
        {
          name: "keyWords",
          content: this.PagekeyWords,
        },
        {
          name: "description",
          content: this.PageDescription,
        },
      ],
    };
  },
  components: {
    monthRank,
    footBottom,
    headNav,
    actileTable,
    productTable,
    claimTable
  },
  data() {
    return {
      searchValue: '',
      monthArticleList: [],
      productParame: {},
      actileParame: {},
      claimParame: {},
      PageTitle: "",
      PagekeyWords: "",
      PageDescription: "",

      listLength: false

    };
  },
  created() {
    // 获取路径参数
    // this.pathParam = this.$route.params.searchValue || '默认值';
    // 获取查询参数
    this.searchValue = this.$route.query.searchValue || '';


  },
  watch: {
    $route() {
      this.listLength = false
      //跳转到该页面后需要进行的操作
      this.searchValue = this.$route.query.searchValue || '';
      var ss = {
        activeName: '',
        pageSize: 5,
        searchValue: this.searchValue
      }
      this.productParame = ss



      var dd = {
        articleTypeName: '',
        pageSize: 5,
        searchValue: this.searchValue
      }
      this.actileParame = dd


      var ff = {
        // claimTypeName: '',
        pageSize: 10,
        searchValue: this.searchValue
      }
      this.claimParame = ff

      setTimeout(() => {
        this.PageTitle = this.searchValue
        this.PagekeyWords = this.searchValue
        this.PageDescription = this.searchValue
      }, 2000)



    }
  },
  mounted() {

    var ss = {
      activeName: '',
      pageSize: 5,
      searchValue: this.searchValue
    }
    this.productParame = ss

    var dd = {
      articleTypeName: '',
      pageSize: 5,
      searchValue: this.searchValue
    }
    this.actileParame = dd

    var ff = {
      // claimTypeName: '',
      pageSize: 10,
      searchValue: this.searchValue
    }
    this.claimParame = ff

    setTimeout(() => {
      this.PageTitle = this.searchValue
      this.PagekeyWords = this.searchValue
      this.PageDescription = this.searchValue
    }, 2000)
  },

  methods: {


    handleproductLength(msg) {
      console.log("产品" + msg)

      if (msg > 0) {
        this.listLength = true
      }

    },
    handleactileLength(msg) {
      console.log("文章" + msg)
      if (msg > 0) {
        this.listLength = true
      }
    },
    handleclaimLength(msg) {
      console.log("理赔" + msg)
      if (msg > 0) {
        this.listLength = true
      }

      console.log(this.listLength)
    },
    // // 获取文章内容
    // monthRank() {
    //   var _this = this
    //   var insuranceType = {
    //     type: "'01','02','03','04','05','06','07','08','09'",
    //     startDate: '',
    //     endDate: '',
    //     pageNumber: this.pageNum,
    //     pageSize: this.pageSize,
    //   }

    //   getData('POST', 'https://crm.meihualife.com/crm/homePage/getHomePageContentList.do', function (data) {
    //     let { rows, total } = data;
    //     var data = JSON.parse(data)
    //     _this.monthArticleList = data.rows;
    //     _this.pageTotal = data.rows.length
    //     // _this.showimg()
    //   }, insuranceType);
    // },

    // // 获取理赔公告
    // monthRank() {
    //   var _this = this
    //   var insuranceType = {
    //     type: "90",
    //     startDate: '',
    //     endDate: '',
    //     pageNumber: this.pageNum,
    //     pageSize: this.pageSize,
    //   }

    //   getData('POST', 'https://crm.meihualife.com/crm/homePage/getHomePageContentList.do', function (data) {
    //     let { rows, total } = data;
    //     var data = JSON.parse(data)
    //     _this.monthArticleList = data.rows;
    //     _this.pageTotal = data.rows.length
    //     // _this.showimg()
    //   }, insuranceType);
    // },

  },
};
</script>
<style scoped>
.breadcrumb {
  padding: 22px 0px;
  height: 17px;
  line-height: 1;
}

.breadcrumb span {
  color: #000000;
  font-size: 16px;
}
.hotRank {
  width: 810px;
  border-radius: 4px;
  margin-right: 20px;
  /* background: #fff; */
}
.rank_row {
  width: 1200px;
  display: flex;
  justify-content: center;
  /* background: #fff; */
}

/* 搜索标题 */
.searchTitle {
  font-weight: 700;
  font-weight: bold;
  font-size: 28px;
  color: #000000;
  text-align: left;
  height: 93px;
  line-height: 93px;
  padding-left: 20px;
}
.searchTitle::before {
  content: "";
  margin-left: 0px;
  padding-left: 20px;
  border-left: 5px solid #3244a8;
  height: 28px;
  margin-top: -5px;
  display: inline-block;
  vertical-align: middle;
}

/* 理赔列表 */
/* <div class="claim">

<ul>
  <li class="claimList">
    <div>中国平安小顽童5号少儿意外险，打 狂犬疫苗，获赔金额1091元</div>
    <div>
      <p>理赔时间：2024-09-23</p>
      <p>查看详情</p>
    </div>

  </li>
</ul>

</div> */
</style>
