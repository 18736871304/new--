<template>
  <div class="monthRank">
    <div class="findPro">
      <div class="title">
        <span class="blod">本月榜单</span>
      </div>
      <div>
        <ul>
          <li v-for="(item,index) in monthArticleList" :key="index" @click="navigateToSomewhere(item.id)" style="width: 100%;">
            <div class="monthank" v-if="index==0" style="height: 130px;">
              <div class="monthankicon">
                <img src="../assets/1.png" alt="">
              </div>
              <div class="monthankMain">
                <p> {{item.title}}
                </p>
                <p class="lookPeople">已有39960人看过</p>
              </div>
            </div>
            <div class="monthank" v-else-if="index==1" style="height: 130px;">
              <div class="monthankicon">
                <img src="../assets/2.png" alt="">
              </div>
              <div class="monthankMain">
                <p> {{item.title}}
                </p>
                <p class="lookPeople">已有331960人看过</p>
              </div>
            </div>
            <div class="monthank" v-else-if="index==2" style="height: 130px;">
              <div class="monthankicon">
                <img src="../assets/3.png" alt="">
              </div>

              <div class="monthankMain">
                <p>{{item.title}} </p>
                <p class="lookPeople">已有28463人看过</p>
              </div>
            </div>
            <div class="monthank" v-else>
              <div class="monthankicon">
                <p>{{ index+1 }}</p>
              </div>
              <div class="monthankMain">
                <p>{{item.title}} </p>
                <!-- <p></p> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { getData } from "../api/api";
export default {
  data() {
    return {
      monthArticleList: '',
    }
  },
  mounted() {
    this.monthRank()
  },
  methods: {
    // 获取文章内容
    monthRank() {
      var _this = this
      // 保险热销
      var insuranceType = {
        type: "'01','02','03','04','05','06','07','08','09'",
        startDate: '',
        endDate: '',
        pageNumber: 1,
        pageSize: 10,

      }

      getData('POST', 'https://crm.meihualife.com/crm/homePage/getHomePageContentList.do', function (data) {
        let { rows, total } = data;

        var data = JSON.parse(data)
        _this.monthArticleList = data.rows;
        var monthParams = []
        monthParams.push(data.rows[0])
        monthParams.push(data.rows[data.rows.length - 1])
        _this.$emit('childMessage', monthParams);
      }, insuranceType);
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
          // categoryName: '33',
          // categoryId: '45'
        }
      }
      // 序列化路由对象
      const routeUrl = this.$router.resolve(routeData).href;
      // 在新窗口中打开路由链接
      window.open(routeUrl, '_blank');
    },




  }
}
  </script>
  
<style scoped>
.findPro {
  width: 370px;
  background: #fff;
  position: relative;
}
.findPro .title {
  height: 93px;
  line-height: 93px;
  border-bottom: 0;
  margin-bottom: 0;
  color: #000000;
  font-size: 26px;
  /* font-weight: bold; */
  text-align: left;
  border-bottom: 1px dashed #dddddd;
  font-weight: 700;
}

.findPro .title::before {
  content: "";
  margin-left: 35px;
  padding-left: 15px;
  border-left: 5px solid #3244a8;
  height: 28px;
  margin-top: -5px;
  display: inline-block;
  vertical-align: middle;
}
.hotRank-top {
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
}

.monthank {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
  line-height: 30px;
  font-size: 18px;
  width: 100%; /* 设置容器宽度 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis; /* 使用省略号 */
  /* border: 1px solid #ccc;   */
  padding: 10px 20px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px dashed #dddddd;
}
.monthankicon {
  width: 45px;
  height: 88px;
  line-height: 88px;
  position: relative;
  color: #a3a3a3;
}
.monthankicon img {
  /* position: absolute;
  top: 0;
  left: 0; */
}
.monthankicon p {
  width: 45px;
  height: 88px;
  line-height: 88px;
  position: relative;
  color: #a3a3a3;
  /* border: 1px solid red; */
}
.monthankMain {
  margin-left: 10px;
}

.monthank .monthankMain p {
  /* width: 370px; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: break-spaces;
  word-wrap: break-word; /* 允许在单词内换行 */
  overflow-wrap: break-word; /* 同上，现代浏览器推荐使用这个属性别名 */
  white-space: normal; /* 允许自动换行 */
  text-align: left;
  color: #525151;
  font-size: 18px;
}

.monthank .monthankMain .lookPeople {
  font-size: 16px;
  color: #5164cf;
  line-height: 30px;
  margin-top: 5px;
}
</style>