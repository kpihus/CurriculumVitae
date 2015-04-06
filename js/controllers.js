/**
 * Created by Kristjan on 1.04.2015.
 */
var cvControllers = angular.module('cvControllers',[]);

cvControllers.controller('PersonalController',['$scope','$http',
    function ($scope,$http) {
        $http.get('partials/personal.json').success(function (data) {
            $scope.personal = data;
        })
    }]);
cvControllers.controller('CareerController',['$scope','$http',
    function ($scope,$http) {
        $http.get('partials/career.json').success(function (data) {
            $scope.career=data;
        })
    }]);
cvControllers.controller('ProjectsController',['$scope','$http',
    function ($scope,$http) {
        $http.get('partials/projects.json').success(function (data) {
            $scope.projects = data;
        })
    }]);