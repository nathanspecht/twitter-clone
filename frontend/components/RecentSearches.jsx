var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetStore = require('../stores/TweetStore');

var RecentSearches = React.createClass({
  componentDidMount: function() {
    this.TweetStoreListener = TweetStore.addListener(this.setSearches);
  },

  componentWillUnmount: function() {
    this.TweetStoreListener.remove();
  },

  getInitialState: function() {
    return {
      searches: TweetStore.savedSearches()
    }
  },

  setSearches: function() {
    this.setState({
      searches: TweetStore.savedSearches()
    });
  },

  renderSearches: function() {
    return this.state.searches.map((search, idx) => {
      return(
        <li key={idx}>{search}</li>
      )
    })
  },
  
  render: function () {
    var searches = this.renderSearches();
    var shown = this.props.shown ? "" : "hidden";
    return(
      <ul className={"recent-searches " + shown}>
        <h4>Recent searches</h4>
        {searches}
      </ul>
    )
  }
});

module.exports = RecentSearches;

