'use strict';

/**
 * @ngdoc overview
 * @name piratzyApp
 * @description
 * # toDoApp
 *
 * Main module of the application.
 */
angular
  .module('piratzyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/chooseGame', {
        templateUrl: 'views/chooseGame.html',
        controller: 'AboutCtrl'
      })
      .when('/highScore', {
        templateUrl: 'views/highScore.html',
        controller: 'HighScoreCtrl'
      })
      .when('/singleGame', {
        templateUrl: 'views/singlegame.html',
        controller: 'SingleGameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
