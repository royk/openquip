Openquip.ApplicationController = Ember.ObjectController.extend({
	signedIn: function() {
		return !!this.get("model");
	}.property("model"),
	iname: function() {
		return this.get("model.name");
	}.property("model.name"),
	dialogOpen: false,
	signInName: null,
	actions: {
		toggleSignIn: function() {
			this.toggleProperty("dialogOpen");
		},
		openDialog: function() {
			this.set("dialogOpen", true);
		},
		signIn: function() {
			var signInName = $.trim(this.get("signInName"));
			if (!signInName) return;
			this.set("dialogOpen", false);
			this.store.find("user", {name: signInName}).then((function(record) {
				if (!record.get("firstObject")) {
					var user = this.store.createRecord("user", {
						name: signInName
					});
					user.save().then((function(record) {
						this.set("model", record.get("firstObject"));
						$.cookie("openquip_session", record.get("name"));
					}).bind(this));
				} else {
					this.set("model", record.get("firstObject"));
					$.cookie("openquip_session", record.get("name"));
				}
			}).bind(this));
		},
		signOut: function() {

			$.removeCookie("openquip_session");
			this.set("model", null);
			this.set("dialogOpen", false);
		}
	}
});