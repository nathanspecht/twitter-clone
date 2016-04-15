var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetUtil = require('../util/TweetUtil'),
    RecentSearches = require('./RecentSearches');

var GetTweets = React.createClass({
  getInitialState: function() {
    return { searchesShown: false }
  },

  handleKeyDown: function(e) {
    this.toggleSearches();
    this.getTweets(e);
  },

  toggleSearches: function() {
    if (this.refs.username.value === "") {
      this.setState({
        searchesShown: true
      });
    } else {
      this.hideSearches();
    }
  },

  hideSearches: function() {
    this.setState({
      searchesShown: false
    });
  },

  getTweets: function(e) {
    if (e.key === "Enter") {
      var username = this.refs.username.value;
      TweetUtil.getTweets(username);
    }
  },

  render: function () {
    var searchesShown = this.state.searchesShown;
    return(
      <div className="get-tweets">
        <input
          onBlur={this.hideSearches}
          onChange={this.toggleSearches}
          onClick={this.toggleSearches} 
          onKeyDown={this.getTweets} 
          type="text" 
          ref="username" 
          placeholder="username"/>
        <RecentSearches shown={searchesShown}/>
      </div>
    );
  }
});

module.exports = GetTweets;
