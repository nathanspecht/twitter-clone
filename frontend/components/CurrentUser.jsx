var React = require('react'),
    ReactDOM = require('react-dom'),
    UserStore = require('../stores/UserStore'),
    UserUtil = require('../util/UserUtil'),
    Logout = require('./Logout'),
    DropdownCaret = require('./DropdownCaret');

var CurrentUser = React.createClass({
  componentDidMount: function() {
    window.addEventListener('mousedown', this.pageClick, false);
    this.UserStoreListener = UserStore.addListener(this.updateCurrentUser);
    UserUtil.getCurrentUser();
  },

  componentWillUnmount: function() {
    this.UserStoreListener.remove();
  },

  getInitialState: function() {
    return {
      currentUser: UserStore.current(),
      dropdownShown: false
    }
  },

  updateCurrentUser: function() {
    this.setState({
      currentUser: UserStore.current()
    });
  },

  toggleDropdown: function() {
    var isShown = !this.state.dropdownShown;
    this.setState({
      dropdownShown: isShown
    });
  },

  pageClick: function() {
    if (this.mouseOnImg) { 
      return; 
    }

    this.setState({
      dropdownShown: false
    });
  },

  setMouseOnImg: function() {
    this.mouseOnImg = true;
  },

  setMouseOffImg: function() {
    this.mouseOnImg = false;
  },

  render: function () {
    var user = this.state.currentUser,
        dropdownShown = this.state.dropdownShown ? "" : " hidden";

    return(
      <div className="current-user"
           onMouseDown={this.setMouseOnImg}
           onMouseUp={this.setMouseOffImg}>
        <img className="img-icon" 
             src={user.image_url} 
             onClick={this.toggleDropdown}/>
        <div className={"relative" + dropdownShown}>
          <DropdownCaret />
          <ul className="dropdown">
            <h4>{user.name}</h4>
            <li className="dropdown-divider" />
            <Logout />
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = CurrentUser;
