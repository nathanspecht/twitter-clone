var TweetActions = require('../actions/TweetActions');

var TwitterUtil = {
  tweets: function(username) {
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

module.exports = TwitterUtil;
