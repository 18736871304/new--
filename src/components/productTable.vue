<template>
  <div class="actiletable" v-if="riskList.length>0">
    <div v-if="isTitle" class="searchTitle">产品</div>
    <div class="tabMain">
      <div class="tabMain_box">
        <ul class="insuranceType">
          <li v-for="item in riskList" :key="item.riskcode">
            <a :href="item.url" class="insureBox" target="_bank">
              <div class="insure_leftBox">
                <div class="productDec">
                  <h3>{{ item.title }}</h3>
                  <p class="insDec"> {{ item.description }}</p>
                </div>
                <div class="comany_logo">
                  <img :src="item.logo" alt="">
                  <!-- <div>查看详情</div> -->
                  <!-- <p class="insMoney"><span>￥</span><span>{{item.prem}}</span>/首年起</p> -->
                </div>
                <div class="comany_logo">
                  <div class="lookProduct">查看详情</div>
                </div>
              </div>
            </a>
          </li>

        </ul>

      </div>
    </div>

    <el-pagination background layout=" prev, pager, next" :total="pageTotal" :page-size="pageSize" :current-page="pageNumber" @current-change="pageClick" class="paging">
    </el-pagination>
  </div>
</template>

<script>
import { getData } from "../api/api";
export default {
  data() {
    return {
      risktype: '03',
      riskList: '',
      pageTotal: 0,
      pageSize: 5,
      pageNumber: 1,
      keyword: '',
      isTitle: false,//判断是搜索还是列表
    }
  },

  props: {
    // 声明接收的数据  
    product: {
      // type: String, // 指定数据的类型  
      required: true, // 指定该数据是必需的  
      default: {
        activeName: '03',
        pageSize: 10
      } // 指定默认值  
    }
  },
  watch: {
    product(newValue, oldValue) {
      this.risktype = newValue.activeName
      this.pageSize = newValue.pageSize
      this.pageNumber = 1


      if (newValue.searchValue == null) {
        this.isTitle = false
      } else {
        this.isTitle = true
        this.keyword = newValue.searchValue
      }
      this.hotRank()
    }
  },
  mounted() {
    // this.risktype = this.product.activeName
    // this.pageSize = this.product.pageSize
    // this.hotRank()
  },
  methods: {
    hotRank() {
      var _this = this
      // 保险热销
      var insuranceType = {
        risktype: this.risktype,
        // keywords: this.keyword,
        title: this.keyword,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        salesArea: '',
      }

      getData('POST', 'https://crm.meihualife.com/crm/homePage/getHomePageRiskList.do', function (data) {
        // let { rows, total } = data;
        var data = JSON.parse(data)
        _this.riskList = data.rows;
        _this.pageTotal = data.total
        // if (_this.isTitle) {
          _this.$emit('productLength', data.total);
        // }


      }, insuranceType);
    },

    pageClick(page) {
      this.pageNumber = page;
      this.hotRank();
      if (!this.isTitle) {
        this.toTop()
      }

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
.insuranceType {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.insuranceType li {
  width: 770px;
  height: 140px;
  background: #f5f7ff;
  /* box-shadow: 0px 0px 3px 0px #bbbbbb; */
  margin-bottom: 26px;
  border-radius: 5px;
  cursor: pointer;
  padding: 20px;

  box-sizing: border-box;
  overflow: hidden;
  margin: 10px auto;
}
.insureBox {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.insure_leftBox {
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* margin-bottom: 30px; */
}
.insure_rightBox img {
  margin-top: 20px;
}
.insure_leftBox h3 {
  font-weight: 700;
  font-size: 22px;
  text-align: left;
  margin-bottom: 10px;
  width: 100%;
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 使用省略号 */
  /* word-wrap: break-word;  
  overflow-wrap: break-word;  
  white-space: normal;   */
}
.insure_leftBox .insDec {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 16px;
  color: #808080;
  text-align: left;
}

.productDec {
  width: 370px;
}

.comany_logo {
  width: 180px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.comany_logo img {
  width: 154px;
  height: 30.8px;
  margin-left: -55px;
}

.comany_logo .lookProduct {
  width: 109px;
  height: 33px;
  line-height: 33px;
  color: #da251e;
  border-radius: 16px;
  border: 1px solid #da251e;
  text-align: center;
}
.insMoney {
  text-align: left;
  color: #000000;
  font-size: 16px;
}

.insMoney span:first-child {
  color: #da251e;
  font-size: 18px;
  font-weight: bold;
  font-weight: 500;
}

.insMoney span:last-child {
  color: #da251e;
  font-size: 30px;
  /* font-weight: bold; */
  font-weight: 500;
}
.paging {
  padding: 50px 0;
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