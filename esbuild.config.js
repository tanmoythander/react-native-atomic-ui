#!/usr/bin/env node
const esbuild = require('esbuild');

const baseConfig = {
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  target: 'es2020',
  sourcemap: true,
  splitting: true,
  treeShaking: true,
  platform: 'neutral',
  external: ['react', 'react-native'],
};

const entryPoints = ['src/index.ts', 'src/theme/index.tsx', 'src/components/index.ts'];

async function build() {
  try {
    console.log('🔨 Building ESM (mjs)...');
    await esbuild.build({
      ...baseConfig,
      entryPoints,
      outExtension: { '.js': '.mjs' },
    });

    console.log('🔨 Building CommonJS (cjs)...');
    await esbuild.build({
      ...baseConfig,
      entryPoints,
      format: 'cjs',
      splitting: false,
      outExtension: { '.js': '.js' },
    });

    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
