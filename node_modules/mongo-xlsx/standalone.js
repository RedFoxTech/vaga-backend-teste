/**
 * Created by eddie on 11/21/15.
 *   Run mocha-test in standalone mode for development/debugging.
 */

/// re-define as global vars to define mocha testing required modules.
describe = function(name, callback){ 
	console.log('--------------------------------')
	console.log(name)
	console.log('--------------------------------')
	callback();
};

it = function(name, callback){ 
	console.log('--------------------------------')
	console.log(name)
	console.log('--------------------------------')
	callback();
};

assert = { equal : function(a, b, c) {
  console.log("STATUS: ", a === b ? "OK" : "Error", c);
  if (a !== b) {
    console.trace();
  }
}};

done = function() {};

/// Run All Test.
require("./test/test_files/main");