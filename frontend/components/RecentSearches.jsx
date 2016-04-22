var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetStore = require('../stores/TweetStore'),
    TweetUtil = require('../util/TweetUtil'),
    DropdownCaret = require('./DropdownCaret');

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
      <div className={"relative " + shown}>
        <DropdownCaret />
        <ul className="dropdown">
          <h4>Recent searches</h4>
          {searches}
        </ul>
      </div>
    )
  }
});

module.exports = RecentSearches;

