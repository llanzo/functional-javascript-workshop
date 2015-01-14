/**
 * Created by llanzo on 1/14/15.
 */
function Spy(target, method) {
    // SOLUTION GOES HERE
    "use strict"
    var count = 0;
    var spyee = target[method];
    target[method] = function() {
        count++;
        return spyee.apply(target, arguments);
    }
    return {"count" : count};

}

module.exports = Spy

/**IDEA
 * why not just use a call back for the original method
 */

/**OFFICIAL SOLUTION
 function Spy(target, method) {
        var originalFunction = target[method]

        // use an object so we can pass by reference, not value
        // i.e. we can return result, but update count from this scope
        var result = {
          count: 0
        }

        // replace method with spy method
        target[method] = function() {
          result.count++ // track function was called
          return originalFunction.apply(this, arguments) // invoke original function
        }

        return result
      }

 module.exports = Spy
*/