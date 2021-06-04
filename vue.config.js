const px2rem = require('postcss-px2rem')
const path = require('path')
const webpack = require('webpack')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    css: {
        sourceMap: true,
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({ remUnit: 37.5 }) // 换算的基数 比如font-size: 5w就是37.5
                ]
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
        .set('_c', resolve('src/components'))
    },
    // configureWebpack: {
    //     plugins: [
    //         new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //         'window.jQuery': 'jquery',
    //         Popper: ['popper.js', 'default']
    //         })
    //     ]
    // },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    // devServer: {
    //     open: true,
    //     proxy: {
    //         '/dataset-api': {
    //             target: 'http://192.168.5.206:18202',
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/dataset-api': '/'   //路径重写  前端/permission 对应 后端/
    //             },
    //         }
    //     }
    // }
}
