"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// FunctionHelper
// -------
function FunctionHelper(client) {
  this.client = client;
}

FunctionHelper.prototype.now = function (precision) {
  if (typeof precision === 'number') {
    return this.client.raw(`CURRENT_TIMESTAMP(${precision})`);
  }

  return this.client.raw('CURRENT_TIMESTAMP');
};

var _default = FunctionHelper;
exports.default = _default;
module.exports = exports.default;