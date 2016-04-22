var AppDispatcher = require("../dispatcher/AppDispatcher"),
    UserConstants = require("../constants/UserConstants");

var UserActions = {
  receiveCurrentUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      user: user
    });
  }
};
 

module.exports = UserActions;
