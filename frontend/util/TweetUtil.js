var TweetActions = require('../actions/TweetActions'),
    TweetStore   = require('../stores/TweetStore');

var TweetUtil = {
  getTweets: function(username) {
    if (TweetStore.has(username)) {
      var tweets = TweetStore.find(username)
      TweetActions.receiveTweets(username, tweets)
    } else {
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
    } 
  },
  
  getSignature: function() {
    $.ajax({
      url: '/users/oauth_token',
      type: 'get',
      success: function(response) {
        console.log(response);
        window.location = 'https://api.twitter.com/oauth/authenticate?oauth_token=' + response.oauth_token;
      },
      error: function(response) {
        console.log(response)
      }
    });
  }
}

module.exports = TweetUtil;
