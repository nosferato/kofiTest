'use strict';

/**
 * @ngdoc directive
 * @name piratzyApp.directive:dices
 * @description
 * # dices
 */
angular.module('piratzyApp')
  .directive('dices', function () {
    return {
      templateUrl: 'views/dices.html',
      restrict: 'E',
      controller: 'DicesCtrl'
    };
  });
