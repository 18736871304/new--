<template>
  <div class="actiletable" v-if="claimList.length>0">
    <div v-if="isTitle" class="searchTitle">理赔公告</div>
    <div class="tabMain">
      <div class="tabMain_box">
        <ul class="articleList">
          <li v-for="item in claimList" :key="item.id" @click="claimItem(item)">
            <div class="article_left">
              <h3>{{item.title}}</h3>
            </div>
            <div class="article_right">
              <p>公告时间：{{item.updatetime}}</p>
              <p class="article_dec">查看详情</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination background layout=" prev, pager, next" :total="pageTotal" :page-size="pageSize" :current-page="pageNumber" @current-change="pageClick" class="paging">
    </el-pagination>


    <el-dialog title="理赔结案详情" :visible.sync="claimVisible" width="640px" custom-class="claimPopup" :close-on-click-modal="false">
      <div class="claimBox">
        <div v-html="claimContent"></div>
      </div>
    </el-dialog>
  </div>
</template>
  
  <script>
import { getData } from "../api/api";
export default {
  data() {
    return {
      claimList: '',
      keyword: '',
      pageTotal: 0,
      pageSize: 5,
      pageNumber: 1,
      claimVisible: false,
      claimContent: '',
      isTitle: false,
    }
  },
  props: {
    // 声明接收的数据  
    claim: {
      // type: String, // 指定数据的类型  
      required: true, // 指定该数据是必需的  
      default: {
        pageSize: 10
      } // 指定默认值  
    }
  },

  watch: {
    claim(newValue, oldValue) {
      this.pageSize = newValue.pageSize
      this.pageNumber = 1

      if (newValue.searchValue==null) {
        this.isTitle= false
      } else {
        this.isTitle = true
        this.keyword = newValue.searchValue
      }
      this.claimRank()
    }
  },
  mounted() {
    // this.claimRank()
  },
  methods: {
    // 获取理赔公告列表
    claimRank() {
      var _this = this
      var insuranceType = {
        type: "'90'",
        startDate: '',
        endDate: '',
        keywords: this.keyword,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      }
      getData('POST', 'https://crm.meihualife.com/crm/homePage/getHomePageContentList.do', function (data) {
        let { rows, total } = data;
        var data = JSON.parse(data)
        _this.claimList = data.rows;
        _this.pageTotal = data.total

        if (_this.isTitle) {
          _this.$emit('claimLength', data.total);
        }
   
      }, insuranceType);
    },

// 获取理赔公告内容
    claimItem(item) {
      this.claimContent = ''
      // 获取理赔内容
      var _this = this
      var insuranceType = {
        id: item.id
      }
      getData('POST', 'https://crm.meihualife.com/crm/homePage/getOneContent.do', function (data) {
        var data = JSON.parse(data)
        if (data.code == '0') {
          _this.claimContent = data.content
          _this.claimVisible = true
        }
      }, insuranceType);
    },







    pageClick(page) {
      this.pageNumber = page;
      this.claimRank();
    },





  }
}
  </script>
  
  <style scoped>
.tabMain {
  position: relative;
  /* margin-top: 30px; */
  box-sizing: border-box;
}
.tabMain_box .el-carousel__item {
  background: #fff;
}
.articleList {
  margin:10px 20px;
  display: flex;
  justify-content: space-between;
}
.articleList li {
  width: 375px;
  height: 160px;
  background: #f9fafe;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 25px;
  margin-bottom: 20px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #f0f0f0; */
}
.article_left {
  height: 160px;
}

.article_right {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
.article_left h3 {
  font-weight: 700;
  text-align: left;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 6px;
  font-size: 20px;
}
.article_right p {
  text-align: left;
  color: #808080;
}

.article_right .article_dec {
  width: 85px;
  height: 27px;
  line-height: 27px;
  border-radius: 15px;
  border: 1px solid #da251e;
  text-align: center;
  color: #da251e;
}

.paging {
  padding: 50px 0;
}



::v-deep .claimPopup .el-dialog__header {
  text-align: left;
  border: 1px solid #dcdcdc;
}
::v-deep .claimPopup .el-dialog__header .el-dialog__title {
  text-align: left;
  color: #000000;
  font-size: 24px;
}

::v-deep .claimPopup .claimBox {
  text-align: left;
  font-size: 18px;
  /* font-weight: bolder; */
}
::v-deep .claimPopup .claimBox  h3{
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
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
</style>