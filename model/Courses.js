var mongoose 	= require('mongoose');
var db 			= require('./db.js');
var Schema 		= mongoose.Schema;

var Courses = new Schema({
    name: String,
    description : String,
    start_date : Date
});

var CourseModel = mongoose.model('CourseModel', Courses);

module.exports = CourseModel;