/**
 * 配置编译环境和线上环境下域名的管理
 *
 * baseUrl: 域名地址1
 * baseUrl2: 域名地址2
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '/api';
let baseUrl2 = '/api';
let imgBaseUrl = '';

if (process.env.NODE_ENV !== 'development') {
    baseUrl = 'http://qf.56.com';
    baseUrl2 = 'http://sp.qf.56.com';
    imgBaseUrl = 'http://file.qf.56.com';
}

export { baseUrl, baseUrl2, imgBaseUrl };
