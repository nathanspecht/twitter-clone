var React = require('react'),
    ReactDOM = require('react-dom'),
    TweetStore = require('../stores/TweetStore'),
    TweetUtil = require('../util/TweetUtil');

var LoginButton = React.createClass({
  render: function () {
    return(
      <button onClick={TweetUtil.getSignature} />
    )
  }
});

module.exports = LoginButton;


