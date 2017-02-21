import xhr from './xhr';

/**
 * 首页主播列表所用到的 API
 */
class AnchorsService {
    /**
     * 获取主播列表
     * @return {Promise}
     */
    getList (params) {
        return xhr({
            method: 'get',
            url: '/api/home/v4/moreAnchor.h5?' + 'index=' + params.index + '&size=' + params.size + '&type=' + params.type,
            options: {
                callback: 'jsonp_callback_qf56commoreAnchor'
            }
        });
    }
}

// 实例化后导出，全局单例
export default new AnchorsService();
