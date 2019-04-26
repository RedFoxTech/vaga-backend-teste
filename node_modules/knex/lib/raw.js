"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var helpers = _interopRequireWildcard(require("./helpers"));

var _events = require("events");

var _debug = _interopRequireDefault(require("debug"));

var _lodash = require("lodash");

var _saveAsyncStack = _interopRequireDefault(require("./util/save-async-stack"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Raw
// -------
const debugBindings = (0, _debug.default)('knex:bindings');

function Raw(client) {
  this.client = client;
  this.sql = '';
  this.bindings = []; // Todo: Deprecate

  this._wrappedBefore = undefined;
  this._wrappedAfter = undefined;

  if (client && client.config) {
    this._debug = client.config.debug;
    (0, _saveAsyncStack.default)(this, 4);
  }
}

(0, _inherits.default)(Raw, _events.EventEmitter);
(0, _lodash.assign)(Raw.prototype, {
  set(sql, bindings) {
    this.sql = sql;
    this.bindings = (0, _lodash.isObject)(bindings) && !bindings.toSQL || (0, _lodash.isUndefined)(bindings) ? bindings : [bindings];
    return this;
  },

  timeout(ms, {
    cancel
  } = {}) {
    if ((0, _lodash.isNumber)(ms) && ms > 0) {
      this._timeout = ms;

      if (cancel) {
        this.client.assertCanCancelQuery();
        this._cancelOnTimeout = true;
      }
    }

    return this;
  },

  // Wraps the current sql with `before` and `after`.
  wrap(before, after) {
    this._wrappedBefore = before;
    this._wrappedAfter = after;
    return this;
  },

  // Calls `toString` on the Knex object.
  toString() {
    return this.toQuery();
  },

  // Returns the raw sql for the query.
  toSQL(method, tz) {
    let obj;
    const formatter = this.client.formatter(this);

    if (Array.isArray(this.bindings)) {
      obj = replaceRawArrBindings(this, formatter);
    } else if (this.bindings && (0, _lodash.isPlainObject)(this.bindings)) {
      obj = replaceKeyBindings(this, formatter);
    } else {
      obj = {
        method: 'raw',
        sql: this.sql,
        bindings: (0, _lodash.isUndefined)(this.bindings) ? [] : [this.bindings]
      };
    }

    if (this._wrappedBefore) {
      obj.sql = this._wrappedBefore + obj.sql;
    }

    if (this._wrappedAfter) {
      obj.sql = obj.sql + this._wrappedAfter;
    }

    obj.options = (0, _lodash.reduce)(this._options, _lodash.assign, {});

    if (this._timeout) {
      obj.timeout = this._timeout;

      if (this._cancelOnTimeout) {
        obj.cancelOnTimeout = this._cancelOnTimeout;
      }
    }

    obj.bindings = obj.bindings || [];

    if (helpers.containsUndefined(obj.bindings)) {
      debugBindings(obj.bindings);
      throw new Error(`Undefined binding(s) detected when compiling RAW query: ` + obj.sql);
    }

    obj.__knexQueryUid = _uuid.default.v4();
    return obj;
  }

});

function replaceRawArrBindings(raw, formatter) {
  const expectedBindings = raw.bindings.length;
  const values = raw.bindings;
  let index = 0;
  const sql = raw.sql.replace(/\\?\?\??/g, function (match) {
    if (match === '\\?') {
      return match;
    }

    const value = values[index++];

    if (match === '??') {
      return formatter.columnize(value);
    }

    return formatter.parameter(value);
  });

  if (expectedBindings !== index) {
    throw new Error(`Expected ${expectedBindings} bindings, saw ${index}`);
  }

  return {
    method: 'raw',
    sql,
    bindings: formatter.bindings
  };
}

function replaceKeyBindings(raw, formatter) {
  const values = raw.bindings;
  const regex = /\\?(:(\w+):(?=::)|:(\w+):(?!:)|:(\w+))/g;
  const sql = raw.sql.replace(regex, function (match, p1, p2, p3, p4) {
    if (match !== p1) {
      return p1;
    }

    const part = p2 || p3 || p4;
    const key = match.trim();
    const isIdentifier = key[key.length - 1] === ':';
    const value = values[part];

    if (value === undefined) {
      if (values.hasOwnProperty(part)) {
        formatter.bindings.push(value);
      }

      return match;
    }

    if (isIdentifier) {
      return match.replace(p1, formatter.columnize(value));
    }

    return match.replace(p1, formatter.parameter(value));
  });
  return {
    method: 'raw',
    sql,
    bindings: formatter.bindings
  };
} // Allow the `Raw` object to be utilized with full access to the relevant
// promise API.


require('./interface')(Raw);

helpers.addQueryContext(Raw);
var _default = Raw;
exports.default = _default;
module.exports = exports.default;