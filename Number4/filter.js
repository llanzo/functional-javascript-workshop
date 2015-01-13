/**
 * Created by llanzo on 1/13/15.
 */
function getShortMessages(messages) {
    // SOLUTION GOES HERE
    var objectBag = messages.filter(function(currentValue) {
        return currentValue.message.length < 50;
    });
    return objectBag.map(function(currentValue) {
        return currentValue.message;
    });
}

module.exports = getShortMessages

/**OFFICAL SOLUTION
 module.exports = function getShortMessages(messages) {
        return messages.filter(function(item) {
          return item.message.length < 50
        }).map(function(item) {
          return item.message
        })
      }

*/