/**
 * Created by llanzo on 1/13/15.
 */
function countWords(inputWords) {
    "use strict"
    // SOLUTION GOES HERE
    var retVal={}, initialValue = 0;
    inputWords.reduce(function(previousValue, currentValue, index, array) {
        if(index == 1){
            retVal[previousValue] ? retVal[previousValue]++ : retVal[previousValue] = 1;
        }
        retVal[currentValue] ? retVal[currentValue]++ : retVal[currentValue] = 1;
    });
    //console.log(retVal);
    return retVal;

}

module.exports = countWords


/**OFFICIAL SOCLUTION
 function countWords(arr) {
        return arr.reduce(function(countMap, word) {
          countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
          return countMap
        }, {}) // second argument to reduce initialises countMap to {}
      }

 module.exports = countWords
*/