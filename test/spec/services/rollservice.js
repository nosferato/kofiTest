'use strict';

describe('Service: RollService', function () {

  // load the service's module
  beforeEach(module('piratzyApp'));

  // instantiate service
  var RollService;
  beforeEach(inject(function (_RollService_) {
    RollService = _RollService_;
  }));

  it('should do something', function () {
    expect(!!RollService).toBe(true);
  });

});
