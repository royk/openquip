Openquip.Router.map(function () {
  this.resource("project", {path: "/project/:project_id"}, function() {
	this.route("edit");
  });
});
