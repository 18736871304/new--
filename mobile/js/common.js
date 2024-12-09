// var host = 'http://39.105.63.144'

var host = 'https://crm.meihualife.com/'
// 页面所有的请求路由
function urlLink(str) {
    var url = {
        // 文章类型
        getDictList: {
            method: 'post',
            url: '/crm/common/getDictList.do'
        },
        //保险热销
        getHomePageRiskList: {
            method: 'post',
            url: '/crm/homePage/getHomePageRiskList.do'
        },
        // 获取员工二维码
        getZhiHuArticleQrCode: {
            method: 'get',
            url: '/articlebak/getZhiHuArticleQrCode.do'
        },

        // 文章内容
        getHomePageContentList: {
            method: 'post',
            url: '/crm/homePage/getHomePageContentList.do'
        },
        // //获取卡列表
        // getMySimCards: {
        //     method: 'post',
        //     url: '/api/h5/getMySimCards'
        // },
        // //获取套餐组
        // getCardPlans: {
        //     method: 'post',
        //     url: '/api/h5/getCardPlans'
        // },
        // //绑定套餐组
        // bindPlan: {
        //     method: 'post',
        //     url: '/api/h5/bindPlan'
        // },
        // //获取iccid
        // getIccid: {
        //     method: 'post',
        //     url: '/api/h5/getIccid'
        // },
    };
    return url[str];
};

// 请求方法
function ajaxMethod(str, obj) {

    var link = urlLink(str);
    var result = {};
    $.ajax({
        type: link.method,
        url: host + link.url,
        data: obj,
        dataType: 'json',
        async: false,
        cache: true,
        success: function (data) {
            result = data;
        },
        error: function (res) {
            console.log(res)
        },
        complete: function () {

        }
    });
    return result;
};
// 请求方法
function ajaxMethodUrl(str, obj) {

    var link = urlLink(str);
    var result = {};
    $.ajax({
        type: link.method,
        url: 'https://insure.meihualife.com/' + link.url,
        data: obj,
        dataType: 'json',
        async: false,
        cache: true,
        success: function (data) {
         
            result = data;
        },
        error: function (res) {
            console.log(res)
        },
        complete: function () {

        }
    });
    return result;
};

const  articleImg=['./articleImg/01.jpg','./articleImg/02.jpg','./articleImg/03.jpg','./articleImg/04.jpg','./articleImg/05.jpg','./articleImg/06.jpg','./articleImg/07.jpg','./articleImg/08.jpg','./articleImg/09.jpg','./articleImg/10.jpg','./articleImg/11.jpg','./articleImg/12.jpg','./articleImg/13.jpg','./articleImg/14.jpg','./articleImg/15.jpg','./articleImg/16.jpg','./articleImg/17.jpg','./articleImg/18.jpg','./articleImg/19.jpg','./articleImg/20.jpg']
// 调用请求方法时
// var data={
//     phone:17328728XXX,
//     password:123456
// };
// var res=ajaxMethod('login',data);