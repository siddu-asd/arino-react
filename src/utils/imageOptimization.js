// Critical images that should be preloaded for better LCP
const CRITICAL_IMAGES = [
  '/images/hero_bg.jpeg',
  '/images/hero_bg_2.jpeg', 
  '/images/hero_bg_3.jpeg',
  '/images/about_img_1.jpeg',
  '/images/logo.svg',
  '/images/footer_logo.svg',
];

// Preload critical above-the-fold images
export const preloadCriticalImages = () => {
  CRITICAL_IMAGES.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Prefetch images for next likely pages
export const prefetchImages = (imagePaths = []) => {
  imagePaths.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Convert images to WebP format (client-side detection)
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Generate responsive image URLs
export const generateResponsiveSrc = (baseSrc, width) => {
  const extension = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(`.${extension}`, '');
  return `${baseName}_${width}w.${extension}`;
};

// Image compression utility
export const compressImage = (file, quality = 0.8, maxWidth = 1920) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob(resolve, 'image/jpeg', quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Optimize image loading based on connection speed
export const getOptimalImageQuality = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    
    // Slow connection - lower quality
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return { quality: 0.5, maxWidth: 800 };
    }
    
    // Medium connection
    if (connection.effectiveType === '3g') {
      return { quality: 0.7, maxWidth: 1200 };
    }
  }
  
  // Fast connection or unknown - high quality
  return { quality: 0.8, maxWidth: 1920 };
};

// Image loading analytics
export const trackImageLoadTime = (imageSrc, startTime) => {
  const loadTime = performance.now() - startTime;
  
  // Send to analytics (example)
  if (window.gtag) {
    window.gtag('event', 'image_load_time', {
      custom_parameter: imageSrc,
      value: Math.round(loadTime),
    });
  }
  
  console.log(`Image ${imageSrc} loaded in ${Math.round(loadTime)}ms`);
};

const imageUtils = {
  preloadCriticalImages,
  prefetchImages,
  supportsWebP,
  generateResponsiveSrc,
  compressImage,
  getOptimalImageQuality,
  trackImageLoadTime,
};

export default imageUtils;