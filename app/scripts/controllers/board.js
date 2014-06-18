'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('BoardCtrl', function ($scope) {

  });


var 5diceGame = [

{name: "Aces", validNumbers: 1, min: 1, max: 5, section: "upper"},
{name: "Twos", validNumbers: 2, min: 1, max: 5, section: "upper"},
{name: "Threes", validNumbers: 3, min: 1, max: 5, section: "upper"},
{name: "Fours", validNumbers: 4, min: 1, max: 5, section: "upper"},
{name: "Fives", validNumbers: 5, min: 1, max: 5, section: "upper"},
{name: "Total score", validNumbers: "total", section: "upper"},
{name: "Bonus", validNumbers: "bonus", bonusLine: 63, bonusPoints: 35, section: "upper"},
{name: "Total", validNumbers: "totalUpper", section: "upper"},


{name: "3 of a kind", validNumbers: "*", min: 3, max: 3, section: "lower"},

];