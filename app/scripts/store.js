
Openquip.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:3000',
	createRecord: function(store, type, record) {
    	var url = this.buildURL(type.typeKey);
    	var data = store.serializerFor(type.typeKey).serialize(record);
    	var _data = {};
    	_data[type.typeKey+"s"] = data;
    	data = _data;
    	return this.ajax(url, "POST", { data: data });
	},

	updateRecord: function(store, type, record) {
	     var data = store.serializerFor(type.typeKey).serialize(record);
	     var id = record.get("id");
	     var _data = {};
    	_data[type.typeKey+"s"] = data;
    	data = _data;
	    return this.ajax(this.buildURL(type.typeKey, id), "PUT", { data: data });
	}
});

Openquip.ApplicationSerializer = DS.RESTSerializer.extend({
  serialize: function(record, options) {
    var json = this._super(record,options);
    return [json];
  },
  typeForRoot: function(root) {
    return this._super(root);
  }
});

