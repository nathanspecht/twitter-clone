var TweetActions = require('../actions/TweetActions'),
    TweetStore   = require('../stores/TweetStore');

var TweetUtil = {
  getTweets: function(username) {
    TweetActions.loadingTweets();
    $.ajax({
      url: '/tweets?username=' + username,
      type: 'get',
      dataType: 'json',
      success: function(tweets) {
        TweetActions.receiveTweets(username, tweets);
      },
      error: function(response) {
        console.log(response);
      }
    });
  },
}

module.exports = TweetUtil;
