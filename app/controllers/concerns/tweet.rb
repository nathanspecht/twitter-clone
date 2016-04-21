class Tweet
  def self.construct(tweet)
    { 
      id:   tweet.id,
      text: tweet.text,
      date: tweet.created_at.strftime("%e %b %Y"),
      time: tweet.created_at.strftime("%I:%M %p"), 
      user: User.construct(tweet.user)
    }
  end 
end
