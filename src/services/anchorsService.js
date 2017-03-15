import xhr from './xhr';
import cgiPath from './cgi_path/anchors';

/**
 * 首页主播列表所用到的service
 */
class AnchorsService {
    /**
     * 获取全部主播列表
     * @return {Promise}
     */
    getAnchors (params) {
        return xhr({
            method: 'get',
            url: cgiPath['GET_ANCHORS'] + '?index=' + params.index + '&size=' +
            params.size + '&type=' + params.type + '&page=' + params.page
        });
    }
    /**
     * 获取推荐主播列表
     * @return {Promise}
     */
    getRecommendAnchors (params) {
        return xhr({
            method: 'get',
            url: cgiPath['GET_RECOMMEND_ANCHORS'] + '?size=' + params.size
        });
    }
}

// 实例化后导出，全局单例
export default new AnchorsService();
