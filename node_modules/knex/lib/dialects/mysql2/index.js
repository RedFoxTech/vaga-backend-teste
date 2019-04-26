"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _mysql = _interopRequireDefault(require("../mysql"));

var _lodash = require("lodash");

var _transaction = _interopRequireDefault(require("./transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MySQL2 Client
// -------
// Always initialize with the "QueryBuilder" and "QueryCompiler"
// objects, which extend the base 'lib/query/builder' and
// 'lib/query/compiler', respectively.
function Client_MySQL2(config) {
  _mysql.default.call(this, config);
}

(0, _inherits.default)(Client_MySQL2, _mysql.default);
(0, _lodash.assign)(Client_MySQL2.prototype, {
  // The "dialect", for reference elsewhere.
  driverName: 'mysql2',

  transaction() {
    return new _transaction.default(this, ...arguments);
  },

  _driver() {
    return require('mysql2');
  },

  validateConnection(connection) {
    if (connection._fatalError) {
      return false;
    }

    return true;
  }

});
var _default = Client_MySQL2;
exports.default = _default;
module.exports = exports.default;