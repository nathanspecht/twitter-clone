var Store = require("flux/utils").Store,
    UserConstants = require("../constants/UserConstants"),
    AppDispatcher = require("../dispatcher/AppDispatcher");

var _currentUser = {};
    
var UserStore = new Store(AppDispatcher);

UserStore.current = function() {
  return _currentUser;
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case UserConstants.CURRENT_USER_RECEIVED:
    UserStore.__updateCurrentUser(payload.user);
    break;
  }
};

UserStore.__updateCurrentUser = function(user) {
  _currentUser = user;
  this.__emitChange();
};

module.exports = UserStore;
