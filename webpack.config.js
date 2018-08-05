const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PUBLIC_PATH = path.resolve(__dirname, "public");

module.exports = {
  entry: ["./src/js/main.js", "./src/css/main.scss"],
  output: {
    path: PUBLIC_PATH,
    filename: "js/main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]",
          publicPath: "/"
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  devServer: {
    publicPath: "/",
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000
  }
};
