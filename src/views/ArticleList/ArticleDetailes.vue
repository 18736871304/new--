<template>
  <div class="template">
    <!-- 文章详情页 -->
    <headNav class="" style="background: #fff;"></headNav>
    <div style="width: 1200px; margin: 80px auto;">
      <breadcrumb></breadcrumb>
      <div class="rank_row">
        <div class="hotRank mainRank actileHtml">

          <div class="actileTemplate" v-loading=loading    element-loading-text="拼命加载中...">
            <h1 class="title"> {{ actileTitle }}</h1>
            <div class="info">
              <span>美华保险服务&nbsp;&nbsp;</span>
              <span>{{actileTime}}&nbsp;&nbsp;</span>
              <span>原创</span>
            </div>
            <div v-html="actileHtml"></div>

            <div style="padding-top: 20px;">
              <div class="keyword">
                <ul>
                  <li v-for="(item,index) in keywordsTag" :key="index">{{ item }}</li>

                </ul>
              </div>
              <div class="preNext">
                <p>上一篇：</p>
                <p @click="navigateToSomewhere(preNext[0].id)">{{preNext[0].title}}</p>
              </div>
              <div class="preNext">
                <p>下一篇：</p>
                <p @click="navigateToSomewhere(preNext[1].id)">{{preNext[1].title}}</p>
              </div>
              <div class="articles">
                <p>免责声明：以上内容为美华保险意见，仅供参考；如涉及到产品信息及赔付条件，以保险公司最新产品条件具体约定内容及承保政策为准。</p>
              </div>

            </div>

          </div>
        </div>
        <monthRank @childMessage="handleChildMessage"></monthRank>
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
    headNav
  },
  computed: {
    articles() {
      // 返回文章列表数据
    }
  },
  data() {
    return {
      monthArticleList: '',
      PageTitle: "",
      PagekeyWords: "",
      PageDescription: "",
      articleId: '',
      actileHtml: '',
      actileTitle: '',
      actileTime: '',
      preNext: [
        { id: '', title: '' },
        { id: '', title: '' }
      ],
      keywordsTag: [],
      loading: false
    }
  },

  created() {
    // 获取路径参数
    // this.pathParam = this.$route.params.searchValue || '默认值';
    // 获取查询参数
    this.articleId = this.$route.params.id

  },
  mounted() {
    // this.monthRank()

    this.getArticleMain()
  },
  methods: {

    handleChildMessage(msg) {
      // 父组件接收到子组件通过事件传递的数据，并更新本地数据  
      this.preNext = msg;
    },

    navigateToSomewhere(actileId) {
      // 假设要跳转到的id是123
      var aa = actileId
      // this.$router.push({
      //   path: "/article/" + aa,
      //   query: {
      //     categoryName: '33',
      //     categoryId: '45'
      //   }
      // })
      var routeData = {
        path: "/ArticleDetailes/" + aa,
        query: {
          // categoryId: '45'
        }
      }
      // 序列化路由对象
      const routeUrl = this.$router.resolve(routeData).href;
      // 在新窗口中打开路由链接
      window.open(routeUrl, '_blank');
    },



    // 获取文章内容
    getArticleMain() {
      var _this = this
      this.loading = true
      // 保险热销
      var insuranceType = {
        id: this.articleId
      }
      getData('POST', 'https://crm.meihualife.com/crm/homePage/getOneContent.do', function (data) {
        var data = JSON.parse(data)
        if (data.code == '0') {
          _this.actileHtml = data.content
          _this.actileTitle = data.title
          _this.actileTime = data.publishtime
        }
        setTimeout(() => {
          _this.PageTitle = data.seotitle ? data.seotitle : ''
          _this.PagekeyWords = data.seokeywords ? data.seokeywords : ''
          _this.PageDescription = data.seodescription ? data.seodescription : ''
        }, 2000)
        if (data.seokeywords && data.seokeywords != '') {
          var str = data.seokeywords
          const arr = str.split(",");
          _this.keywordsTag = arr
        }
        _this.loading = false

      }, insuranceType);
    },

  }
}
  </script>
  
<style scoped>
.hotRank {
  width: 810px;
  border-radius: 4px;
  margin-right: 20px;
  background: #fff;
}
.rank_row {
  width: 1200px;
  display: flex;
  justify-content: center;
  /* background: #fff; */
}
.actileTemplate {
  padding: 33px 36px 33px 32px;
}

.actileTemplate .title {
  text-align: left;
  font-size: 26px;
  font-weight: 700;
}
.actileTemplate .info {
  text-align: left;
  color: #808080;
  margin: 30px 0 20px;
  font-size: 16px;
}

.actileTemplate .info span:last-child {
  border: 1px solid #808080;
  padding: 5px 15px;
  border-radius: 10%;
  padding: 0px 10px;
  border-radius: 10px;
}
.keyword ul{ 
   margin-bottom: 10px;
}

.keyword ul li {
  width: auto;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #f5f6fb;
  border-radius: 18px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 0px 20px;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
}


.preNext {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  font-size: 14px;
}
.preNext p:last-child {
  border-bottom: 1px solid #000000;
  cursor: pointer;
}

.articles p {
  height: 36px;
  line-height: 36px;
  color: #959595;
  font-size: 12px;
  background: #f5f6fb;
  text-align: left;
  padding-left: 10px;
}
</style>


<style>
section {
  text-align: left;
}
</style>