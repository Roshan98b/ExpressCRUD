// jshint esversion : 6

var mongoose = require('mongoose');

var ModelSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

var Model = mongoose.model('table1', ModelSchema);

module.exports = Model;

// Create
module.exports.addModel = (model, callback) => {
	model.save(callback);
};

// Read
module.exports.getModelByUsername = (username, callback) => {
	var query = {username : username}; 
	Model.findOne(query,callback);
};

// Update
module.exports.putModelByUsername = (username, model, callback) => {
	var query = {username : username};
	Model.update(query, model, callback);
};


// Delete
module.exports.deleteModelByUsername = (username, callback) => {
	var query = {username: username};
	Model.remove(query, callback);
};