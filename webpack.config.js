module.exports = {
    entry: './src/scripts/script.js',
    output: {
        path: ${__dirname}/dist/scripts,
        filename : "bundle.min.js"
    },
    watch: false,
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}