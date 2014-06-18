'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
     $scope.pera = localStorageService;

  });
