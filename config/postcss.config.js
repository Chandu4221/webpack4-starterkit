const purgecss = require("@fullhuman/postcss-purgecss");
const path = require("path");
module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: [`${path.resolve(__dirname, "../src")}/*.html`]
    })
  ]
};
