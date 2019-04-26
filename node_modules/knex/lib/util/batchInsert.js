"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = batchInsert;

var _lodash = require("lodash");

var _bluebird = _interopRequireDefault(require("bluebird"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function batchInsert(client, tableName, batch, chunkSize = 1000) {
  let returning = void 0;
  let autoTransaction = true;
  let transaction = null;

  const getTransaction = () => new _bluebird.default((resolve, reject) => {
    if (transaction) {
      autoTransaction = false;
      return resolve(transaction);
    }

    autoTransaction = true;
    client.transaction(resolve).catch(reject);
  });

  const wrapper = (0, _lodash.assign)(new _bluebird.default((resolve, reject) => {
    const chunks = (0, _lodash.chunk)(batch, chunkSize);

    if (!(0, _lodash.isNumber)(chunkSize) || chunkSize < 1) {
      return reject(new TypeError(`Invalid chunkSize: ${chunkSize}`));
    }

    if (!(0, _lodash.isArray)(batch)) {
      return reject(new TypeError(`Invalid batch: Expected array, got ${typeof batch}`));
    } //Next tick to ensure wrapper functions are called if needed


    return _bluebird.default.delay(1).then(getTransaction).then(tr => {
      return _bluebird.default.mapSeries(chunks, items => tr(tableName).insert(items, returning)).then(result => {
        result = (0, _lodash.flatten)(result || []);

        if (autoTransaction) {
          //TODO: -- Oracle tr.commit() does not return a 'thenable' !? Ugly hack for now.
          return (tr.commit(result) || _bluebird.default.resolve()).then(() => result);
        }

        return result;
      }).catch(error => {
        if (autoTransaction) {
          return tr.rollback(error).then(() => _bluebird.default.reject(error));
        }

        return _bluebird.default.reject(error);
      });
    }).then(resolve).catch(reject);
  }), {
    returning(columns) {
      returning = columns;
      return this;
    },

    transacting(tr) {
      transaction = tr;
      return this;
    }

  });
  return wrapper;
}

module.exports = exports.default;