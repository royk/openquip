Openquip.ProjectEditController = Ember.ObjectController.extend({
	actions: {
		save: function() {
			this.get("model").save();
		}
	}
});