Openquip.ProjectController = Ember.ObjectController.extend({
	needs: ["application"],
	canEdit: function() {
		var signedIn = this.get("controllers.application.signedIn");
		if (signedIn) {
			var currentUser = this.get("controllers.application.model");
			if (currentUser.get("name")===this.get("model.user.name")) {
				return true;
			}
		}
		return false;
	}.property("controllers.application.signedIn", "controllers.application.model"),
	actions: {
		delete: function() {
			this.get("model").destroyRecord();
		}
	}
});