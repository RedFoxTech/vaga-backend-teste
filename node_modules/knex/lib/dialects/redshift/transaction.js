"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bluebird = _interopRequireDefault(require("bluebird"));

var _transaction = _interopRequireDefault(require("../../transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Redshift_Transaction extends _transaction.default {
  savepoint(conn) {
    this.trxClient.logger('Redshift does not support savepoints.');
    return _bluebird.default.resolve();
  }

  release(conn, value) {
    this.trxClient.logger('Redshift does not support savepoints.');
    return _bluebird.default.resolve();
  }

  rollbackTo(conn, error) {
    this.trxClient.logger('Redshift does not support savepoints.');
    return _bluebird.default.resolve();
  }

}

exports.default = Redshift_Transaction;
module.exports = exports.default;