/**
 * Created by llanzo on 1/14/15.
 */
function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    return  function() {return operation() };
    return repeat(operation, --num)
}

module.exports = repeat


module.exports = repeat

/** doesnt' work

 for(var i =0; i< num; i++ ){
        operation();
    }
 */

/**OFFICAL SOLUTION
 function repeat(operation, num) {
        if (num <= 0) return

        operation()

        // release control every 10 or so
        // iterations.
        // 10 is arbitrary.
        if (num % 10 === 0) {
          setTimeout(function() {
            repeat(operation, --num)
          })
        } else {
          repeat(operation, --num)
        }
      }

 module.exports = repeat
*/

