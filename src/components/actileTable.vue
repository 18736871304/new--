<template>
  <div class="actiletable" v-if="articleList.length>0">
    <div v-if="isTitle" class="searchTitle">文章</div>
    <div class="tabMain">
      <div class="tabMain_box">
        <ul class="articleList">
          <li v-for="item in articleList" :key="item.id" @click="navigateToSomewhere(item.id)">
            <div class="article_left">
              <!-- <img :src="item.head_pic_url" alt="" referrerpolicy="no-referrer"> -->
              <img :src="articleImg[Math.floor(Math.random() * 20)]" alt="" referrerpolicy="no-referrer">
            </div>
            <div class="article_right">
              <div>
                <h3>{{item.title}}</h3>
                <p class="article_dec"> {{ item.info }}</p>
              </div>
              <p>发布时间：{{ item.publishtime }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination background layout=" prev, pager, next" :total="pageTotal" :page-size="pageSize" :current-page="pageNumber" @current-change="pageClick" class="paging">
    </el-pagination>
  </div>
</template>

<script>
import { articleImg, getData } from "../api/api";
export default {
  data() {
    return {
      articleList: '',
      articleTypeName: '00',
      keyword: '',
      pageTotal: 0,
      pageSize: 5,
      pageNumber: 1,
      isTitle: false,
      articleImg: []
    }
  },
  props: {
    // 声明接收的数据  
    actile: {
      // type: String, // 指定数据的类型  
      required: true, // 指定该数据是必需的  
      default: {
        articleTypeName: '00',
        pageSize: 10
      } // 指定默认值  
    }
  },

  watch: {
    actile(newValue, oldValue) {
      // 当 parentData 变化时，可以执行一些操作
      this.articleTypeName = newValue.articleTypeName
      this.pageSize = newValue.pageSize
      this.pageNumber = 1

      if (newValue.searchValue == null) {
        this.isTitle = false
      } else {
        this.isTitle = true
        this.keyword = newValue.searchValue
      }
      this.articleRank()
    }
  },
  mounted() {
    this.articleImg = articleImg
    // this.articleRank()
  },
  methods: {
    // 获取文章内容
    articleRank() {
      var _this = this

      if (this.articleTypeName == '') {
        this.articleTypeName = "'01','02','03','04','05','06','07','08','09'"
      }
      var insuranceType = {
        type: this.articleTypeName,
        startDate: '',
        endDate: '',
        keywords: this.keyword,
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
      }
      if (this.articleTypeName == '00') {
        insuranceType.type = '';
        insuranceType['istop'] = 'Y'
      }

      getData('POST', 'https://crm.meihualife.com/crm/homePage/getHomePageContentList.do', function (data) {
        let { rows, total } = data;
        var data = JSON.parse(data)
        _this.articleList = data.rows;
        _this.pageTotal = data.total

        if (_this.isTitle) {
          _this.$emit('actileLength', data.total);
        }

        // _this.showimg()
      }, insuranceType);
    },

    pageClick(page) {
      this.pageNumber = page;
      this.articleRank();
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
.articleList li {
  width: 810px;
  height: 170px;
  background: #ffffff;
  border-radius: 5px;
  /* margin-bottom: 20px; */
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #f0f0f0;
}
.article_left {
  width: 240px;
  height: 130px;
}
.article_left img {
  /* width: 240px;
  height: 130px; */
  height: 100%;
  margin: 0 auto;
  max-width: 240px;
  object-fit: cover;
}

.article_right {
  width: 490px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
}
.article_right h3 {
  font-weight: 700;
  text-align: left;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 6px;
  font-size: 22px;
}
.article_right p {
  text-align: left;
  color: #525151;
}

.article_right .article_dec {
  width: 100%;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */

  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 使用省略号 */
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