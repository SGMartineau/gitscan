angular.module('gitScan').service('infoSvc', function ($q, $http) {

    this.getInfo = function (gitName) {
        var deferred = $q.defer();
        $http.get('https://api.github.com/users/' + gitName +'/repos').then(function(response) {
            deferred.resolve(response.data);
        });
        return deferred.promise;
    }
    
});