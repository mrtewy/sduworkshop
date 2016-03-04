var app = angular.module('sduApp', []);


app.controller('HomeCtrl', function($scope, $http) {
	$scope.name = 'Tew';
	var api = 'http://localhost:9000/api/allcourse';
	$http.get(api).then(function(res){
		$scope.allcourse = res.data;
	});

	var jira_project = 'https://kangaroos.atlassian.net/rest/api/2/project';

	var headers = {
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	};

	$http({
		method: "GET",
		headers: headers,
		url: jira_project,
	}).success(function(result) {
		console.log(result);
	}).error(function(data, status, headers, config) {
		console.log(data);
		console.log(status);
		console.log(headers);
		console.log(config);
	});
});