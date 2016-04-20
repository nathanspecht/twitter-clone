var Store = require("flux/utils").Store,
    TweetConstants = require("../constants/TweetConstants"),
    AppDispatcher = require("../dispatcher/AppDispatcher");

var _currentTweets  = [],
    _recentSearches = [];
    
var TweetStore = new Store(AppDispatcher);

TweetStore.current = function() {
  return _currentTweets.slice(0);
};

TweetStore.find = function(username) {
  var idx = _recentSearches.findIndex(pair => {
    return pair[0] === username;
  })

  if (idx > -1) {
    var pair = _recentSearches.splice(idx, 1);
    return JSON.parse(pair[0][1]);
  } else {
    return null;
  }
};

TweetStore.recentSearches = function() {
  return _recentSearches.reverse().map(pair => {
    return pair[0];
  })
};

TweetStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case TweetConstants.TWEETS_RECEIVED:
    TweetStore.__cacheTweets(payload.username, payload.tweets);
    TweetStore.__receiveTweets(payload.tweets);
    break;
  case TweetConstants.TWEETS_LOADING:
    TweetStore.__clearCurrentTweets();
    break;
  }
};

TweetStore.__receiveTweets = function(tweets) {
  _currentTweets = tweets;
  this.__emitChange();
};

TweetStore.__cacheTweets = function(username, tweets) {
  var tweetsJSON = JSON.stringify(tweets)
  _recentSearches.push([username, tweetsJSON]);
};

TweetStore.__clearCurrentTweets = function() {
  _currentTweets = [];
  this.__emitChange();
};

module.exports = TweetStore;
