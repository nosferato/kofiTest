'use strict';

/**
 * @ngdoc filter
 * @name piratzyApp.filter:scoreBox
 * @function
 * @description
 * # scoreBox
 * Filter in the piratzyApp.
 */
angular.module('piratzyApp')
  .filter('scoreBox', function () {
    return function (input) {
                                  //&nbsp;
      return input > -1 ? input : '\u00A0';
    };
  });
