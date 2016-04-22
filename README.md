# Twitter Clone

### **Frontend**
The frontend code of the app can be found in the [frontend](frontend) folder.

### **Backend**
#### gems used:
- twitter
- figaro
- twitter_oauth
- dalli

#### [Users Controller](app/controllers/users_controller.rb)
- The users controller is responsible for logging the user in and handling the twitter callback after login.
- There is also an endpoint to display the current user.

#### [Tweets Conroller](app/controllers/tweets_controller.rb)
- The tweets controller is responsible for returning tweets based on the `username` param.

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
