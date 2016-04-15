var React = require('react');
var ReactDOM = require('react-dom');
var TwitterUtil = require('./util/TwitterUtil');

var TwitterClone = React.createClass({

  render: function () {
    return(
      <div>
        <div>This is Twitter Clone</div>
        <button onClick={TwitterUtil.tweets}>Get Tweets!</button>
      </div>

    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TwitterClone />, document.getElementById('content'));
});
