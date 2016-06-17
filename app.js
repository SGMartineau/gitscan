angular.module('gitScan', ['ui.router'])


.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('landing', {
        url: '/',
        templateUrl: 'landing/landingTmpl.html',
        controller: 'landingCtrl'
    })
    
    .state('info', {
        url: '/info',
        templateUrl: 'info/infoTmpl.html',
        controller: 'infoCtrl',
        resolve: {
            information: function (infoSvc, landingSvc) {
                return infoSvc.getInfo(landingSvc.userName);
            }
        }
    });
    
    $urlRouterProvider.otherwise('/');

});