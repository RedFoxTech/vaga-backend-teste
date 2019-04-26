"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Knex;

var _raw = _interopRequireDefault(require("./raw"));

var _client = _interopRequireDefault(require("./client"));

var _makeKnex = _interopRequireDefault(require("./util/make-knex"));

var _parseConnection = _interopRequireDefault(require("./util/parse-connection"));

var _fakeClient = _interopRequireDefault(require("./util/fake-client"));

var _constants = require("./constants");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Knex(config) {
  // If config is a string, try to parse it
  if (typeof config === 'string') {
    const parsedConfig = Object.assign((0, _parseConnection.default)(config), arguments[2]);
    return new Knex(parsedConfig);
  }

  let Dialect; // If user provided no relevant parameters, use generic client

  if (arguments.length === 0 || !config.client && !config.dialect) {
    Dialect = _client.default;
  } // If user provided Client constructor as a parameter, use it
  else if (typeof config.client === 'function' && config.client.prototype instanceof _client.default) {
      Dialect = config.client;
    } // If neither applies, let's assume user specified name of a client or dialect as a string
    else {
        const clientName = config.client || config.dialect;

        if (!_constants.SUPPORTED_CLIENTS.includes(clientName)) {
          throw new Error(`knex: Unknown configuration option 'client' value ${clientName}. Note that it is case-sensitive, check documentation for supported values.`);
        }

        const resolvedClientName = (0, _helpers.resolveClientNameWithAliases)(clientName);
        Dialect = require(`./dialects/${resolvedClientName}/index.js`);
      } // If config connection parameter is passed as string, try to parse it


  if (typeof config.connection === 'string') {
    config = Object.assign({}, config, {
      connection: (0, _parseConnection.default)(config.connection).connection
    });
  }

  const newKnex = (0, _makeKnex.default)(new Dialect(config));

  if (config.userParams) {
    newKnex.userParams = config.userParams;
  }

  return newKnex;
} // Expose Client on the main Knex namespace.


Knex.Client = _client.default;
/* eslint no-console:0 */

Object.defineProperties(Knex, {
  Promise: {
    get() {
      console.warn(`Knex.Promise is deprecated, either require bluebird or use the global Promise`);
      return require('bluebird');
    }

  }
}); // Run a "raw" query, though we can't do anything with it other than put
// it in a query statement.

Knex.raw = (sql, bindings) => {
  console.warn('global Knex.raw is deprecated, use knex.raw (chain off an initialized knex object)');
  return new _raw.default(_fakeClient.default).set(sql, bindings);
};

module.exports = exports.default;