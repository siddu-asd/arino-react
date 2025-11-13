import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './lazyimage.scss';

const LazyImage = ({
  src,
  alt,
  className = '',
  style = {},
  width,
  height,
  placeholder,
  loading = 'lazy',
  priority = false,
  webpSrc,
  srcSet,
  sizes,
  onLoad,
  onError,
  quality = 75,
  blur = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const imageRef = useRef(null);

  // Intersection Observer for lazy loading
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    skip: priority, // Skip intersection observer if priority loading
  });

  // Generate WebP source if not provided
  const getWebpSrc = (originalSrc) => {
    if (webpSrc) return webpSrc;
    if (!originalSrc) return '';
    
    const lastDot = originalSrc.lastIndexOf('.');
    if (lastDot === -1) return originalSrc;
    
    return originalSrc.substring(0, lastDot) + '.webp';
  };

  // Generate responsive srcSet
  const generateSrcSet = (originalSrc) => {
    if (srcSet) return srcSet;
    if (!originalSrc) return '';

    const lastDot = originalSrc.lastIndexOf('.');
    if (lastDot === -1) return originalSrc;

    const base = originalSrc.substring(0, lastDot);
    const ext = originalSrc.substring(lastDot);

    return `
      ${base}_400w${ext} 400w,
      ${base}_800w${ext} 800w,
      ${base}_1200w${ext} 1200w,
      ${originalSrc} 1600w
    `.trim().replace(/\s+/g, ' ');
  };

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
      setImageSrc(src);
    }
  }, [priority, src]);

  // Load image when in view
  useEffect(() => {
    if ((inView || priority) && src && !isLoaded && !hasError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        onLoad && onLoad();
      };
      
      img.onerror = () => {
        setHasError(true);
        onError && onError();
      };
      
      img.src = src;
    }
  }, [inView, priority, src, isLoaded, hasError, onLoad, onError]);

  // Create placeholder with blur effect
  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    // Generate a simple gradient placeholder based on image dimensions
    const w = width || 400;
    const h = height || 300;
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f0f0f0"/>
            <stop offset="100%" style="stop-color:#e0e0e0"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
      </svg>
    `)}`;
  };

  const imgClassName = `lazy-image ${className} ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''}`;
  const imgStyle = {
    ...style,
    width: width || style.width,
    height: height || style.height,
  };

  // Error fallback
  if (hasError) {
    return (
      <div className={`${imgClassName} error-state`} style={imgStyle}>
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <div ref={ref} className="lazy-image-container">
      {/* Modern browsers with WebP support */}
      <picture>
        {webpSrc && (
          <source
            srcSet={getWebpSrc(src)}
            type="image/webp"
            sizes={sizes}
          />
        )}
        <img
          ref={imageRef}
          src={imageSrc || getPlaceholder()}
          alt={alt}
          className={imgClassName}
          style={imgStyle}
          loading={priority ? 'eager' : 'lazy'}
          srcSet={!priority && isLoaded ? generateSrcSet(src) : undefined}
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          width={width}
          height={height}
          decoding="async"
          {...props}
        />
      </picture>
      
      {/* Loading blur overlay */}
      {!isLoaded && blur && (
        <div 
          className="lazy-image-blur"
          style={{
            backgroundImage: `url(${getPlaceholder()})`,
            filter: 'blur(5px)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;