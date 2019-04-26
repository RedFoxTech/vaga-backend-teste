"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transaction = _interopRequireDefault(require("../../transaction"));

var _debug = _interopRequireDefault(require("debug"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = (0, _debug.default)('knex:tx');

class Transaction_MySQL extends _transaction.default {}

(0, _lodash.assign)(Transaction_MySQL.prototype, {
  query(conn, sql, status, value) {
    const t = this;
    const q = this.trxClient.query(conn, sql).catch(err => err.errno === 1305, () => {
      this.trxClient.logger.warn('Transaction was implicitly committed, do not mix transactions and ' + 'DDL with MySQL (#805)');
    }).catch(function (err) {
      status = 2;
      value = err;
      t._completed = true;
      debug('%s error running transaction query', t.txid);
    }).tap(function () {
      if (status === 1) t._resolver(value);

      if (status === 2) {
        if ((0, _lodash.isUndefined)(value)) {
          value = new Error(`Transaction rejected with non-error: ${value}`);
        }

        t._rejecter(value);
      }
    });

    if (status === 1 || status === 2) {
      t._completed = true;
    }

    return q;
  }

});
var _default = Transaction_MySQL;
exports.default = _default;
module.exports = exports.default;