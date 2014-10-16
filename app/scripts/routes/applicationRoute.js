Openquip.ApplicationRoute = Ember.Route.extend({
	setupController: function (controller, model) {
		this._super(controller, model);
		var userName = $.cookie("openquip_session");
		if (userName) {
			this.store.find("user", {name: userName}).then((function(records) {
				controller.set("model", records.get("firstObject"));
			}).bind(this));
		}
	}

});

