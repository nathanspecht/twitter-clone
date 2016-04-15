var TweetActions = require('../actions/TweetActions');

var TweetUtil = {
  getTweets: function(username) {
    TweetActions.receiveTweets([]);
    $.ajax({
      url: '/tweets?username=' + username,
      type: 'get',
      dataType: 'json',
      success: function(tweets) {
        TweetActions.receiveTweets(tweets)
      },
      error: function(response) {
        debugger
      }
    });
  },
}

module.exports = TweetUtil;
