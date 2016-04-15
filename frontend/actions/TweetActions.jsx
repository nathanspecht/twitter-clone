var AppDispatcher  = require("../dispatcher/AppDispatcher"),
    TweetConstants = require("../constants/TweetConstants");

var TweetActions = {
  receiveTweets: function(tweets) {
    AppDispatcher.dispatch({
      actionType: TweetConstants.TWEETS_RECEIVED,
      tweets: tweets
    });
  }
};

module.exports = TweetActions;
