/**
 * Created by llanzo on 1/13/15.
 */
"use strict"
function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    var previousVal = initial, index = 0;
    //
    return reduceRecursive(previousVal, arr, fn, index, arr);
}

function reduceRecursive(previousVal, currentArray, fn, index, originalArray) {
    if(currentArray.length == 0) return previousVal;

    var currentVal = currentArray.shift();
    var myComputedValue = fn(previousVal, currentVal, index, originalArray );

    return reduceRecursive(myComputedValue, currentArray, fn, ++index, originalArray);
}

module.exports = reduce

//Base case array is 0
/**
 * return the previous value
 * the initiallizer will set the initial value to previous and start the recursion
 */


//Case when array is 1
/**
 * add the array to previous previous value.
 *
 */

//Case when array is n
/**
 * split the array in 2 pieces,
 * one piece of length 1, handles as above,
 * other piece handle recursively
 */

/**OFFICIAL SOLUTION
 *       function reduce(arr, fn, initial) {
        return (function reduceOne(index, value) {
          if (index > arr.length - 1) return value // end condition
          return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
        })(0, initial) // IIFE. kick off recursion with initial values
      }

 module.exports = reduce


 */
