var UserUtil = {
  logout: function() {
    $.ajax({
      url: '/users/logout',
      type: 'post',
      success: function() {
        location.reload();
      }
    })
  }
}

module.exports = UserUtil;
