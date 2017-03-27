'use strict';

const webpack = require('webpack');

module.exports = {
    entry: {
        'app': [,
            `${__dirname}/index`
        ]
    },
    output: {
        path: `${__dirname}/.tmp/release`,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    devtool: "#source-map",
    devServer: {
        host: 'localhost',
        port: 3001,

        watch: true,
        hot: false,
        historyApiFallback: true,
        stats: { colors: true },
        contentBase: `${__dirname}`
    }
};
