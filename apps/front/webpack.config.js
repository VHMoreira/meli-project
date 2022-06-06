const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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