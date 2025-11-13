
// Webpack optimization overrides for ultra-fast performance
const path = require('path');

module.exports = function override(config) {
  // Production optimizations
  if (config.mode === 'production') {
    
    // Enhanced code splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            priority: 20,
            reuseExistingChunk: true,
          },
          ui: {
            test: /[\\/]node_modules[\\/](@iconify|react-slick|slick-carousel)[\\/]/,
            name: 'ui-libs',
            priority: 15,
            reuseExistingChunk: true,
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
      
      // Runtime chunk for better caching
      runtimeChunk: 'single',
    };
    
    // Remove source maps in production for smaller bundles
    config.devtool = false;
    
    // Minimize asset size
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    };
  }
  
  // Image optimization
  const imageLoaderRule = {
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  };
  
  // Add image loader
  config.module.rules.push(imageLoaderRule);
  
  return config;
};
