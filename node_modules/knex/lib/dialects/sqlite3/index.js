"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bluebird = _interopRequireDefault(require("bluebird"));

var _inherits = _interopRequireDefault(require("inherits"));

var _lodash = require("lodash");

var _client = _interopRequireDefault(require("../../client"));

var _compiler = _interopRequireDefault(require("./query/compiler"));

var _compiler2 = _interopRequireDefault(require("./schema/compiler"));

var _columncompiler = _interopRequireDefault(require("./schema/columncompiler"));

var _tablecompiler = _interopRequireDefault(require("./schema/tablecompiler"));

var _ddl = _interopRequireDefault(require("./schema/ddl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SQLite3
// -------
function Client_SQLite3(config) {
  _client.default.call(this, config);

  if ((0, _lodash.isUndefined)(config.useNullAsDefault)) {
    this.logger.warn('sqlite does not support inserting default values. Set the ' + '`useNullAsDefault` flag to hide this warning. ' + '(see docs http://knexjs.org/#Builder-insert).');
  }
}

(0, _inherits.default)(Client_SQLite3, _client.default);
(0, _lodash.assign)(Client_SQLite3.prototype, {
  dialect: 'sqlite3',
  driverName: 'sqlite3',

  _driver() {
    return require('sqlite3');
  },

  schemaCompiler() {
    return new _compiler2.default(this, ...arguments);
  },

  queryCompiler() {
    return new _compiler.default(this, ...arguments);
  },

  columnCompiler() {
    return new _columncompiler.default(this, ...arguments);
  },

  tableCompiler() {
    return new _tablecompiler.default(this, ...arguments);
  },

  ddl(compiler, pragma, connection) {
    return new _ddl.default(this, compiler, pragma, connection);
  },

  wrapIdentifierImpl(value) {
    return value !== '*' ? `\`${value.replace(/`/g, '``')}\`` : '*';
  },

  // Get a raw connection from the database, returning a promise with the connection object.
  acquireRawConnection() {
    return new _bluebird.default((resolve, reject) => {
      const db = new this.driver.Database(this.connectionSettings.filename, err => {
        if (err) {
          return reject(err);
        }

        resolve(db);
      });
    });
  },

  // Used to explicitly close a connection, called internally by the pool when
  // a connection times out or the pool is shutdown.
  destroyRawConnection(connection) {
    return _bluebird.default.fromCallback(connection.close.bind(connection));
  },

  // Runs the query on the specified connection, providing the bindings and any
  // other necessary prep work.
  _query(connection, obj) {
    const method = obj.method;
    let callMethod;

    switch (method) {
      case 'insert':
      case 'update':
      case 'counter':
      case 'del':
        callMethod = 'run';
        break;

      default:
        callMethod = 'all';
    }

    return new _bluebird.default(function (resolver, rejecter) {
      if (!connection || !connection[callMethod]) {
        return rejecter(new Error(`Error calling ${callMethod} on connection.`));
      }

      connection[callMethod](obj.sql, obj.bindings, function (err, response) {
        if (err) return rejecter(err);
        obj.response = response; // We need the context here, as it contains
        // the "this.lastID" or "this.changes"

        obj.context = this;
        return resolver(obj);
      });
    });
  },

  _stream(connection, sql, stream) {
    const client = this;
    return new _bluebird.default(function (resolver, rejecter) {
      stream.on('error', rejecter);
      stream.on('end', resolver);
      return client._query(connection, sql).then(obj => obj.response).map(function (row) {
        stream.write(row);
      }).catch(function (err) {
        stream.emit('error', err);
      }).then(function () {
        stream.end();
      });
    });
  },

  // Ensures the response is returned in the same format as other clients.
  processResponse(obj, runner) {
    const ctx = obj.context;
    let response = obj.response;
    if (obj.output) return obj.output.call(runner, response);

    switch (obj.method) {
      case 'select':
      case 'pluck':
      case 'first':
        if (obj.method === 'pluck') response = (0, _lodash.map)(response, obj.pluck);
        return obj.method === 'first' ? response[0] : response;

      case 'insert':
        return [ctx.lastID];

      case 'del':
      case 'update':
      case 'counter':
        return ctx.changes;

      default:
        return response;
    }
  },

  poolDefaults() {
    return (0, _lodash.defaults)({
      min: 1,
      max: 1
    }, _client.default.prototype.poolDefaults.call(this));
  }

});
var _default = Client_SQLite3;
exports.default = _default;
module.exports = exports.default;