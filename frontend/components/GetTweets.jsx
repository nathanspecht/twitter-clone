var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetUtil = require('../util/TweetUtil');

var GetTweets = React.createClass({
  getTweets: function(e) {
    if (e.key === "Enter") {
      var username = this.refs.username.value;
      TweetUtil.getTweets(username);
    }
  },

  render: function () {
    return(
      <div className="get-tweets">
        <input onKeyDown={this.getTweets} type="text" ref="username" placeholder="username"/>
      </div>
    );
  }
});

module.exports = GetTweets;
