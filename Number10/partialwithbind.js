/**
 * Created by llanzo on 1/13/15.
 */
module.exports = function(namespace) {
    "use strict"
    // SOLUTION GOES HERE
    return console.log.bind(null, namespace);
}

/**
OFFICIAL SOLUTION
 module.exports = function(namespace) {
        return console.log.bind(console, namespace)
      }

*/