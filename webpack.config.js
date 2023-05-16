const path = require('path');
module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: "ts-loader",
        },
        {
            test: /\.css$/i,
            use: 'css-loader',
        },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cjs/[name].js',
    libraryTarget: 'commonjs',
  },
  target: 'web',
}