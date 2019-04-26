"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _columncompiler = _interopRequireDefault(require("../../../schema/columncompiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PostgreSQL Column Compiler
// -------
function ColumnCompiler_PG() {
  _columncompiler.default.apply(this, arguments);

  this.modifiers = ['nullable', 'defaultTo', 'comment'];
}

(0, _inherits.default)(ColumnCompiler_PG, _columncompiler.default);
Object.assign(ColumnCompiler_PG.prototype, {
  // Types
  // ------
  bigincrements: 'bigserial primary key',
  bigint: 'bigint',
  binary: 'bytea',

  bit(column) {
    return column.length !== false ? `bit(${column.length})` : 'bit';
  },

  bool: 'boolean',

  // Create the column definition for an enum type.
  // Using method "2" here: http://stackoverflow.com/a/10984951/525714
  enu(allowed, options) {
    options = options || {};
    const values = options.useNative && options.existingType ? undefined : allowed.join("', '");

    if (options.useNative) {
      if (!options.existingType) {
        this.tableCompiler.unshiftQuery(`create type "${options.enumName}" as enum ('${values}')`);
      }

      return `"${options.enumName}"`;
    }

    return `text check (${this.formatter.wrap(this.args[0])} in ('${values}'))`;
  },

  double: 'double precision',

  decimal(precision, scale) {
    if (precision === null) return 'decimal';
    return `decimal(${this._num(precision, 8)}, ${this._num(scale, 2)})`;
  },

  floating: 'real',
  increments: 'serial primary key',

  json(jsonb) {
    if (jsonb) this.client.logger.deprecate('json(true)', 'jsonb()');
    return jsonColumn(this.client, jsonb);
  },

  jsonb() {
    return jsonColumn(this.client, true);
  },

  smallint: 'smallint',
  tinyint: 'smallint',

  datetime(withoutTz = false, precision) {
    let useTz;

    if ((0, _lodash.isObject)(withoutTz)) {
      useTz = withoutTz.useTz;
      precision = withoutTz.precision;
    } else {
      useTz = !withoutTz;
    }

    return `${useTz ? 'timestamptz' : 'timestamp'}${precision ? '(' + precision + ')' : ''}`;
  },

  timestamp(withoutTz = false, precision) {
    let useTz;

    if ((0, _lodash.isObject)(withoutTz)) {
      useTz = withoutTz.useTz;
      precision = withoutTz.precision;
    } else {
      useTz = !withoutTz;
    }

    return `${useTz ? 'timestamptz' : 'timestamp'}${precision ? '(' + precision + ')' : ''}`;
  },

  uuid: 'uuid',

  // Modifiers:
  // ------
  comment(comment) {
    const columnName = this.args[0] || this.defaults('columnName');
    this.pushAdditional(function () {
      this.pushQuery(`comment on column ${this.tableCompiler.tableName()}.` + this.formatter.wrap(columnName) + ' is ' + (comment ? `'${comment}'` : 'NULL'));
    }, comment);
  }

});

function jsonColumn(client, jsonb) {
  if (!client.version || parseFloat(client.version) >= 9.2) return jsonb ? 'jsonb' : 'json';
  return 'text';
}

var _default = ColumnCompiler_PG;
exports.default = _default;
module.exports = exports.default;