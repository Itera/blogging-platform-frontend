const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: "eval-source-map",
    entry: ['babel-polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'target'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'react'],
                        plugins: [
                            require('babel-plugin-transform-object-rest-spread'),
                            "add-react-displayname"
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'index.html', to: './index.html'}]),
        new CopyWebpackPlugin([{from: 'src/favicon', to: './favicon'}])
    ],
    devServer: {
        contentBase: path.join(__dirname, "target"),
        compress: false,
        port: 9000
    }
};