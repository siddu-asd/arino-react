
const fs = require('fs');
const path = require('path');

const generatePreloadHints = () => {
  console.log('⚡ Generating preload hints...');
  
  const buildDir = path.join(__dirname, '../build');
  const indexPath = path.join(buildDir, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.log('Build directory not found, run build first');
    return;
  }
  
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Extract critical assets
  const jsFiles = [];
  const cssFiles = [];
  
  // Find JS files in build
  const staticJsDir = path.join(buildDir, 'static/js');
  if (fs.existsSync(staticJsDir)) {
    fs.readdirSync(staticJsDir)
      .filter(file => file.endsWith('.js') && !file.includes('.map'))
      .forEach(file => {
        jsFiles.push(`/static/js/${file}`);
      });
  }
  
  // Find CSS files in build
  const staticCssDir = path.join(buildDir, 'static/css');
  if (fs.existsSync(staticCssDir)) {
    fs.readdirSync(staticCssDir)
      .filter(file => file.endsWith('.css'))
      .forEach(file => {
        cssFiles.push(`/static/css/${file}`);
      });
  }
  
  // Generate preload hints
  let preloadHints = '';
  
  // Preload critical JS (first chunk only)
  if (jsFiles.length > 0) {
    preloadHints += `    <link rel="preload" href="${jsFiles[0]}" as="script">\n`;
  }
  
  // Preload critical CSS
  cssFiles.forEach(file => {
    preloadHints += `    <link rel="preload" href="${file}" as="style">\n`;
  });
  
  // Add DNS prefetch hints
  preloadHints += `    <link rel="dns-prefetch" href="//fonts.googleapis.com">\n`;
  preloadHints += `    <link rel="dns-prefetch" href="//fonts.gstatic.com">\n`;
  
  // Add preconnect hints
  preloadHints += `    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>\n`;
  preloadHints += `    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n`;
  
  // Insert preload hints into HTML
  html = html.replace('<head>', `<head>\n${preloadHints}`);
  
  fs.writeFileSync(indexPath, html);
  
  console.log(`✅ Added ${jsFiles.length + cssFiles.length + 4} preload/prefetch hints`);
};

generatePreloadHints();
