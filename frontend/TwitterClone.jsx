var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./components/Search'),
    Tweets = require('./components/Tweets'),
    RecentSearches = require('./components/RecentSearches');

var TwitterClone = React.createClass({
  render: function () {
    return(
      <div>
        <div className="tweet-things">
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
