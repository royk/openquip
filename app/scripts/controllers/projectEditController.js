Openquip.ProjectEditController = Ember.ObjectController.extend({
	platforms: function() {
		return this.store.find("platform");
	}.property(),
	platformId: function() {
		return this.get("model.platform");
	}.property(),
	platformChanged: function() {
		this.send("save");
	}.observes("platformId"),
	actions: {
		save: function() {
			if (!this.get("platformId")) {
				this.get("model").set("platform", this.get("platforms.firstObject"));
			} else {
				this.get("model").set("platform", this.get("platformId"));
			}
			this.get("model").save();
		}
	}
});