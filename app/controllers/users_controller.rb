class UsersController < ApplicationController
  def oauth_token
    render json: { oauth_token: token }
  end

  def sign_in_with_twitter
    authorize_user
    redirect_to :root
  end

  private
  
  def authorize_user
    twitter_oauth.authorize(
      token,
      secret,
      oauth_verifier: oauth_verifier
    )
  end

  def token
    request_token['token']
  end

  def secret
    request_token['secret']
  end

  def request_token
    session['request_token'] ||= 
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
