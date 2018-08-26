const path = require("path");
module.exports = {
  entry: {
    main: ["./src/js/index.js"]
  },
  mode: "development",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
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
      }
    ]
  }
};
