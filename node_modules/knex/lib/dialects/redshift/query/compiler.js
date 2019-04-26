"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _compiler = _interopRequireDefault(require("../../../query/compiler"));

var _compiler2 = _interopRequireDefault(require("../../postgres/query/compiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redshift Query Builder & Compiler
// ------
function QueryCompiler_Redshift(client, builder) {
  _compiler2.default.call(this, client, builder);
}

(0, _inherits.default)(QueryCompiler_Redshift, _compiler2.default);
(0, _lodash.assign)(QueryCompiler_Redshift.prototype, {
  truncate() {
    return `truncate ${this.tableName.toLowerCase()}`;
  },

  // Compiles an `insert` query, allowing for multiple
  // inserts using a single query statement.
  insert() {
    const sql = _compiler.default.prototype.insert.apply(this, arguments);

    if (sql === '') return sql;

    this._slightReturn();

    return {
      sql
    };
  },

  // Compiles an `update` query, warning on unsupported returning
  update() {
    const sql = _compiler.default.prototype.update.apply(this, arguments);

    this._slightReturn();

    return {
      sql
    };
  },

  // Compiles an `delete` query, warning on unsupported returning
  del() {
    const sql = _compiler.default.prototype.del.apply(this, arguments);

    this._slightReturn();

    return {
      sql
    };
  },

  // simple: if trying to return, warn
  _slightReturn() {
    if (this.single.isReturning) {
      this.client.logger.warn('insert/update/delete returning is not supported by redshift dialect');
    }
  },

  forUpdate() {
    this.client.logger.warn('table lock is not supported by redshift dialect');
    return '';
  },

  forShare() {
    this.client.logger.warn('lock for share is not supported by redshift dialect');
    return '';
  },

  // Compiles a columnInfo query
  columnInfo() {
    const column = this.single.columnInfo;
    let schema = this.single.schema; // The user may have specified a custom wrapIdentifier function in the config. We
    // need to run the identifiers through that function, but not format them as
    // identifiers otherwise.

    const table = this.client.customWrapIdentifier(this.single.table, _lodash.identity);

    if (schema) {
      schema = this.client.customWrapIdentifier(schema, _lodash.identity);
    }

    let sql = 'select * from information_schema.columns where table_name = ? and table_catalog = ?';
    const bindings = [table.toLowerCase(), this.client.database().toLowerCase()];

    if (schema) {
      sql += ' and table_schema = ?';
      bindings.push(schema);
    } else {
      sql += ' and table_schema = current_schema()';
    }

    return {
      sql,
      bindings,

      output(resp) {
        const out = (0, _lodash.reduce)(resp.rows, function (columns, val) {
          columns[val.column_name] = {
            type: val.data_type,
            maxLength: val.character_maximum_length,
            nullable: val.is_nullable === 'YES',
            defaultValue: val.column_default
          };
          return columns;
        }, {});
        return column && out[column] || out;
      }

    };
  }

});
var _default = QueryCompiler_Redshift;
exports.default = _default;
module.exports = exports.default;