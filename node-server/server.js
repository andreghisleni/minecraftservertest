const ScriptServer = require('scriptserver');

// Configuration

const server = new ScriptServer({
  core: {
    jar: '../mc-server/server.jar',
    args: ['-Xmx2G'],
    dir: '../mc-server/',
    spawnOpts: {
      cwd: '../mc-server/'
    }
  },
  command: {
    prefix: '~'
  },
  essentials: {
    starterKit: {
      enabled: false
    }
  }
});

// Loading modules

server.use(require('scriptserver-command'))
// or
const ssEssentials = require('scriptserver-essentials');
server.use(ssEssentials);

// Start server

server.start();