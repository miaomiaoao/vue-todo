const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

config = {
    target: "web",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jsx/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
            
        ]
    },

    plugins: [
        new htmlWebpackPlugin,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev? '"development"':'"production"'
            }
        }),
        new webpack.HotModuleReplacementPlugin
    ]

}

module.exports = config
if(isDev) {
    config.devServer = {
        port: '8000',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true
    }
}