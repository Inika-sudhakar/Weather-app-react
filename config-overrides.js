const path = require('path');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "zlib": require.resolve("browserify-zlib"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "os": require.resolve("os-browserify/browser"),
        "fs": false,
        "net": false,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "tls": false,
    };
    return config;
};
