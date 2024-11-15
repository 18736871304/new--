import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/vuex/store.js'

Vue.use(VueRouter);

var routes = [
  // {
  //   path: "/",
  //   redirect: '/home',

  // },

  // {
  //   path: '/',
  //   component: () => import("@/views/index/index.vue"),
  //   // name: '系统管理',
  //   redirect: '/home',
  //   iconCls: 'fa fa-home',
  //   children: [{
  //     path: '/home',
  //     component: () => import("@/views/home/home.vue"),
  //     name: '首页',
  //   }, ]
  // },

  {
    path: '/',
    component: () => import("@/views/home/home.vue"),
    name: '首页',
  },
  {
    path: '/message',
    component: () => import("@/views/message/message.vue"),
    name: '信息披露',
  },
  {
    path: '/ArticleList/:id',
    name: '保险课堂',
    component: () => import("@/views/ArticleList/ArticleList.vue"),
    children: []

  },
  {
    path: '/ArticleDetailes/:id',
    name: '文章内容',
    component: () => import("@/views/ArticleList/ArticleDetailes.vue"),
    children: []

  },

  {
    path: '/search',
    name: '搜索内容',
    component: () => import("@/views/search/search.vue"),
  },
  {
    path: '/productList/:id',
    name: '产品列表',
    component: () => import("@/views/productList/productList.vue"),
  },
  {
    path: '/aboutUs',
    name: '关于我们',
    component: () => import("@/views/aboutUs/aboutUs.vue"),
  },

  {
    path: '/404',
    component: () => import("@/views/404/404.vue"),
    name: '',
  },
  {
    path: '*',
    redirect: {
      path: '/404'
    }
  }

];

// {
//   path: '/user',
//   meta: {
//     title: '用户中心'
//   },
//   component: resolve => require(['@/components/page/user'], resolve)
// } // 配置meta


// const router = new VueRouter({
//   routes,
//    base: process.env.BASE_URL,

//   // mode: 'hash'
// })

// router.beforeEach((to, from, next) => {
//   if (to.meta && to.meta.title) {
//     document.title = to.meta.title;
//     // 可以添加其他SEO相关的meta标签
//   }
//   next();
// });


export default routes;