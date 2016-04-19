class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def twitter_client
    @twitter_client ||= Twitter::REST::Client.new(
      consumer_key: consumer_key,
      consumer_secret: consumer_secret
    )
  end

  def twitter_oauth
    @twitter_oauth ||= TwitterOAuth::Client.new(
      consumer_key: consumer_key, 
      consumer_secret: consumer_secret
    )
  end

  private

  def consumer_key
    ENV['twitter_consumer_key']
  end

  def consumer_secret
    ENV['twitter_consumer_secret']
  end
end
