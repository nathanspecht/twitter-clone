var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./components/Search'),
    Tweets = require('./components/Tweets'),
    RecentSearches = require('./components/RecentSearches'),
    CurrentUser = require('./components/CurrentUser');

var TwitterClone = React.createClass({
  render: function () {
    return(
      <div>
        <div className="tweet-things">
          <CurrentUser />
          <Search />
          <Tweets />
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TwitterClone />, document.getElementById('content'));
});
