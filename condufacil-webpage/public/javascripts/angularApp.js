var app = angular.module('condufacilMain', ['ui.router', 'ui.bootstrap']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home',{
			url: '/inicio',
			templateUrl: 'partials/home.html',
			controller: 'MainCtrl'			
		})
		.state('pricing',{
			url: '/precios',
			templateUrl: 'partials/pricing.html',
			controller: 'PriceCtrl'			
		})
		.state('about',{
			url: '/nosotros',
			templateUrl: 'partials/about.html',
			controller: 'MainCtrl'			
		})
		.state('modal',{
			url: '/map-modal'
		});;
		
		$urlRouterProvider.otherwise('inicio');
	}]);

app.controller('MainCtrl', ['$scope', function($scope){

	//$scope.objects = objects.objects;

	
	$scope.incrementPriority = function(obj){
		obj.priority -= 1;
	};

	
}]);

app.controller('PriceCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

	 $scope.tabs = [{
            title: 'AUTOMOVILES',
            url: 'auto'
        }, {
            title: 'MOTOCICLETAS',
            url: 'moto'
        }];
        
    if ($stateParams.param){
    	$scope.currentTab = $stateParams.param;
    }else{
    	$scope.currentTab = "auto";
    }

    	

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

}]

        );


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
