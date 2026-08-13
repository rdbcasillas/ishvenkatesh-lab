module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .type("asset/resource")
      .set("generator", {
        filename: "files/[name].[hash][ext]",
      });
    // Add this line to remove eslint-loader
    config.module.rules.delete('eslint');
  },
};
