'use strict';

/**
 * @ngdoc filter
 * @name piratzyApp.filter:scoreBox
 * @function
 * @description show valid number or empty space in scorebox
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
