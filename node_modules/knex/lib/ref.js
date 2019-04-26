"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _raw = _interopRequireDefault(require("./raw"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ref extends _raw.default {
  constructor(client, ref) {
    super(client);
    this.ref = ref;
    this._schema = null;
    this._alias = null;
  }

  withSchema(schema) {
    this._schema = schema;
    return this;
  }

  as(alias) {
    this._alias = alias;
    return this;
  }

  toSQL() {
    const string = this._schema ? `${this._schema}.${this.ref}` : this.ref;
    const formatter = this.client.formatter(this);
    const ref = formatter.columnize(string);
    const sql = this._alias ? `${ref} as ${formatter.wrap(this._alias)}` : ref;
    this.set(sql, []);
    return super.toSQL(...arguments);
  }

}

var _default = Ref;
exports.default = _default;
module.exports = exports.default;