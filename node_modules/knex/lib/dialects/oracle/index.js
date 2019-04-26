"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Client_Oracle;

var _lodash = require("lodash");

var _inherits = _interopRequireDefault(require("inherits"));

var _client = _interopRequireDefault(require("../../client"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _string = require("../../query/string");

var _formatter = _interopRequireDefault(require("./formatter"));

var _transaction = _interopRequireDefault(require("./transaction"));

var _compiler = _interopRequireDefault(require("./query/compiler"));

var _compiler2 = _interopRequireDefault(require("./schema/compiler"));

var _columnbuilder = _interopRequireDefault(require("./schema/columnbuilder"));

var _columncompiler = _interopRequireDefault(require("./schema/columncompiler"));

var _tablecompiler = _interopRequireDefault(require("./schema/tablecompiler"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Oracle Client
// -------
// Always initialize with the "QueryBuilder" and "QueryCompiler"
// objects, which extend the base 'lib/query/builder' and
// 'lib/query/compiler', respectively.
function Client_Oracle(config) {
  _client.default.call(this, config);
}

(0, _inherits.default)(Client_Oracle, _client.default);
(0, _lodash.assign)(Client_Oracle.prototype, {
  dialect: 'oracle',
  driverName: 'oracle',

  _driver() {
    return require('oracle');
  },

  transaction() {
    return new _transaction.default(this, ...arguments);
  },

  formatter() {
    return new _formatter.default(this, ...arguments);
  },

  queryCompiler() {
    return new _compiler.default(this, ...arguments);
  },

  schemaCompiler() {
    return new _compiler2.default(this, ...arguments);
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

  prepBindings(bindings) {
    return (0, _lodash.map)(bindings, value => {
      // returning helper uses always ROWID as string
      if (value instanceof _utils.ReturningHelper && this.driver) {
        return new this.driver.OutParam(this.driver.OCCISTRING);
      } else if (typeof value === 'boolean') {
        return value ? 1 : 0;
      } else if (Buffer.isBuffer(value)) {
        return (0, _string.bufferToString)(value);
      }

      return value;
    });
  },

  // Get a raw connection, called by the `pool` whenever a new
  // connection needs to be added to the pool.
  acquireRawConnection() {
    return new _bluebird.default((resolver, rejecter) => {
      this.driver.connect(this.connectionSettings, (err, connection) => {
        if (err) return rejecter(err);

        _bluebird.default.promisifyAll(connection);

        if (this.connectionSettings.prefetchRowCount) {
          connection.setPrefetchRowCount(this.connectionSettings.prefetchRowCount);
        }

        resolver(connection);
      });
    });
  },

  // Used to explicitly close a connection, called internally by the pool
  // when a connection times out or the pool is shutdown.
  destroyRawConnection(connection) {
    return _bluebird.default.fromCallback(connection.close.bind(connection));
  },

  // Return the database for the Oracle client.
  database() {
    return this.connectionSettings.database;
  },

  // Position the bindings for the query.
  positionBindings(sql) {
    let questionCount = 0;
    return sql.replace(/\?/g, function () {
      questionCount += 1;
      return `:${questionCount}`;
    });
  },

  _stream(connection, obj, stream, options) {
    return new _bluebird.default(function (resolver, rejecter) {
      stream.on('error', err => {
        if (isConnectionError(err)) {
          connection.__knex__disposed = err;
        }

        rejecter(err);
      });
      stream.on('end', resolver);
      const queryStream = connection.queryStream(obj.sql, obj.bindings, options);
      queryStream.pipe(stream);
      queryStream.on('error', function (error) {
        rejecter(error);
        stream.emit('error', error);
      });
    });
  },

  // Runs the query on the specified connection, providing the bindings
  // and any other necessary prep work.
  _query(connection, obj) {
    if (!obj.sql) throw new Error('The query is empty');
    return connection.executeAsync(obj.sql, obj.bindings).then(function (response) {
      if (!obj.returning) return response;
      const rowIds = obj.outParams.map((v, i) => response[`returnParam${i ? i : ''}`]);
      return connection.executeAsync(obj.returningSql, rowIds);
    }).then(function (response) {
      obj.response = response;
      obj.rowsAffected = response.updateCount;
      return obj;
    }).catch(err => {
      if (isConnectionError(err)) {
        connection.__knex__disposed = err;
      }

      throw err;
    });
  },

  // Process the response as returned from the query.
  processResponse(obj, runner) {
    let response = obj.response;
    const method = obj.method;
    if (obj.output) return obj.output.call(runner, response);

    switch (method) {
      case 'select':
      case 'pluck':
      case 'first':
        if (obj.method === 'pluck') response = (0, _lodash.map)(response, obj.pluck);
        return obj.method === 'first' ? response[0] : response;

      case 'insert':
      case 'del':
      case 'update':
      case 'counter':
        if (obj.returning) {
          if (obj.returning.length > 1 || obj.returning[0] === '*') {
            return response;
          } // return an array with values if only one returning value was specified


          return (0, _lodash.flatten)((0, _lodash.map)(response, _lodash.values));
        }

        return obj.rowsAffected;

      default:
        return response;
    }
  }

}); // If the error is any of these, we'll assume we need to
// mark the connection as failed

const connectionErrors = ['ORA-12514', 'NJS-040', 'NJS-024', 'NJS-003', 'NJS-024'];

function isConnectionError(err) {
  return connectionErrors.some(prefix => err.message.indexOf(prefix) === 0);
}

module.exports = exports.default;