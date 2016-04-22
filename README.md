# Twitter Clone

### **Frontend**
The frontend code of the app can be found in the [frontend](frontend) folder.

### **Backend**
#### Gems used:
- twitter
- figaro
- twitter_oauth
- dalli

### Controllers
#### [Users Controller](app/controllers/users_controller.rb)
##### Endpoints
- `GET` `begin_twitter_sign_in`: redirects the user to the twitter auth page with the app token.
- `GET` `sign_in_with_twitter`: callback url for twitter oauth, verifies twitter's access token then redirects the user to the app.
- `GET` `current`: returns user data in json format based on the access token stored in the session.
- `POST` `logout`: clears the access token from the session.

#### [Tweets Conroller](app/controllers/tweets_controller.rb)
##### Endpoints
- `GET` `index`: returns the specified number of tweets based on the `username` param. Each call to the TwitterAPI is parsed and then cached using MemCachier for 5 minutes. 

### Models
I chose not to use any models for this project since nothing is saved to the database.
Instead, I made [tweet](app/controllers/concerns/tweet.rb) and [user](app/controllers/concerns/user.rb) concerns for the controllers that create hashes out of the Tweet and User objects returned by Twitter's API.

### **Run the server locally**
1. In your terminal:
  1. `npm install`
  - `bundle install`
  - `webpack`
  - `rails s`
2. Download and run postgresql 
3. Open `localhost:3000` in your web browser

### **Run Tests**
1. `npm test`
2. `rake test`

### **Deploy to Heroku**
`git push heroku`
