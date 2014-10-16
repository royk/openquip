Openquip.IndexController = Ember.ArrayController.extend({
	itemController: "project",
	init: function() {
		this._super();
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
		}
	}
});