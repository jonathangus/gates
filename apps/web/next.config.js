const withTM = require('next-transpile-modules')(['ui', 'web3-config']);

module.exports = withTM({
  reactStrictMode: true,
});
