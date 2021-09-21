const { loaderByName, addBeforeLoader } = require('@craco/craco');
const path = require('path');

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    webpack: {
        configure: (webpackConfig) => {
            if (process.env.REACT_APP_BUILD_LIBRARY) {
                webpackConfig.entry = './src/manifest.js'
                webpackConfig.output = {
                    ...webpackConfig.output,
                    path: path.resolve(process.cwd(), 'dist'),
                    filename: 'lib.js',
                    libraryTarget: 'umd',
                }
                webpackConfig.optimization = {
                    runtimeChunk: false,
                    splitChunks: {
                    chunks(chunk) {
                        return false
                    },
                    },
                }
            }
            webpackConfig.resolve.extensions.push('.mdx');

            const mdxLoader = {
                use: [
                    {
                      loader: 'babel-loader'
                    },
                    {
                      loader: '@mdx-js/loader',
                      options: {}
                    }
                ],
                test: /\.md(x)?$/,
                exclude: /node_modules/,
            };

            addBeforeLoader(webpackConfig, loaderByName('babel-loader'), mdxLoader);

            return webpackConfig;
        },
    },
}