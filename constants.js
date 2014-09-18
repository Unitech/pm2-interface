//
// Modifying these values break tests and can break
// pm2-interface intercommunication (because of ports)
//

var p    = require('path');
var HOME = process.env.PM2_HOME || process.env.HOME;
var DEFAULT_FILE_PATH = p.resolve(HOME, '.pm2');

module.exports = {
  DAEMON_BIND_HOST   : 'localhost',
  DAEMON_RPC_PORT    : p.join(DEFAULT_FILE_PATH, 'rpc.sock'), // RPC commands
  DAEMON_PUB_PORT    : p.join(DEFAULT_FILE_PATH, 'pub.sock'), // Realtime events
  SUCCESS_EXIT       : 0,
  ERROR_EXIT         : 1
};
