"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _compiler = _interopRequireDefault(require("../../../schema/compiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SQLite3: Column Builder & Compiler
// -------
// Schema Compiler
// -------
function SchemaCompiler_SQLite3() {
  _compiler.default.apply(this, arguments);
}

(0, _inherits.default)(SchemaCompiler_SQLite3, _compiler.default); // Compile the query to determine if a table exists.

SchemaCompiler_SQLite3.prototype.hasTable = function (tableName) {
  const sql = `select * from sqlite_master ` + `where type = 'table' and name = ${this.formatter.parameter(tableName)}`;
  this.pushQuery({
    sql,
    output: resp => resp.length > 0
  });
}; // Compile the query to determine if a column exists.


SchemaCompiler_SQLite3.prototype.hasColumn = function (tableName, column) {
  this.pushQuery({
    sql: `PRAGMA table_info(${this.formatter.wrap(tableName)})`,

    output(resp) {
      return (0, _lodash.some)(resp, col => {
        return this.client.wrapIdentifier(col.name) === this.client.wrapIdentifier(column);
      });
    }

  });
}; // Compile a rename table command.


SchemaCompiler_SQLite3.prototype.renameTable = function (from, to) {
  this.pushQuery(`alter table ${this.formatter.wrap(from)} rename to ${this.formatter.wrap(to)}`);
};

var _default = SchemaCompiler_SQLite3;
exports.default = _default;
module.exports = exports.default;