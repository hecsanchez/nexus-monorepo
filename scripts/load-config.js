const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load root .env file
const rootEnvPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(rootEnvPath)) {
  console.log('Creating .env from template...');
  fs.copyFileSync(
    path.join(process.cwd(), '.env.example'),
    rootEnvPath
  );
  console.log('Please review and update .env with your specific configuration');
}

// Load environment variables from .env
dotenv.config({ path: rootEnvPath });

// Export the config for other scripts to use
module.exports = {
  api: {
    port: process.env.PORT || 3000,
    database: {
      url: process.env.DATABASE_URL
    },
    auth: {
      jwtSecret: process.env.JWT_SECRET,
      jwtExpiration: process.env.JWT_EXPIRATION,
      jwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRATION
    },
    app: {
      nodeEnv: process.env.NODE_ENV || 'development',
      appUrl: process.env.APP_URL
    },
    cors: {
      origin: (process.env.CORS_ORIGIN || '').split(',').filter(Boolean)
    },
    logging: {
      level: process.env.LOG_LEVEL || 'info'
    }
  },
  admin: {
    app: {
      apiUrl: process.env.ADMIN_API_URL
    },
    vite: {
      port: process.env.ADMIN_PORT || 5174
    }
  },
  client: {
    app: {
      apiUrl: process.env.CLIENT_API_URL
    },
    vite: {
      port: process.env.CLIENT_PORT || 5173
    }
  },
  shared: {
    version: process.env.NEXUS_VERSION || '1.0.0',
    environment: process.env.NEXUS_ENV || 'development'
  }
}; 