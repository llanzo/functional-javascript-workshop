/**
 * Created by llanzo on 1/13/15.
 */
function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function(submittedCurrentValue) {
            return goodUsers.some(function(goodCurrentValue) {
                return goodCurrentValue.id == submittedCurrentValue.id;
            });
        })

    };
}

module.exports = checkUsersValid

/**OFFICIAL SOLUTION
 module.exports = function checkUsersValid(goodUsers) {
        return function(submittedUsers) {
          return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
              return goodUser.id === submittedUser.id
            })
          })
        }
      }
*/