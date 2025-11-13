import React, { useEffect } from 'react';

// Critical CSS for above-the-fold content
const criticalCSS = `
/* Critical styles for immediate render */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Critical layout styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Header critical styles */
.cs-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  height: 70px;
}

/* Hero section critical styles */
.cs-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.cs-hero_text {
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.cs-hero_title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Button critical styles */
.cs-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: transform 0.2s ease;
  border: none;
  cursor: pointer;
}

.cs-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* Loading skeleton critical styles */
.cs-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Critical responsive utilities */
@media (max-width: 768px) {
  .cs-hero {
    background-attachment: scroll;
  }
  
  .cs-hero_title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 10px;
  }
}

/* Critical spacing utilities */
.cs-spacing-lg { margin: 100px 0; }
.cs-spacing-md { margin: 60px 0; }
.cs-spacing-sm { margin: 30px 0; }

/* Critical display utilities */
.cs-d-none { display: none !important; }
.cs-d-block { display: block !important; }
.cs-d-flex { display: flex !important; }

/* Critical text utilities */
.cs-text-center { text-align: center !important; }
.cs-text-left { text-align: left !important; }
.cs-text-right { text-align: right !important; }

/* Critical width utilities */
.cs-w-100 { width: 100% !important; }
.cs-h-100 { height: 100% !important; }

/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Reduce layout shift */
.lazy-image-container {
  position: relative;
  overflow: hidden;
}

.lazy-image {
  transition: opacity 0.3s ease;
}

/* Font loading optimization */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Inter Regular'), local('Inter-Regular');
}

/* Critical animation performance */
.cs-fadeIn {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

const CriticalCSS = ({ injectInline = true }) => {
  useEffect(() => {
    if (injectInline && typeof document !== 'undefined') {
      // Inject critical CSS inline to prevent render blocking
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      style.setAttribute('data-critical-css', 'true');
      
      // Insert at the beginning of head for highest priority
      document.head.insertBefore(style, document.head.firstChild);
      
      // Preload non-critical CSS
      const nonCriticalCSS = [
        '/static/css/main.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ];
      
      nonCriticalCSS.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        link.onload = function() {
          this.onload = null;
          this.rel = 'stylesheet';
        };
        document.head.appendChild(link);
        
        // Fallback for browsers that don't support preload
        const noscript = document.createElement('noscript');
        const fallbackLink = document.createElement('link');
        fallbackLink.rel = 'stylesheet';
        fallbackLink.href = href;
        noscript.appendChild(fallbackLink);
        document.head.appendChild(noscript);
      });
    }
  }, [injectInline]);

  // Also return as component for server-side rendering
  if (!injectInline) {
    return (
      <style 
        dangerouslySetInnerHTML={{ __html: criticalCSS }}
        data-critical-css="true"
      />
    );
  }

  return null;
};

// Utility to extract critical CSS based on viewport
export const extractCriticalCSS = (html) => {
  // This would typically be done at build time
  // For now, we return our predefined critical CSS
  return criticalCSS;
};

// Utility to defer non-critical CSS
export const deferNonCriticalCSS = () => {
  const links = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Create preload link
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'style';
    preloadLink.href = href;
    preloadLink.onload = () => {
      preloadLink.onload = null;
      preloadLink.rel = 'stylesheet';
    };
    
    // Replace original link
    link.parentNode.insertBefore(preloadLink, link);
    link.parentNode.removeChild(link);
  });
};

export default CriticalCSS;