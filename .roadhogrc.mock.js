export default {
  proxy: {
    "/expense": {
      target: "https://192.168.1.8:9093",
      enable: true,
      changeOrigin: true,
      //   pathRewrite: { "^/expense": "" },
    },
  },
};
