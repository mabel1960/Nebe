var arkakApp = angular.module('arkakApp', [], function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

arkakApp.controller("ReportsCtrl", function($scope, $http){
	$scope.reports = [];

	$http.get('/data/reports/reports.json')
		.success(function(data){
			$scope.reports = data.reports;
		})

	 $scope.format_date = function(the_date){
	 	return new Date(the_date).getTime();
	 }

});

arkakApp.controller("InvestigationsCtrl", function($scope, $http){
	$scope.investigations = [];

	$http.get('/data/investigations/investigations.json')
		.success(function(data){
			$scope.investigations = data.investigations;
		})

});