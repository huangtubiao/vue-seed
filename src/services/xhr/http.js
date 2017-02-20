import Vue from 'vue';
import { errHandler } from './config';

var xhr = ({ method = 'get', url, options = null }) => {
    switch (method) {
        case 'get':
            var promise = new Promise(function (resolve, reject) {
                Vue.http.get(url, [options]).then(function (response) {
                    resolve(response);
                }, function (response) {
                    errHandler(response);
                });
            });
            return promise;
        case 'post':
            return Vue.http.post(url, [options]);
        default:
            return Vue.http.get(url, [options]);
    }
};

export default xhr;
