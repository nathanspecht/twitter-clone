var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetUtil = require('../util/TweetUtil');

var GetTweets = React.createClass({
  getTweets: function() {
    var username = this.refs.username.value;
    TweetUtil.getTweets(username);
  },

  render: function () {
    return(
      <div>
        <input type="text" ref="username" />
        <button onClick={this.getTweets}>Get Tweets!</button>
      </div>
    );
  }
});

module.exports = GetTweets;
