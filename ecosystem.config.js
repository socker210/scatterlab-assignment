module.exports = {
  apps: [{
    name: 'scatterlab-assignment-client',
    script: 'server/client.js',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }, {
    name: 'scatterlab-assignment-api',
    script: 'server/api.js',
    env: {
      PORT: 3001
    },
    env_production: {
      PORT: 3001
    }
  }]
}