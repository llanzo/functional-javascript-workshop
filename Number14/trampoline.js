/**
 * Created by llanzo on 1/14/15.
 */
function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    var retVal = repeat.bind(this, operation, --num);
    return retVal;
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    var retVal = fn;
    while(retVal instanceof Function ) {
        retVal = retVal();
    }
    return retVal;

}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat(operation, num) );
}

/**The trampoline returns a value
 * only if the result of evaluting it's argument is not a function
 *
 * What I can do is bind the the repeat function and the aruguments,
 * and store this a variable, retVal,  and return that.  This when when I call
 * return retVal, the function object (wtih specified parameters is returned)
 * but the function is not evaluated
 */

/*
OFFICTIAL SOLUTION

 function repeat(operation, num) {
 return function() {
 if (num <= 0) return
 operation()
 return repeat(operation, --num)
 }
 }

 function trampoline(fn) {
 while(fn && typeof fn === 'function') {
 fn = fn()
 }
 }

 module.exports = function(operation, num) {
 trampoline(function() {
 return repeat(operation, num)
 })
 }



 */