"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _postgres = _interopRequireDefault(require("../postgres"));

var _lodash = require("lodash");

var _transaction = _interopRequireDefault(require("./transaction"));

var _compiler = _interopRequireDefault(require("./query/compiler"));

var _columnbuilder = _interopRequireDefault(require("./schema/columnbuilder"));

var _columncompiler = _interopRequireDefault(require("./schema/columncompiler"));

var _tablecompiler = _interopRequireDefault(require("./schema/tablecompiler"));

var _compiler2 = _interopRequireDefault(require("./schema/compiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redshift
// -------
function Client_Redshift(config) {
  _postgres.default.apply(this, arguments);
}

(0, _inherits.default)(Client_Redshift, _postgres.default);
(0, _lodash.assign)(Client_Redshift.prototype, {
  transaction() {
    return new _transaction.default(this, ...arguments);
  },

  queryCompiler() {
    return new _compiler.default(this, ...arguments);
  },

  columnBuilder() {
    return new _columnbuilder.default(this, ...arguments);
  },

  columnCompiler() {
    return new _columncompiler.default(this, ...arguments);
  },

  tableCompiler() {
    return new _tablecompiler.default(this, ...arguments);
  },

  schemaCompiler() {
    return new _compiler2.default(this, ...arguments);
  },

  dialect: 'redshift',
  driverName: 'pg-redshift',

  _driver() {
    return require('pg');
  },

  // Ensures the response is returned in the same format as other clients.
  processResponse(obj, runner) {
    const resp = obj.response;
    if (obj.output) return obj.output.call(runner, resp);
    if (obj.method === 'raw') return resp;

    if (resp.command === 'SELECT') {
      if (obj.method === 'first') return resp.rows[0];
      if (obj.method === 'pluck') return (0, _lodash.map)(resp.rows, obj.pluck);
      return resp.rows;
    }

    if (resp.command === 'INSERT' || resp.command === 'UPDATE' || resp.command === 'DELETE') {
      return resp.rowCount;
    }

    return resp;
  }

});
var _default = Client_Redshift;
exports.default = _default;
module.exports = exports.default;