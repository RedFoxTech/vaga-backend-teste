'use strict';

var DataValidations = module.exports = function (model) {
  this.model = model || {};
};

DataValidations.prototype = {
  add: function add(address, validation) {
    return this.model[address] = validation;
  },
  find: function find(address) {
    return this.model[address];
  },
  remove: function remove(address) {
    this.model[address] = undefined;
  }
};
//# sourceMappingURL=data-validations.js.map
