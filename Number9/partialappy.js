/**
 * Created by llanzo on 1/13/15.
 */
    "use strict"
var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(namespace);
        console.log.apply(null, args);
    }
}

module.exports = logger

/**OFFICIAL SOLUTION
 var slice = Array.prototype.slice

 function logger(namespace) {
        return function() {
          console.log.apply(console, [namespace].concat(slice.call(arguments)))
        }
      }

 module.exports = logger
*/