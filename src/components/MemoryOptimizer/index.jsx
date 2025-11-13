import { useEffect, useRef, useCallback } from 'react';

// Object pool for reusing objects to reduce GC pressure
class ObjectPool {
  constructor(createFn, resetFn, maxSize = 100) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
    this.maxSize = maxSize;
  }

  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }

  release(obj) {
    if (this.pool.length < this.maxSize) {
      this.resetFn(obj);
      this.pool.push(obj);
    }
  }

  clear() {
    this.pool = [];
  }

  getStats() {
    return {
      poolSize: this.pool.length,
      maxSize: this.maxSize
    };
  }
}

// Image object pool
const imagePool = new ObjectPool(
  () => new Image(),
  (img) => {
    img.src = '';
    img.onload = null;
    img.onerror = null;
    img.removeAttribute('crossorigin');
  }
);

// Canvas object pool
const canvasPool = new ObjectPool(
  () => document.createElement('canvas'),
  (canvas) => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 0;
    canvas.height = 0;
  }
);

const MemoryOptimizer = ({ enableOptimization = true, monitorMemory = true }) => {
  const memoryStatsRef = useRef({ peak: 0, current: 0, collections: 0 });
  const intervalRef = useRef(null);
  const cleanupCallbacksRef = useRef(new Set());

  // Memory monitoring
  useEffect(() => {
    if (!enableOptimization || !monitorMemory) return;

    const startMemoryMonitoring = () => {
      intervalRef.current = setInterval(() => {
        if ('memory' in performance) {
          const memory = performance.memory;
          const currentMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
          const limitMB = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
          
          memoryStatsRef.current.current = currentMB;
          
          if (currentMB > memoryStatsRef.current.peak) {
            memoryStatsRef.current.peak = currentMB;
          }

          // Trigger cleanup if memory usage is high
          const memoryUsagePercent = (currentMB / limitMB) * 100;
          
          if (memoryUsagePercent > 80) {
            console.warn(`🚨 High memory usage: ${currentMB}MB (${memoryUsagePercent.toFixed(1)}%)`);
            forceCleanup();
          } else if (memoryUsagePercent > 60) {
            console.log(`⚠️ Memory usage: ${currentMB}MB (${memoryUsagePercent.toFixed(1)}%)`);
            scheduleCleanup();
          }

          // Log memory stats periodically
          if (Math.random() < 0.1) { // 10% chance to log
            console.log(`💾 Memory: ${currentMB}MB / ${limitMB}MB (Peak: ${memoryStatsRef.current.peak}MB)`);
          }
        }
      }, 5000); // Check every 5 seconds
    };

    startMemoryMonitoring();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enableOptimization, monitorMemory]);

  // Automatic cleanup on route changes
  useEffect(() => {
    const handleRouteChange = () => {
      scheduleCleanup();
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);
    
    // Listen for React Router navigation (if available)
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      handleRouteChange();
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.history.pushState = originalPushState;
    };
  }, []);

  // Cleanup scheduling
  const scheduleCleanup = useCallback(() => {
    // Use requestIdleCallback for non-critical cleanup
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        performCleanup();
      }, { timeout: 2000 });
    } else {
      setTimeout(performCleanup, 100);
    }
  }, []);

  // Force immediate cleanup
  const forceCleanup = useCallback(() => {
    performCleanup();
    
    // Suggest garbage collection (Chrome DevTools)
    if (window.gc && typeof window.gc === 'function') {
      window.gc();
      memoryStatsRef.current.collections++;
    }
  }, []);

  // Perform actual cleanup operations
  const performCleanup = useCallback(() => {
    console.log('🧹 Performing memory cleanup...');
    
    // Clear object pools
    imagePool.clear();
    canvasPool.clear();
    
    // Clear URL object cache
    clearURLObjectCache();
    
    // Clear detached DOM nodes
    clearDetachedNodes();
    
    // Clear event listeners on removed elements
    clearOrphanedEventListeners();
    
    // Run registered cleanup callbacks
    cleanupCallbacksRef.current.forEach(callback => {
      try {
        callback();
      } catch (error) {
        console.warn('Cleanup callback error:', error);
      }
    });
    
    console.log('✅ Memory cleanup complete');
  }, []);

  // Register cleanup callback
  const registerCleanupCallback = useCallback((callback) => {
    cleanupCallbacksRef.current.add(callback);
    
    return () => {
      cleanupCallbacksRef.current.delete(callback);
    };
  }, []);

  // Expose memory utilities globally
  useEffect(() => {
    if (!enableOptimization) return;

    window.memoryOptimizer = {
      getStats: () => memoryStatsRef.current,
      forceCleanup,
      scheduleCleanup,
      registerCleanupCallback,
      pools: {
        image: imagePool,
        canvas: canvasPool
      }
    };
  }, [enableOptimization, forceCleanup, scheduleCleanup, registerCleanupCallback]);

  return null;
};

// Clear URL.createObjectURL cache
const clearURLObjectCache = () => {
  // This is handled automatically by the browser, but we can help
  // by explicitly revoking any URLs we know about
  if (window.urlObjectCache) {
    Object.values(window.urlObjectCache).forEach(url => {
      try {
        URL.revokeObjectURL(url);
      } catch (e) {
        // Ignore errors for already revoked URLs
      }
    });
    window.urlObjectCache = {};
  }
};

// Clear detached DOM nodes
const clearDetachedNodes = () => {
  // Remove any detached nodes that might be lingering
  const elementsToCheck = document.querySelectorAll('[data-cleanup-candidate]');
  
  elementsToCheck.forEach(element => {
    if (!document.contains(element)) {
      element.remove();
    }
  });
  
  // Clear any cached DOM references
  if (window.domNodeCache) {
    window.domNodeCache.clear();
  }
};

// Clear orphaned event listeners
const clearOrphanedEventListeners = () => {
  // This is tricky to implement generically, but we can provide utilities
  // for components to clean up their own listeners
  
  if (window.eventListenerRegistry) {
    const registry = window.eventListenerRegistry;
    
    Object.keys(registry).forEach(key => {
      const { element, type, listener } = registry[key];
      
      if (!document.contains(element)) {
        element.removeEventListener(type, listener);
        delete registry[key];
      }
    });
  }
};

// Debounced function utility for reducing memory allocations
export const createDebouncedFunction = (func, delay) => {
  let timeoutId;
  let lastArgs;
  
  const debouncedFunc = (...args) => {
    lastArgs = args;
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      func.apply(null, lastArgs);
      timeoutId = null;
      lastArgs = null;
    }, delay);
  };
  
  debouncedFunc.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      lastArgs = null;
    }
  };
  
  return debouncedFunc;
};

// Throttled function utility
export const createThrottledFunction = (func, delay) => {
  let lastExec = 0;
  let timeoutId;
  
  return (...args) => {
    const elapsed = Date.now() - lastExec;
    
    if (elapsed >= delay) {
      func.apply(null, args);
      lastExec = Date.now();
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        func.apply(null, args);
        lastExec = Date.now();
      }, delay - elapsed);
    }
  };
};

// Efficient event delegation utility
export const createEventDelegator = (container, selector, eventType, handler) => {
  const delegatedHandler = (event) => {
    const target = event.target.closest(selector);
    if (target && container.contains(target)) {
      handler.call(target, event);
    }
  };
  
  container.addEventListener(eventType, delegatedHandler);
  
  return () => {
    container.removeEventListener(eventType, delegatedHandler);
  };
};

// Memory-efficient virtual scrolling utilities
export class VirtualScrollManager {
  constructor(itemHeight, containerHeight, buffer = 3) {
    this.itemHeight = itemHeight;
    this.containerHeight = containerHeight;
    this.buffer = buffer;
    this.scrollTop = 0;
  }
  
  getVisibleRange(totalItems) {
    const visibleCount = Math.ceil(this.containerHeight / this.itemHeight);
    const startIndex = Math.max(0, Math.floor(this.scrollTop / this.itemHeight) - this.buffer);
    const endIndex = Math.min(totalItems - 1, startIndex + visibleCount + this.buffer * 2);
    
    return { startIndex, endIndex, visibleCount };
  }
  
  updateScrollTop(scrollTop) {
    this.scrollTop = scrollTop;
  }
  
  getItemStyle(index) {
    return {
      position: 'absolute',
      top: index * this.itemHeight,
      height: this.itemHeight,
      width: '100%'
    };
  }
}

export { imagePool, canvasPool };
export default MemoryOptimizer;