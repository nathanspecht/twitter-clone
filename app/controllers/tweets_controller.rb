class TweetsController < ApplicationController
  TWEET_COUNT = 25

  def index
    options = { count: TWEET_COUNT }
    @tweets = twitter_client.user_timeline(username, options)
  end

  private
  
  def username
    params[:username]
  end

  def cache_tweets
    cached_tweets[username] = @tweets
  end

  def cached_tweets
    session[:cached_tweets] ||= {} 
  end
end
