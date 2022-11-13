const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://25.47.14.25:8081",
            changeOrigin: true,
        })
    );
};
