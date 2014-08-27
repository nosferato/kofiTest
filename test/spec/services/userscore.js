'use strict';

describe('Service: UserScore', function () {

  // load the service's module
  beforeEach(module('piratzyApp'));

  // instantiate service
  var UserScore;
  beforeEach(inject(function (_UserScore_) {
    UserScore = _UserScore_;
  }));

  it('should do something', function () {
    expect(!!UserScore).toBe(true);
  });

});
