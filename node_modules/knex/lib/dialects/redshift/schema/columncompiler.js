"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _columncompiler = _interopRequireDefault(require("../../postgres/schema/columncompiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redshift Column Compiler
// -------
function ColumnCompiler_Redshift() {
  _columncompiler.default.apply(this, arguments);
}

(0, _inherits.default)(ColumnCompiler_Redshift, _columncompiler.default);
(0, _lodash.assign)(ColumnCompiler_Redshift.prototype, {
  // Types:
  // ------
  bigincrements: 'bigint identity(1,1) primary key not null',
  binary: 'varchar(max)',

  bit(column) {
    return column.length !== false ? `char(${column.length})` : 'char(1)';
  },

  blob: 'varchar(max)',
  enu: 'varchar(255)',
  enum: 'varchar(255)',
  increments: 'integer identity(1,1) primary key not null',
  json: 'varchar(max)',
  jsonb: 'varchar(max)',
  longblob: 'varchar(max)',
  mediumblob: 'varchar(16777218)',
  set: 'text',
  text: 'varchar(max)',

  datetime(without) {
    return without ? 'timestamp' : 'timestamptz';
  },

  timestamp(without) {
    return without ? 'timestamp' : 'timestamptz';
  },

  tinyblob: 'varchar(256)',
  uuid: 'char(36)',
  varbinary: 'varchar(max)',
  bigint: 'bigint',
  bool: 'boolean',
  double: 'double precision',
  floating: 'real',
  smallint: 'smallint',
  tinyint: 'smallint',

  // Modifiers:
  // ------
  comment(comment) {
    this.pushAdditional(function () {
      this.pushQuery(`comment on column ${this.tableCompiler.tableName()}.` + this.formatter.wrap(this.args[0]) + ' is ' + (comment ? `'${comment}'` : 'NULL'));
    }, comment);
  }

});
var _default = ColumnCompiler_Redshift;
exports.default = _default;
module.exports = exports.default;