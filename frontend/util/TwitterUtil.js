var TwitterUtil = {
  signIn: function() {
    $.ajax({
      url: 'https://api.twitter.com/oauth/request_token',
      type: 'get',
      dataType: 'json',
      data: { callback: "http:localhost:3000" },
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
