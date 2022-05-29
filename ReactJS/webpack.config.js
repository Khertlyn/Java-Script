const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),//nome da pasta onde o arquivo vai gerar
        filename:'bundler.js'
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"index.html"
        })
    ]
}