class TweetsController < ApplicationController
  TWEET_COUNT = 25

  def index
    options = { count: TWEET_COUNT }
    @tweets = twitter_client.user_timeline(username, options)
    debugger
  end

  private

  def username
    params[:username]
  end
end
