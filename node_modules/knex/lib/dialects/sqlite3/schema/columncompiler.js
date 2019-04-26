"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _columncompiler = _interopRequireDefault(require("../../../schema/columncompiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Column Compiler
// -------
function ColumnCompiler_SQLite3() {
  _columncompiler.default.apply(this, arguments);

  this.modifiers = ['nullable', 'defaultTo'];
}

(0, _inherits.default)(ColumnCompiler_SQLite3, _columncompiler.default); // Types
// -------

ColumnCompiler_SQLite3.prototype.double = ColumnCompiler_SQLite3.prototype.decimal = ColumnCompiler_SQLite3.prototype.floating = 'float';
ColumnCompiler_SQLite3.prototype.timestamp = 'datetime';

ColumnCompiler_SQLite3.prototype.enu = function (allowed) {
  return `text check (${this.formatter.wrap(this.args[0])} in ('${allowed.join("', '")}'))`;
};

ColumnCompiler_SQLite3.prototype.json = 'json';
var _default = ColumnCompiler_SQLite3;
exports.default = _default;
module.exports = exports.default;