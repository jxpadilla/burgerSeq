var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		// result from the orm call has changed name to 'data'
		orm.selectAll('burgers', function (data) {
			cb(data);
		});
	},
	updateOne: function (queryCondition, cb) {
		// result from 'orm' changed to data
		orm.updateOne('burgers', queryCondition, function (data) {
			cb();
		});
	},
	// replaceOne: function(queryCondition, cb) {
	// 											// same here; result from 'orm' changed to data
	// 	orm.replaceOne('burgers', queryCondition, function(data) {
	// 		cb();
	// 	});
	// },
	// deleteOne: function(queryCondition, cb) {
	// 											// same here; result from 'orm' changed to data
	// 	orm.deleteOne('burgers', queryCondition, function(data) {
	// 		cb();
	// 	});
	// },
	insertOne: function (cols, vals, cb) {
		//result from 'orm' changed to data
		orm.insertOne('burgers', cols, vals, function (data) {
			cb();
		});
	}
};

module.exports = burger;