"use strict";

var _bluebird = _interopRequireDefault(require("bluebird"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Stub Migrate:
// Used for now in browser builds, where filesystem access isn't
// available.
const StubMigrate = module.exports = function () {};

const noSuchMethod = _bluebird.default.method(function () {
  throw new Error('Migrations are not supported');
});

StubMigrate.prototype = {
  make: noSuchMethod,
  latest: noSuchMethod,
  rollback: noSuchMethod,
  currentVersion: noSuchMethod
};