/**
 * Created by llanzo on 1/13/15.
 */
function duckCount() {
    // SOLUTION GOES HERE
    "use strict"
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(previous, currentValue) {
        if(Object.prototype.hasOwnProperty.call(currentValue, 'quack') ) {
            previous++;
        }
        return previous;
    }, 0);
}

module.exports = duckCount


/**OFFICIAL SOLUTION
 function duckCount() {
        return Array.prototype.slice.call(arguments).filter(function(obj) {
          return Object.prototype.hasOwnProperty.call(obj, 'quack')
        }).length
      }

 module.exports = duckCount
*/
