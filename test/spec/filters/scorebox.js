'use strict';

describe('Filter: scoreBox', function () {

  // load the filter's module
  beforeEach(module('piratzyApp'));

  // initialize a new instance of the filter before each test
  var scoreBox;
  beforeEach(inject(function ($filter) {
    scoreBox = $filter('scoreBox');
  }));

  it('should return the input prefixed with "scoreBox filter:"', function () {
    var text = 'angularjs';
    expect(scoreBox(text)).toBe('scoreBox filter: ' + text);
  });

});
