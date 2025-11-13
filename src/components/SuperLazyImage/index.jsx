import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import ImageOptimizer from '../../utils/advancedImageOptimization';
import './superlazyimage.scss';

const SuperLazyImage = ({
  src,
  alt,
  className = '',
  style = {},
  width,
  height,
  priority = false,
  quality,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder,
  onLoad,
  onError,
  enableProgressiveLoading = true,
  enableNetworkOptimization = true,
  enableCDNOptimization = false,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [optimalFormat, setOptimalFormat] = useState(src);
  const [responsiveImages, setResponsiveImages] = useState(null);
  
  const imageRef = useRef(null);
  const startTimeRef = useRef(null);

  // Intersection Observer for lazy loading
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority, // Skip for priority images
    rootMargin: '50px', // Start loading 50px before entering viewport
  });

  // Initialize optimal format and responsive images
  useEffect(() => {
    const initializeImageOptimizations = async () => {
      try {
        // Get optimal format based on browser support
        const optimalSrc = await ImageOptimizer.getOptimalFormat(src);
        setOptimalFormat(optimalSrc);

        // Generate responsive images
        const responsive = ImageOptimizer.generateResponsiveImages(src);
        setResponsiveImages(responsive);

        // Preload if priority
        if (priority) {
          ImageOptimizer.imagePreloader.preload([optimalSrc], 'high');
        }
      } catch (error) {
        console.warn('Image optimization initialization failed:', error);
        setOptimalFormat(src);
      }
    };

    initializeImageOptimizations();
  }, [src, priority]);

  // Create progressive placeholder
  const createPlaceholder = useCallback(async () => {
    if (!enableProgressiveLoading || placeholder) return placeholder;

    try {
      // Generate a tiny blurred version
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 20;
      canvas.height = 15;

      // Create simple gradient placeholder
      const gradient = ctx.createLinearGradient(0, 0, 20, 15);
      gradient.addColorStop(0, '#f0f0f0');
      gradient.addColorStop(1, '#e0e0e0');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 20, 15);

      return canvas.toDataURL('image/jpeg', 0.1);
    } catch {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+';
    }
  }, [enableProgressiveLoading, placeholder]);

  // Get network-optimized image parameters
  const getNetworkOptimizedParams = useCallback(() => {
    if (!enableNetworkOptimization) {
      return { quality: quality || 0.8, maxSize: 1200 };
    }

    return ImageOptimizer.getNetworkAwareQuality();
  }, [enableNetworkOptimization, quality]);

  // Load image with advanced optimization
  const loadOptimizedImage = useCallback(async () => {
    if (hasError || isLoaded) return;

    try {
      startTimeRef.current = performance.now();
      
      // Get network-aware parameters
      const networkParams = getNetworkOptimizedParams();
      
      // Determine best image source
      let imageSrc = optimalFormat;
      
      if (enableCDNOptimization) {
        imageSrc = ImageOptimizer.generateCDNUrl(optimalFormat, {
          width: ImageOptimizer.getOptimalImageSize(),
          quality: networkParams.quality,
          format: 'auto'
        });
      }

      // Create progressive placeholder if needed
      if (!currentSrc) {
        const placeholderSrc = await createPlaceholder();
        setCurrentSrc(placeholderSrc);
      }

      // Load the actual image
      const img = new Image();
      
      // Progress simulation (since we can't get real progress)
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => Math.min(prev + Math.random() * 20, 90));
      }, 100);

      img.onload = () => {
        clearInterval(progressInterval);
        setLoadingProgress(100);
        
        setTimeout(() => {
          setCurrentSrc(imageSrc);
          setIsLoaded(true);
          
          const loadTime = performance.now() - startTimeRef.current;
          console.log(`🚀 Super fast image loaded in ${Math.round(loadTime)}ms`);
          
          onLoad && onLoad({ loadTime, src: imageSrc });
        }, 50); // Small delay for smooth transition
      };

      img.onerror = () => {
        clearInterval(progressInterval);
        setHasError(true);
        onError && onError();
      };

      img.src = imageSrc;

    } catch (error) {
      console.error('Advanced image loading failed:', error);
      setHasError(true);
      onError && onError();
    }
  }, [
    optimalFormat,
    hasError,
    isLoaded,
    createPlaceholder,
    currentSrc,
    getNetworkOptimizedParams,
    enableCDNOptimization,
    onLoad,
    onError
  ]);

  // Load image when in view or priority
  useEffect(() => {
    if ((inView || priority) && optimalFormat && !isLoaded && !hasError) {
      loadOptimizedImage();
    }
  }, [inView, priority, optimalFormat, isLoaded, hasError, loadOptimizedImage]);

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!responsiveImages) return '';
    
    const formats = ImageOptimizer.detectSupportedFormats();
    
    // Prefer AVIF, fallback to WebP, then original
    if (formats.avif) {
      return responsiveImages.avif.map(img => `${img.src} ${img.width}w`).join(', ');
    } else if (formats.webp) {
      return responsiveImages.webp.map(img => `${img.src} ${img.width}w`).join(', ');
    }
    
    return responsiveImages.fallback.map(img => `${img.src} ${img.width}w`).join(', ');
  };

  const imgClassName = `super-lazy-image ${className} ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''}`;
  
  const imgStyle = {
    ...style,
    width: width || style.width,
    height: height || style.height,
  };

  // Error state
  if (hasError) {
    return (
      <div className={`${imgClassName} error-state`} style={imgStyle}>
        <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none">
          <rect width="200" height="150" fill="#f5f5f5"/>
          <path d="M80 60l40 40m0-40l-40 40" stroke="#ccc" strokeWidth="2"/>
          <text x="100" y="120" textAnchor="middle" fill="#999" fontSize="12">
            Failed to load
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className="super-lazy-image-container">
      {/* Progressive loading with multiple format support */}
      <picture>
        {responsiveImages && (
          <>
            {/* AVIF source */}
            <source
              srcSet={responsiveImages.avif.map(img => `${img.src} ${img.width}w`).join(', ')}
              sizes={sizes}
              type="image/avif"
            />
            {/* WebP source */}
            <source
              srcSet={responsiveImages.webp.map(img => `${img.src} ${img.width}w`).join(', ')}
              sizes={sizes}
              type="image/webp"
            />
            {/* Fallback */}
            <source
              srcSet={responsiveImages.fallback.map(img => `${img.src} ${img.width}w`).join(', ')}
              sizes={sizes}
              type={`image/${src.split('.').pop()}`}
            />
          </>
        )}
        
        <img
          ref={imageRef}
          src={currentSrc}
          alt={alt}
          className={imgClassName}
          style={imgStyle}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
          {...props}
        />
      </picture>

      {/* Loading progress indicator */}
      {!isLoaded && !hasError && (
        <div className="super-lazy-image-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}

      {/* Blur overlay for progressive loading */}
      {!isLoaded && enableProgressiveLoading && currentSrc && (
        <div 
          className="super-lazy-image-blur"
          style={{
            backgroundImage: `url(${currentSrc})`,
            filter: `blur(${Math.max(10 - (loadingProgress / 10), 0)}px)`,
            opacity: isLoaded ? 0 : 1,
          }}
        />
      )}
    </div>
  );
};

export default SuperLazyImage;