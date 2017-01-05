(function(){
    
    var volunteerFactory = function($http){
        var volunteer = {};
        var dataObj = {
                title: 'foo',
                body: 'bar',
                userId: 1
            };
        volunteer.getEvents = function(){
         return $http({
                 method: 'POST',
                 url: 'http://jsonplaceholder.typicode.com/posts',
                 data : dataObj,
                 headers: {'Contect-Type'  : 'application/x-www-form-urlencoded'}
                 });
        
//         return $http({
//                 method: 'GET',
//                 url: 'http://jsonplaceholder.typicode.com/posts',
//                // headers: {'Contect-Type'  : 'application/x-www-form-urlencoded'}
//                 });
            
            
        };
        return volunteer;
        
    };
    volunteerFactory.$inject=['$http'];
    angular.module('myAppModule').factory('volunteerFactory',volunteerFactory);
})();