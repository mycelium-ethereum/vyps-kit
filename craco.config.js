const { loaderByName, addBeforeLoader } = require('@craco/craco');

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