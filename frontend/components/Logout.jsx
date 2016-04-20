var React = require('react'),
    ReactDOM = require('react-dom'),
    UserUtil = require('../util/UserUtil');

var Logout = React.createClass({
  render: function () {
    return(
      <button onClick={UserUtil.logout}>
        Logout
      </button>
    );
  }
});

module.exports = Logout;
