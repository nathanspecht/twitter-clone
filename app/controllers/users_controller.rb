class UsersController < ApplicationController
  skip_before_action :ensure_login, only: [:begin_twitter_sign_in, :sign_in_with_twitter]

  def begin_twitter_sign_in 
    redirect_to "https://api.twitter.com/oauth/authenticate?oauth_token=#{token}"
  end

  def sign_in_with_twitter
    authorize_user
    redirect_to :root
  end

  private
  
  def token
    request_token['token']
  end

  def secret
    request_token['secret']
  end

  def authorize_user
    access_token = 
      twitter_oauth.authorize(
        token,
        secret,
        oauth_verifier: oauth_verifier
      )

    session[:access_token] = { 
      token:  access_token.token,
      secret: access_token.secret
    } 
  end

  def request_token
    session[:request_token] ||= 
      JSON.parse(
        twitter_oauth.request_token(
          oauth_callback: oauth_callback
        ).to_json
      )
  end
  
  def oauth_verifier
    params[:oauth_verifier]
  end

  def oauth_callback
    url_for action: 'sign_in_with_twitter'
  end
end
