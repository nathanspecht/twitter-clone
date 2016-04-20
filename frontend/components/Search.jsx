var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetUtil = require('../util/TweetUtil'),
    RecentSearches = require('./RecentSearches');

var Search = React.createClass({
  getInitialState: function() {
    return { recentSearchesShown: false }
  },

  handleKeyDown: function(e) {
    this.toggleRecentSearches();
    this.getTweets(e);
  },

  toggleRecentSearches: function() {
    if (this.refs.username.value === "") {
      this.showRecentSearches();
    } else {
      this.hideRecentSearches();
    }
  },

  showRecentSearches: function() {
    clearTimeout(this.timeoutId);
    this.refs.recentSearches.className = "";
    this.setState({
      recentSearchesShown: true
    });
  },

  hideRecentSearches: function() {
    // setTimeout so that the list isn't hidden before
    // the onClick event occurs

    this.refs.recentSearches.className = "hiding";

    this.timeoutId = setTimeout(function(){
      this.setState({
        recentSearchesShown: false
      });
    }.bind(this), 500)
  },

  getTweets: function(e) {
    if (e.key === "Enter") {
      var username = this.refs.username.value;
      TweetUtil.getTweets(username);
    }
  },

  render: function () {
    var recentSearchesShown = this.state.recentSearchesShown;
    return(
      <div className="get-tweets">
        <input
          onBlur={this.hideRecentSearches}
          onChange={this.toggleRecentSearches}
          onMouseDown={this.toggleRecentSearches} 
          onKeyDown={this.getTweets} 
          type="text" 
          ref="username" 
          placeholder="Search"/>
        <div ref="recentSearches">
          <RecentSearches shown={recentSearchesShown}/>
        </div>
      </div>
    );
  }
});

module.exports = Search;
