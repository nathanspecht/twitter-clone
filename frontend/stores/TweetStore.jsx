var _tweets = [],
    Store = require("flux/utils").Store,
    TweetConstants = require("../constants/TweetConstants"),
    AppDispatcher = require("../dispatcher/AppDispatcher");

var TweetStore = new Store(AppDispatcher);

TweetStore.all = function() {
  return _tweets.slice(0);
};

TweetStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case TweetConstants.TWEETS_RECEIVED:
    TweetStore.__receiveTweets(payload.tweets);
    break;
  }
};

TweetStore.__receiveTweets = function(tweets) {
  _tweets = tweets;
  console.log(_tweets);
  this.__emitChange();
};

module.exports = TweetStore;
