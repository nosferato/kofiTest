'use strict';

/**
 * @ngdoc function
 * @name piratzy.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the piratzy
 */
angular.module('piratzy')
  .controller('HighScoreCtrl', function ($scope) {

    $scope.highScores = [
    { name: 'Harry KrisKa', score: 10000000},
    { name: 'Dirty Sink', score: 87999},
    { name: 'Game OVer', score: 7891},
    { name: 'Dice Slice', score: 78899},
    { name: 'Dicer', score: 8789887}
    ];
  });
