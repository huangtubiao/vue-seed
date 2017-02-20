import Vue from 'vue'

var xhr = ({ method = 'get', url, options = null }) => {
    switch (method) {
        case 'get':
            return Vue.http.get(url, [options])
        case 'post':
            return Vue.http.post(url, [options])
        default:
            return Vue.http.get(url, [options])
    }
}

export default xhr
