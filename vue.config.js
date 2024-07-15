const { defineConfig } = require("@vue/cli-service");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sample_product_page/" : "/",
};
