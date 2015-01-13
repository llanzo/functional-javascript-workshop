/**
 * Created by llanzo on 1/13/15.
 */
function doubleAll(numbers) {
    var retVal = [];
    numbers.map(function(currentValue, index, array) {
        retVal[index] = currentValue * 2;
    });
    return retVal;
}

module.exports = doubleAll

/**OFFICAL SOLUTION
 module.exports = function doubleAll(numbers) {
        return numbers.map(function double(num) {
          return num * 2
        })
      }
*/