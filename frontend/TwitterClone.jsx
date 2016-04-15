var React = require('react'),
    ReactDOM = require('react-dom'),
    GetTweets = require('./components/GetTweets'),
    Tweets = require('./components/Tweets');

var TwitterClone = React.createClass({
  render: function () {
    return(
      <div>
        <div>This is Twitter Clone</div>
        <GetTweets />
        <Tweets />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TwitterClone />, document.getElementById('content'));
});
