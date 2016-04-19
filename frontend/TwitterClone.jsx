var React = require('react'),
    ReactDOM = require('react-dom'),
    GetTweets = require('./components/GetTweets'),
    Tweets = require('./components/Tweets'),
    RecentSearches = require('./components/RecentSearches'),
    LoginButton = require('./components/LoginButton');

var TwitterClone = React.createClass({
  render: function () {
    return(
      <div>
        <div className="tweet-things">
          <LoginButton />
          <GetTweets />
          <Tweets />
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TwitterClone />, document.getElementById('content'));
});
