'use strict';

/**
 * @ngdoc service
 * @name piratzyApp.NewGameService
 * @description
 * # NewGameService
 * Factory in the piratzyApp.
 */
angular.module('piratzyApp')
  .factory('NewGameService', function ($http,$location) {
    var game,
    playType,
    amount,
    currency,
    targetPoints;
    
    function reset(){
      this.game = "5yatzy";
      this.playType = 3;
      this.amount = 0.00001;
      this.currency = "BTC";
      this.targetPoints = -1;
    };

    function setGame(game){
      this.game = game;
    };

    function setPlayType(playType){
      this.playType = playType;
    };

    function setAmount(amount){
      this.amount = amount;
    };

    function setCurrency(currency){
      this.currency = currency;
    };

    function setTargetPoints(targetPoints){
      this.targetPoints = targetPoints;
    };

    function startGame(path){
      $http.post('/startGame', angular.toJson(this))
           .success(function(data){
              alert("starting Game success");
           })
           .error(function(){
              alert("starting Game ERROR...redirecting to:" + path);
              $location.path(path);

          })
    };
    // Public API here
    return {
        reset: reset,
        startGame: startGame,
        setGame: setGame,
        setPlayType: setPlayType,
        setAmount: setAmount,
        setCurrency: setCurrency,
        setTargetPoints: setTargetPoints
    };
  });
