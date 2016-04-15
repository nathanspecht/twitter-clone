var TwitterUtil = {
  tweets: function() {
    $.ajax({
      url: '/tweets',
      type: 'get',
      dataType: 'json',
      success: function(response) {
        debugger
      },
      error: function(response) {
        debugger
      }
    });
  },
}

module.exports = TwitterUtil;
