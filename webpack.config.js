var extractText = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/javascripts/test',
        css: './src/stylesheets/test.scss'
    },

    output: {
        filename: './dist/[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: extractText.extract('css-loader!sass-loader?sourceMap')
        }]
    },

    plugins: [
        new extractText({
            filename: 'test.css',
            disable: false,
            allChunks: true
        }),
    ],

    watch: false
};