angular.module('gitScan').service('infoSvc', function ($q, $http) {

    this.getInfo = function (gitName) {
        var deferred = $q.defer();
        $http.get('https://api.github.com/users/' + gitName +'/repos').then(function(response) {
            var largeInfo = response.data;
            console.log(largeInfo);
            var neededInfo = [];
            for (var i = 0; i < largeInfo.length; i++) {
                $http.get('https://api.github.com/repos/' + gitName + '/' + largeInfo[i].name + '/languages').then(function (answer) {
                    var oneRepo = answer.data;
                    oneRepo.name = largeInfo[i].name;
                    neededInfo.push(oneRepo);
                    if ( i === largeInfo.length - 1) {
                        deferred.resolve(neededInfo);
                    } 
                })
            }
            //deferred.resolve(response.data);
        });
        return deferred.promise;
    }
    
});