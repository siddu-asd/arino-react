// Build optimization configurations
// const path = require('path');

// Webpack Bundle Analyzer (if using)
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Environment-based optimizations
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const optimizationConfig = {
  // Bundle splitting configuration
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      // Vendor libraries
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10,
        reuseExistingChunk: true,
      },
      // React libraries
      react: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: 'react',
        priority: 20,
        reuseExistingChunk: true,
      },
      // UI libraries (icons, sliders, etc.)
      ui: {
        test: /[\\/]node_modules[\\/](@iconify|react-slick|slick-carousel)[\\/]/,
        name: 'ui-libs',
        priority: 15,
        reuseExistingChunk: true,
      },
      // Common components
      common: {
        name: 'common',
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      },
    },
  },
  
  // Runtime chunk for better caching
  runtimeChunk: {
    name: 'runtime',
  },
  
  // Production optimizations
  ...(isProduction && {
    minimizer: [
      // Terser for JS minification (already included in CRA)
      // CSS optimization (already included in CRA)
    ],
  }),
};

// Performance hints
const performanceConfig = {
  hints: isProduction ? 'warning' : false,
  maxEntrypointSize: 512000,
  maxAssetSize: 512000,
};

// Asset optimization
const assetOptimization = {
  // Image optimization rules
  images: {
    // JPEG quality settings
    jpeg: {
      quality: 85,
      progressive: true,
    },
    // PNG optimization
    png: {
      quality: [0.6, 0.8],
    },
    // WebP conversion
    webp: {
      quality: 80,
      method: 6,
    },
  },
  
  // Font optimization
  fonts: {
    preload: ['Inter', 'Roboto'], // Add your main fonts
    display: 'swap',
  },
};

// Development optimizations
const devOptimizations = {
  // Hot reload optimizations
  hot: true,
  // Source maps for debugging
  devtool: 'eval-source-map',
  // Cache optimization
  cache: {
    type: 'filesystem',
  },
};

// Production optimizations
const prodOptimizations = {
  // Source maps for production (optional)
  devtool: 'source-map',
  // Tree shaking (already enabled in CRA)
  usedExports: true,
  // Dead code elimination
  sideEffects: false,
};

module.exports = {
  optimization: optimizationConfig,
  performance: performanceConfig,
  assets: assetOptimization,
  ...(isDevelopment ? devOptimizations : prodOptimizations),
};