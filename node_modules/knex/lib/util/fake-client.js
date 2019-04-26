"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatter = _interopRequireDefault(require("../formatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fakeClient = {
  formatter(builder) {
    return new _formatter.default(fakeClient, builder);
  }

};
var _default = fakeClient;
exports.default = _default;
module.exports = exports.default;