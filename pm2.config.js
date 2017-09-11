module.exports = {
  apps: [
    {
      name: 'bering',
      script: './initializers/server/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
