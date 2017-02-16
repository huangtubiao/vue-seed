import xhr from './xhr'

/**
 * 首页主题列表所用到的 API
 */
class TopicsService {
    /**
     * 获取主题列表
     * @return {Promise}
     */
    getList () {
        return xhr({
            method: 'get',
            url: '/topics'
        })
    }
}

// 实例化后导出，全局单例
export default new TopicsService()
