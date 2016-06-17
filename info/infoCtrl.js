angular.module('gitScan').controller('infoCtrl', function ($scope, infoSvc, information) {

    $scope.repos = information;
    console.log($scope.repos);
    
});