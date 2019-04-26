"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transaction = _interopRequireDefault(require("../../transaction"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = require('debug')('knex:tx');

class Transaction_MySQL2 extends _transaction.default {}

(0, _lodash.assign)(Transaction_MySQL2.prototype, {
  query(conn, sql, status, value) {
    const t = this;
    const q = this.trxClient.query(conn, sql).catch(err => err.code === 'ER_SP_DOES_NOT_EXIST', () => {
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
var _default = Transaction_MySQL2;
exports.default = _default;
module.exports = exports.default;