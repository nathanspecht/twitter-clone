var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetStore = require('../stores/TweetStore'),
    TweetUtil = require('../util/TweetUtil');

var Tweets = React.createClass({
  componentDidMount: function() {
    this.TweetStoreListener = TweetStore.addListener(this.refreshTweets);
  },

  componentWillUnmount: function() {
    this.TweetStoreListener.remove();
  },

  componentDidUpdate: function() {
    this.addOnClickToLinks();
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

  createMarkup: function(html) {
    return {__html: html}
  },

  addOnClickToLinks: function() {
    var tweetTexts = document.getElementsByClassName('tweet-text'),
        links, 
        username;
    
    for (var i = 0; i < tweetTexts.length; i++) {
      links = tweetTexts[i].getElementsByTagName('a');
      
      for (var y = 0; y < links.length; y++) {
        username = links[y].getElementsByTagName('span')[0].textContent;
        links[y].onclick = TweetUtil.getTweets.bind(this, username);
      }
    }
  },

  renderTweets: function() {
    var createMarkup = this.createMarkup;

    if (this.state.tweets.length > 0) {
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
              <div className="tweet-text" 
                   dangerouslySetInnerHTML={
                     createMarkup(tweet.textHTML)
                   }>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return <img src="images/fat-twitter-bird.jpg" style={{width: '100%'}}/>
    }
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
