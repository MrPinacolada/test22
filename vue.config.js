const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/test22/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: "weathertest22",
      libraryTarget: "umd",
    },
  },
});
