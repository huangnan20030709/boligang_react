const path = require("path");

module.exports = {
  // webpack配置
  webpack: {
    // 配置别名
    alias: {
      // 约定使用 @ 表示 src 文件所在目录
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
};
