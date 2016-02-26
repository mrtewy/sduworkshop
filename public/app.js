var app = angular.module('sduApp', []);


app.controller('HomeCtrl', function($scope, $http) {
	$scope.name = 'Tew';
	var api = 'http://localhost:9000/api/allcourse';
	$http.get(api).then(function(res){
		$scope.allcourse = res.data;
	});
});