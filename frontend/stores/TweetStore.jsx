var _tweets = {},
    _current_tweets = [],
    Store = require("flux/utils").Store,
    TweetConstants = require("../constants/TweetConstants"),
    AppDispatcher = require("../dispatcher/AppDispatcher");

var TweetStore = new Store(AppDispatcher);

TweetStore.current = function() {
  return _current_tweets.slice(0);
};

TweetStore.has = function(username) {
  return !!_tweets[username];
};

TweetStore.find = function(username) {
  return _tweets[username].slice(0);
};

TweetStore.savedSearches = function() {
   return Object.keys(_tweets);
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
  _current_tweets = tweets;
  this.__emitChange();
};

TweetStore.__cacheTweets = function(username, tweets) {
  _tweets[username] = tweets;
};

TweetStore.__clearCurrentTweets = function() {
  _current_tweets = [];
  this.__emitChange();
};

module.exports = TweetStore;
