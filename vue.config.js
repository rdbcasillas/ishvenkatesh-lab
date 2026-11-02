module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: (error) =>
          !error.message.includes("ResizeObserver loop"),
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
    // Add this line to remove eslint-loader
    config.module.rules.delete('eslint');
  },
};
