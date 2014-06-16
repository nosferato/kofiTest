'use strict';

/**
 * @ngdoc function
 * @name toDoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toDoApp
 */
angular.module('piratzy')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
