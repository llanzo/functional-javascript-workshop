/**
 * Created by llanzo on 1/14/15.
 */
function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return repeat(operation, num)
}

/**After reading the instructions, it seems like the problem I'm supposed to solve is that
 when the recursive repeat is called with a repeat count of 1000000 it causes a stack overflow.
 so I think what I can do is intercept the call, divide the number up evenly in to smaller divisors
 and then call the recursive repeat with the smaller divisor, so it doesn't cause a stack overflow.
 once one of the smaller divisor portions finishes, it should notify Trampoline to launch it
 into it's next group of calls.
 */