/**
 * 指令总入口
 */
import scroll from './scroll';
import touch from './touch';
import title from './title';

export default {
    ...scroll,
    ...touch,
    ...title
};
