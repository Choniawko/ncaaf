const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api", {
      target: "https://api.sportsdata.io/v3/cfb/scores/json/",
      changeOrigin: true,
    }),
  );
};
