Openquip.Project = DS.Model.extend({
	name: DS.attr("string"),
	description: DS.attr("string"),
	platform: DS.belongsTo("platform", {async:true})
});

