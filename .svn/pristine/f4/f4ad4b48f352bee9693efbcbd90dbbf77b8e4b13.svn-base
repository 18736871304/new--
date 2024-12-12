import axios from 'axios';
import Qs from "qs";
import $ from 'jquery';
import Loading from 'element-ui'
let crmUrl = 'https://crm.meihualife.com'; //添加域名


//登录
// export const login = params => {
// 	return axios.post(`/logon.do`, Qs.stringify(params)).then(res => res.data);
// };

// // 获取菜单
// export const AuthMenuList = params => {
// 	return axios.post(`/crm/auth/logon.do`, Qs.stringify(params)).then(res => res.data);
// };


// 获取菜单
// ?url=https://mp.weixin.qq.com/s/uwoEYga3vGs-VzxsAoqGZA&key=JZL5de6663e10c65e61&verifycode=''
// export const actilHtml = params => {
// 	return axios.get(`https://www.dajiala.com/fbmain/monitor/v3/article_html`, params).then(res => res.data);
// };

export function getData(type, url, callback, params) {

	// showLoaing()
	$.ajax({
		type: type,
		async: true,
		url: url,
		data: params,
		success: function (data) {
			callback(data);
		},
		error: function (xhr, status, error) {
			console.error('An error occurred: ' + status + ' - ' + error);
		},

	}).done(function () {
		// console.log('请求完成')
		// hideLoading()
		// 请求完成后执行的逻辑
	});

};
let loading;
let loadingCount = 0;

export function showLoaing() {
	if (loadingCount == 0) {
		loading = Loading.service({
			lock: true,
			text: '加载中',
			background: 'rgba(0,0,0,0.7)'
		})
	};
	loadingCount++
};

export function hideLoading() {
	loadingCount--;
	if (loadingCount == 0) {

		loading.close();
	}
};
export const  articleImg=['./articleImg/01.jpg','./articleImg/02.jpg','./articleImg/03.jpg','./articleImg/04.jpg','./articleImg/05.jpg','./articleImg/06.jpg','./articleImg/07.jpg','./articleImg/08.jpg','./articleImg/09.jpg','./articleImg/10.jpg','./articleImg/11.jpg','./articleImg/12.jpg','./articleImg/13.jpg','./articleImg/14.jpg','./articleImg/15.jpg','./articleImg/16.jpg','./articleImg/17.jpg','./articleImg/18.jpg','./articleImg/19.jpg','./articleImg/20.jpg']