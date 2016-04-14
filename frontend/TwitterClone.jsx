var React = require('react');
var ReactDOM = require('react-dom');

var TwitterClone = React.createClass({
  render: function () {
    return(
      <div>This is Twitter Clone</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TwitterClone />, document.getElementById('content'));
});
