const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
