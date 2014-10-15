var fortune = require('fortune');
var options = {
  db: 'demo_app'
};
server = fortune(options);
exports = module.exports = server;