/**
 * 站点及rest api配置信息，以下为示例配置，可自行修改
 *
 * 构建生产版本之前需要将该文件名称改为app.config.js
 */
export default {
    /**
     * 站点图标URL（显示在浏览器标签上的）
     */
    siteIcon:
        "http://localhost:2222/wp-content/uploads/2022/03/cropped-6b6fec0efd8b0e996cb4f1ae7842571b-Mini.png",
    /**
     * 站点logo URL
     */
    siteLogo:
        "http://localhost:2222/wp-content/uploads/2022/04/cropped-6b6fec0efd8b0e996cb4f1ae7842571b.png",
    /**
     * 本站点URL，非API URL
     */
    siteUrl: "http://localhost:3000",
    /**
     * API基准URL（协议+主机名+端口号）
     */
    apiBaseUrl: "http://localhost:2222",
    /**
     * API端是否启用易于识别的URL
     *
     * wordpress设置-固定链接中，如果启用了朴素型URL，则将该项置为false
     */
    apiBackendPrettyUrlEnabled: true,
    /**
     * 访问wordpress rest api的用户名，与应用程序密码同在wordpress个人资料里设置
     */
    apiUser: "debugger",
    /**
     * 应用程序密码，用来授权对wordpress rest api的访问
     */
    appPwd: "gxYX wxyy aSQJ tAEI 5NyB AarZ",
    /**
     * wordpress古腾堡编辑器（区块编辑器）样式表文件，将[http://localhost:2222]字样改成自己的wordpress端URL即可
     *
     * 若在wordpress后台写文章时采用的是旧版富文本编辑器，则将该项置为""
     */
    gutenbergEditorStylesheet:
        "http://localhost:2222/wp-includes/css/dist/block-library/style.min.css",
    /**
     * 隐藏无内容的分类，默认true，即隐藏
     */
    hideEmptyCategory: true,
    /**
     * 隐藏无内容的标签，默认true，即隐藏
     */
    hideEmptyTag: true,
    /**
     * 标签文字尺寸（单位rem，网页文字默认1rem），不填写即所有标签文字都一样大小
     *
     * 最小值不应小于0.4，最大值不应大于2
     */
    tagFontSize: {
        /**
         * 拥有项目最少的标签，填写0即不设置尺寸
         *
         * 该值不应小于0.4
         */
        min: 0.6,
        /**
         * 拥有项目最多的标签，填写0即不设置尺寸
         *
         * 该值不应大于2
         */
        max: 1.2,
    },
    /**
     * 背景图片设置
     */
    background: {
        /**
         * 图片URL
         */
        image: "http://localhost:2222/wp-content/uploads/2022/04/e7fe136e453e68f2e25993593199be10.jpg",
        /**
         * 图片位置
         */
        position: {
            /**
             * 水平方向，可选值：left，center，right
             */
            horizontal: "center",
            /**
             * 垂直方向，可选值：top，center，bottom，
             */
            vertical: "center",
        },
        /**
         * 图片尺寸，可选值：unset（原始）、contain（适合屏幕）、cover（填满屏幕）
         */
        size: "cover",
        /**
         * 重复背景图片，默认false，即不重复
         */
        repeat: false,
        /**
         * 图片随页面滚动，默认false，即不滚动
         */
        scroll: false,
    },
    /**
     * seo设置
     */
    seo: {
        /**
         * 搜索引擎站点认证，填写搜索引擎站长工具提供的meta字符串（一串字母数字的组合）
         */
        searchEngineValidate: {
            google: "",
            bing: "",
            baidu: "",
        },
        /**
         * 流量分析/网站统计，填写分析工具提供的html字符串，请将html字符串包裹在``内
         */
        siteAnalytics: {
            google: ``,
            cnzz: ``,
            /**
             * Cloudflare Web Analytics
             */
            cloudflare: ``,
        },
        /**
         * 本站点标题（显示在浏览器标签上的）
         */
        title: "小流星的梦",
        /**
         * 关于此站点的一些描述
         */
        description: "主题SPA版本开发测试",
        /**
         * 关于此站点的一些关键词，逗号隔开
         */
        keywords: "博客,日常",
    },
    /**
     * 页脚内容设置
     */
    footer: {
        /**
         * 是否需要备案，需要填写true，否则填写false
         */
        needFiling: false,
        /**
         * 页脚内容，如果需要备案，则该项需要填写备案号，否则填写其它内容
         */
        footerContent: "一些想要显示在页脚上的内容",
    },
};