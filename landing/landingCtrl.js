angular.module('gitScan').controller('landingCtrl', function ($scope, landingSvc, $state) {
    
    $scope.toInfo = function () {
        landingSvc.userName = $scope.gitName;
        $state.go('info');
    }
    
});