class TweetsController < ApplicationController
  def index
    @tweets = twitter_client.user_timeline("nathahn")
  end
end
