"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _lodash = require("lodash");

var _Migrator = require("./Migrator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MigrationGenerator {
  constructor(migrationConfig) {
    this.config = (0, _Migrator.getMergedConfig)(migrationConfig);
  } // Creates a new migration, with a given name.


  make(name, config) {
    this.config = (0, _Migrator.getMergedConfig)(config, this.config);

    if (!name) {
      return _bluebird.default.reject(new Error('A name must be specified for the generated migration'));
    }

    return this._ensureFolder(config).then(val => this._generateStubTemplate(val)).then(val => this._writeNewMigration(name, val));
  } // Ensures a folder for the migrations exist, dependent on the migration
  // config settings.


  _ensureFolder() {
    const dirs = this._absoluteConfigDirs();

    const promises = dirs.map(dir => {
      return _bluebird.default.promisify(_fs.default.stat, {
        context: _fs.default
      })(dir).catch(() => _bluebird.default.promisify(_mkdirp.default)(dir));
    });
    return _bluebird.default.all(promises);
  } // Generates the stub template for the current migration, returning a compiled
  // template.


  _generateStubTemplate() {
    const stubPath = this.config.stub || _path.default.join(__dirname, 'stub', this.config.extension + '.stub');

    return _bluebird.default.promisify(_fs.default.readFile, {
      context: _fs.default
    })(stubPath).then(stub => (0, _lodash.template)(stub.toString(), {
      variable: 'd'
    }));
  } // Write a new migration to disk, using the config and generated filename,
  // passing any `variables` given in the config to the template.


  _writeNewMigration(name, tmpl) {
    const config = this.config;

    const dirs = this._absoluteConfigDirs();

    const dir = dirs.slice(-1)[0]; // Get last specified directory

    if (name[0] === '-') name = name.slice(1);
    const filename = yyyymmddhhmmss() + '_' + name + '.' + config.extension;
    return _bluebird.default.promisify(_fs.default.writeFile, {
      context: _fs.default
    })(_path.default.join(dir, filename), tmpl(config.variables || {})).return(_path.default.join(dir, filename));
  }

  _absoluteConfigDirs() {
    const directories = Array.isArray(this.config.directory) ? this.config.directory : [this.config.directory];
    return directories.map(directory => {
      return _path.default.resolve(process.cwd(), directory);
    });
  }

} // Ensure that we have 2 places for each of the date segments.


exports.default = MigrationGenerator;

function padDate(segment) {
  segment = segment.toString();
  return segment[1] ? segment : `0${segment}`;
} // Get a date object in the correct format, without requiring a full out library
// like "moment.js".


function yyyymmddhhmmss() {
  const d = new Date();
  return d.getFullYear().toString() + padDate(d.getMonth() + 1) + padDate(d.getDate()) + padDate(d.getHours()) + padDate(d.getMinutes()) + padDate(d.getSeconds());
}

module.exports = exports.default;