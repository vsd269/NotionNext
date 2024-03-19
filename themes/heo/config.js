const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-10-15', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://www.ai-hd.com/' },
    { title: '访问文档中心获取更多帮助', url: 'https://www.ai-hd.com/' }
  ],

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享AIGC',
  HEO_HERO_TITLE_2: '与实用技巧',
  HEO_HERO_TITLE_3: 'ai-hd.com',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: 'Ai电影',
  HEO_HERO_TITLE_LINK: 'https://movie.ai-hd.com/',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: 'https://www.ai-hd.com/search/%E7%B2%BE%E9%80%89' },
  HEO_HERO_CATEGORY_2: { title: '知识宝典', url: 'https://waytoagi.feishu.cn/wiki/QPe5w5g7UisbEkkow8XcDmOpn8e' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: 'https://www.ai-hd.com/category/%E5%AE%9E%E7%94%A8%E6%95%99%E7%A8%8B' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/1111.png', // 英雄区右侧图片
  
  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 一个Ai狂热爱好者',
    '🤝 专注研究AiGC实时动态',
    '🏃 分享热门实时干货',
    '🏠 还懂直播摄影拍摄',
    '🤖️ 也会影视后期剪辑',
    '🧱 如果你也是Ai爱好者，记得关注我'
  ],
  HEO_INFO_CARD_URL: 'https://www.ai-hd.com/', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Topaz Photo AI',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/Topaz%20Photo%20AI.webp',
      color_1: '#9ca2fb',
      title_2: 'SD',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/sd-001.webp',
      color_2: '#320033'
    },
    {
      title_1: 'chatgpt',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/gpt4-01.webp',
      color_1: '#ffffff',
      title_2: 'Perplexity',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/sousuo-x1.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'poe',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/poe-xin.webp',
      color_1: '#ffffff',
      title_2: 'heygen',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310172351906.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'leonardo',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/202310180024344.webp',
      color_1: '#ffffff',
      title_2: 'Eleven_Labs',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/Eleven_Labs-touming.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'midjourny',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/midjourney_2.webp',
      color_1: '#ffffff',
      title_2: 'd-id',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/d-id2kb.webp',
      color_2: '#000000'
    },
    {
      title_1: 'runway',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/runway(1).webp',
      color_1: '#ffffff',
      title_2: 'claude',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/Claude.webp',
      color_2: '#d09b74'
    },
    {
      title_1: 'pick labs',
      img_1: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/pika-labs-topaz-enhance-4x_2.webp',
      color_1: '#ffffff',
      title_2: 'Gemini',
      img_2: 'https://tupian1014-1251479570.cos.ap-shanghai.myqcloud.com/tupian/Geminitm.webp',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '在QQ频道中共同交流与分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入QQ频道',
  HEO_SOCIAL_CARD_URL: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=21tkzpmy2NT&jumpsource=shorturl#/pc',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
