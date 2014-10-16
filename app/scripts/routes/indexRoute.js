Openquip.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find("project");
	},
	renderTemplate: function() {
    	this._super(this, arguments);
  	}
});