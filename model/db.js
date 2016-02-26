var mongoose = require('mongoose');

mongoose.connect('mongodb://user:pass@ds059165.mongolab.com:59165/sdu');
var db = mongoose.connection;

// Var dump error
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
	console.log('connected');
});

module.exports = db;

// var data = {
// 	name:'PHP'
// }

// var insertCourse = new course(data);

// insertCourse.save(function(err,res){
// 	return true;
// });
