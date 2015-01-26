/**
 * Created by llanzo on 1/26/15.
 */
"use strict"
function loadUsers(userIds, load, done) {
    var users = [];
        var assignedValues = 0;

        userIds.forEach(function (item, index, array) {
            load(item, function (value) {
                if (value) {
                    users[index] = value;
                    assignedValues++;
                }
                if(userIds.length == assignedValues) {
                    done(users);
                }
            });
        });
    }
    module.exports = loadUsers;

/**
 OFFICIAL SOLUTION:

 function loadUsers(userIds, load, done) {
        var completed = 0
        var users = []
        userIds.forEach(function(id, index) {
          load(id, function(user) {
            users[index] = user
            if (++completed === userIds.length) return done(users)
          })
        })
      }

 module.exports = loadUsers

*/


