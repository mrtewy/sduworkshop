var mongoose 	= require('mongoose');
var db 			= require('./db.js');
var Schema 		= mongoose.Schema;

var CoursesSchema = new Schema({
    name: String,
    description : String,
    start_date : Date
});

module.exports = mongoose.model('course', CoursesSchema);