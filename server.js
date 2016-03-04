var express  		= require('express');
var app 			= express();
var mongoose 		= require('mongoose');
var bodyParser  	= require('body-parser');
var cors 			= require('cors');
var db 				= require('./model/db.js');
var Course 		  	= require('./model/Courses.js');
var router 			= express.Router();

// Initiazation

// parse application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use('/libs', express.static(__dirname + '/public/bower_components'));

// set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Middleware
app.use(cors());


// ROUTER
router.get("/", function(req, res){
	res.send("Welcome API SDU");
});

router.get("/course/:id", function(req, res){
	var req_id = req.params.id; // get parameter from FORM
	Course.findById(req_id, function(err, data){
		var response = {
			course: data
		}
		res.json(response);
	});
});

/*
* Get all data
*/
router.get("/allcourse", function(req, res){
	Course.find(function(err, data){
		res.json(data);
	});
});

router.post("/create", function(req, res) {
	var CourseName = req.body.name;
	var CourseDesc = req.body.description;
	var CourseStart = req.body.start_date;
	var data = {
		name: CourseName,
		description: CourseDesc,
		start_date: CourseStart
	}
	var Courses = new CourseModel(data);
	Courses.save(function(err, data){
		if(!err) {
			res.json({
				course_id: data._id,
				status: 'success',
			});
		}
	});
});

app.use("/api", router); // Change index of root node


app.listen(9000, function(){
	console.log("run  server!");
});
