(function(){
    
    var app = angular.module('myAppModule',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider.when('/',{
            controller: 'customersController',
            templateUrl: 'app/views/customers.html'
        })
       .when('/vol',{
            controller: 'VolunteerController',
            templateUrl: 'app/views/volunteers.html'
        });
        
    });
    
    
}());