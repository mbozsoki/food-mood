const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = { mode: 'production' }, argv) => {
    return {
        mode: env.mode,

        entry: {
            app: './src/index.tsx',
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            publicPath: '/',
        },

        devtool: env.mode === 'production' ? false : 'inline-source-map',

        resolve: {
            extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(jpg|eot|woff|woff2|svg|ttf|png|webp)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { name: '[name].[ext]' },
                        },
                    ],
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: ' WB Simple loop displayer',
                template: './src/index.html',
            }),
        ],

        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000,
        },
    };
};
