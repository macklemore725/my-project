// vue.config.js file to be place in the root of your repository

module.exports = {
  runtimeCompiler: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/my-project/" : "/csb-bmrt5"
};
