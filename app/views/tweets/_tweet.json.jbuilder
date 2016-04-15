json.extract!(tweet, :id, :text)
json.date tweet.created_at.strftime("%e %b %Y")
json.time tweet.created_at.strftime("%I:%M %p")
json.user do
  json.image_url tweet.user.profile_image_uri.to_s
  json.username  tweet.user.username
  json.name      tweet.user.name
end
