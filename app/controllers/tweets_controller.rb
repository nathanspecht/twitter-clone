class TweetsController < ApplicationController
  TWEET_COUNT = 25
  CACHE_TIME  = 5.minutes

  def index
    options = { count: TWEET_COUNT }

    tweets = Rails.cache.fetch(username, expires_in: CACHE_TIME) do 
      twitter_client.
      user_timeline(username, options).
      map(&construct_tweet).
      to_json
    end

    render json: tweets
  end

  private
  
  def username
    params[:username]
  end

  def construct_tweet
    -> (tweet) { Tweet.construct(tweet) }
  end
end
