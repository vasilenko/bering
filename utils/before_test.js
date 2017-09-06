var path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));

switch (process.env.TARGET) {
  case 'development':
    global.__DEVELOPMENT__ = true;
    break;
  case 'staging':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__ = true;
    break;
  case 'production':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__ = false;
    global.__PRODUCTION__ = true;
    break;
}
