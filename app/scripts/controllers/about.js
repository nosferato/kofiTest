'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
