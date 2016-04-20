var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetStore = require('../stores/TweetStore'),
    TweetUtil = require('../util/TweetUtil');

var RecentSearches = React.createClass({
  componentDidMount: function() {
    this.TweetStoreListener = 
      TweetStore.addListener(this.updateRecentSearches);
  },

  componentWillUnmount: function() {
    this.TweetStoreListener.remove();
  },

  getInitialState: function() {
    return {
      recentSearches: TweetStore.recentSearches()
    }
  },

  updateRecentSearches: function() {
    this.setState({
      recentSearches: TweetStore.recentSearches()
    });
  },

  getTweets: function(username) {
    TweetUtil.getTweets(username);
  },

  renderSearches: function() {
    var getTweets = this.getTweets;

    return this.state.recentSearches.map((search, idx) => {
      return(
        <li key={idx} onClick={getTweets.bind(null, search)}>
          {search}
        </li>
      )
    })
  },
  
  render: function () {
    var searches = this.renderSearches(),
        shown    = this.props.shown ? "" : "hidden";
    return(
      <ul className={"recent-searches " + shown}>
        <h4>Recent searches</h4>
        {searches}
      </ul>
    )
  }
});

module.exports = RecentSearches;

