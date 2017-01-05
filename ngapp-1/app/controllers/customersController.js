(function(){
    
    
    
    
     var customersController = function($scope, CustomersFactory){
        
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers =[];
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        function init(){
            $scope.customers = CustomersFactory.getCustomers();
            
        }
        
        init();     
        
    };
    
    customersController.$inject =['$scope','CustomersFactory'];
    angular.module('myAppModule').controller('customersController',customersController);
    
    
    
}());