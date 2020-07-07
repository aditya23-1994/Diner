const path = require('path');
const HtmlWebapackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
            
        new HtmlWebapackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            }
        }]
    }
};