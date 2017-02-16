import Vue from 'vue'

const xhr = ({ method = 'get', url, options = null }) => {
    switch (method) {
        case 'get':
            return Vue.http.get(url, [options])
            break;
        case 'post':
            return Vue.http.post(url, [options])
            break;
        default:
    }
}

export default xhr
