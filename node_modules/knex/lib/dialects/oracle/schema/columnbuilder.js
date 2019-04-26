"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _columnbuilder = _interopRequireDefault(require("../../../schema/columnbuilder"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColumnBuilder_Oracle() {
  _columnbuilder.default.apply(this, arguments);
}

(0, _inherits.default)(ColumnBuilder_Oracle, _columnbuilder.default); // checkIn added to the builder to allow the column compiler to change the
// order via the modifiers ("check" must be after "default")

ColumnBuilder_Oracle.prototype.checkIn = function () {
  this._modifiers.checkIn = (0, _lodash.toArray)(arguments);
  return this;
};

var _default = ColumnBuilder_Oracle;
exports.default = _default;
module.exports = exports.default;