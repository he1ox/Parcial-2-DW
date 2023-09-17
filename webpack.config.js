//  webpack.config.js 
module.exports = {
    entry: './aggregator.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    mode:'development'
};