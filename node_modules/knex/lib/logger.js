"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colorette = _interopRequireDefault(require("colorette"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console:0 */
function log(message, userFn, colorFn) {
  if (!(0, _lodash.isNil)(userFn) && !(0, _lodash.isFunction)(userFn)) {
    throw new TypeError('Extensions to knex logger must be functions!');
  }

  if ((0, _lodash.isFunction)(userFn)) {
    userFn(message);
    return;
  }

  console.log(colorFn ? colorFn(message) : message);
}

class Logger {
  constructor(config) {
    const _config$log = config.log,
          _config$log2 = _config$log === void 0 ? {} : _config$log,
          debug = _config$log2.debug,
          warn = _config$log2.warn,
          error = _config$log2.error,
          deprecate = _config$log2.deprecate;

    this._debug = debug;
    this._warn = warn;
    this._error = error;
    this._deprecate = deprecate;
  }

  debug(message) {
    log(message, this._debug);
  }

  warn(message) {
    log(message, this._warn, _colorette.default.yellow);
  }

  error(message) {
    log(message, this._error, _colorette.default.red);
  }

  deprecate(method, alternative) {
    const message = `${method} is deprecated, please use ${alternative}`;
    log(message, this._deprecate, _colorette.default.yellow);
  }

}

var _default = Logger;
exports.default = _default;
module.exports = exports.default;