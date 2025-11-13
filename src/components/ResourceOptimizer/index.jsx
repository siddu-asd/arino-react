import { useEffect } from 'react';

// Critical resources to preload immediately
const CRITICAL_RESOURCES = [
  // Critical fonts
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  
  // Critical images
  '/images/logo.svg',
  '/images/hero_bg.jpeg',
  '/images/hero_bg_2.jpeg',
  
  // Critical API endpoints (if any)
  // '/api/critical-data',
];

// DNS prefetch domains for faster connection setup
const DNS_PREFETCH_DOMAINS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net',
  'unpkg.com',
  // Add your CDN domains here
  // 'your-cdn-domain.com',
];

// Preconnect to critical third-party origins
const PRECONNECT_ORIGINS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  // Add other critical origins
];

const ResourceOptimizer = ({ enablePreloading = true }) => {
  useEffect(() => {
    if (!enablePreloading) return;

    // Add DNS prefetch hints
    DNS_PREFETCH_DOMAINS.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Add preconnect hints
    PRECONNECT_ORIGINS.forEach(origin => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical resources
    CRITICAL_RESOURCES.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      
      // Determine resource type
      if (resource.includes('.css') || resource.includes('fonts.googleapis')) {
        link.as = 'style';
      } else if (resource.includes('.js')) {
        link.as = 'script';
      } else if (resource.includes('.jpg') || resource.includes('.png') || 
                 resource.includes('.jpeg') || resource.includes('.webp') ||
                 resource.includes('.svg')) {
        link.as = 'image';
      } else if (resource.includes('/api/')) {
        link.as = 'fetch';
        link.crossOrigin = 'anonymous';
      } else {
        link.as = 'fetch';
      }
      
      link.href = resource;
      document.head.appendChild(link);
    });

    // Intelligent prefetching based on user behavior
    setupIntelligentPrefetching();

    // Setup resource timing monitoring
    setupResourceTimingMonitoring();

  }, [enablePreloading]);

  return null;
};

// Intelligent prefetching based on hover and viewport
const setupIntelligentPrefetching = () => {
  let prefetchTimeout;
  
  // Prefetch on hover with delay
  const handleLinkHover = (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    
    prefetchTimeout = setTimeout(() => {
      prefetchPage(link.href);
    }, 100); // Small delay to avoid excessive prefetching
  };
  
  const handleLinkLeave = () => {
    clearTimeout(prefetchTimeout);
  };
  
  // Add hover listeners to all links
  document.addEventListener('mouseover', handleLinkHover);
  document.addEventListener('mouseleave', handleLinkLeave);
  
  // Prefetch links in viewport
  const observeLinksInViewport = () => {
    if (!('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target;
          setTimeout(() => prefetchPage(link.href), 1000); // Delay for viewport prefetch
          observer.unobserve(link);
        }
      });
    }, { rootMargin: '50px' });
    
    // Observe all visible links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      observer.observe(link);
    });
  };
  
  // Setup after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeLinksInViewport);
  } else {
    observeLinksInViewport();
  }
};

// Prefetch a page for faster navigation
const prefetchPage = (url) => {
  // Avoid prefetching external links or already prefetched pages
  if (!url.startsWith('/') && !url.includes(window.location.origin)) return;
  if (document.querySelector(`link[rel="prefetch"][href="${url}"]`)) return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  document.head.appendChild(link);
  
  console.log(`🔗 Prefetched: ${url}`);
};

// Monitor resource loading performance
const setupResourceTimingMonitoring = () => {
  if (!('PerformanceObserver' in window)) return;
  
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      if (entry.duration > 1000) { // Log slow resources
        console.warn(`🐌 Slow resource: ${entry.name} (${Math.round(entry.duration)}ms)`);
      }
      
      // Track different resource types
      if (entry.name.includes('.css')) {
        trackResourceTiming('CSS', entry);
      } else if (entry.name.includes('.js')) {
        trackResourceTiming('JavaScript', entry);
      } else if (isImageResource(entry.name)) {
        trackResourceTiming('Image', entry);
      }
    });
  });
  
  try {
    observer.observe({ type: 'resource', buffered: true });
  } catch (error) {
    console.warn('Resource timing monitoring not supported');
  }
};

// Track resource loading metrics
const trackResourceTiming = (resourceType, entry) => {
  const metrics = {
    type: resourceType,
    url: entry.name,
    duration: Math.round(entry.duration),
    size: entry.transferSize || 0,
    cached: entry.transferSize === 0 && entry.decodedBodySize > 0
  };
  
  // Send to analytics or log
  if (window.gtag) {
    window.gtag('event', 'resource_timing', {
      resource_type: metrics.type,
      load_duration: metrics.duration,
      file_size: metrics.size,
      from_cache: metrics.cached
    });
  }
  
  console.log(`📊 ${resourceType}: ${metrics.duration}ms (${Math.round(metrics.size/1024)}KB) ${metrics.cached ? '[CACHED]' : ''}`);
};

// Check if URL is an image resource
const isImageResource = (url) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
  return imageExtensions.some(ext => url.includes(ext));
};

// Preload next likely pages based on current route
export const preloadLikelyPages = (currentPath) => {
  const routeMap = {
    '/': ['/about', '/services', '/portfolio'],
    '/about': ['/services', '/team', '/contact'],
    '/services': ['/portfolio', '/contact', '/about'],
    '/portfolio': ['/portfolio/details', '/services', '/contact'],
    '/blog': ['/blog/post', '/about', '/contact'],
    '/contact': ['/services', '/about', '/portfolio']
  };
  
  const likelyPages = routeMap[currentPath] || [];
  likelyPages.forEach(page => {
    setTimeout(() => prefetchPage(page), 2000); // Delay to avoid blocking current page
  });
};

// Cache warming for critical resources
export const warmCache = async () => {
  console.log('🔥 Warming cache...');
  
  const warmupRequests = CRITICAL_RESOURCES.map(async (resource) => {
    try {
      const response = await fetch(resource);
      if (response.ok) {
        console.log(`✅ Warmed: ${resource}`);
      }
    } catch (error) {
      console.warn(`❌ Failed to warm: ${resource}`);
    }
  });
  
  await Promise.allSettled(warmupRequests);
  console.log('🔥 Cache warming complete');
};

// Resource budget monitoring
export const monitorResourceBudget = () => {
  const budgets = {
    totalSize: 2 * 1024 * 1024, // 2MB
    imageSize: 1 * 1024 * 1024,  // 1MB for images
    jsSize: 500 * 1024,          // 500KB for JS
    cssSize: 100 * 1024          // 100KB for CSS
  };
  
  let currentUsage = {
    total: 0,
    images: 0,
    js: 0,
    css: 0
  };
  
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
      const size = entry.transferSize || 0;
      currentUsage.total += size;
      
      if (isImageResource(entry.name)) {
        currentUsage.images += size;
      } else if (entry.name.includes('.js')) {
        currentUsage.js += size;
      } else if (entry.name.includes('.css')) {
        currentUsage.css += size;
      }
      
      // Check budgets
      Object.keys(budgets).forEach(key => {
        const budget = budgets[key];
        const usage = currentUsage[key.replace('Size', '')] || currentUsage.total;
        
        if (usage > budget) {
          console.warn(`💰 Budget exceeded for ${key}: ${Math.round(usage/1024)}KB / ${Math.round(budget/1024)}KB`);
        }
      });
    });
  });
  
  try {
    observer.observe({ type: 'resource', buffered: true });
  } catch (error) {
    console.warn('Resource budget monitoring not supported');
  }
};

export default ResourceOptimizer;