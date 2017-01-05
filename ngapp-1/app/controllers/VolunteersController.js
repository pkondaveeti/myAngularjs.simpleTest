(function(){
    var VolunteerController = function($scope,volunteerFactory,$log){
        $scope.events = [];
        
        function init(){
//           volunteerFactory.getEvents
//         .success(function(data,status,headers,config){
//               $scope.events = data;
//           })
//         .error(function(data,status,headers,config){
//            $log.log(data.error+' '+ status);   
//           }); 
        volunteerFactory.getEvents()
            .then(function(response) {
                    $scope.events = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });   
            
        }
        init();
    };
    VolunteerController.$inject = ['$scope','volunteerFactory','$log'];
    
    angular.module('myAppModule').controller('VolunteerController',VolunteerController);
    
})();