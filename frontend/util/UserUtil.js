var UserActions = require('../actions/UserActions');

var UserUtil = {
  getCurrentUser: function() {
    $.ajax({
      url: '/users/current',
      type: 'get',
      success: function(user) {
        UserActions.receiveCurrentUser(user);
      },
      error: function(response) {
        console.log(response);
      }
    })
  },

  logout: function() {
    $.ajax({
      url: '/users/logout',
      type: 'post',
      success: function() {
        location.reload();
      }
    })
  }
}

module.exports = UserUtil;
