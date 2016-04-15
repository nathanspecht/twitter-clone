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
      tweets: TweetStore.current()
    }
  },

  refreshTweets: function() {
    this.setState({
      tweets: TweetStore.current()
    });
  },

  renderTweets: function() {
    return this.state.tweets.map(tweet => {
      return(
        <div key={tweet.id} className="tweet">
          <img className="img-icon" src={tweet.user.image_url} />
          <div className="info">
            <div className="tweet-user">
              <span className="bold">
                {tweet.user.name}
              </span>
              <span className="lite">
                @{tweet.user.username} • {tweet.date}
              </span>
            </div>
            <div className="tweet-text">
              {tweet.text}
            </div>
          </div>
        </div>
      )
    })
  },

  render: function () {
    var tweets = this.renderTweets();
    return(
      <div className="tweets">
        <h2>Tweets</h2>
        {tweets}
      </div>
    );
  }
});

module.exports = Tweets;
