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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Seeder
// -------
// The new seeds we're performing, typically called from the `knex.seed`
// interface on the main `knex` object. Passes the `knex` instance performing
// the seeds.
function Seeder(knex) {
  this.knex = knex;
  this.config = this.setConfig(knex.client.config.seeds);
} // Runs all seed files for the given environment.


Seeder.prototype.run = _bluebird.default.method(function (config) {
  this.config = this.setConfig(config);
  return this._seedData().bind(this).spread(function (all) {
    return this._runSeeds(all);
  });
}); // Creates a new seed file, with a given name.

Seeder.prototype.make = function (name, config) {
  this.config = this.setConfig(config);
  if (!name) _bluebird.default.rejected(new Error('A name must be specified for the generated seed'));
  return this._ensureFolder(config).bind(this).then(this._generateStubTemplate).then(this._writeNewSeed(name));
}; // Lists all available seed files as a sorted array.


Seeder.prototype._listAll = _bluebird.default.method(function (config) {
  this.config = this.setConfig(config);
  const loadExtensions = this.config.loadExtensions;
  return _bluebird.default.promisify(_fs.default.readdir, {
    context: _fs.default
  })(this._absoluteConfigDir()).bind(this).then(seeds => (0, _lodash.filter)(seeds, function (value) {
    const extension = _path.default.extname(value);

    return (0, _lodash.includes)(loadExtensions, extension);
  }).sort());
}); // Gets the seed file list from the specified seed directory.

Seeder.prototype._seedData = function () {
  return _bluebird.default.join(this._listAll());
}; // Ensures a folder for the seeds exist, dependent on the
// seed config settings.


Seeder.prototype._ensureFolder = function () {
  const dir = this._absoluteConfigDir();

  return _bluebird.default.promisify(_fs.default.stat, {
    context: _fs.default
  })(dir).catch(() => _bluebird.default.promisify(_mkdirp.default)(dir));
}; // Run seed files, in sequence.


Seeder.prototype._runSeeds = function (seeds) {
  return _bluebird.default.all((0, _lodash.map)(seeds, (0, _lodash.bind)(this._validateSeedStructure, this))).bind(this).then(function (seeds) {
    return _bluebird.default.bind(this).then(function () {
      return this._waterfallBatch(seeds);
    });
  });
}; // Validates seed files by requiring and checking for a `seed` function.


Seeder.prototype._validateSeedStructure = function (name) {
  const seed = require(_path.default.join(this._absoluteConfigDir(), name));

  if (typeof seed.seed !== 'function') {
    throw new Error(`Invalid seed file: ${name} must have a seed function`);
  }

  return name;
}; // Generates the stub template for the current seed file, returning a compiled template.


Seeder.prototype._generateStubTemplate = function () {
  const stubPath = this.config.stub || _path.default.join(__dirname, 'stub', this.config.extension + '.stub');

  return _bluebird.default.promisify(_fs.default.readFile, {
    context: _fs.default
  })(stubPath).then(stub => (0, _lodash.template)(stub.toString(), {
    variable: 'd'
  }));
}; // Write a new seed to disk, using the config and generated filename,
// passing any `variables` given in the config to the template.


Seeder.prototype._writeNewSeed = function (name) {
  const config = this.config;

  const dir = this._absoluteConfigDir();

  return function (tmpl) {
    if (name[0] === '-') name = name.slice(1);
    const filename = name + '.' + config.extension;
    return _bluebird.default.promisify(_fs.default.writeFile, {
      context: _fs.default
    })(_path.default.join(dir, filename), tmpl(config.variables || {})).return(_path.default.join(dir, filename));
  };
}; // Runs a batch of seed files.


Seeder.prototype._waterfallBatch = function (seeds) {
  const knex = this.knex;

  const seedDirectory = this._absoluteConfigDir();

  let current = _bluebird.default.bind({
    failed: false,
    failedOn: 0
  });

  const log = [];
  (0, _lodash.each)(seeds, seed => {
    const name = _path.default.join(seedDirectory, seed);

    seed = require(name); // Run each seed file.

    current = current.then(() => seed.seed(knex, _bluebird.default)).then(() => {
      log.push(name);
    }).catch(originalError => {
      const error = new Error(`Error while executing "${name}" seed: ${originalError.message}`);
      error.original = originalError;
      error.stack = error.stack.split('\n').slice(0, 2).join('\n') + '\n' + originalError.stack;
      throw error;
    });
  });
  return current.thenReturn([log]);
};

Seeder.prototype._absoluteConfigDir = function () {
  return _path.default.resolve(process.cwd(), this.config.directory);
};

Seeder.prototype.setConfig = function (config) {
  return (0, _lodash.extend)({
    extension: 'js',
    directory: './seeds',
    loadExtensions: ['.co', '.coffee', '.eg', '.iced', '.js', '.litcoffee', '.ls', '.ts']
  }, this.config || {}, config);
};

var _default = Seeder;
exports.default = _default;
module.exports = exports.default;