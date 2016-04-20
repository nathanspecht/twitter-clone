class TweetsController < ApplicationController
  TWEET_COUNT = 25

  def index
    options = { count: TWEET_COUNT }
    # Rails.cache.fetch("#{username}", expires_in: 5.minutes) do
    @tweets = Rails.cache.read(username)
    if !@tweets
      @tweets = twitter_client.
        user_timeline(username, options).
        map do |tweet|
          { 
            id: tweet.id,
            text: tweet.text, 
            created_at: tweet.created_at,
            user: {
              image_url: tweet.user.profile_image_uri.to_s,
              username: tweet.user.username,
              name: tweet.user.name
            }
          }
        end
      Rails.cache.write(username, @tweets, exipres_in: 30.seconds) 
    # end
    end
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
