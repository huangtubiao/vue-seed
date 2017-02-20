import xhr from './xhr'

/**
 * 首页主播列表所用到的 API
 */
class AnchorsService {
    /**
     * 获取主题列表
     * @return {Promise}
     */
    getList () {
        return xhr({
            method: 'get',
            url: '/anchors'
        })
    }
}

// 实例化后导出，全局单例
export default new AnchorsService()
