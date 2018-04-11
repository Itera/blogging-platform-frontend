const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(
    require('./webpack.config'),
    {
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
);