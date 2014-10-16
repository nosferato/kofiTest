'use strict';

/**
 * @ngdoc service
 * @name piratzyApp.RollService
 * @description
 * # RollService
 * Factory in the piratzyApp.
 */
angular.module('piratzyApp')
  .factory('RollService', function ($http) {
    var self = this;
    function init(){
      self.type = 'roll',
      self.data = {};
    }

    function setType(type){
      self.type = type;
    }

    function setPlayType(playType){
      self.playType = playType;
    }
//refactor into one with submitScore
//make constants from the paths
    function roll(type, holding){
      delete self.data.scorebox;
      self.data.holding = holding;

      var path = '/play/123123/step';

      return $http.post(path, angular.toJson(self));

    }

    function submitScore(type, scorebox){
      delete self.data.holding;
      self.data.scorebox = scorebox;

      var path = '/play/123123/step';

      return $http.post(path, angular.toJson(self));

    }

    function rollSuccess (data) {

    }

    // Public API here
    return {
        init: init,
        roll: roll,
        submitScore: submitScore
    };
  });
