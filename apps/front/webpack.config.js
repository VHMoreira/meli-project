const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        static: './public',
        historyApiFallback: {
            index: "index.html",
            disableDotRule: true
        },
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
}; 