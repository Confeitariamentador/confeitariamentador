const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') 
  },
  mode: 'production',
  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
      querystring: require.resolve("querystring-es3"),
      fs: false,
      assert: false,
      constants: require.resolve("constants-browserify"),
      timers: require.resolve("timers-browserify"),
      zlib: require.resolve("browserify-zlib"),
      "http": require.resolve("stream-http"),
      "tls": require.resolve("tls"),
      http: false,

      net: false,
      string_decoder: false,
      url: false,
      crypto: false,
      buffer: false,
      stream: false,
      util: false, // Desativa o polyfill para o módulo 'util'
      path: false // Desativa o polyfill para o módulo 'path'
    }
  }
};
