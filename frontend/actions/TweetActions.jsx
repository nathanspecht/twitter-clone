var AppDispatcher  = require("../dispatcher/AppDispatcher"),
    TweetConstants = require("../constants/TweetConstants");

var TweetActions = {
  receiveTweets: function(username, tweets) {
    AppDispatcher.dispatch({
      actionType: TweetConstants.TWEETS_RECEIVED,
      username: username,
      tweets: tweets
    });
  }
};

module.exports = TweetActions;
