import { useEffect } from 'react';

const ServiceWorkerRegistration = ({ enableCaching = true }) => {
  useEffect(() => {
    if (!enableCaching || process.env.NODE_ENV === 'development') {
      return; // Skip in development for easier debugging
    }

    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    } else {
      console.log('Service Workers not supported');
    }
  }, [enableCaching]);

  const registerServiceWorker = async () => {
    try {
      // Register service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', registration);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available
              showUpdateNotification();
            }
          });
        }
      });

      // Handle controller change (new SW activated)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Reload to get new content
        window.location.reload();
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  };

  const showUpdateNotification = () => {
    // Create update notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      max-width: 300px;
    `;

    notification.innerHTML = `
      <div style="margin-bottom: 10px;">
        <strong>Update Available</strong>
      </div>
      <div style="margin-bottom: 15px; font-size: 14px; opacity: 0.9;">
        A new version of the app is available. Reload to get the latest features.
      </div>
      <div style="display: flex; gap: 10px;">
        <button onclick="window.location.reload()" style="
          background: #007bff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 13px;
        ">Update Now</button>
        <button onclick="this.closest('div').remove()" style="
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 13px;
        ">Later</button>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 10000);
  };

  return null; // This component doesn't render anything
};

// Utility functions for cache management
export const clearAllCaches = async () => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('All caches cleared');
  }
};

export const getCacheSize = async () => {
  if (!('caches' in window)) return 0;
  
  let totalSize = 0;
  const cacheNames = await caches.keys();
  
  for (const name of cacheNames) {
    const cache = await caches.open(name);
    const responses = await cache.keys();
    
    for (const request of responses) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return Math.round(totalSize / 1024 / 1024 * 100) / 100; // MB
};

export const preloadCriticalResources = (urls) => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

export default ServiceWorkerRegistration;