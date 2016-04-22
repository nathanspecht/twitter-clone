# Twitter Clone - [Live](https://n8s-twitter-clone.herokuapp.com/)

## **Frontend**
The frontend code of the app can be found in the [frontend](frontend) folder. It follows Facebook's [flux architecture](https://facebook.github.io/flux/docs/overview.html).

#### Packages used:
- babel
- flux
- react
- react-dom
- webpack

--

### Stores
#### [Tweet Store](frontend/stores/TweetStore.js)
##### Functions
- `TweetStore.current()`: returns the currently displayed tweets. 
    - When tweets are received from the dispatcher, the TweetStore adds the `textHTML` property to each tweet. `textHTML` is equal to the `text` property with all @mentions wrapped in link tags. 
- `TweetStore.recentSearches()`: returns an array of searched usernames in order of most recent.

#### [User Store](frontend/stores/UserStore.js)
##### Functions
- `UserStore.current()`: returns the current user.

--
### Components
- **[CurrentUser](frontend/components/CurrentUser.jsx)**
- **[Logout](frontend/components/Logout.jsx)**
- **[RecentSearches](frontend/components/RecentSearches.jsx)**
- **[Search](frontend/components/Search.jsx)**
- **[Tweets](frontend/components/Tweets.jsx)**

## **Backend**
#### Gems used:
- twitter
- figaro
- twitter_oauth
- dalli

--

### Controllers
#### [Users Controller](app/controllers/users_controller.rb)
##### Endpoints
- `GET` `begin_twitter_sign_in`: redirects the user to the twitter auth page with the app token appended to the url.
- `GET` `sign_in_with_twitter`: callback url for twitter oauth. It verifies twitter's access token then redirects the user to the app.
- `GET` `current`: returns user data in json format based on the access token stored in the session.
- `POST` `logout`: clears the access token from the session.

#### [Tweets Controller](app/controllers/tweets_controller.rb)
##### Endpoints
- `GET` `index`: returns the specified number of tweets based on the `username` param. Each call to the TwitterAPI is parsed and then cached using MemCachier for 5 minutes. 

--

### Models
I chose not to use any models for this project since nothing is saved to the database.
Instead, I made [tweet](app/controllers/concerns/tweet.rb) and [user](app/controllers/concerns/user.rb) concerns that create hashes out of the Tweet and User objects returned by Twitter's API.

--

## **Run the server locally**

1. Get twitter app credentials and add them to `config/application.yml`:

    ```c
      production:
        twitter_consumer_key: "consumer_key_here"
        twitter_consumer_secret: "consumer_secret_here"
        
      development:
        twitter_consumer_key: "consumer_key_here"
        twitter_consumer_secret: "consumer_secret_here"
    ```
2. In your terminal:
  1. `npm install`
  - `bundle install`
  - `webpack --watch` 
  - `rails s`
3. Download and run postgresql 
4. Open `localhost:3000` in your web browser

## **Run Tests**
1. `npm test`
2. `rake test`

## **Deploy to Heroku**
In you terminal:
  - `figaro heroku:set -e production`
  - `git push heroku`
