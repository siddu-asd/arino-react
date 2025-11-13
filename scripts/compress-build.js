
const fs = require('fs');
const path = require('path');
const { gzip } = require('zlib');
const { promisify } = require('util');

const gzipAsync = promisify(gzip);

const compressBuild = async () => {
  console.log('🗜️  Compressing build files...');
  
  const buildDir = path.join(__dirname, '../build');
  const staticDir = path.join(buildDir, 'static');
  
  const compressFile = async (filePath) => {
    try {
      const content = fs.readFileSync(filePath);
      const compressed = await gzipAsync(content);
      
      // Save compressed version
      fs.writeFileSync(filePath + '.gz', compressed);
      
      const originalSize = content.length;
      const compressedSize = compressed.length;
      const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
      
      console.log(`  ✅ ${path.basename(filePath)}: ${originalSize} → ${compressedSize} bytes (${savings}% smaller)`);
    } catch (error) {
      console.error(`  ❌ Failed to compress ${filePath}:`, error.message);
    }
  };
  
  // Compress JS files
  if (fs.existsSync(path.join(staticDir, 'js'))) {
    const jsFiles = fs.readdirSync(path.join(staticDir, 'js'))
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(staticDir, 'js', file));
    
    for (const file of jsFiles) {
      await compressFile(file);
    }
  }
  
  // Compress CSS files
  if (fs.existsSync(path.join(staticDir, 'css'))) {
    const cssFiles = fs.readdirSync(path.join(staticDir, 'css'))
      .filter(file => file.endsWith('.css'))
      .map(file => path.join(staticDir, 'css', file));
    
    for (const file of cssFiles) {
      await compressFile(file);
    }
  }
  
  // Create service worker with cache list
  const swPath = path.join(buildDir, 'sw.js');
  if (fs.existsSync(swPath)) {
    await compressFile(swPath);
  }
  
  console.log('✅ Build compression complete!');
};

compressBuild().catch(console.error);
