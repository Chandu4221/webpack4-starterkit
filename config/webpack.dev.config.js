const path = require("path");
module.exports = {
  entry: {
    main: ["./src/js/index.js"]
  },
  mode: "development",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "../dist/js"),
    publicPath: "/js"
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
            loader: "style-loader"
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
  }
};
