"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _compiler = _interopRequireDefault(require("../../postgres/schema/compiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint max-len: 0 */
// Redshift Table Builder & Compiler
// -------
function SchemaCompiler_Redshift() {
  _compiler.default.apply(this, arguments);
}

(0, _inherits.default)(SchemaCompiler_Redshift, _compiler.default);
var _default = SchemaCompiler_Redshift;
exports.default = _default;
module.exports = exports.default;