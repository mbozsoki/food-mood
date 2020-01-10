const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = { mode: 'production' }, argv) => {
    return {
        mode: env.mode,
        watch: env.mode === 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: __dirname + '/dist',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        devtool: env.mode === 'production' ? false : 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                { test: /\.tsx?$/, loader: 'babel-loader' },
                { test: /\.tsx?$/, loader: 'ts-loader' },
                { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
                {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                favicon: './favicon.ico',
            }),
        ],
    };
};
