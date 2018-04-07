const webpack = require('webpack');
module.exports = {
    entry: {
        bundle: ['react', 'react-dom']
    },
    output: {
        path: __dirname + './build',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: './build/bundle.manifest.json',
            name: '[name]_library',
        })
    ]
};
