import xhr from './xhr';
import cgiPath from '../constants/cgiPath';

/**
 * 首页主播列表所用到的 API
 */
class AnchorsService {
    /**
     * 获取全部主播列表
     * @return {Promise}
     */
    getAllAnchors (params) {
        return xhr({
            method: 'get',
            url: cgiPath['GET_ANCHORS'] + '?index=' + params.index + '&size=' + params.size + '&type=' + params.type,
            options: {
                callback: 'jsonp_callback_qf56commoreAnchor'
            }
        });
    }
    /**
     * 获取关注主播列表
     * @return {Promise}
     */
    getFocusAnchors (params) {
        return xhr({
            method: 'get',
            url: cgiPath['GET_ANCHORS'] + '?index=' + params.index + '&size=' + params.size + '&type=' + params.type,
            options: {
                callback: 'jsonp_callback_qf56commoreAnchor'
            }
        });
    }
}

// 实例化后导出，全局单例
export default new AnchorsService();
