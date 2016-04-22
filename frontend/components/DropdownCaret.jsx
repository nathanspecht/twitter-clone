var React = require('react'),
    ReactDOM = require('react-dom');

var DropdownCaret = React.createClass({
  render: function () {
    return(
      <div className="dropdown-caret">
        <div className="caret-outer" />
        <div className="caret-inner" />
      </div>
    );
  }
});

module.exports = DropdownCaret;
