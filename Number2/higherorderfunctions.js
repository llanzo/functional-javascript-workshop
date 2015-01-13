/**
 * Created by llanzo on 1/13/15.
 */
function repeat(operation, num) {
    for(var i = 0; i < num; i++) {
        operation();
    }
}

function repeatRecursive(operation, num) {
    if(num) {
        operation();
        num--;
        repeatRecursive(operation, num)
    }

}

//module.exports.repeat = repeat;
//module.exports.repeatRecursive = repeatRecursive;

module.exports = repeat;

/**OFFICIAL SOCLUTION
 function repeat(operation, num) {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
      }

 module.exports = repeat
*/
