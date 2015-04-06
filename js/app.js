/**
 * Created by Kristjan on 1.04.2015.
 */
var cv = angular.module('cv',[
    'ngRoute',
    'cvControllers',
    'cvServices'
]);
cv.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'partials/personal.html',
                controller: 'PersonalController'
            })
            .when('/career',{
                templateUrl: 'partials/career.html',
                controller: 'CareerController'
            })
            .when('/projects',{
                templateUrl: 'partials/projects.html',
                controller: 'ProjectsController'
            })
            .otherwise({
                redirectTo:'/'
            })
    }]);

