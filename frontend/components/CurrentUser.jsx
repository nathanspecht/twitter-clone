var React = require('react'),
    ReactDOM = require('react-dom'),
    UserStore = require('../stores/UserStore'),
    UserUtil = require('../util/UserUtil');

var CurrentUser = React.createClass({
  componentDidMount: function() {
    this.UserStoreListener = UserStore.addListener(this.updateCurrentUser);
    UserUtil.getCurrentUser();
  },

  componentWillUnmount: function() {
    this.UserStoreListener.remove();
  },

  getInitialState: function() {
    return {
      currentUser: UserStore.current()
    }
  },

  updateCurrentUser: function() {
    this.setState({
      currentUser: UserStore.current()
    });
  },

  render: function () {
    var user = this.state.currentUser;

    return(
      <img className="img-icon" src={user.image_url} />
    );
  }
});

module.exports = CurrentUser;
