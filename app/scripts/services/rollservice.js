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

    function init(){
      this.type = "roll",
      this.data = {};
    };

    function setType(type){
      this.type = type;
    };

    function setPlayType(playType){
      this.playType = playType;
    };

    function roll(type, holding){
      delete this.data.scorebox;
      this.data.holding = holding;

      var path = "/play/123123/step";

      return $http.post(path, angular.toJson(this));

    };

    function submitScore(type, scorebox){
      delete this.data.holding;
      this.data.scorebox = scorebox;


      var path = "/play/123123/step";

      return $http.post(path, angular.toJson(this));

    };

    function rollSuccess (data) {

    };

    // Public API here
    return {
        init: init,
        roll: roll,
        submitScore: submitScore
    };
  });
