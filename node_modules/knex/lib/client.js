"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bluebird = _interopRequireDefault(require("bluebird"));

var _raw = _interopRequireDefault(require("./raw"));

var _ref = _interopRequireDefault(require("./ref"));

var _runner = _interopRequireDefault(require("./runner"));

var _formatter = _interopRequireDefault(require("./formatter"));

var _transaction = _interopRequireDefault(require("./transaction"));

var _builder = _interopRequireDefault(require("./query/builder"));

var _compiler = _interopRequireDefault(require("./query/compiler"));

var _builder2 = _interopRequireDefault(require("./schema/builder"));

var _compiler2 = _interopRequireDefault(require("./schema/compiler"));

var _tablebuilder = _interopRequireDefault(require("./schema/tablebuilder"));

var _tablecompiler = _interopRequireDefault(require("./schema/tablecompiler"));

var _columnbuilder = _interopRequireDefault(require("./schema/columnbuilder"));

var _columncompiler = _interopRequireDefault(require("./schema/columncompiler"));

var _tarn = require("tarn");

var _inherits = _interopRequireDefault(require("inherits"));

var _events = require("events");

var _string = require("./query/string");

var _lodash = require("lodash");

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = require('debug')('knex:client');

const debugQuery = require('debug')('knex:query');

const debugBindings = require('debug')('knex:bindings');

const _require = require('./constants'),
      POOL_CONFIG_OPTIONS = _require.POOL_CONFIG_OPTIONS; // The base client provides the general structure
// for a dialect specific client object.


function Client(config = {}) {
  this.config = config;
  this.logger = new _logger.default(config); //Client is a required field, so throw error if it's not supplied.
  //If 'this.dialect' is set, then this is a 'super()' call, in which case
  //'client' does not have to be set as it's already assigned on the client prototype.

  if (this.dialect && !this.config.client) {
    this.logger.warn(`Using 'this.dialect' to identify the client is deprecated and support for it will be removed in the future. Please use configuration option 'client' instead.`);
  }

  const dbClient = this.config.client || this.dialect;

  if (!dbClient) {
    throw new Error(`knex: Required configuration option 'client' is missing.`);
  }

  if (config.version) {
    this.version = config.version;
  }

  this.connectionSettings = (0, _lodash.cloneDeep)(config.connection || {});

  if (this.driverName && config.connection) {
    this.initializeDriver();

    if (!config.pool || config.pool && config.pool.max !== 0) {
      this.initializePool(config);
    }
  }

  this.valueForUndefined = this.raw('DEFAULT');

  if (config.useNullAsDefault) {
    this.valueForUndefined = null;
  }
}

(0, _inherits.default)(Client, _events.EventEmitter);
(0, _lodash.assign)(Client.prototype, {
  formatter(builder) {
    return new _formatter.default(this, builder);
  },

  queryBuilder() {
    return new _builder.default(this);
  },

  queryCompiler(builder) {
    return new _compiler.default(this, builder);
  },

  schemaBuilder() {
    return new _builder2.default(this);
  },

  schemaCompiler(builder) {
    return new _compiler2.default(this, builder);
  },

  tableBuilder(type, tableName, fn) {
    return new _tablebuilder.default(this, type, tableName, fn);
  },

  tableCompiler(tableBuilder) {
    return new _tablecompiler.default(this, tableBuilder);
  },

  columnBuilder(tableBuilder, type, args) {
    return new _columnbuilder.default(this, tableBuilder, type, args);
  },

  columnCompiler(tableBuilder, columnBuilder) {
    return new _columncompiler.default(this, tableBuilder, columnBuilder);
  },

  runner(builder) {
    return new _runner.default(this, builder);
  },

  transaction(container, config, outerTx) {
    return new _transaction.default(this, container, config, outerTx);
  },

  raw() {
    return new _raw.default(this).set(...arguments);
  },

  ref() {
    return new _ref.default(this, ...arguments);
  },

  _formatQuery(sql, bindings, timeZone) {
    bindings = bindings == null ? [] : [].concat(bindings);
    let index = 0;
    return sql.replace(/\\?\?/g, match => {
      if (match === '\\?') {
        return '?';
      }

      if (index === bindings.length) {
        return match;
      }

      const value = bindings[index++];
      return this._escapeBinding(value, {
        timeZone
      });
    });
  },

  _escapeBinding: (0, _string.makeEscape)({
    escapeString(str) {
      return `'${str.replace(/'/g, "''")}'`;
    }

  }),

  query(connection, obj) {
    if (typeof obj === 'string') obj = {
      sql: obj
    };
    obj.bindings = this.prepBindings(obj.bindings);
    const __knexUid = connection.__knexUid,
          __knexTxId = connection.__knexTxId;
    this.emit('query', (0, _lodash.assign)({
      __knexUid,
      __knexTxId
    }, obj));
    debugQuery(obj.sql, __knexTxId);
    debugBindings(obj.bindings, __knexTxId);
    obj.sql = this.positionBindings(obj.sql);
    return this._query(connection, obj).catch(err => {
      err.message = this._formatQuery(obj.sql, obj.bindings) + ' - ' + err.message;
      this.emit('query-error', err, (0, _lodash.assign)({
        __knexUid,
        __knexTxId
      }, obj));
      throw err;
    });
  },

  stream(connection, obj, stream, options) {
    if (typeof obj === 'string') obj = {
      sql: obj
    };
    obj.bindings = this.prepBindings(obj.bindings);
    const __knexUid = connection.__knexUid,
          __knexTxId = connection.__knexTxId;
    this.emit('query', (0, _lodash.assign)({
      __knexUid,
      __knexTxId
    }, obj));
    debugQuery(obj.sql, __knexTxId);
    debugBindings(obj.bindings, __knexTxId);
    obj.sql = this.positionBindings(obj.sql);
    return this._stream(connection, obj, stream, options);
  },

  prepBindings(bindings) {
    return bindings;
  },

  positionBindings(sql) {
    return sql;
  },

  postProcessResponse(resp, queryContext) {
    if (this.config.postProcessResponse) {
      return this.config.postProcessResponse(resp, queryContext);
    }

    return resp;
  },

  wrapIdentifier(value, queryContext) {
    return this.customWrapIdentifier(value, this.wrapIdentifierImpl, queryContext);
  },

  customWrapIdentifier(value, origImpl, queryContext) {
    if (this.config.wrapIdentifier) {
      return this.config.wrapIdentifier(value, origImpl, queryContext);
    }

    return origImpl(value);
  },

  wrapIdentifierImpl(value) {
    return value !== '*' ? `"${value.replace(/"/g, '""')}"` : '*';
  },

  initializeDriver() {
    try {
      this.driver = this._driver();
    } catch (e) {
      const message = `Knex: run\n$ npm install ${this.driverName} --save`;
      this.logger.error(`${message}\n${e.message}\n${e.stack}`);
      throw new Error(`${message}\n${e.message}`);
    }
  },

  poolDefaults() {
    return {
      min: 2,
      max: 10,
      propagateCreateError: true
    };
  },

  getPoolSettings(poolConfig) {
    poolConfig = (0, _lodash.defaults)({}, poolConfig, this.poolDefaults());
    POOL_CONFIG_OPTIONS.forEach(option => {
      if (option in poolConfig) {
        this.logger.warn([`Pool config option "${option}" is no longer supported.`, `See https://github.com/Vincit/tarn.js for possible pool config options.`].join(' '));
      }
    });
    const timeouts = [this.config.acquireConnectionTimeout || 60000, poolConfig.acquireTimeoutMillis].filter(timeout => timeout !== undefined); // acquire connection timeout can be set on config or config.pool
    // choose the smallest, positive timeout setting and set on poolConfig

    poolConfig.acquireTimeoutMillis = Math.min(...timeouts);
    return Object.assign(poolConfig, {
      create: () => {
        return this.acquireRawConnection().tap(connection => {
          connection.__knexUid = (0, _lodash.uniqueId)('__knexUid');

          if (poolConfig.afterCreate) {
            return _bluebird.default.promisify(poolConfig.afterCreate)(connection);
          }
        });
      },
      destroy: connection => {
        if (poolConfig.beforeDestroy) {
          this.logger.warn(`
            beforeDestroy is deprecated, please open an issue if you use this
            to discuss alternative apis
          `);
          poolConfig.beforeDestroy(connection, function () {});
        }

        if (connection !== void 0) {
          return this.destroyRawConnection(connection);
        }
      },
      validate: connection => {
        if (connection.__knex__disposed) {
          this.logger.warn(`Connection Error: ${connection.__knex__disposed}`);
          return false;
        }

        return this.validateConnection(connection);
      }
    });
  },

  initializePool(config = this.config) {
    if (this.pool) {
      this.logger.warn('The pool has already been initialized');
      return;
    }

    this.pool = new _tarn.Pool(this.getPoolSettings(config.pool));
  },

  validateConnection(connection) {
    return true;
  },

  // Acquire a connection from the pool.
  acquireConnection() {
    if (!this.pool) {
      return _bluebird.default.reject(new Error('Unable to acquire a connection'));
    }

    return _bluebird.default.try(() => this.pool.acquire().promise).tap(connection => {
      debug('acquired connection from pool: %s', connection.__knexUid);
    }).catch(_tarn.TimeoutError, () => {
      throw new _bluebird.default.TimeoutError('Knex: Timeout acquiring a connection. The pool is probably full. ' + 'Are you missing a .transacting(trx) call?');
    });
  },

  // Releases a connection back to the connection pool,
  // returning a promise resolved when the connection is released.
  releaseConnection(connection) {
    debug('releasing connection to pool: %s', connection.__knexUid);
    const didRelease = this.pool.release(connection);

    if (!didRelease) {
      debug('pool refused connection: %s', connection.__knexUid);
    }

    return _bluebird.default.resolve();
  },

  // Destroy the current connection pool for the client.
  destroy(callback) {
    const maybeDestroy = this.pool && this.pool.destroy();
    return _bluebird.default.resolve(maybeDestroy).then(() => {
      this.pool = void 0;

      if (typeof callback === 'function') {
        callback();
      }
    }).catch(err => {
      if (typeof callback === 'function') {
        callback(err);
      }

      return _bluebird.default.reject(err);
    });
  },

  // Return the database being used by this client.
  database() {
    return this.connectionSettings.database;
  },

  toString() {
    return '[object KnexClient]';
  },

  canCancelQuery: false,

  assertCanCancelQuery() {
    if (!this.canCancelQuery) {
      throw new Error('Query cancelling not supported for this dialect');
    }
  },

  cancelQuery() {
    throw new Error('Query cancelling not supported for this dialect');
  }

});
var _default = Client;
exports.default = _default;
module.exports = exports.default;