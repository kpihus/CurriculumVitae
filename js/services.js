var cvServices = angular.module('cvServices',['ngResource']);
cvServices.factory('CvGet',['$resource',
    function ($resource) {
        return $resource('partials/:type.json',{},{
            query: {method:'GET',params:{type:'type'},isArray:true}
        })
    }]);