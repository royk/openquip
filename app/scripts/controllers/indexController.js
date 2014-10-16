Openquip.IndexController = Ember.ArrayController.extend({
	itemController: "project",
	needs: ["application"],
	signedIn: function() {
		return this.get("controllers.application.signedIn");
	}.property("controllers.application.signedIn"),
	init: function() {
		this._super();
		// this.store.createRecord("platform", {name: "Web"}).save();
		// this.store.createRecord("platform", {name: "Mobile"}).save();
		// this.store.createRecord("platform", {name: "Desktop"}).save();
		Ember.run.scheduleOnce('afterRender', this, function() {
			if (this.get("content.length")===0) {
				this.send("initDefaultProject");
			}
		});
		
		
	},
	onModel: function() {
		console.log(this.get("content.length"));
	}.property("length"),
	actions: {
		initDefaultProject: function() {
			var project = this.store.createRecord("project", {
				name: "This is a test project!"
			});
			this.addObject(project);
			project.save();
		},
		createProject: function() {
			if (!this.get("signedIn")) {
				this.get("controllers.application").send("openDialog");
			} else {
				var project = this.store.createRecord("project", {
					user: this.get("controllers.application.model"),
					name: "",
					description: ""
				});
				project.save().then((function(record) {
					this.transitionToRoute("project.edit", record);
				}).bind(this));
			}

		}
	}
});