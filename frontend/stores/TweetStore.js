var Store = require("flux/utils").Store,
    TweetConstants = require("../constants/TweetConstants"),
    AppDispatcher = require("../dispatcher/AppDispatcher");

var _currentTweets  = [],
    _recentSearches = new Set;
    
var TweetStore = new Store(AppDispatcher);

TweetStore.current = function() {
  return _currentTweets.slice(0);
};

TweetStore.recentSearches = function() {
  return Array.from(_recentSearches).reverse();
};

TweetStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case TweetConstants.TWEETS_RECEIVED:
    TweetStore.__updateRecentSearches(payload.username);
    TweetStore.__updateCurrentTweets(payload.tweets);
    break;
  case TweetConstants.TWEETS_LOADING:
    TweetStore.__clearCurrentTweets();
    break;
  }
};

TweetStore.__updateCurrentTweets = function(tweets) {
  _currentTweets = tweets;
  _currentTweets.forEach(tweet => {
    tweet.textHTML = tweet.text.replace(
      /@(\w+)/g, "<a>@<span>$1</span></a>"
    )
  })
  this.__emitChange();
};

TweetStore.__updateRecentSearches = function(username) {
  _recentSearches.delete(username);
  _recentSearches.add(username);
};

TweetStore.__clearCurrentTweets = function() {
  _currentTweets = [];
  this.__emitChange();
};

module.exports = TweetStore;
