var React = require('react'),
    ReactDOM = require('react-dom'),
    UserUtil = require('../util/UserUtil');

var Logout = React.createClass({
  render: function () {
    return(
      <li onClick={UserUtil.logout}>
        Log Out
      </li>
    );
  }
});

module.exports = Logout;
