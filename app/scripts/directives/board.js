'use strict';

/**
 * @ngdoc directive
 * @name piratzyApp.directive:board
 * @description
 * # board
 */
angular.module('piratzyApp')
  .directive('board', function () {
    return {
      replace: 'true',
      templateUrl: 'views/board.html',
      restrict: 'E',
      controller: 'BoardCtrl'
    };
  });
