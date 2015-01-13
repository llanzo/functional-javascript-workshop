/**
 * Created by llanzo on 1/13/15.
 */

module.exports = function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    "use strict"
    var retVal =[];
    arr.reduce(function(previousValue, currentValue) {
        retVal.push(fn(currentValue) )
    }, {});
    return retVal;
}

/**OFFICIAL SOLUTION
module.exports = function map(arr, fn) {
    return arr.reduce(function(acc, item, index, arr) {
        return acc.concat(fn(item, index, arr))
    }, [])
}
*/