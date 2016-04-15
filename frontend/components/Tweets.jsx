var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetStore = require('../stores/TweetStore');

var Tweets = React.createClass({
  componentDidMount: function() {
    this.TweetStoreListener = TweetStore.addListener(this.refreshTweets);
  },

  componentWillUnmount: function() {
    this.TweetStoreListener.remove();
  },

  getInitialState: function() {
    return {
      tweets: TweetStore.all()
    }
  },

  refreshTweets: function() {
    this.setState({
      tweets: TweetStore.all()
    });
  },

  renderTweets: function() {
    return this.state.tweets.map(tweet => {
      return(
        <div key={tweet.id}>
          <div>
            {tweet.text}
          </div>
          <div>
            {tweet.date}
          </div>
        </div>
      )
    })
  },

  render: function () {
    var tweets = this.renderTweets();
    return(
      <ul>
        {tweets}
      </ul>
    );
  }
});

module.exports = Tweets;
