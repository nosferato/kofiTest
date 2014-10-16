'use strict';

/**
 * @ngdoc service
 * @name piratzyApp.UserScore
 * @description
 * # UserScore
 * Factory in the piratzyApp.
 */

 //this is used for eventual mapping for JSON board received from REST call
angular.module('piratzyApp')
  .factory('UserScore', function () {

    function UserScore (userObject){
      this.id = userObject.userId;
      this.scoreBoxes = userObject.scoreBoxes;
      this.total = function(){
        var total= 0;
        for (var i = 0; i< this.scoreBoxes.length; i++)
        {
          total += this.scoreBoxes[i].score > -1 ? this.scoreBoxes[i].score : 0;
        }
        return total;
      };
    }

    // Public API here
    return UserScore;
  });
