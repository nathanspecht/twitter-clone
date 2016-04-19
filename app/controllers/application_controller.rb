class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :ensure_login

  def twitter_client
    @twitter_client ||= Twitter::REST::Client.new(
      consumer_key: consumer_key,
      consumer_secret: consumer_secret,
      access_token: access_token,
      access_token_secret: access_token_secret
    )
  end

  def twitter_oauth
    @twitter_oauth ||= TwitterOAuth::Client.new(
      consumer_key: consumer_key, 
      consumer_secret: consumer_secret
    )
  end

  private

  def ensure_login
    if !session[:access_token]
      redirect_to action: 'login', controller: 'static_pages'
    end
  end

  def consumer_key
    ENV['twitter_consumer_key']
  end

  def consumer_secret
    ENV['twitter_consumer_secret']
  end

  def access_token
    session[:access_token][:token]
  end

  def access_token_secret
    session[:access_token][:secret]
  end
end
