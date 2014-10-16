var fortune = require('fortune');
var options = {
  db: 'demo_app'
};
server = fortune(options).
resource("project", {
	name: String,
	description: String,
	platform: 'platform',
	user: "user"
}).
resource("platform", {
	name: String
}).
resource("user", {
	name: String
})
exports = module.exports = server;