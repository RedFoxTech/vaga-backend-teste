"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _columnbuilder = _interopRequireDefault(require("../../../schema/columnbuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ColumnBuilder_Redshift() {
  _columnbuilder.default.apply(this, arguments);
}

(0, _inherits.default)(ColumnBuilder_Redshift, _columnbuilder.default); // primary needs to set not null on non-preexisting columns, or fail

ColumnBuilder_Redshift.prototype.primary = function () {
  this.notNullable();
  return _columnbuilder.default.prototype.primary.apply(this, arguments);
};

ColumnBuilder_Redshift.prototype.index = function () {
  this.client.logger.warn('Redshift does not support the creation of indexes.');
  return this;
};

var _default = ColumnBuilder_Redshift;
exports.default = _default;
module.exports = exports.default;