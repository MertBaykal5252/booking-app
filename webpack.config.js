const path = require("path");

const config = {
  entry: "./src/js/main.js",
  mode: "production",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: []
};

module.exports = config;
