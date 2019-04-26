"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _compiler = _interopRequireDefault(require("../../../schema/compiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MySQL Schema Compiler
// -------
function SchemaCompiler_MySQL(client, builder) {
  _compiler.default.call(this, client, builder);
}

(0, _inherits.default)(SchemaCompiler_MySQL, _compiler.default);
(0, _lodash.assign)(SchemaCompiler_MySQL.prototype, {
  // Rename a table on the schema.
  renameTable(tableName, to) {
    this.pushQuery(`rename table ${this.formatter.wrap(tableName)} to ${this.formatter.wrap(to)}`);
  },

  // Check whether a table exists on the query.
  hasTable(tableName) {
    let sql = 'select * from information_schema.tables where table_name = ?';
    const bindings = [tableName];

    if (this.schema) {
      sql += ' and table_schema = ?';
      bindings.push(this.schema);
    } else {
      sql += ' and table_schema = database()';
    }

    this.pushQuery({
      sql,
      bindings,
      output: function output(resp) {
        return resp.length > 0;
      }
    });
  },

  // Check whether a column exists on the schema.
  hasColumn(tableName, column) {
    this.pushQuery({
      sql: `show columns from ${this.formatter.wrap(tableName)}`,

      output(resp) {
        return (0, _lodash.some)(resp, row => {
          return this.client.wrapIdentifier(row.Field) === this.client.wrapIdentifier(column);
        });
      }

    });
  }

});
var _default = SchemaCompiler_MySQL;
exports.default = _default;
module.exports = exports.default;