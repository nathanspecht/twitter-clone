class Tweet
  def self.construct(tweet)
    { 
      id: tweet.id,
      text: tweet.text,
      date: tweet.created_at.strftime("%e %b %Y"),
      time: tweet.created_at.strftime("%I:%M %p"), 
      user: {
        image_url: tweet.user.profile_image_uri.to_s,
        username: tweet.user.screen_name,
        name: tweet.user.name
      }
    }
  end 
end
