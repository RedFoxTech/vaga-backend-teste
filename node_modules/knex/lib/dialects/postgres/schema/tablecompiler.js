"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inherits = _interopRequireDefault(require("inherits"));

var _tablecompiler = _interopRequireDefault(require("../../../schema/tablecompiler"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint max-len: 0 */
// PostgreSQL Table Builder & Compiler
// -------
function TableCompiler_PG() {
  _tablecompiler.default.apply(this, arguments);
}

(0, _inherits.default)(TableCompiler_PG, _tablecompiler.default); // Compile a rename column command.

TableCompiler_PG.prototype.renameColumn = function (from, to) {
  return this.pushQuery({
    sql: `alter table ${this.tableName()} rename ${this.formatter.wrap(from)} to ${this.formatter.wrap(to)}`
  });
};

TableCompiler_PG.prototype.compileAdd = function (builder) {
  const table = this.formatter.wrap(builder);
  const columns = this.prefixArray('add column', this.getColumns(builder));
  return this.pushQuery({
    sql: `alter table ${table} ${columns.join(', ')}`
  });
}; // Adds the "create" query to the query sequence.


TableCompiler_PG.prototype.createQuery = function (columns, ifNot) {
  const createStatement = ifNot ? 'create table if not exists ' : 'create table ';
  let sql = createStatement + this.tableName() + ' (' + columns.sql.join(', ') + ')';
  if (this.single.inherits) sql += ` inherits (${this.formatter.wrap(this.single.inherits)})`;
  this.pushQuery({
    sql,
    bindings: columns.bindings
  });
  const hasComment = (0, _lodash.has)(this.single, 'comment');
  if (hasComment) this.comment(this.single.comment);
};

TableCompiler_PG.prototype.addColumns = function (columns, prefix, colCompilers) {
  if (prefix === this.alterColumnsPrefix) {
    // alter columns
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = colCompilers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        const col = _step.value;
        const quotedTableName = this.tableName();
        const type = col.getColumnType(); // We'd prefer to call this.formatter.wrapAsIdentifier here instead, however the context passed to
        // `this` instance is not that of the column, but of the table. Thus, we unfortunately have to call
        // `wrapIdentifier` here as well (it is already called once on the initial column operation) to give
        // our `alter` operation the correct `queryContext`. Refer to issue #2606 and PR #2612.

        const colName = this.client.wrapIdentifier(col.getColumnName(), col.columnBuilder.queryContext());
        this.pushQuery({
          sql: `alter table ${quotedTableName} alter column ${colName} drop default`,
          bindings: []
        });
        this.pushQuery({
          sql: `alter table ${quotedTableName} alter column ${colName} drop not null`,
          bindings: []
        });
        this.pushQuery({
          sql: `alter table ${quotedTableName} alter column ${colName} type ${type} using (${colName}::${type})`,
          bindings: []
        });
        const defaultTo = col.modified['defaultTo'];

        if (defaultTo) {
          const modifier = col.defaultTo.apply(col, defaultTo);
          this.pushQuery({
            sql: `alter table ${quotedTableName} alter column ${colName} set ${modifier}`,
            bindings: []
          });
        }

        const nullable = col.modified['nullable'];

        if (nullable && nullable[0] === false) {
          this.pushQuery({
            sql: `alter table ${quotedTableName} alter column ${colName} set not null`,
            bindings: []
          });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    // base class implementation for normal add
    _tablecompiler.default.prototype.addColumns.call(this, columns, prefix);
  }
}; // Compiles the comment on the table.


TableCompiler_PG.prototype.comment = function (comment) {
  this.pushQuery(`comment on table ${this.tableName()} is '${this.single.comment}'`);
}; // Indexes:
// -------


TableCompiler_PG.prototype.primary = function (columns, constraintName) {
  constraintName = constraintName ? this.formatter.wrap(constraintName) : this.formatter.wrap(`${this.tableNameRaw}_pkey`);
  this.pushQuery(`alter table ${this.tableName()} add constraint ${constraintName} primary key (${this.formatter.columnize(columns)})`);
};

TableCompiler_PG.prototype.unique = function (columns, indexName) {
  indexName = indexName ? this.formatter.wrap(indexName) : this._indexCommand('unique', this.tableNameRaw, columns);
  this.pushQuery(`alter table ${this.tableName()} add constraint ${indexName}` + ' unique (' + this.formatter.columnize(columns) + ')');
};

TableCompiler_PG.prototype.index = function (columns, indexName, indexType) {
  indexName = indexName ? this.formatter.wrap(indexName) : this._indexCommand('index', this.tableNameRaw, columns);
  this.pushQuery(`create index ${indexName} on ${this.tableName()}${indexType && ` using ${indexType}` || ''}` + ' (' + this.formatter.columnize(columns) + ')');
};

TableCompiler_PG.prototype.dropPrimary = function (constraintName) {
  constraintName = constraintName ? this.formatter.wrap(constraintName) : this.formatter.wrap(this.tableNameRaw + '_pkey');
  this.pushQuery(`alter table ${this.tableName()} drop constraint ${constraintName}`);
};

TableCompiler_PG.prototype.dropIndex = function (columns, indexName) {
  indexName = indexName ? this.formatter.wrap(indexName) : this._indexCommand('index', this.tableNameRaw, columns);
  indexName = this.schemaNameRaw ? `${this.formatter.wrap(this.schemaNameRaw)}.${indexName}` : indexName;
  this.pushQuery(`drop index ${indexName}`);
};

TableCompiler_PG.prototype.dropUnique = function (columns, indexName) {
  indexName = indexName ? this.formatter.wrap(indexName) : this._indexCommand('unique', this.tableNameRaw, columns);
  this.pushQuery(`alter table ${this.tableName()} drop constraint ${indexName}`);
};

TableCompiler_PG.prototype.dropForeign = function (columns, indexName) {
  indexName = indexName ? this.formatter.wrap(indexName) : this._indexCommand('foreign', this.tableNameRaw, columns);
  this.pushQuery(`alter table ${this.tableName()} drop constraint ${indexName}`);
};

var _default = TableCompiler_PG;
exports.default = _default;
module.exports = exports.default;