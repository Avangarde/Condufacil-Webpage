var app = angular.module('condufacilMain', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home',{
			url: '/inicio',
			templateUrl: 'partials/home.html',
			controller: 'MainCtrl'			
		});
		
		$urlRouterProvider.otherwise('inicio');
	}]);

app.controller('MainCtrl', ['$scope', function($scope){

	//$scope.objects = objects.objects;

	
	$scope.incrementPriority = function(obj){
		obj.priority -= 1;
	};

	
}]);


//Attention to the mapping, it can get confusing.

app.factory('tools', ['$http', function($http){
	var t = {
	};

	t.getIPLocal = function(){
		return $http.get('/api/ip').then(function(res){
			return res.data.ip;
		});
	};

	return t;
}]);
