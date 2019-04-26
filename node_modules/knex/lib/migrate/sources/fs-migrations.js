"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_LOAD_EXTENSIONS = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readDirAsync = path => _bluebird.default.promisify(_fs.default.readdir, {
  context: _fs.default
})(path);

const DEFAULT_LOAD_EXTENSIONS = Object.freeze(['.co', '.coffee', '.eg', '.iced', '.js', '.litcoffee', '.ls', '.ts']);
exports.DEFAULT_LOAD_EXTENSIONS = DEFAULT_LOAD_EXTENSIONS;

class FsMigrations {
  constructor(migrationDirectories, sortDirsSeparately, loadExtensions) {
    this.sortDirsSeparately = sortDirsSeparately;

    if (!Array.isArray(migrationDirectories)) {
      migrationDirectories = [migrationDirectories];
    }

    this.migrationsPaths = migrationDirectories;
    this.loadExtensions = loadExtensions || DEFAULT_LOAD_EXTENSIONS;
  }
  /**
   * Gets the migration names
   * @returns Promise<string[]>
   */


  getMigrations(loadExtensions) {
    // Get a list of files in all specified migration directories
    const readMigrationsPromises = this.migrationsPaths.map(configDir => {
      const absoluteDir = _path.default.resolve(process.cwd(), configDir);

      return readDirAsync(absoluteDir).then(files => ({
        files,
        configDir,
        absoluteDir
      }));
    });
    return _bluebird.default.all(readMigrationsPromises).then(allMigrations => {
      const migrations = allMigrations.reduce((acc, migrationDirectory) => {
        // When true, files inside the folder should be sorted
        if (this.sortDirsSeparately) {
          migrationDirectory.files = migrationDirectory.files.sort();
        }

        migrationDirectory.files.forEach(file => acc.push({
          file,
          directory: migrationDirectory.configDir
        }));
        return acc;
      }, []); // If true we have already sorted the migrations inside the folders
      // return the migrations fully qualified

      if (this.sortDirsSeparately) {
        return filterMigrations(this, migrations, loadExtensions || this.loadExtensions);
      }

      return filterMigrations(this, (0, _lodash.sortBy)(migrations, 'file'), loadExtensions || this.loadExtensions);
    });
  }

  getMigrationName(migration) {
    return migration.file;
  }

  getMigration(migration) {
    const absoluteDir = _path.default.resolve(process.cwd(), migration.directory);

    return require(_path.default.join(absoluteDir, migration.file));
  }

}

exports.default = FsMigrations;

function filterMigrations(migrationSource, migrations, loadExtensions) {
  return (0, _lodash.filter)(migrations, migration => {
    const migrationName = migrationSource.getMigrationName(migration);

    const extension = _path.default.extname(migrationName);

    return loadExtensions.includes(extension);
  });
}