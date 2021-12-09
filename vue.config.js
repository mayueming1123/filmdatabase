module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'networks': '@/networks',
                'views': '@/views',
            }
        },
        devServer: {

            port: 8810, // 此处修改你想要的端口号

        }
    }
}
