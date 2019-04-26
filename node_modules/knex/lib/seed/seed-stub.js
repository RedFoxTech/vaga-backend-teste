"use strict";

var _bluebird = _interopRequireDefault(require("bluebird"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stub Seed:
// Used for now in browser builds, where filesystem access isn't
// available.
const StubSeed = module.exports = function () {};

const noSuchMethod = _bluebird.default.method(function () {
  throw new Error('Seeds are not supported');
});

StubSeed.prototype = {
  make: noSuchMethod,
  run: noSuchMethod
};