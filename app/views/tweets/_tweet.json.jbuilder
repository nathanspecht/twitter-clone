json.extract!(tweet, :id, :text)
json.date tweet.created_at.strftime("%e %b %Y")
json.time tweet.created_at.strftime("%I:%M %p")
