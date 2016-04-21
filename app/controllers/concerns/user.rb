class User
  def self.construct(user)
    {
      image_url: user.profile_image_uri.to_s,
      username: user.screen_name,
      name: user.name
    }
  end
end
