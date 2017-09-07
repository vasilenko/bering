let assetPath;

const findAssetInManifest = (manifest, chunk, extension) => {
  const asset = manifest[chunk];

  if (Array.isArray(asset)) {
    return asset.find((el) => el.endsWith(extension));
  } else {
    return asset;
  }
};

if (__DEVELOPMENT__) {
  assetPath = (chunk, extension) => `assets/${chunk}.${extension}`;
} else {
  const fs = require('fs');
  const path = require('path');

  const manifestPath = path.join(process.cwd(), 'webpack-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  assetPath = (chunk, extension) => (
    `assets/${findAssetInManifest(manifest, chunk, extension)}`
  );
}

export default assetPath;
