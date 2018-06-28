var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname,'public/build/'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map' //Whenever our code crashes this makes debugging for us.
    },
    mode: 'production',
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
}