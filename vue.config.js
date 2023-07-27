const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/test22/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: "test22weather",
      libraryTarget: "umd",
    },
  },
});
