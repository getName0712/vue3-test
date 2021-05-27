module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。

  lintOnSave: false, // 设置eslint报错时停止代码编译
  productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    open: true, // 配置后自动启动浏览器
    hotOnly: true, // 热更新
    host: 'localhost',
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    proxy: {
      '/api': {
        target: 'https://www.wanandroid.com', // 接口域名
        changeOrigin: true, // 是否跨域
        ws: true, // 是否代理 websockets
        secure: true, // 是否https接口
        pathRewrite: { // 路径重置
          '^/api': ''
        }
      },
      '/qqapi': {
        target: 'http://localhost:3200', // 接口域名
        changeOrigin: true, // 是否跨域
        ws: true, // 是否代理 websockets
        secure: false, // 是否https接口
        pathRewrite: { // 路径重置
          '^/qqapi': ''
        }
      }
    }
  }
}
