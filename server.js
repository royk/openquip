var fortune = require('fortune');
var options = {
  db: 'demo_app'
};
server = fortune(options).
resource("project", {
	name: String
});
exports = module.exports = server;