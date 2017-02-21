import Vue from 'vue';
import { errHandler } from './config';

var xhr = ({ method = 'get', url, options = null }) => {
    var promise;
    switch (method) {
        case 'get':
            promise = new Promise(function (resolve, reject) {
                Vue.http.jsonp(url, options).then(function (response) {
                    resolve(response);
                }, function (response) {
                    errHandler(response);
                });
            });
            return promise;
        case 'post':
            promise = new Promise(function (resolve, reject) {
                return Vue.http.post(url, options).then(function (response) {
                    resolve(response);
                }, function (response) {
                    errHandler(response);
                });
            });
            return promise;
        default:
            promise = new Promise(function (resolve, reject) {
                Vue.http.jsonp(url, options).then(function (response) {
                    resolve(response);
                }, function (response) {
                    errHandler(response);
                });
            });
            return promise;
    }
};

export default xhr;
