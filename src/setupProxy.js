const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://internal-backend-alb-709612691.ap-northeast-2.elb.amazonaws.com:3001',
      changeOrigin: true,
    })
  );
};