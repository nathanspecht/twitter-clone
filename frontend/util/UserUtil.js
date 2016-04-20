var UserUtil = {
  logout: function() {
    $.ajax({
      url: '/users/logout',
      type: 'post',
    })
  }
}

module.exports = UserUtil;
