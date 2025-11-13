import { useEffect, useRef, useCallback } from 'react';

// Core Web Vitals thresholds
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay  
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  FCP: { good: 1800, poor: 3000 }  // First Contentful Paint
};

const PerformanceMonitor = ({ enableLogging = true, enableAnalytics = false }) => {
  const metricsRef = useRef({});
  const observerRef = useRef(null);

  // Define logging functions using useCallback
  const logMetric = useCallback((name, value, thresholds) => {
    if (!enableLogging) return;
    
    const status = value <= thresholds.good ? 'good' : 
                  value <= thresholds.poor ? 'needs improvement' : 'poor';
    
    const color = status === 'good' ? 'green' : 
                  status === 'needs improvement' ? 'orange' : 'red';
    
    console.log(
      `%c${name}: ${Math.round(value)}ms - ${status}`,
      `color: ${color}; font-weight: bold`
    );
  }, [enableLogging]);

  const logImageLoadTime = useCallback((entry) => {
    if (!enableLogging) return;
    
    const loadTime = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    const fileName = entry.name.split('/').pop();
    
    console.log(
      `%cImage: ${fileName} - ${Math.round(loadTime)}ms (${Math.round(size/1024)}KB)`,
      loadTime > 1000 ? 'color: red' : loadTime > 500 ? 'color: orange' : 'color: green'
    );
  }, [enableLogging]);

  const sendToAnalytics = useCallback((metricName, metric) => {
    if (!enableAnalytics) return;
    
    // Example analytics integration
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        metric_name: metricName,
        metric_value: Math.round(metric.value),
        metric_rating: metric.rating
      });
    }
  }, [enableAnalytics]);

  useEffect(() => {
    // Monitor Core Web Vitals
    const initWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        // Largest Contentful Paint
        getLCP((metric) => {
          metricsRef.current.lcp = metric;
          logMetric('LCP', metric.value, THRESHOLDS.LCP);
          sendToAnalytics('LCP', metric);
        });

        // First Input Delay
        getFID((metric) => {
          metricsRef.current.fid = metric;
          logMetric('FID', metric.value, THRESHOLDS.FID);
          sendToAnalytics('FID', metric);
        });

        // Cumulative Layout Shift
        getCLS((metric) => {
          metricsRef.current.cls = metric;
          logMetric('CLS', metric.value, THRESHOLDS.CLS);
          sendToAnalytics('CLS', metric);
        });

        // First Contentful Paint
        getFCP((metric) => {
          metricsRef.current.fcp = metric;
          logMetric('FCP', metric.value, THRESHOLDS.FCP);
          sendToAnalytics('FCP', metric);
        });

        // Time to First Byte
        getTTFB((metric) => {
          metricsRef.current.ttfb = metric;
          logMetric('TTFB', metric.value, THRESHOLDS.TTFB);
          sendToAnalytics('TTFB', metric);
        });

      } catch (error) {
        console.warn('Web Vitals not available:', error);
      }
    };

    // Monitor resource loading performance
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name.includes('.jpg') || entry.name.includes('.png') || 
                entry.name.includes('.jpeg') || entry.name.includes('.webp')) {
              logImageLoadTime(entry);
            }
          });
        });

        try {
          resourceObserver.observe({ type: 'resource', buffered: true });
          observerRef.current = resourceObserver;
        } catch (error) {
          console.warn('Resource monitoring not supported');
        }
      }
    };

    // Initialize monitoring
    initWebVitals();
    monitorResources();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [logMetric, logImageLoadTime, sendToAnalytics]);

  // Expose metrics for debugging
  useEffect(() => {
    if (enableLogging) {
      window.getPerformanceMetrics = () => {
        console.table(metricsRef.current);
        return metricsRef.current;
      };
    }
  }, [enableLogging]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;