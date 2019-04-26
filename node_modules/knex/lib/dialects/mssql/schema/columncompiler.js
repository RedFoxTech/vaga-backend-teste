"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _columncompiler = _interopRequireDefault(require("../../../schema/columncompiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MySQL Column Compiler
// -------
function ColumnCompiler_MSSQL() {
  _columncompiler.default.apply(this, arguments);

  this.modifiers = ['nullable', 'defaultTo', 'first', 'after', 'comment'];
}

(0, _inherits.default)(ColumnCompiler_MSSQL, _columncompiler.default); // Types
// ------

(0, _lodash.assign)(ColumnCompiler_MSSQL.prototype, {
  increments: 'int identity(1,1) not null primary key',
  bigincrements: 'bigint identity(1,1) not null primary key',
  bigint: 'bigint',

  double(precision, scale) {
    return 'float';
  },

  floating(precision, scale) {
    // ignore precicion / scale which is mysql specific stuff
    return `float`;
  },

  integer() {
    // mssql does not support length
    return 'int';
  },

  mediumint: 'int',
  smallint: 'smallint',

  tinyint() {
    // mssql does not support length
    return 'tinyint';
  },

  varchar(length) {
    return `nvarchar(${this._num(length, 255)})`;
  },

  text: 'nvarchar(max)',
  mediumtext: 'nvarchar(max)',
  longtext: 'nvarchar(max)',
  // TODO: mssql supports check constraints as of SQL Server 2008
  // so make enu here more like postgres
  enu: 'nvarchar(100)',
  uuid: 'uniqueidentifier',
  datetime: 'datetime2',

  timestamp({
    useTz = false
  } = {}) {
    return useTz ? 'datetimeoffset' : 'datetime2';
  },

  bit(length) {
    if (length > 1) {
      this.client.logger.warn('Bit field is exactly 1 bit length for MSSQL');
    }

    return 'bit';
  },

  binary(length) {
    return length ? `varbinary(${this._num(length)})` : 'varbinary(max)';
  },

  bool: 'bit',

  // Modifiers
  // ------
  defaultTo(value) {
    const defaultVal = ColumnCompiler_MSSQL.super_.prototype.defaultTo.apply(this, arguments);

    if (this.type !== 'blob' && this.type.indexOf('text') === -1) {
      return defaultVal;
    }

    return '';
  },

  first() {
    this.client.logger.warn('Column first modifier not available for MSSQL');
    return '';
  },

  after(column) {
    this.client.logger.warn('Column after modifier not available for MSSQL');
    return '';
  },

  comment(comment) {
    if (comment && comment.length > 255) {
      this.client.logger.warn('Your comment is longer than the max comment length for MSSQL');
    }

    return '';
  }

});
var _default = ColumnCompiler_MSSQL;
exports.default = _default;
module.exports = exports.default;