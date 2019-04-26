"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listAll = listAll;
exports.listCompleted = listCompleted;
exports.listAllAndCompleted = listAllAndCompleted;

var _bluebird = _interopRequireDefault(require("bluebird"));

var _tableResolver = require("./table-resolver");

var _tableCreator = require("./table-creator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lists all available migration versions, as a sorted array.
function listAll(migrationSource, loadExtensions) {
  return migrationSource.getMigrations(loadExtensions);
} // Lists all migrations that have been completed for the current db, as an
// array.


function listCompleted(tableName, schemaName, trxOrKnex) {
  return (0, _tableCreator.ensureTable)(tableName, schemaName, trxOrKnex).then(() => trxOrKnex.from((0, _tableResolver.getTableName)(tableName, schemaName)).orderBy('id').select('name')).then(migrations => migrations.map(migration => {
    return migration.name;
  }));
} // Gets the migration list from the migration directory specified in config, as well as
// the list of completed migrations to check what should be run.


function listAllAndCompleted(config, trxOrKnex) {
  return _bluebird.default.all([listAll(config.migrationSource, config.loadExtensions), listCompleted(config.tableName, config.schemaName, trxOrKnex)]);
}