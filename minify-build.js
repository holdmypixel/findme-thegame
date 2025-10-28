import { minify } from 'terser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import { promisify } from 'util';

const gzip = promisify(zlib.gzip);
const brotli = promisify(zlib.brotliCompress);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function minifyFile(inputPath, outputPath) {
  const code = fs.readFileSync(inputPath, 'utf8');
  const result = await minify(code, {
    compress: {
      drop_console: true,
      drop_debugger: true,
      passes: 2
    },
    mangle: {
      toplevel: true
    },
    format: {
      comments: false
    }
  });
  
  fs.writeFileSync(outputPath, result.code);
  
  // Comprimir con gzip
  const gzipData = await gzip(result.code);
  fs.writeFileSync(outputPath + '.gz', gzipData);
  
  // Comprimir con brotli
  const brotliData = await brotli(result.code);
  fs.writeFileSync(outputPath + '.br', brotliData);
  
  const originalSize = (code.length / 1024).toFixed(2);
  const minifiedSize = (result.code.length / 1024).toFixed(2);
  const gzipSize = (gzipData.length / 1024).toFixed(2);
  const brotliSize = (brotliData.length / 1024).toFixed(2);
  
  console.log(`✓ ${path.basename(inputPath)}: ${originalSize}KB → ${minifiedSize}KB (gz: ${gzipSize}KB, br: ${brotliSize}KB)`);
}

async function minifyJsFiles() {
  const distJsDir = path.join(__dirname, 'dist', 'js');
  
  // Minify init.js
  await minifyFile(
    path.join(distJsDir, 'init.js'),
    path.join(distJsDir, 'init.js')
  );
  
  console.log('\n✨ All JS files minified and compressed successfully!');
}

minifyJsFiles().catch(console.error);
