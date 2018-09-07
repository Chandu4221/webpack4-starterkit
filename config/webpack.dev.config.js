const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: {
    main: ["./js/index.js"]
  },
  mode: "development",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../src"),
    overlay: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
