Openquip.IndexController = Ember.ArrayController.extend({
	init: function() {
		this._super();
		var project = this.store.createRecord("project", {
			name: "This is a test project!"
		});
		this.addObject(project);
	}
});