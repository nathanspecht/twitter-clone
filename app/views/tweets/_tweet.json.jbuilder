json.id   tweet[:id]
json.text tweet[:text]
json.date tweet[:created_at].strftime("%e %b %Y")
json.time tweet[:created_at].strftime("%I:%M %p")
json.user do
  json.image_url tweet[:user][:image_url]
  json.username  tweet[:user][:username]
  json.name      tweet[:user][:name]
end
