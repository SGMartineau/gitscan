angular.module('gitScan').service('infoSvc', function ($q, $http) {

    this.getInfoGithub = function (gitName) {
        var deferred = $q.defer();
        $http.get('https://api.github.com/users/' + gitName +'/repos').then(function(response) {
            localStorage['userName'] = gitName;
            localStorage['repos'] = JSON.stringify(response.data);
            deferred.resolve(response.data);
        });
        return deferred.promise;
    };

    this.getInfoLocal = function () {
      var deferred = $q.defer();
      deferred.resolve(JSON.parse(localStorage['repos']));
      return deferred.promise;
    };

    this.getInfo = function (gitName) {
      var deferred = $q.defer();
      if(gitName && localStorage['userName'] !== gitName){
        this.getInfoGithub(gitName).then(function(response){
          deferred.resolve(response);
        });
      } else{
        this.getInfoLocal().then(function(response){
          deferred.resolve(response);
        });
      }
      return deferred.promise;
    };

});