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



        // // 绑定卡
        // bindCard: {
        //     method: 'post',
        //     url: '/api/h5/bindCard'
        // },
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
            console.log(data)
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
            console.log(data)
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
// 调用请求方法时
// var data={
//     phone:17328728XXX,
//     password:123456
// };
// var res=ajaxMethod('login',data);